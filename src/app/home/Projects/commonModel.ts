// ─── Language color map ───────────────────────────────────────────────────────

export const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  Java: "#b07219",
  "Agentic Systems": "#ff4d6d",
  LangChain: "#4CAF50",
  Blockchain: "#f7931a",
  PHP: "#777bb4",
  Kubernetes: "#326ce5",
  React: "#61dafb",
  Next: "#ffffff",
  Node: "#339933",
  RAG: "#7b2cbf",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Terraform: "#844fba",
  Docker: "#2496ed",
  AWS: "#ff9900",
  SST: "#ff6a00",
  Arduino: "#00979D",
  "Deep Learning": "#8a2be2",
  Web3: "#f16822",
};


// ─── Types ────────────────────────────────────────────────────────────────────

export interface ProjectData {
  title: string;
  date: string;
  link: string;
  linkPreText?: string;
  linkDisplayMessage?: string;
  imageConfig: { src: string; alt: string };
  description: string;
  descriptionPreview: string;
  language: { name: string; pct: number }[];
  years: string[];
  isPublic: boolean;
  sectionTitle: string;
}

// ─── All projects — every field explicitly declared, no runtime computation ───

export const allProjects: ProjectData[] = [

  // ── Projects at CMU ─────────────────────────────────────────────────────────

  {
    title: "WeCloud - Microservices Architecture",
    date: "Ongoing",
    link: "",
    imageConfig: { src: "/wecloud.jpg", alt: "WeCloud Microservices" },
    descriptionPreview: "Recreated the WeChat Spring-based microservice architecture by containerizing chat services with Docker and deploying them on Kubernetes using Helm,...",
    language: [
      { name: "Java", pct: 65 },
      { name: "Terraform", pct: 15 },
      { name: "Docker", pct: 15 },
      { name: "Kubernetes", pct: 15 }
    ],
    years: ["2026"],
    isPublic: false,
    sectionTitle: "Projects at CMU",
    description:
      `Recreated the WeChat Spring-based microservice architecture by containerizing chat services with Docker and deploying them on Kubernetes using Helm, enabling autoscaling, failure handling, and CI/CD automation.

**Key Achievements:**
* Recreated WeChat microservice architecture using Spring framework
* Containerized chat services using Docker for consistent deployment
* Deployed and orchestrated services on Kubernetes cluster
* Implemented autoscaling and failure handling mechanisms
* Automated deployment pipeline with Helm charts
* Achieved high availability and fault tolerance`,
  },

  {
    title: "Multi-Cloud E-Commerce Platform",
    date: "January 2026",
    link: "",
    imageConfig: { src: "/ecommerce-cloud.png", alt: "E-Commerce Cloud Platform" },
    descriptionPreview: "Architected a multi-cloud autoscaling system for a high-traffic e-commerce platform using AWS EC2, Terraform, and GitHub Actions; designing load b...",
    language: [
      { name: "Java", pct: 65 },
      { name: "Python", pct: 30 },
      { name: "Terraform", pct: 15 },
    ],
    years: ["2026"],
    isPublic: false,
    sectionTitle: "Projects at CMU",
    description:
      `Architected a multi-cloud autoscaling system for a high-traffic e-commerce platform using AWS EC2, Terraform, and GitHub Actions; designing load balancing strategies to sustain 10x traffic bursts while optimizing for cloud cost efficiency.

**Key Achievements:**
* Designed and implemented multi-cloud autoscaling system for high-traffic e-commerce platform
* Architected load balancing strategies to handle 10x traffic bursts
* Optimized cloud infrastructure for cost efficiency using AWS EC2 and Terraform
* Implemented CI/CD automation with GitHub Actions
* Achieved significant cost savings through intelligent resource allocation`,
  },



  {
    title: "RAG Product Visualization System",
    date: "December 2025",
    link: "",
    imageConfig: { src: "/rag-visualization.png", alt: "RAG Product Visualization" },
    descriptionPreview: "Improved visual attribute-accuracy by 40% by engineering a multi-agent RAG + diffusion workflow, integrating FAISS retrieval, dynamic-k heuristics,...",
    language: [
      { name: "Python", pct: 60 },
      { name: "Agentic Systems", pct: 40 },
    ],

    years: ["2025"],
    isPublic: false,
    sectionTitle: "Projects at CMU",
    description:
      `Improved visual attribute-accuracy by 40% by engineering a multi-agent RAG + diffusion workflow, integrating FAISS retrieval, dynamic-k heuristics, and LLM-driven prompt refinement. Cut end-to-end generation time by 3× by automating data ingestion, review-to-prompt translation, and multi-model image synthesis, enabling iterative evaluation and alignment across 50K+ customer reviews.

**Key Achievements:**
* Improved visual attribute-accuracy by 40% through multi-agent RAG + diffusion workflow
* Integrated FAISS retrieval with dynamic-k heuristics for optimized search
* Implemented LLM-driven prompt refinement for enhanced image generation
* Reduced end-to-end generation time by 3× through automation
* Automated data ingestion and review-to-prompt translation pipeline
* Enabled multi-model image synthesis with iterative evaluation
* Processed and aligned 50K+ customer reviews for training and validation`,
  },

  {
    title: "Spotlify - A Job Hunt Agent",
    date: "November 2025",
    linkPreText: "Check it out on ",
    link: "https://github.com/sparsh-hurkat/spotlify",
    linkDisplayMessage: "Github",
    imageConfig: { src: "/spotlify-logo.png", alt: "Spotlify" },
    descriptionPreview: "Spotlify is an intelligent career assistant that helps me craft the perfect resume, write compelling cover letters, and ace job application questions...",
    language: [
      { name: "Agentic Systems", pct: 40 },
      { name: "React", pct: 60 },
    ],

    years: ["2025"],
    isPublic: true,
    sectionTitle: "Projects at CMU",
    description:
      `Spotlify is an intelligent career assistant that helps me craft the perfect resume, write compelling cover letters,
and ace job application questions using RAG (Retrieval Augmented Generation).

**Key Achievements:**
* Possesses an extensive knowledge base of my profile and retrieves relevant information for different job applications
* Developed an MCP-based agentic workflow
* Optimized data retrieval accuracy
* Utilized React19 and Pinecone VectorDB`,
  },

  {
    title: "Gamifying Grocery Shopping (HackCMU 2025)",
    date: "September 2025",
    linkPreText: "Check it out on ",
    link: "https://github.com/sparsh-hurkat/grocery",
    linkDisplayMessage: "Github",
    imageConfig: { src: "/pacman.png", alt: "PacMan" },
    descriptionPreview: "Participated in the 24-hour HackCMU 2025 to gamify usually serious/monotonous activity. Engineered a way to track user movement through grocery store...",
    language: [
      { name: "React", pct: 70 },
      { name: "Java", pct: 30 },
    ],
    years: ["2025"],
    isPublic: true,
    sectionTitle: "Projects at CMU",
    description:
      `Participated in the 24-hour HackCMU 2025 to gamify usually serious/monotonous activity. Engineered a way to
track user movement through the aisles of a grocery store using gyroscope, magnetometer & pedometer.
User position is overlayed as a 3D Pac man figure with the floor plan of the grocery store as the game map
and the user's ToDo List items as the power pellets which gives a bonus score.

**Key Achievements:**
* Utilized sensor data and not GPS to accurately track user position in an indoor environment
* Designed an interactive pac man game which mimics the user movement`,
  },



  // ── Work at Moneyview ────────────────────────────────────────────────────────

  {
    title: "Backend Development (MV)",
    date: "March 2025 - July 2025",
    link: "",
    imageConfig: { src: "/sst-logo.png", alt: "SST" },
    descriptionPreview: "Revamped the user onboarding flow for a fintech platform by building a serverless backend microservice using SST.dev and TypeScript on AWS...",
    language: [
      { name: "AWS", pct: 50 },
      { name: "SST", pct: 50 },
    ],
    years: ["2025"],
    isPublic: false,
    sectionTitle: "Work at Moneyview",
    description:
      `Revamped the user onboarding flow for a fintech platform by building a serverless backend microservice
using SST.dev and TypeScript on AWS (API Gateway, Lambda, DynamoDB), implementing secure APIs,
scalable services, caching, and logging, which reduced user registration time.

**Key Achievements:**
* Reduced user registration time by over 5 minutes by streamlining backend services for the onboarding flow
* Gained expertise in AWS cloud services and serverless architecture
* Learned modern backend development practices and microservices patterns
* Improved scalability and performance of backend services`,
  },

  {
    title: "Upgraded to Next.js (MV)",
    date: "December 2024 - February 2024",
    linkPreText: "Go check out some of my work on the ",
    link: "https://moneyview.in/",
    linkDisplayMessage: "Moneyview website",
    imageConfig: { src: "/moneyview_logo.png", alt: "Moneyview logo" },
    descriptionPreview: "Upgraded the main Moneyview website and blog from Vanilla.js to Next.js to enhance SEO and scalability. Leveraged reusable components to dynamically...",
    language: [
      { name: "Next", pct: 65 },
      { name: "Node", pct: 35 },
    ],
    years: ["2024"],
    isPublic: true,
    sectionTitle: "Work at Moneyview",
    description: `Upgraded the main Moneyview website and blog website from Vanilla.js to Next.js to
enhance SEO and scalability. Leveraged reusable components to dynamically generate all website pages using a
Content Management System (CMS). Optimized key APIs with Node.js, reducing latency
and improving overall page performance.

**Key Achievements:**
* Learned and implementing Next.js concepts
* Implemented RESTful APIs using Node.js and MongoDB for backend services
* Improved web vitals score and page load speed
* Created a dynamic CMS capable of handling all possible variants of pages`,
  },

  {
    title: "An AI Test Generator",
    date: "August 2024 - October 2024",
    linkPreText: "Check it out on ",
    link: "https://github.com/sparsh-hurkat/test-ez",
    linkDisplayMessage: "Github",
    imageConfig: { src: "/test-ez.jpg", alt: "TestEZ" },
    descriptionPreview: "TestEZ is an online tool that generates custom, unique questions by analyzing any textbook or PDF you provide. Built on LangChain with RAG and PineCone.",
    language: [
      { name: "Python", pct: 65 },
      { name: "TypeScript", pct: 35 },
    ],
    years: ["2024"],
    isPublic: true,
    sectionTitle: "Projects in Undergrad",
    description:
      `TestEZ is an online tool that generates custom, unique questions by analyzing any textbook or PDF you
provide. This AI tool can assist professors in creating test papers. Built on the LangChain framework,
TestEZ utilizes Retrieval-Augmented Generation and a PineCone vector database.

**Challenges:**
* Learning and implementing LangChain
* Token optimization and Prompt engineering
* Creating text chunks, vector embedding and storing in a VectorDB
* Working out the user flow.`,
  },

  {
    title: "This website (SPOT)",
    date: "June 2024 - July 2024",
    linkPreText: "Check it out on ",
    link: "https://github.com/sparsh-hurkat/spot",
    linkDisplayMessage: "Github",
    imageConfig: { src: "/spot.png", alt: "SPOT" },
    descriptionPreview: "SPOT (SParsh's Online Transformer) is a RAG Agent Chatbot with LangChain under the hood, a NextJs exterior, an AstraDB Vector DB motor and Gemini API...",
    language: [
      { name: "Next", pct: 60 },
      { name: "LangChain", pct: 20 },
      { name: "RAG", pct: 20 },
    ],
    years: ["2024"],
    isPublic: true,
    sectionTitle: "Work at Moneyview",
    description:
      `SPOT(**SP**arsh's **O**nline **T**ransformer) is a RAG Agent Chatbot with LangChain under the hood,
a NextJs exterior, an AstraDB Vector DB motor and Gemini API as the fuel. If there is slowness in the responses it is because SPOT is absolutely free of charge.

**Key Achievements:**
* Learnt and implemented RAG using LangChain; fetches all my data from all my websites and my resume
* Modern design and user experience
* Handling Gemini API and its responses
* Learning and implementing NextJS`,
  },

  {
    title: "Video KYC portal (MV)",
    date: "May 2024 - July 2024",
    link: "",
    imageConfig: { src: "/vkyc-portal.png", alt: "VKYC" },
    descriptionPreview: "Created a web application that allows company agents to conduct real-time video interactions with customers, ensuring compliance with regulatory requirements.",
    language: [
      { name: "React", pct: 80 },
      { name: "Java", pct: 20 },
    ],
    years: ["2024"],
    isPublic: false,
    sectionTitle: "Work at Moneyview",
    description:
      `Created a web application that allows company agents to conduct real-time video interactions with customers, ensuring compliance with regulatory requirements.

**Challenges:**
* Real-time video verification using Amazon Chime
* Document Verification using Optical Character Recognition (OCR) technology to validate document information
* Google SSO authentication
* Real-time management of high customer volume with available agents`,
  },

  {
    title: "Calling portal (MV)",
    date: "November 2023 - February 2024",
    link: "",
    imageConfig: { src: "/calling-portal.png", alt: "Calling" },
    descriptionPreview: "Developed and managed a comprehensive call management portal for all company-customer interactions, integrating VoIP tools with WebRTC technology.",
    language: [
      { name: "React", pct: 80 },
      { name: "TypeScript", pct: 20 },
    ],
    years: ["2023", "2024"],
    isPublic: false,
    sectionTitle: "Work at Moneyview",
    description:
      `Developed and managed a comprehensive call management portal for all company-customer interactions,
integrating VoIP tools with WebRTC technology.

**Key Achievements:**
* Enabled an increase in agent count and an increase in monthly call volume
* Successfully integrated VoIP software with WebRTC for real-time communication
* Implemented real-time user detail display and call management features on a Typescript web app
* Third-party API integration and coordination with external development teams`,
  },

  {
    title: "Merchant Portal (MV)",
    date: "September 2023 - November 2023",
    link: "",
    imageConfig: { src: "/bnpl-portal.png", alt: "BNPL" },
    descriptionPreview: "Created a portal for store vendors partnered with the company to view and manage user purchases and their corresponding loan applications.",
    language: [
      { name: "React", pct: 80 },
      { name: "TypeScript", pct: 20 },
    ],
    years: ["2023"],
    isPublic: false,
    sectionTitle: "Work at Moneyview",
    description:
      `I created a portal for store vendors partnered with the company to view and manage user purchases
and their corresponding loan applications.

**Key Achievements:**
* Acquired knowledge of large-scale data management and document processing systems
* Implemented dynamic user and vendor flow management systems`,
  },

  {
    title: "UI/UX and Frontend Development (MV)",
    date: "July 2022 - February 2023",
    linkPreText: "Go check out some of my work on the ",
    link: "https://moneyview.in/",
    linkDisplayMessage: "Moneyview website",
    imageConfig: { src: "/moneyview_logo.png", alt: "Moneyview logo" },
    descriptionPreview: "Worked on frontend development for Moneyview's main website, focusing on performance optimization. Redesigned the entire UI/UX with a standardized design system.",
    language: [
      { name: "React", pct: 60 },
      { name: "CSS", pct: 40 },
    ],
    years: ["2022", "2023"],
    isPublic: true,
    sectionTitle: "Work at Moneyview",
    description:
      `Worked on the frontend development initiatives for Moneyview's main website,
focusing on performance optimization and modern development practices.
Redesigned and modernized the entire UI/UX with a standardized design system and a centralized component library.

**Key Achievements:**
* Learnt and implemented React and Typescript for scalable code and better type safety
* Enhanced the Fetch API integration resulting in faster page load times
* Established a centralized component library for consistent design across the platform`,
  },

  // ── Projects in Undergrad ────────────────────────────────────────────────────



  {
    title: "Bird species identification",
    date: "Sep 2021 - Dec 2021",
    link: "",
    imageConfig: { src: "/bird-identification.jpeg", alt: "Bird species identification" },
    descriptionPreview: "Conducted a comparative study of four CNN architectures achieving 96% classification accuracy using ResNet50 on a dataset of 275 species.",
    language: [
      { name: "Python", pct: 40 },
      { name: "Deep Learning", pct: 60 },
    ],
    years: ["2021"],
    isPublic: false,
    sectionTitle: "Projects in Undergrad",
    description:
      "I conducted a comparative study of four CNN architectures achieving a peak classification accuracy of 96% using ResNet50 on a dataset of 275 species. Interfaced this model with a Streamlit web application, allowing real-time identification.\n\n**Challenges:**\n* Conducting the literature survey\n* Dataset challenges\n* Real-time processing\n* Scalability and stability of application",
  },

  {
    title: "Drowsy driver detection",
    date: "Aug 2020 - Nov 2020",
    link: "",
    imageConfig: { src: "/drowsy-driver.jpeg", alt: "Drowsy driver" },
    descriptionPreview: "Designed an IoT-enabled portable circuit on lab safety glasses with a facial feature detection model using OpenCV and Dlib, achieving 86% accuracy.",
    language: [
      { name: "Arduino", pct: 50 },
      { name: "Python", pct: 50 },
    ],
    years: ["2020"],
    isPublic: false,
    sectionTitle: "Projects in Undergrad",
    description:
      `I designed an IoT-enabled portable circuit mounted on lab safety glasses and integrated a facial feature detection model using OpenCV and Dlib, achieving an accuracy of 86%. In case fatigue was detected in the driver an alarm/buzzer would ring and using a bluetooth module and Twilio it would send out an alert SMS.

**Challenges:**
* Learning arduino software and hardware implementation
* Developing an IOT + wearable solution
* Handling the false positive scenarios
* The literature survey for previous implementations.`,
  },

  {
    title: "An e-commerce website",
    date: "May 2019",
    link: "",
    imageConfig: { src: "/gift-angels.png", alt: "Gift angels" },
    descriptionPreview: "One of the first websites I made — a local e-commerce site called 'The Gift Angels', built with HTML, CSS, JavaScript and PHP.",
    language: [
      { name: "JavaScript", pct: 50 },
      { name: "PHP", pct: 30 },
      { name: "HTML", pct: 10 },
      { name: "CSS", pct: 10 },
    ],
    years: ["2019"],
    isPublic: false,
    sectionTitle: "Projects in Undergrad",
    description:
      `One of the first websites i made was for a local e-commerce website called 'The Gift Angels'. I took this project on to upskill myself over the summer break of my first year in college. I learnt vital concepts of HTML and CSS, and got a taste of Javascript and PHP enticing me into the world of web development. The website was live for 6 months before i took it down as it was almost impossible for me to maintain and update the website along with my studies. In the process I learnt the importance of writing scalable code.

**Challenges:**
* Creating designs and handling the user flow
* Development with pure HTML, CSS and some JS
* Hosting and SEO
* Inventory management
* Maintenance and scalability`,
  },

  {
    title: "E-Voting system",
    date: "January 2019 - April 2019",
    link: "",
    imageConfig: { src: "/e-voting.jpeg", alt: "E-Voting System" },
    descriptionPreview: "Integrated Arduino with biometric authentication and a Solidity smart contract on a private Ethereum blockchain, with Web3.js for tamper-proof voting.",
    language: [
      { name: "Web3", pct: 20 },
      { name: "Blockchain", pct: 20 },
      { name: "Arduino", pct: 60 },
    ],
    years: ["2019"],
    isPublic: false,
    sectionTitle: "Projects in Undergrad",
    description:
      `The project involved integrating an Arduino with biometric authentication, and a Solidity smart contract deployed on a private Ethereum blockchain. I used Web3.js to interface the blockchain, ensuring tamper-proof data storage and real-time election result verification. With a team of 3, we developed this project to enter Smart India Hackathon, a nationwide competition.

**Challenges:**
* Learning and implementing blockchain core concepts alongside crypographic techniques like SHA256 hashing and RSA encryption
* Creating an electronic voting machine using arduino and bluetooth module
* Learning Javascript concepts since i only knew html/css by this point.`,
  },
];

// ─── Structural derivations (no string parsing, no computation) ───────────────

export const projectYears: string[] = Array.from(new Set(
  allProjects.flatMap(p => p.years)
)).sort((a, b) => Number(b) - Number(a));

export const projectsByYear: Record<string, ProjectData[]> = Object.fromEntries(
  projectYears.map(year => [year, allProjects.filter(p => p.years.includes(year))])
);
