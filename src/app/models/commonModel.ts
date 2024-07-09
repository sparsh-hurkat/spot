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
  description: string[];
  image: string;
  color: string;
}

export const journeyList: JourneyInterface[] = [
  {
    name: "Some other projects I have worked on",
    duration: "In my free time",
    description: [
      "Building web applications and learning new technologies has always been a passion of mine. Some interesting things i have worked on are :-",
      " • This website is primarily to apply concepts of NextJS in a real-world application. SPOT is built on the gemini api",
      " • Design, development & SEO of an E-commerce website (www.thegiftangels.in)[deprecated] for a local company called The Gift Angels",
    ],
    image: "/sparsh.jpg",
    color: "",
  },
  {
    name: "Software developer at Moneyview",
    duration: "March 2022 - Present",
    description: [
      "Moneyview is a dynamic fintech startup providing lucrative solutions for instant loans and money management. In my two years at moneyview, I have been deeply involved in the development and enhancement of various financial products and services. I am a part of the company's growth pod functioned with release of all new company features and products.",
      "Some of my primary responsibilities included - ",
      " • Developing a web application for store vendors to view and manage transactions. This application is a feature of the company's new Buy-Now-Pay-Later product line.",
      " • Developing a calling portal used by the company's agents to perform all company incoming and outgoing calling operations.",
      " • Additionally, I worked on building and maintaining several features that would automate, streamline and enhance several server and client sided processes.",
    ],
    image: "/moneyview_logo.png",
    color: "#0B8C4C",
  },
  {
    name: "Electronics engineering at Vellore Institute of technology(VIT)",
    duration: "2018 - 2022",
    description: [
      //   "The hands-on lab sessions, engaging with cutting-edge research, participating in tech fests along with the rigorous curriculum at VIT prepared me for a dynamic career in engineering.",
      "During my time at VIT, I had the opportunity to work on various projects and participate in numerous events, including:",
      " • Developed a transfer learning model for drowsy driver detection using facial feature recognition. Implemented an IOT solution using Arduino and machine learning model using Python, OpenCV & Keras.",
      " • A secure automated election system with real-time updates on a web application using blockchain and an electronic voting machine",
      " • A sensor based posture correction device integrated with a bluetooth controlled mobile application",
      " • Helped establish and served as a core committee member of the IEEE EMCS(Electromagnetic compatibility society)",
    ],
    image: "/vit_logo.png",
    color: "#302F7D",
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

export const projectsModel = [
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
  // {
  //   title: "E-Voting system",
  //   date: "January 2019 - April 2019",
  //   link: "",
  //   imageConfig: {
  //     src: "/e-voting.jpeg",
  //     alt: "E-Voting System",
  //   },
  //   description:
  //     "A secure automated election system with real-time updates on a web application using blockchain and an electronic voting machine. With a team of 3, we developed this project to enter Smart India Hackathon, a nationwide competition.\n\nChallenges:-\n* Learning and implementing blockchain core concepts alongside crypographic techniques like SHA256 hashing and RSA encryption.\n* Creating an electronic voting machine using arduino and bluetooth module.\n* Learning Javascript concepts since i only knew html/css by this point.",
  // },
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
];
