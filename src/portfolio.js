/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Amish-03",
  title: "Hi, I'm Amish",
  subTitle: emoji(
    "Embedded Systems + Machine Learning enthusiast | NVIDIA Jetson Developer | Engineering student @ KLE Tech"),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Amish-03",
  linkedin: "https://www.linkedin.com/in/amish-kulkarni-2a74742b2/",
  gmail: "amishkulkarni03@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle:
    "ENGINEERING STUDENT EXPLORING EMBEDDED SYSTEMS, MACHINE LEARNING & REAL-TIME COMPUTING",
  skills: [
    "⚡ Designing real-time systems and applications using NVIDIA Jetson Orin and microcontrollers",
    "⚡ Building and training ML models for various applications",
    "⚡ Prototyping hardware systems using C and Arduino-based architectures",
    "⚡ Experience with circuit design and signal processing",
    "⚡ Working with low-level programming on 8051 and ARM microcontrollers",
    "⚡ Designing CMOS circuits and working with Cadence tools for IC design"
  ],
  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "logos:python"
    },
    {
      skillName: "C/C++",
      fontAwesomeClassname: "vscode-icons:file-type-cpp"
    },
    {
      skillName: "NVIDIA Jetson",
      fontAwesomeClassname: "logos:nvidia"
    },
    {
      skillName: "TensorFlow",
      fontAwesomeClassname: "logos:tensorflow"
    },
    {
      skillName: "PyTorch",
      fontAwesomeClassname: "logos:pytorch-icon"
    },
    {
      skillName: "Arduino",
      fontAwesomeClassname: "logos:arduino"
    },
    {
      skillName: "MATLAB",
      fontAwesomeClassname: "simple-icons:mathworks"
    },
    {
      skillName: "8051 Microcontroller",
      fontAwesomeClassname: "logos:8051"
    },
    {
      skillName: "ARM Microcontrollers",
      fontAwesomeClassname: "logos:arm"
    },
    {
      skillName: "CMOS",
      fontAwesomeClassname: "logos:electronics"
    },
    {
      skillName: "Cadence",
      fontAwesomeClassname: "logos:cadence"
    }
  ],
  display: true
};



// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "KLE Technological University",
      logo: require("./assets/images/kleLogo.png"), // Use your university logo
      subHeader: "Bachelor of Engineering in Electronics and Communications",
      duration: "September 2022 - April 2026",
      desc: "Pursuing a degree in Electronics and Communications Engineering with a focus on Embedded Systems and Machine Learning.",
      descBullets: [
        "Working on a project using NVIDIA Jetson and embedded systems.",
        "Conducted a Music Theory workshop and educated the fundamentals of Western Music",
        "Intergrated my passion of playing the guitar with Machine Learning to build a guitar chord classifier"
      ]
    }
  ]
};


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Embedded Systems (8051, ARM, NVIDIA Jetson)", // Embedded systems stack
      progressPercentage: "85%" // Relative proficiency
    },
    {
      Stack: "Machine Learning (TensorFlow, PyTorch)", // ML stack
      progressPercentage: "85%" // Relative proficiency
    },
    {
      Stack: "Circuit Design (CMOS VLSI)", // Circuit design stack
      progressPercentage: "70%" // Relative proficiency
    },
    {
      Stack: "Programming (C, C++, Python, MATLAB)", // Programming languages stack
      progressPercentage: "90%" // Relative proficiency
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section
};

const nvidiaUseCases = {
  title: "Top 5 NVIDIA Use Cases in 2025",
  subtitle: "Innovative Solutions Powered by NVIDIA Technology",
  useCases: [
    {
      projectName: "Omniverse for Digital Twins",
      projectDesc:
        "A unified platform that enables businesses to create virtual simulations of their operations, enabling real-time collaboration across industries like manufacturing, automotive, and architecture for optimized decision-making and predictive analytics."
    },
    {
      projectName: "DGX SuperPOD",
      projectDesc:
        "A massive-scale AI infrastructure system for research institutions and enterprises, offering unparalleled computing power for training deep learning models and tackling the most complex AI and scientific challenges."
    },
    {
      projectName: "NVIDIA DRIVE",
      projectDesc:
        "An AI platform for autonomous vehicles that integrates cutting-edge machine learning algorithms, real-time data processing, and advanced sensor fusion to enable safe, self-driving car technologies for the next generation of mobility."
    },
    {
      projectName: "NVIDIA A100 Tensor Core GPU",
      projectDesc:
        "The A100 GPU powers AI workloads across cloud data centers, providing superior performance for training, inference, and data analytics, driving the acceleration of AI applications such as deep learning, natural language processing, and recommender systems."
    },
    {
      projectName: "NVIDIA Clara AI Healthcare",
      projectDesc:
        "An AI-powered healthcare platform that aids medical professionals in faster diagnosis, personalized treatment plans, and improving patient outcomes through deep learning models tailored for medical imaging, genomics, and drug discovery."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "Collaborative Project Intern",
      company: "NVIDIA",
      companylogo: require("./assets/images/nvidiaLogo.jpg"), // Use the correct logo image for NVIDIA
      date: "January 2025 – Present",
      desc: "Working as an intern at NVIDIA, focusing on the development and analysis of GMSL (Gigabit Multimedia Serial Link) link quality for high-performance embedded systems.",
      descBullets: [
        "Developing tools to analyze and optimize the link quality of GMSL interfaces in embedded systems.",
        "Collaborating with cross-functional teams to improve the performance and reliability of multimedia serial links.",
        "Contributing to real-time system testing and data collection for GMSL analysis.",
        "Working with hardware interfaces and embedded systems to ensure efficient and accurate data transmission."
      ]
    }
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME OF THE PROJECTS I’VE WORKED ON IN EMBEDDED SYSTEMS, MACHINE LEARNING, AND REAL-TIME COMPUTING",
  projects: [
    {
      image: require("./assets/images/nvidiaLogo.jpg"), // Use NVIDIA or project-specific logo
      projectName: "NVIDIA Colaboration Project",
      projectDesc: "Developing and optimizing tools via the NVIDIA Jetson Orin Developer Kit.",
      
    },
    {
      image: require("./assets/images/faucet.jpeg"), // Add the relevant logo for this project
      projectName: "Automatic Faucet System",
      projectDesc: "Developed an embedded system for automatically controlling faucets using sensor inputs, designed for water conservation and ease of use in smart home environments.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/Amish-03/Automatic-Faucet-System"
        }
      ]
    },
    {
      image: require("./assets/images/CNCbot.jpg"), // Replace with your project's logo if available
      projectName: "Pseudo CNC Bot",
      projectDesc: "Designed and developed a pseudo CNC bot for precise control of mechanical operations, enhancing my understanding of automation and embedded systems.",
      footerLink: [
        {
          name: "View Details",
          url: "https://github.com/G-division-2022-2023-even/Repo-2/wiki" // Add a link to your project or repository
        }
      ]
    },
    {
      //image: require("./assets/images/smartIndiaHackathonLogo.png"), // Add a custom logo for the Smart India Hackathon project
      projectName: "Smart India Hackathon 2024 - AI-Driven Traffic Optimization",
      projectDesc: "My team and I participated in the Smart India Hackathon 2024 Level 1 at KLE Technological University, Hubballi. We developed an AI-driven project to optimize traffic light timings using real-time data to improve urban mobility.",
      footerLink: [
        {
          name: "LinkedIn Post",
          url: "https://www.linkedin.com/posts/amish-kulkarni-2a74742b2_smartindiahackathon-ai-trafficoptimization-activity-7237839032968196097-MekC?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEss458BSR3VGjADHZ6bVXUas3GpZroGHYU" // Add a link if available
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Paper on Guitar Chord Recognition",
      subtitle:
        "Published a paper on guitar chord recognition, focusing on real-time detection and analysis of guitar chords using machine learning techniques.",
      //image: require("./assets/images/paperLogo.webp"),
      imageAlt: "Guitar Chord Recognition Paper",
      footerLink: [
        {
          name: "Read Paper",
          url: "YOUR_PAPER_LINK_HERE" // Add the link to your paper
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};


// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅",

  talks: [
    {
      title: "The Debattle - Word's Worth, KLE Technological University",
      subtitle:
        "Secured 2nd runners-up among 51 teams in an intellectually challenging debate competition with Anirudh Navalgund. Topics covered diverse themes including entrepreneurship, education, and technology.",
      image: require("./assets/images/debattle.jpeg"),
      footerLink: [
        {
          name: "View Certificate",
          url: "assets/images/debattle_cert.jpeg" // Adjust this path as needed
        },
        {
          name: "View LinkedIn Post",
          url: "https://www.linkedin.com/feed/update/urn:li:activity:7179069278574477312/"
        }
      ]
    },
    {
      title: "Music Theory Workshop - KLE Technological University",
      subtitle:
        "Conducted a foundational workshop with Samudyata Minasandra for our music club recruits, blending Western theory, Indian Classical, and sound science.",
      footerLink: [
        {
          name: "Watch Session Video",
          url: "https://drive.google.com/file/d/12P72JWCbvMJMC590z4y3ZbebeqP8KLCv/view?usp=sharing"
        },
        {
          name: "View LinkedIn Post",
          url: "https://www.linkedin.com/feed/update/urn:li:activity:7182736239840860160/"
        }
      ]
    }
  ],
  display: true
};





// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "amishkulkarni03@gmail.com",
  linkedin: "https://www.linkedin.com/in/amish-kulkarni-2a74742b2/"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
