interface ProjectItem {
  title: string;
  date: string;
  linkPreText?: string;
  link: string;
  linkDisplayMessage?: string;
  imageConfig: {
    src: string;
    alt: string;
  };
  description: string;
}

export interface ProjectsModel {
  [key: string]: ProjectItem[];
}

export const projectsModel: ProjectsModel = {
  spotlify: [
    {
      title: "Spotlify - A Job Hunt Agent",
      date: "November 2025",
      linkPreText: "Check it out on ",
      link: "https://github.com/sparsh-hurkat/spotlify",
      linkDisplayMessage: "Github",
      imageConfig: {
        src: "/spotlify-logo.png",
        alt: "Spotlify",
      },
      description:
        `Spotlify is an intelligent career assistant that helps you craft the perfect resume, write compelling cover letters,
and ace application questions using AI-powered RAG (Retrieval Augmented Generation) technology.

**Key Achievements:**
* Possesses an extensive knowledge base of my profile and retrieves relevant information for different job applications
* Developed an MCP-based agentic workflow
* Optimized data retrieval accuracy
* Utilized React19 and Pincone VectorDB`,
    },
  ],
  pacman: [
    {
      title: "Gamifying Grocery Shopping (HackCMU 2025)",
      date: "September 2025",
      linkPreText: "Check it out on ",
      link: "https://github.com/sparsh-hurkat/grocery",
      linkDisplayMessage: "Github",
      imageConfig: {
        src: "/pacman.png",
        alt: "PacMan",
      },
      description:
        `Participated in the 24-hour HackCMU 2025 to gamify usually serious/monotonous activity. Engineered a way to 
track user movement through the aisles of a grocery store using gyroscope, magnetometer & pedometer.
User position is overlayed as a 3D Pac man figure with the floor plan of the grocery store as the game map
and the user's ToDo List items as the power pellets which gives a bonus score.

**Key Achievements:**
* Utilized sensor data and not GPS to accurately track user position in an indoor environment
* Designed an interactive pac man game which mimics the user movement`,
    },
  ],
  sst: [
    {
      title: "Backend Development (MV)",
      date: "March 2025 - July 2025",
      link: "",
      imageConfig: {
        src: "/sst-logo.png",
        alt: "SST",
      },
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
  ],
  moneyviewcms: [
    {
      title: "Upgraded to Next.js (MV)",
      date: "December 2024 - February 2024",
      linkPreText: "Go check out some of my work on the ",
      link: "https://moneyview.in/",
      linkDisplayMessage: "Moneyview website",
      imageConfig: {
        src: "/moneyview_logo.png",
        alt: "Moneyview logo",
      },
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
  ],
  testez: [
    {
      title: "An AI Test Generator",
      date: "August 2024 - October 2024",
      linkPreText: "Check it out on ",
      link: "https://github.com/sparsh-hurkat/test-ez",
      linkDisplayMessage: "Github",
      imageConfig: {
        src: "/test-ez.jpg",
        alt: "TestEZ",
      },
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
  ],
  spot: [
    {
      title: "This website(SPOT)",
      date: "June 2024 - July 2024",
      linkPreText: "Check it out on ",
      link: "https://github.com/sparsh-hurkat/spot",
      linkDisplayMessage: "Github",
      imageConfig: {
        src: "/spot.png",
        alt: "SPOT",
      },
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
      imageConfig: {
        src: "/vkyc-portal.png",
        alt: "VKYC",
      },
      description:
        `Created a web application that allows company agents to conduct real-time video interactions with customers, ensuring compliance with regulatory requirements.

**Challenges:**
* Real-time video verification using Amazon Chime
* Document Verification using Optical Character Recognition (OCR) technology to validate document information
* Google SSO authentication
* Real-time management of high customer volume with available agents`,
    },
  ],
  "2023": [
    {
      title: "Calling portal (MV)",
      date: "November 2023 - February 2024",
      link: "",
      imageConfig: {
        src: "/calling-portal.png",
        alt: "Calling",
      },
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
      imageConfig: {
        src: "/bnpl-portal.png",
        alt: "BNPL",
      },
      description:
        `I created a portal for store vendors partnered with the company to view and manage user purchases
and their corresponding loan applications.

**Key Achievements:**
* Acquired knowledge of large-scale data management and document processing systems
* Implemented dynamic user and vendor flow management systems`,
    },
  ],
  "2022": [
    {
      title: "UI/UX and Frontend Development (MV)",
      date: "July 2022 - February 2023",
      linkPreText: "Go check out some of my work on the ",
      link: "https://moneyview.in/",
      linkDisplayMessage: "Moneyview website",
      imageConfig: {
        src: "/moneyview_logo.png",
        alt: "Moneyview logo",
      },
      description:
        `Worked on the frontend development initiatives for Moneyview's main website,
focusing on performance optimization and modern development practices.
Redesigned and modernized the entire UI/UX with a standardized design system and a centralized component library.

**Key Achievements:**
* Learnt and implemented React and Typescript for scalable code and better type safety
* Enhanced the Fetch API integration resulting in faster page load times
* Established a centralized component library for consistent design across the platform`,
    },
  ],
  "2019-2021": [
    {
      title: "Bird species identification",
      date: "Sep 2021 - Dec 2021",
      link: "",
      imageConfig: {
        src: "/bird-identification.jpeg",
        alt: "Bird species identification",
      },
      description:
        "I conducted a comparative study of four CNN architectures achieving a peak classification accuracy of 96% using ResNet50 on a dataset of 275 species. Interfaced this model with a Streamlit web application, allowing real-time identification.\n\n**Challenges:**\n* Conducting the literature survey\n* Dataset challenges\n* Real-time processing\n* Scalability and stability of application",
    },
    {
      title: "Drowsy driver detection",
      date: "Aug 2020 - Nov 2020",
      link: "",
      imageConfig: {
        src: "/drowsy-driver.jpeg",
        alt: "Drowsy driver",
      },
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
      imageConfig: {
        src: "/gift-angels.png",
        alt: "Gift angels",
      },
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
      imageConfig: {
        src: "/e-voting.jpeg",
        alt: "E-Voting System",
      },
      description:
        `The project involved integrating an Arduino with biometric authentication, and a Solidity smart contract deployed on a private Ethereum blockchain. I used Web3.js to interface the blockchain, ensuring tamper-proof data storage and real-time election result verification. With a team of 3, we developed this project to enter Smart India Hackathon, a nationwide competition.

**Challenges:**
* Learning and implementing blockchain core concepts alongside crypographic techniques like SHA256 hashing and RSA encryption
* Creating an electronic voting machine using arduino and bluetooth module
* Learning Javascript concepts since i only knew html/css by this point.`,
    },
  ]
};
