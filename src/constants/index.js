import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    flutter,
    zymo,
    stealth,
    ecell,
    kotak,
    travelbuddy,
    sidegigs,
    decendrive,
    moviesystem,
    android,
    firebase,
    sql,
    solidity,
    electron
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Website Developer",
      icon: web,
    },
    {
      title: "Flutter Developer",
      icon: mobile,
    },
    {
      title: "Blockchain Enthusiast",
      icon: backend,
    },
    {
      title: "UI/UX Designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    // {
    //   name: "HTML 5",
    //   icon: html,
    // },
    // {
    //   name: "CSS 3",
    //   icon: css,
    // },
    {
      name: "Flutter",
      icon: flutter,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Android Studio",
      icon: android,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Firebase",
      icon: firebase,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "Solidity",
      icon: solidity,
    },
    {
      name: "Electron JS",
      icon: electron,
    },
  ];
  
  const experiences = [
    {
      title: "Mobile Application Developer Intern",
      company_name: "Zymo",
      icon: zymo,
      iconBg: "#fff",
      date: "Nov 2023 - Present",
      points: [
        "Developing and maintaining live applications using Flutter and Firebase.",
        "Optimizing React and Firebase-based website for improved search engine visibility, enhancing reach and search engine optimization effectiveness.",
        "Integrating and optimizing API functionalities within Flutter applications, enhancing overall app performance.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      ],
    },
    {
      title: "Software Developer Intern",
      company_name: "Stealth Startup",
      icon: stealth,
      iconBg: "#fff",
      date: "Aug 2023 - Present",
      points: [
        "Developing a cross platform Delivery Application using Flutter and Firebase.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive realtime Map page on global scale for better user experience",
        "Adding a realtime wallet with in-App currency",
        "Integrating Aadhar and PAN verification for a secure flow and Razorpay for transaction",
      ],
    },
    {
      title: "Desktop Application Developer Intern",
      company_name: "Kotak Education Foundation",
      icon: kotak,
      iconBg: "red",
      date: "Dec 2022 - April 2023",
      points: [
        "Developed a desktop application using Electron and Nodejs.",
        "Streamlined the process of retrieving reports from the scholarship management website, resulting in substantial time savings by 70% and significantly enhancing the efficiency of the workforce.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Technical Associate",
      company_name: "VESIT ECELL",
      icon: ecell,
      iconBg: "#fff",
      date: "July 2022 - May 2023",
      points: [
        "Developing and maintaining the official website of VESIT ECELL built on Reactjs and PHP.",
        "Improving the User interface of the website with tailwind CSS.",
        "Implementing responsive design.",
        "Participating in code reviews with senior members and other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "TravelBuddy",
      description:
        "Created a comprehensive travel website using the MERN stack that offers users the ability to log in, browse, and search through an extensive array of travel packages. Additionally, users can submit reviews, provide ratings, and make bookings for their preferred travel packages, ensuring a seamless and user-friendly experience.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "express",
          color: "orange-text-gradient",
        },
        {
          name: "node",
          color: "pink-text-gradient",
        },
      ],
      image: travelbuddy,
      source_code_link: "https://github.com/taufique2208/TravelBuddy.git",
      website_link:"https://658bdd36caaaa73808ca9017--glittery-froyo-932936.netlify.app"
    },
    {
      name: "SideGigs",
      description:
        "SideGigs, powered by the MERN stack, is a dynamic platform for college students in the freelance marketplace. It features a personalized profile builder, AI-driven Ask AI for quick guidance, project exploration, and a dedicated courses section. SideGigs is tailored to empower students in pursuing freelance opportunities.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "express",
          color: "orange-text-gradient",
        },
        {
          name: "node",
          color: "pink-text-gradient",
        },
        {
          name: "tailwind-css",
          color: "pink-text-gradient",
        },
      ],
      image: sidegigs,
      source_code_link: "https://github.com/taufique2208/SideGigs.git",
      website_link:'https://musical-swan-9e078e.netlify.app'
    },
    {
      name: "Decendrive",
      description:
        "Developed a decentralized storage solution addressing the issues faced by centralized systems and enabling secure file upload, seamless sharing, and efficient access through a distributed network architecture, ensuring data integrity and accessibility with optimal reliability ",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "hardhat",
          color: "green-text-gradient",
        },
        {
          name: "pinata",
          color: "pink-text-gradient",
        },
      ],
      image: decendrive,
      source_code_link: "https://github.com/taufique2208/DECENDRIVE.git",
      website_link:"https://youtu.be/TPCa6sp69KM?si=3ctjcFvv9Y9Gv4G2"
    },
    {
      name: "FlixFlair",
      description:
        "FlixFlair, built with Python, combines Flask for backend logic and Streamlit for an interactive frontend. Using collaborative filtering algorithms, it analyzes user preferences to suggest movies based on similar profiles. Users input preferences through Streamlit, and Flask processes the data, offering real-time movie recommendations. The fusion of Flask and Streamlit ensures a seamless, user-friendly experience for exploring personalized movie suggestions.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "flask",
          color: "green-text-gradient",
        },
        {
          name: "streamlit",
          color: "orange-text-gradient",
        },
      ],
      image: moviesystem,
      source_code_link: "https://github.com/taufique2208/Movie-Recommender-System.git",
      website_link:null
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };