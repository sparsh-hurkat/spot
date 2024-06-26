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
    color:""
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
    color: "#0B8C4C"
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
    color: "#302F7D"
  },
];
