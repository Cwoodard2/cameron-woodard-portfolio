import samplePic from "../Images/Logoforwebsite.png";
import machineLearning from "../Images/machine_learning.png";
import pythonLogo from "../Images/python_logo.png";
import reactLogo from "../Images/react_logo.png";
import tailwindLogo from "../Images/tailwind_logo.png";
import cssLogo from "../Images/css_logo.png";
import typescriptLogo from "../Images/typescript_logo.png";
import expressLogo from "../Images/express_logo.png";
import firebaseLogo from "../Images/firebase_logo.png";
import htmlLogo from "../Images/html_logo.png";
import cLogo from "../Images/c_logo.png";
import linuxLogo from "../Images/linux_logo.png";


const projects = {
  "o-RDS": {
    title: "o-RDS",
    duration: "Fall 0f 2022 - Spring of 2023",
    description:
      "o-RDS (Open-Source Respondent Driven Sampling) is a survey creation and management tool and was developed as a request from a Computer Science professor at SIUE, looking to expand the selection of software available for Respondent Driven Sampling. Working with 3 other students, we developed a full stack application that included a survey builder (built by me), survey management area, participant survey application, and the ability to automate rewards payouts to participants. This project taught collaboration and how to write well written code and was deemed commerical grade by reviewers of the project. This project was submitted to EMBC for review and was accepted.",
    skills: [
      htmlLogo,
      cssLogo,
      typescriptLogo,
      expressLogo,
      reactLogo,
      tailwindLogo,
      firebaseLogo,
    ],
    sourceCode: "https://github.com/o-RDS",
    liveSite: "https://o-rds.com/",
    projectPic: samplePic,
  },
  "Professor Personal Website": {
    title: "Professor Personal Website",
    duration: "December 2022 - Current",
    description:
      "In December of 2022, I was approached by a professor at UMSL with the opportunity to create a website that highlights their work. In an effort to reduce reoccuring costs it was decided I would create the project from scratch, implementing a CMS system for the professor to use to keep dynamic content up to date. This resulted in a React application that works extremely fast but also enables the ability to modify the website with just a few clicks of a button.",
    skills: [reactLogo, typescriptLogo, firebaseLogo, tailwindLogo],
    sourceCode: "https://github.com/Cwoodard2/umsl-professor-web",
    liveSite: "umsl-professor-website.web.app",
    projectPic: samplePic,
  },
  "HIV Machine Learning Project": {
    title: "HIV Machine Learning Project",
    duration: "Summer of 2023",
    description:
      "As part of this project I worked closely with an SIUE CS professor and another graduate to determine the effects of COVID and HIV in the LGBTQ+ community. I utilized the machine learning algorithm, K-Nearest Neighbors in order to determine the what attributes provided the largest effect. We then examined if there were any connections between them. The result is a conference paper published in EMBC. This project was submitted to EMBC and was accepted.",
    skills: [pythonLogo, machineLearning],
    sourceCode: "https://github.com/SIUEComplexNetworksLab/BOHComplexNetworks",
    liveSite: "",
    projectPic: samplePic,
  },
  // "Women In STEM Research": {
  //     title: "Women In STEM Research",
  //     description: "Working with a Graduate Student and Professor at SIUE, I developed a web based survey application intending to gather data regarding Women in STEM's experiences. Additionally, it was used as the foundation for o-RDS as it used rudimentary implementations to track referall chains and determine in what ways people were being referred to the survey.",
  //     skills: [typescriptLogo, reactLogo, tailwindLogo, firebaseLogo],
  //     sourceCode: "",
  //     liveSite: "",
  //     projectPic: samplePic
  // },
  "SMTP Server & Client": {
    title: "SMTP Server & Client",
    duration: "Fall of 2022",
    description:
      "In the networking class at SIUE I was tasked with creating an email server and client running on the SMTP and UDP protocol. Additionally, we were required to have the server be able to accept and handle multiple requests from many different clients simultaneously. The result is 1200 lines of code meant to provide this solution in addition to security provisions such as password generation and encoding and decoding pf passwords. Additionally, care was given to ensure the user has a great experience interacting with a command line.",
    skills: [cLogo, linuxLogo],
    sourceCode: "https://github.com/Cwoodard2/Email-Server-Client",
    liveSite: "",
    projectPic: samplePic,
  },
};

export default projects;
