export const suggestions = [
  "What are your skills?",
  "What experience do you have?",
  "What is your educational background?",
  "Where are you from?",
  "What makes you unique?",
  "Why should we hire you?",
];

export interface JourneyInterface {
  name: string;
  duration: string;
  description: string;
  image: string;
  color: string;
}

export const journeyList: JourneyInterface[] = [
  {
    name: "Software developer at Moneyview",
    duration: "March 2022 - Present",
    description:
      "**Moneyview** is a dynamic **FinTech** startup providing lucrative solutions for instant loans and money management. In my 2 years at moneyview, I have been deeply involved in the development and enhancement of various financial and technical products and services.\nI am a part of the company's **Growth Pod** functioned with release of all new company features and products. I also work on building and maintaining several features that automate, streamline and enhance several server and client sided processes.\nCheck out some of the work I have done in the Recent Projects section.",
    image: "/moneyview_logo.png",
    color: "#164937",
  },
  {
    name: "B.Tech at Vellore Institute of technology(VIT)",
    duration: "2018 - 2022 | GPA : 8.3/10",
    description:
      "I majored in **Electronics and Communications Engineering(ECE)** with a specialization in sensors and wearable technology. Even though my major was in electronics, I knew I wanted to pursue a career as a software developer. Therefore, I took extra courses and learned coding in my free time.\nDuring my time at VIT, I had the opportunity to work on various projects and participate in numerous events and several hackathons. You can find some of my academic/hackathon projects in the Recent Projects section.\nAdditionally, I was a founding member and core committee member of the **IEEE EMCS**(Electromagnetic compatibility society) in VIT.\nI also volunteered in the **Youth Red Cross Society** in my free time.",
    image: "/vit_logo.png",
    color: "#302F7D",
  },
  {
    name: "Arya Vidya Mandir Bandra(W) | Pace Jr. Science college, Dadar",
    duration:
      "2004 - 2016",
    description:
      "I completed my schooling at **Arya Vidya Mandir**. I got a **90.17/100** in the **ICSE** board examination. In the 8th standard, I chose JAVA as my elective subject and discovered a deep enjoyment for coding. This newfound passion made it clear that I wanted to pursue a career in software engineering.\nAfter my time at AVM, I moved on to **Pace Junior Science College** for my high school education. I scored **82.77/100** in my **HSC board examinations**. Pace was a dynamic and challenging environment that pushed me to elevate my academic performance, particularly in the sciences. It not only prepared me for the highly competitive JEE entrance exams for engineering colleges but also prepared for the rigorous demands of my bachelor's degree.",
    image: "/schools_logo.png",
    color: "#F5F5F5",
  },
  {
    name: "About Me",
    duration: "A bit of my personal side",
    description:
      "I'm **Sparsh Hurkat**, a budding software developer hailing from Mumbai, currently residing in Bangalore.\nI have a deep love for **sports**. I've played basketball for 5 years and badminton for 6 years, some racing, some squash, some table tennis. And who doesn't play cricket and football every now and then?\nI am an avid **traveller**, I love going to new places, eating different kinds of food, going on new adventures and making unforgettable memories\nI have a very **creative** side. I have taken the elementary and intermediate art exams. Sketching and painting nature while travelling to remote corners of the world will probably be a huge part of my retired life.\nMy love for art and coding landed me in the world of frontend development, a perfect blend of the 2 worlds.",
    image: "/sparsh.jpg",
    color: "",
  },
];

export const levels = ["Rockstar", "Kickass", "Average", "Beginner"];
export const bars = [
  {
    label: "HTML + CSS",
    height: "150px",
    color: "blue",
  },
  {
    label: "ReactJS + Typescript",
    height: "rockstar",
    color: "pink",
  },
  {
    label: "NextJS",
    height: "kickass",
    color: "yellow",
  },
  {
    label: "Javascript",
    height: "150px",
    color: "red",
  },
  {
    label: "Java",
    height: "average",
    color: "brown",
  },
];

export const projectsModel = {
  testez: [
    {
      title: "TestEZ",
      date: "August 2024 - September 2024",
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
  calling: [
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
  ],
  bnpl: [
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
  moneyview: [
    {
      title: "I joined Moneyview",
      date: "March 2022",
      link: "",
      imageConfig: {
        src: "/moneyview_logo.png",
        alt: "Moneyview logo",
      },
      description:
        "I joined moneyview as an intern in March for my final semester of college. I was converted to a full-time employee in July after my graduation.",
    },
  ],
  drowsy: [
    {
      title: "Drowsy driver detection",
      date: "May 2019",
      link: "",
      imageConfig: {
        src: "/drowsy-driver.jpeg",
        alt: "Drowsy driver",
      },
      description:
        "I developed a wearable solution that utilized an infrared sensor planted on safety glasses to detect drowsiness. In case fatigue was detected in the driver an alarm/buzzer would ring and using a bluetooth module and Twilio it would send out an alert SMS.\n\nChallenges:-\n* Learning arduino software and hardware implementation.\n* Developing an IOT + wearable solution.\n* Handling the false positive scenarios\n* The literature survey for previous implementations.",
    },
  ],
  evoting: [
    {
      title: "E-Voting system",
      date: "January 2019 - April 2019",
      link: "",
      imageConfig: {
        src: "/e-voting.jpeg",
        alt: "E-Voting System",
      },
      description:
        "A secure automated election system with real-time updates on a web application using blockchain and an electronic voting machine. With a team of 3, we developed this project to enter Smart India Hackathon, a nationwide competition.\n\nChallenges:-\n* Learning and implementing blockchain core concepts alongside crypographic techniques like SHA256 hashing and RSA encryption.\n* Creating an electronic voting machine using arduino and bluetooth module.\n* Learning Javascript concepts since i only knew html/css by this point.",
    },
  ],
  ecommerce: [
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
  ],
};
