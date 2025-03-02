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
  sst: [
    {
      title: "Cloud integration using SST.dev",
      date: "March 2025 - Ongoing",
      linkPreText: "Go check out some of my work on the ",
      link: "https://moneyview.in/",
      linkDisplayMessage: "Moneyview website",
      imageConfig: {
        src: "/sst-logo.png",
        alt: "SST",
      },
      description:
        "Working as a backend developer to enhance the backend services of JIFY, a company acquired by Moneyview.\nUsing SST.dev to build and deploy serverless lambda functions with Typescript on AWS.",
    },
  ],
  moneyviewcms: [
    {
      title: "Upgraded to Next.js",
      date: "December 2024 - February 2024",
      linkPreText: "Go check out some of my work on the ",
      link: "https://moneyview.in/",
      linkDisplayMessage: "Moneyview website",
      imageConfig: {
        src: "/moneyview_logo.png",
        alt: "Moneyview logo",
      },
      description: `Upgraded the main Moneyview website and blog website from Vanilla.js to Next.js to enhance SEO and scalability. Leveraged reusable components to dynamically generate thousands of pages using a Content Management System (CMS). Optimized key APIs with Node.js, reducing latency and improving overall page performance.
          
  Challenges:-
  * Learning and implementing Next.js concepts
  * Improving web vitals score and page load speed
  * Creating a dynamic CMS capable of handling all possible variants.
  * Managing such a large-scale project`,
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
        "TestEZ is an online tool that generates custom, unique questions by analyzing any textbook or PDF you provide. This AI tool can assist professors in creating test papers. Built on the LangChain framework, TestEZ utilizes Retrieval-Augmented Generation and a PineCone vector database.\n\nChallenges:-\n* Learning and implementing LangChain\n* Token optimization and Prompt engineering.\n* Creating text chunks, vector embedding and storing in a VectorDB.\n* Working out the user flow.",
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
        "SPOT(**SP**arsh's **O**nline **T**ransformer) is made of NextJS, with a mySQL database powered by TiDB and the Gemini API to generate the LLM responses. I always wanted to have a virtual presence ever since i saw Iron Man create JARVIS and hope to improve upon SPOT in the years to come. If there is slowness in the responses it is because i am using the free of charge API's.\n\nChallenges:-\n* Learning and implementing NextJS\n* Design and user experience\n* Handling Gemini API and its responses\n* Search engine optimization",
    },
    {
      title: "Video KYC portal",
      date: "May 2024 - July 2024",
      linkPreText: "Go check out some of my work on the ",
      link: "https://moneyview.in/",
      linkDisplayMessage: "Moneyview website",
      imageConfig: {
        src: "/vkyc-portal.png",
        alt: "VKYC",
      },
      description:
        "Video KYC is an integral feature of modern digital banking using which banking officials can complete the Know Your Customer process over video call. This internal portal is a web application that allows company agents to conduct real-time video interactions with customers, ensuring compliance with regulatory requirements.\n\nChallenges:-\n* Real-time video verification using Amazon Chime\n* Document Verification using Optical Character Recognition (OCR) technology to validate document information\n* Google SSO authentication\n* Working out the customer and agent side flow\n* Real-time management of high customer volume with available agents",
    },
  ],
  "2023": [
    {
      title: "Calling portal",
      date: "November 2023 - February 2024",
      linkPreText: "Go check out some of my work on the ",
      link: "https://moneyview.in/",
      linkDisplayMessage: "Moneyview website",
      imageConfig: {
        src: "/calling-portal.png",
        alt: "Calling",
      },
      description:
        "The calling portal is an internal web application used by the company's agents to perform all company incoming and outgoing calling operations. This included Customer Service, Operations and Collections calls. For calling we used a VoIP tool with WebRTC from a local calling service provider called 'Ameyo'.\n\nChallenges:-\n* Integrating the third party software and coordination with external teams\n* Displaying user details as soon as call is connected\n* Working out the user flows for different types of calling operations\n* Handling various calling operations such as auto-dial, manual dial, redial features.",
    },
    {
      title: "A buy-now-pay-later interface",
      date: "September 2023 - November 2023",
      linkPreText: "Go check out some of my work on the ",
      link: "https://moneyview.in/",
      linkDisplayMessage: "Moneyview website",
      imageConfig: {
        src: "/bnpl-portal.png",
        alt: "BNPL",
      },
      description:
        "The BNPL(buy-now-pay-later) feature allows customers to split the cost of a purchase into smaller installments at a very small interest rate (often 0). This feature marked the company's debut in entirely new territory, venturing beyond its established expertise in personal loans. I created an internal portal for store vendors to view and manage user purchases and their corresponding loan applications.\n\nChallenges:-\n* Working out the user and vendor flow\n* Handling different vendors and their requirements\n* Secure and dynamic authentication\n* Optimizing data and document management.",
    },
  ],
  "2021": [
    {
      title: "Bird species identification",
      date: "Sep 2021 - Dec 2021",
      link: "",
      imageConfig: {
        src: "/bird-identification.jpeg",
        alt: "Bird species identification",
      },
      description:
        "I conducted a comparative study of four CNN architectures achieving a peak classification accuracy of 96% using ResNet50 on a dataset of 275 species. Interfaced this model with a Streamlit web application, allowing real-time identification.\n\nChallenges:-\n* Conducting the literature survey\n* Dataset challenges\n* Real-time processing\n* Scalability and stability of application",
    },
  ],
  "2020": [
    {
      title: "Drowsy driver detection",
      date: "Aug 2020 - Nov 2020",
      link: "",
      imageConfig: {
        src: "/drowsy-driver.jpeg",
        alt: "Drowsy driver",
      },
      description:
        "I designed an IoT-enabled portable circuit mounted on lab safety glasses and integrated a facial feature detection model using OpenCV and Dlib, achieving an accuracy of 86%. In case fatigue was detected in the driver an alarm/buzzer would ring and using a bluetooth module and Twilio it would send out an alert SMS.\n\nChallenges:-\n* Learning arduino software and hardware implementation.\n* Developing an IOT + wearable solution.\n* Handling the false positive scenarios\n* The literature survey for previous implementations.",
    },
  ],
  "2019": [
    {
      title: "An e-commerce website",
      date: "May 2019",
      link: "",
      imageConfig: {
        src: "/gift-angels.png",
        alt: "Gift angels",
      },
      description:
        "One of the first websites i made was for a local e-commerce website called 'The Gift Angels'. I took this project on to upskill myself over the summer break of my first year in college. I learnt vital concepts of HTML and CSS, and got a taste of Javascript and PHP enticing me into the world of web development. The website was live for 6 months before i took it down as it was almost impossible for me to maintain and update the website along with my studies. In the process I learnt the importance of writing scalable code.\n\nChallenges:-\n* Creating designs and handling the user flow.\n* Development with pure HTML, CSS and some JS\n* Hosting and SEO.\n* Inventory management\n* Maintenance and scalability",
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
        "The project involved integrating an Arduino with biometric authentication, and a Solidity smart contract deployed on a private Ethereum blockchain. I used Web3.js to interface the blockchain, ensuring tamper-proof data storage and real-time election result verification. With a team of 3, we developed this project to enter Smart India Hackathon, a nationwide competition.\n\nChallenges:-\n* Learning and implementing blockchain core concepts alongside crypographic techniques like SHA256 hashing and RSA encryption.\n* Creating an electronic voting machine using arduino and bluetooth module.\n* Learning Javascript concepts since i only knew html/css by this point.",
    },
  ],
};
