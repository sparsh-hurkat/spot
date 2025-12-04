export interface JourneyInterface {
  name: string;
  duration: string;
  description: string;
  image: string;
  color: string;
}

export const journeyList: JourneyInterface[] = [
  {
    name: "Master's at Carnegie Mellon University",
    duration: "Aug 2025 - Present",
    description: `I am currently pursuing a **Master of Information Systems Management** at Carnegie Mellon University. 

  To know how I prepared for the application process, check out my [blog](https://sparsh-hurkat.github.io/guide-to-masters/).

  Click [here](https://sparsh-hurkat.github.io/guide-to-masters/my-story) to know why I chose to pursue a Masters at this point in my life?
  `,
    image: "/cmu_logo.png",
    color: "#C61130",
  },
  {
    name: "Software developer at Moneyview",
    duration: "March 2022 - July 2025",
    description: `**Moneyview** is a dynamic **FinTech** startup providing lucrative solutions for instant loans and money management. In my 3 years at moneyview, I have been deeply involved in the development and enhancement of various financial and technical products and services.

I am a part of the company's **Growth Pod** functioned with release of all new company features and products. I also work on building and maintaining several features that automate, streamline and enhance several server and client sided processes.

Check out some of the work I have done in the Recent Projects section.`,
    image: "/moneyview_logo.png",
    color: "#164937",
  },
  {
    name: "Experience Design Engineer (XDE) Intern at Them Consulting",
    duration: "May 2021 - Jun 2021",
    description: `I worked as an intern during my college days at a UI/UX company called Them Consulting in Mumbai.

I analyzed systematic approaches to design by concept generation and prototyping of a user-friendly wedding planning platform.

I also researched user-centered design and human-computer interaction to enhance UX and improve acquisition rates.`,
    image: "/images.png",
    color: "#FFFFFF",
  },
  {
    name: "B.Tech at Vellore Institute of technology(VIT)",
    duration: "2018 - 2022 | GPA : 8.3/10",
    description: `I majored in **Electronics and Communications Engineering(ECE)** with a specialization in sensors and wearable technology. Even though my major was in electronics, I knew I wanted to pursue a career as a software developer. Therefore, I took extra courses and learned coding in my free time.

During my time at VIT, I had the opportunity to work on various projects and participate in numerous events and several hackathons. You can find some of my academic/hackathon projects in the Recent Projects section.

Additionally, I was a founding member and core committee member of the **IEEE EMCS**(Electromagnetic compatibility society) in VIT.

I also volunteered in the **Youth Red Cross Society** in my free time.`,
    image: "/vit_logo.png",
    color: "#302F7D",
  },
  {
    name: "Arya Vidya Mandir Bandra(W) | Pace Jr. Science college, Dadar",
    duration: "2004 - 2016",
    description: `I completed my schooling at **Arya Vidya Mandir**. I got a **90.17/100** in the **ICSE** board examination. In the 8th standard, I chose JAVA as my elective subject and discovered a deep enjoyment for coding. This newfound passion made it clear that I wanted to pursue a career in software engineering.

After my time at AVM, I moved on to **Pace Junior Science College** for my high school education. I scored **82.77/100** in my **HSC board examinations**. Pace was a dynamic and challenging environment that pushed me to elevate my academic performance, particularly in the sciences. It not only prepared me for the highly competitive JEE entrance exams for engineering colleges but also prepared for the rigorous demands of my bachelor's degree.`,
    image: "/schools_logo.png",
    color: "#F5F5F5",
  },
];