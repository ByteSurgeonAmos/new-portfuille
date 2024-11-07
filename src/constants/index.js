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
  numeral,
  jpmorgan,
  africa,
  admin,
  crypto,
  test,
  zan,
  simon,
  brian,
  java,
  python,
  payments,
  ethereum,
  xmobit,
  Medappoint,
  blunova,
  solidity,
  sql,
  selenium,
  django,
  devops,
  nest,
  tcp,
  go2cod,
  xmobitPic,
  derriv,
  lattelink,
  rapb,
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
    title: "React(Nextjs) Developer",
    icon: reactjs,
  },
  {
    title: "Python Developer",
    icon: python,
  },
  {
    title: "Java Developer",
    icon: java,
  },
  {
    title: "Nodejs(Nestjs) Developer",
    icon: nodejs,
  },
  {
    title: "Blockchain(eth) Developer",
    icon: ethereum,
  },
];

const technologies = [
  // {
  //   name: "Solidity",
  //   icon: solidity,
  // },
  {
    name: "Springboot",
    icon: java,
  },
  {
    name: "Solidity",
    icon: solidity,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Reactjs",
    icon: reactjs,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Unit Testing",
    icon: selenium,
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
    name: "Django",
    icon: django,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "devops",
    icon: devops,
  },
  {
    name: "nestjs",
    icon: nest,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Mobile App Developer Intern",
    company_name: "Go2Cod",
    icon: go2cod,
    iconBg: "#4C6C82",
    date: "Summer 2023",
    points: [
      "Assisted in the development of mobile apps using React Native, building features like user authentication and push notifications.",
      "Collaborated with senior developers to troubleshoot and resolve issues during the development process.",
      "Worked on UI/UX designs to enhance user experience and ensure responsive layouts for various screen sizes.",
      "Participated in team meetings, offering feedback on app performance and suggesting improvements.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Xmobit INC",
    icon: xmobit,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - April 2024",
    points: [
      "Developed Xmobit platform using Next.js and integrated blockchain technologies.",
      "Collaborated with cross-functional teams, including designers, product managers, and developers, to create high-quality fintech solutions.",
      "Implemented responsive design and ensured cross-browser compatibility for a seamless user experience.",
      "Participated in code reviews, offering constructive feedback and ensuring adherence to best coding practices.",
    ],
  },
  {
    title: " Backend Engineer",
    company_name: "Medappoint Startup CO",
    icon: Medappoint,
    iconBg: "#383E56",
    date: "May 2024",
    points: [
      "Designed and developed backend logic to support key features like appointment scheduling and clinic management.",
      "Integrated real-time chat support functionality into the platform to improve user engagement and service delivery.",
      "Implemented user authentication systems to enhance security and ensure data privacy.",
      "Collaborated in code reviews to improve code quality and mentor junior engineers.",
    ],
  },
  {
    title: "Senior Backend & System Architecture Engineer",
    company_name: "Lattelinkapp",
    icon: lattelink,
    iconBg: "#383E56",
    date: "May 2024",
    points: [
      "Led the development of backend services for core features like authentication, clinic management, and appointment scheduling.",
      "Architected scalable systems to handle increased demand, ensuring high availability and performance.",
      "Integrated chat support features and real-time notifications to improve user experience.",
      "Collaborated on code reviews and mentored junior developers on best practices for system architecture.",
    ],
  },
  {
    title: "Developer & Founder",
    company_name: "BLU NOVA",
    icon: blunova,
    iconBg: "#E6DEDD",
    date: "August 2024",
    points: [
      "Developed the company's portfolio and digital presence using web technologies.",
      "Collaborated with co-founders to create and implement marketing strategies to promote the business.",
      "Built networking strategies and partnerships to expand the company’s reach in the market.",
      "Managed projects from concept to execution, overseeing timelines, resources, and deliverables.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to develop a smart walking stick, but Shanon proved me wrong.",
    name: "Simon Manegene",
    designation: "Lecturer",
    company: "JKUAT",
    image: simon,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Shanon does.",
    name: "Brian Munene",
    designation: "CTO",
    company: "Numeral IOT",
    image: brian,
  },
  {
    testimonial:
      "Shanon is a great developer who is always willing to go the extra mile to get the job done.",
    name: "Zanelle Aoko",
    designation: "Electrical Engineering graduate",
    company: "JKUAT",
    image: zan,
  },
];

const projects = [
  {
    name: "TCP Client and Server with SSL Support",
    description:
      " This project showcases a TCP client-server application with optional SSL encryption. The client connects to the server, sends queries, and receives responses, while the server handles multiple concurrent connections.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "SLS/TLS",
        color: "green-text-gradient",
      },

      {
        name: "Sockets",
        color: "pink-text-gradient",
      },
      {
        name: "pytest",
        color: "green-text-gradient",
      },
    ],
    image: tcp,
    source_code_link: "https://github.com/ByteSurgeonAmos/potential-carnival",
    demo: "",
  },
  {
    name: "XMOBIT",
    description:
      "xmobit is a user-friendly cryptocurrency application designed for seamless peer-to-peer (P2P) transactions. The app supports Bitcoin and Xmonero, offering users a secure platform to exchange these currencies directly with each other. With a focus on transparency and security, xmobit ensures lower transaction fees and a straightforward user experience, making cryptocurrency trading accessible to everyone.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "Blockchain",
        color: "pink-text-gradient",
      },
      {
        name: "Nodejs",
        color: "green-text-gradient",
      },
    ],
    image: xmobitPic,
    source_code_link: "https://github.com/ByteSurgeonAmos",
    demo: "https://xmobit.com",
  },
  {
    name: "Deriv Trading Prediction Algorithm",
    description:
      "This Python-based trading prediction algorithm uses machine learning to forecast market trends on the Deriv trading platform. It leverages WebSocket for real-time data streaming, fetching tick data and historical prices. The script employs an LSTM (Long Short-Term Memory) model built with TensorFlow to predict future price movements based on past trends. The model dynamically retrains based on performance, utilizing a Standard Scaler for data normalization. Real-time accuracy metrics guide adaptive retraining intervals to enhance prediction reliability. The script is equipped to handle both real-time and offline predictions, ensuring robust operation even in case of connectivity issues.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "ML/AI",
        color: "green-text-gradient",
      },
      {
        name: "scikitlearn",
        color: "green-text-gradient",
      },
    ],
    image: derriv,
    source_code_link: "https://github.com/ByteSurgeonAmos/AITradeEngine",
    demo: "",
  },
  {
    name: "Payment system for Credit Card Processing",
    description:
      "Backend micro-service  for processing credit card payments using Nestjs paypal and Stripe making it easy for developers to integrate payments in their applications.",
    tags: [
      {
        name: "Nestjs",
        color: "blue-text-gradient",
      },
      {
        name: "Paypal SDK",
        color: "green-text-gradient",
      },
      {
        name: "stripe SDK",
        color: "green-text-gradient",
      },
    ],
    image: payments,
    source_code_link:
      "https://github.com/ByteSurgeonAmos/payment-microservice-psystem",
    demo: "",
  },
  {
    name: "LyriQ-AI",
    description:
      "LyriQ-AI is a project focused on analyzing sentiment and emotions in German rap lyrics, with a cross-language retrieval feature to respond to queries in English. The system combines sentiment analysis and retrieval-augmented generation (RAG) techniques.",
    tags: [
      {
        name: "python/Django-rest-framework",
        color: "blue-text-gradient",
      },
      {
        name: "NLP",
        color: "green-text-gradient",
      },
      {
        name: "sentiment-analysis",
        color: "pink-text-gradient",
      },
      {
        name: "Angularjs",
        color: "blue-text-gradient",
      },
      {
        name: "retrieval-augmented generation",
        color: "green-text-gradient",
      },
    ],
    image: rapb,
    source_code_link: "https://github.com/ByteSurgeonAmos/LyriQ-AI",
    demo: "",
  },
];

export { services, technologies, experiences, testimonials, projects };
