import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const portfolioData = {
  about: {
    id: 1,
    title: "Portfolio",
    description: "Portfolio",
  },
  experiences: [
    {
      title: "Intern",
      company: "Computer Institute of Japan",
      location: "Yokohama, Japan",
      startDate: "2016-05-20",
      endDate: "2016-07-31",
      description: [
        "Helped in improving the accuracy of multi-class Classification of emails and Achieved 70%+ accuracy.",
        "Developed python GUI using Tkinter with Progress bar for the 3 different Training Testing, Validation stages.",
        "Used gensim, SVM, Naive Bayes and TF-IDF pre-processor for best performance. ",
      ],
    },
    // {
    //   title: "Project Intern",
    //   company: "IBM",
    //   location: "Bengaluru, India",
    //   startDate: "2017-06-01",
    //   endDate: "2017-07-31",
    //   description: [
        
    //   ],
    // },
    {
      title: "RnD Intern",
      company: "Dell EMC",
      location: "Bengaluru, India",
      startDate: "2018-05-01",
      endDate: "2018-07-31",
      description: [
        "Developed Python scripts for automated reporting, flagging approximately 100 high-priority reports daily, enhancing efficiency in report management.",
        "Built Web Spider using scrapy for notifying outdated open-source packages which scrapes 4 different open-source websites.",
        "Established a robust priority flow between four websites ensuring comprehensive package updates and improving data consistency.",
      ],
    },
    {
      title: "Associate IT Consultant",
      company: "ITC Infotech",
      location: "Bengaluru, India",
      startDate: "2019-06-19",
      endDate: "2021-07-31",
      description: [
        "Deployed end-to-end modules using Git DevOps for Continuous Integration/Continuous Deployment across the 4 stages (DEV->QA->UAT->PROD), ensuring seamless transitions and operational efficiency for MLOps.",
        "Migrated project codebase from Scala on HDInsight Cluster to PySpark on Databricks with optimizations.",
        "Automated daily tasks using Python (Selenium) and PowerShell scripts, including taking screenshots, verifying counts, and emailing recipients for Data Quality Monitoring, which improved accuracy and saved time.",
        "Redesigned pipelines for performance by cleaning up the Azure Data Factory, reducing 300 redundant datasets to 4 and 30 pipelines to 3, which streamlined data processing and improved efficiency.",
        "Created and modified Power BI dashboards to support business development by enabling data-informed decisions and providing actionable recommendations, leading to improved strategic planning.",
      ],
    },
    {
      title: "Full Stack Developer Volunteer",
      company: "Isha Foundation",
      location: "Coimbatore, India",
      startDate: "2021-08-01",
      endDate: "2022-05-22",
      description: [
        "Developed a web application using the open-source Odoo Framework built on Python, streamlining processes and digitizing multiple forms required to be filled by hand by 100s of visitors saving hours of work both for the visitors and the staff.",
        "RESTful APIs for communication across four different ecosystems, enhancing integration and data flow.",
      ],
    },
    {
      title: "Data Scientist",
      company: "Mcsquared AI",
      location: "Remote Full Time",
      startDate: "2022-05-23",
      endDate: "2024-08-31",
      description: [
        "Deployed Machine Learning Survival model to production replacing the previous XGBoost model on Databricks using the medallion architecture capable of self re-training every month with new data and auto archive or promote to production based on the champion model using MLFlow for model versioning and evaluating the model performance based on C-score, a metric similar to Area Under the Curve (AUC score). Improved precision to 20% from 6% to narrow down sales leads by more than 80% making data-backed decisions and improve adoption of product by providing lower number but higher quality leads.",
        "Deployed pipelines and several PoCs in Databricks to automate EDA and model complex datasets from 5 different real-world data sources and third-party API sources, ensuring the data warehouse was updated with both delta load and full load functionalities to support timely business decisions feeding into Power BI / Tableau dashboards.",
        "Deriving insights from the data using Contours for PoC and Data Quality Management using Ontology Objects on the Palantir Foundry platform, creating dashboards crucial for global business decisions in the pharmaceutical industry.",
      ],
    },
    {
      title: "AI Innovation Specialist - Finance",
      company: "Trilogy, Crossover",
      location: "Remote Contract",
      startDate: "2024-08-01",
      endDate: "2024-10-20",
      description: [
        "Deriving Financial Insights using LLM chatbot built on React for the frontend and Express JS for the backend, which updated the RAG Vector DB upon new file uploads, reducing manual analysis time by an hour.",
        "Reporting with automated consolidated financial reports with AI Insights including Profit and Loss (P&L) reports and Ledgers across 10 different entities saving 5-6 hours of manual effort required every month end.",
        "Analyzed and identified over 100 AI-first tools and built PoCs to speed up accounting processes, reducing the need for building from scratch and improving efficiency.",
      ],
    },
    {
      title: "Data Scientist",
      company: "Mcsquared AI",
      location: "Remote Contract",
      startDate: "2024-09-01",
      // endDate: null,
      description: [
        "Led the team to build a pipeline in Databricks feeding into a map view dashboard containing proximity hotspots of leads around existing business provided locations leveraging Bing Maps API and 3rd party Real world data sources.",
        "Developing PoC for predictive solutions for data driven initiatives for clinical trial recruitments for manufacturing of new products.",
      ],
    },
  ],
  skills: {
    'data_science':["Web Development", "Cloud Computing", "Machine Learning", "Open Source", "UI/UX Design"],
    'full_stack': ["Data Science", "Data Engineering", "Data Visualization", "DataOps", "MLOps"],
    'os': ["Windows", "Ubuntu"],
    'cloud': ["Databricks", "Azure Data Factory", "Azure DevOps", "AWS", "GCP"],
    'programming_languages': ['Python', 'SQL', 'HTML', 'JavaScript', 'CSS', 'bash'],
    'frameworks': ['NextJS', 'React Native', 'Express JS', 'FastAPI'],
  },
  projects: [
    {
      title: "NAILS",
      description: "A vibe-coded static website for NAILS Society",
      technologies: ["Next JS", "Aceternity UI", "Cursor", "Oracle Cloud Instance"],
      image: "/projects/nails.png",
      link: "https://nails.org.in",
    },
    {
      title: "BeingAwareMatters",
      description: "A full-stack platform generating and tracking Advertisements",
      technologies: ["React Native", "OpenAI", "Firebase"],
      image: "/projects/aware.png",
      link: "https://beingawarematters.com",
    },
    {
      title: "Buzzzest",
      description: "1. FashionGPT Chatbot 2. FashionTech App using React Native 3. B2B Dashboard using NextJS",
      technologies: ["React Native", "LangChain", "RAG", "Next.js", "Firebase"],
      image: "/projects/buzzzest.png",
      link: "#",
    },
    {
      title: "Network traffic analysis",
      description: "Extracting insights by transforming 6 million + Apache server logs and visualizing through plots showing traffic originates from 10 different countries.",
      technologies: ["PySpark", "Python", "matplotlib", "seaborn"],
      image: "/projects/pyspark.png",
      link: "https://github.com/BssMsi/PySpark-Training",
    },
    {
      title: "Melanoma Classification",
      description: "Achieved 85% AUC score in Identifying Melanoma using Convolutional Neural Network (CNN) models.",
      technologies: ["PyTorch", "Python", "matplotlib", "seaborn"],
      image: "/projects/kaggle.svg",
      link: "https://www.kaggle.com/code/bssmsi/melanoma-classification",
    },
    {
      title: "Image classification of fruits",
      description: "Multi Class Classification of Fruits using images, dataset used from Kaggle with 90380 annotated images. Leveraging Pretrained Machine Learning (ML) models like VGG, ResNet, AlexNet, Mobile Net for mobile deployable model.",
      technologies: ["PyTorch", "Python", "Tailwind CSS", "Vercel"],
      image: "/projects/cnn.png",
      link: "https://www.kaggle.com/code/bssmsi/melanoma-classification",
    },
    {
      title: "IIT Hyderabad Website",
      description: "Built our college website from scratch using WordPress Templating which included integrating from over 10 departments.",
      technologies: ["WordPress", "PHP", "HTML", "CSS", "JavaScript"],
      image: "/iith.jpg",
      link: "https://iith.ac.in",
    },
  ],
};
