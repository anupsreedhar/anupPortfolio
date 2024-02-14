/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Anup's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Anup Sreedharan Portfolio",
    type: "website",
    url: "http://zelexon.com/",
  },
};

//Home Page
const greeting = {
  title: "Anup Sreedharan",
  logo_name: "Zelexon",
  nickname: "zelexon",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://docs.google.com/document/d/1sI4bOv-zEDID-QpqtorEOAPCN1TkD_I4/edit?usp=drive_link&ouid=104581967806546053007&rtpof=true&sd=true",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/anupsreedhar",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/anupsreedhar",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/anup-sreedhar-303bb2b9/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:anup.sreedhaar@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/laymanbrother.19/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/layman_brother/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "P S N A College of Engineering & Technology Dindigul",
      subtitle: "Master of Computer Application",
      logo_path: "mku.png",
      alt_name: "Madurai Kamraj University",
      duration: "2000 - 2003",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "https://mkuniversity.ac.in/",
    },
    {
      title: "Kerala Univerisity Thiruvananthapuram",
      subtitle: "Master of Business Administration Finance",
      logo_path: "ku.png",
      alt_name: "Kerala University",
      duration: "2006 - 2008",
      descriptions: [
        "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
        "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
        "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
      ],
      website_link: "https://www.keralauniversity.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Sun Certification",
      subtitle: "- Sun",
      logo_path: "scjp.jpg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "TOGAF Enterprise Architect Practitioner",
      subtitle: "- TOGAF",
      logo_path: "togaf.png",
      certificate_link:
        "https://www.credly.com/badges/61d31f5b-b152-4fba-adc7-33f02e5c58c3/linked_in_profile",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Prompt Engineering How to talk the AI",
      subtitle: "- LinkedIn Training",
      logo_path: "linkedIn.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/570c4146c7d1580038273caa33d4eea22d759dd1b07314aba78845378f32378b",
      alt_name: "LinkedIn",
      color_code: "#1F70C199",
    },
    {
      title: "Enterprise Architecture in Practice",
      subtitle: "- LinkedIn",
      logo_path: "linkedIn.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/fffd8ce14f61927a1c9e4bf556c0ef3c0448fdfb212fcb7089539bf0b7593ee4",
      alt_name: "LinkedIn",
      color_code: "#1F70C199",
    },
    {
      title: "Software Architecture Breaking Monolith into Microservices",
      subtitle: "- LinkedIn",
      logo_path: "linkedIn.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/bc37f867e157b7edfaca3e85a9f30bea067fd809850bc374458c5757733dbda6",
      alt_name: "LinkedIn",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software Engineer",
          company: "Ernst and Young",
          company_url: "https://legatohealthtech.com/",
          logo_path: "EY.png",
          duration: "May 2004 - Aug 2007",
          location: "Technopark, Thiruvananthapuram",
          description:
            "",
          color: "#0879bf",
        },
        {
          title: "Senior Software Engineer",
          company: "CGI",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "cgi.png",
          duration: "May 2018 - Oct 2018",
          location: "Electronic City, Bangalore",
          description:
            "",
          color: "#9b1578",
        },
        {
          title: "Senior Software Analyst",
          company: "Tech Mahindra",
          company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "tm.svg",
          duration: "Aug 2010 - Nov 2011",
          location: "Bommanahali, Bangalore",
          description:
            "",
          color: "#fc1f20",
        },
        {
          title: "Associate Architect",
          company: "UST Global",
          company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "ust.png",
          duration: "Nov 2011 - Dec 2021",
          location: "Kansas, USA",
          description:
            "",
          color: "#fc1f20",
        },
        {
          title: "Architect",
          company: "G10x",
          company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "g10x.png",
          duration: "Feb 2021 - Jul 2021",
          location: "Cochin, Kerala",
          description:
            ".",
          color: "#fc1f20",
        },
        {
          title: "Architect",
          company: "H & R Block",
          company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "HRBlock.png",
          duration: "Jul 2021 - Till Date",
          location: "Technopark, Thiruvananthapuram",
          description:
            ".",
          color: "#fc1f20",
        }
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Asynchronous Full Duplex Connections for Networks:",
          company: "NEST",
          company_url: "https://nesttech.com/",
          logo_path: "nest.png",
          duration: "May 2003 - Aug 2003",
          location: "Thiruvananthapuram, India",
          description:
            "This project enables the local network administrator to perform real time monitoring data analysis and transmission. The main features are capture desktop and remote shutdown and logoff of client.",
          color: "#000000",
        },
      ],
    },    
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "How IoT is Changing the Way We Live and Work",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on IoT published in LinkedIn ",
      url:
        "https://www.linkedin.com/posts/zelexon_zelexon-iotenable-activity-7040341838280482816-JuVT?utm_source=share&utm_medium=member_desktop",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Streamline Your Printing with Universal Print: A Comprehensive Guide",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Universal Print published in LinkedIn ",
      url:
        "https://www.linkedin.com/posts/zelexon_zelexon-cloudprinting-printer-activity-7038918483568451584-BqDj?utm_source=share&utm_medium=member_desktop",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Cloud Services for Effective Notification Delivery",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Effective Notification Delivery published in LinkedIn ",
      url:
        "https://www.linkedin.com/pulse/cloud-services-effective-notification-delivery-zelexon%3FtrackingId=aGB6zLr2nMNBeadO4bImkA%253D%253D/?trackingId=aGB6zLr2nMNBeadO4bImkA%3D%3D",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Revolutionizing Authentication: The Rise of Passwordless Authentication and Its Benefits",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Passwordless Authentication published in LinkedIn ",
      url:
        "https://www.linkedin.com/pulse/revolutionizing-authentication-rise-passwordless-its-benefits%3FtrackingId=sZ%252BhAYhhX0d%252FOfGnnAhVUw%253D%253D/?trackingId=sZ%2BhAYhhX0d%2FOfGnnAhVUw%3D%3D",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Logging and Monitoring",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Logging and Monitoring published in LinkedIn ",
      url:
        "https://www.linkedin.com/pulse/logging-monitoring-zelexon%3FtrackingId=qOb3fULkwc6FKvRR44TiWg%253D%253D/?trackingId=qOb3fULkwc6FKvRR44TiWg%3D%3D",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Anup.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "C-59 Santhinagar Kazhakuttom - 695582",
    locality: "Kazhakuttom",
    country: "IN",
    region: "Kerala",
    postalCode: "695582",
    streetAddress: "Santhinagar",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
