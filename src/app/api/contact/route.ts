import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { headers } from 'next/headers';
import { z } from 'zod';
import logger from '@/utils/logger';

// Rate limiting map
const rateLimit = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS = 5; // 5 requests per hour

// Input validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000),
});

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(request: Request) {
  const headersList = headers();
  const ip = headersList.get('x-forwarded-for') || 'unknown';
  const origin = headersList.get('origin') || '';
  const userAgent = headersList.get('user-agent') || 'unknown';

  try {
    // CORS headers
    const allowedOrigins = ['http://localhost:3000', 'https://bharathshroff.com'];
    if (!allowedOrigins.includes(origin)) {
      logger.warn('CORS violation attempt', {
        ip,
        origin,
        userAgent,
        context: 'CORS_VIOLATION'
      });
      return NextResponse.json(
        { error: 'Unauthorized origin' },
        { status: 403 }
      );
    }

    // Rate limiting
    const now = Date.now();
    const userRateLimit = rateLimit.get(ip);

    if (userRateLimit) {
      if (now - userRateLimit.timestamp > RATE_LIMIT_WINDOW) {
        rateLimit.set(ip, { count: 1, timestamp: now });
      } else if (userRateLimit.count >= MAX_REQUESTS) {
        logger.warn('Rate limit exceeded', {
          ip,
          userAgent,
          currentCount: userRateLimit.count,
          timeRemaining: RATE_LIMIT_WINDOW - (now - userRateLimit.timestamp),
          context: 'RATE_LIMIT_EXCEEDED'
        });
        return NextResponse.json(
          { error: 'Too many requests. Please try again later.' },
          { status: 429 }
        );
      } else {
        userRateLimit.count++;
      }
    } else {
      rateLimit.set(ip, { count: 1, timestamp: now });
    }

    const body = await request.json();

    // Validate input
    try {
      const validatedData = contactSchema.parse(body);
      const { name, email, message } = validatedData;

      // Sanitize inputs
      const sanitizedName = name.replace(/[<>]/g, '');
      const sanitizedMessage = message.replace(/[<>]/g, '');

      // Email content
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER, // Send to yourself
        subject: `New Contact Form Submission from ${sanitizedName}`,
        text: `
Name: ${sanitizedName}
Email: ${email}
Message: ${sanitizedMessage}
        `,
        html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${sanitizedName}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Message:</strong></p>
<p>${sanitizedMessage}</p>
        `,
      };

      // Send email
      try {
        await transporter.sendMail(mailOptions);
        logger.info('Contact form submission successful', {
          ip,
          userAgent,
          recipientEmail: email,
          sanitizedName,
          context: 'CONTACT_FORM_SUCCESS'
        });
      } catch (emailError) {
        logger.error('Failed to send email', {
          error: emailError,
          ip,
          userAgent,
          recipientEmail: email,
          sanitizedName,
          context: 'EMAIL_SEND_FAILED'
        });
        throw emailError;
      }

      return NextResponse.json(
        { message: 'Email sent successfully' },
        { 
          status: 200,
          headers: {
            'Access-Control-Allow-Origin': origin,
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': 'Content-Type',
          }
        }
      );
    } catch (validationError) {
      if (validationError instanceof z.ZodError) {
        logger.warn('Validation error in contact form', {
          error: validationError,
          ip,
          userAgent,
          validationErrors: validationError.errors,
          receivedData: body,
          context: 'VALIDATION_ERROR'
        });
        return NextResponse.json(
          { error: 'Invalid input data', details: validationError.errors },
          { status: 400 }
        );
      }
      throw validationError;
    }
  } catch (error) {
    logger.error('Unexpected error in contact form', {
      error,
      ip,
      userAgent,
      origin,
      context: 'UNEXPECTED_ERROR'
    });
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 