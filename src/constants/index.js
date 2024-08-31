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
  xmobitPic,
  derriv,
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
    title: "Nodejs Developer",
    icon: nodejs,
  },
  {
    title: "Blockchain Developer",
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
    title: " Software Developer",
    company_name: " Xmobit INC",
    icon: xmobit,
    iconBg: "#E6DEDD",
    date: " Jan 2024 - April 2024",
    points: [
      "Developing xmobit plaform using Next.js with blockchain  other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create a high-quality product.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Sn Backend Engineer ",
    company_name: "Medappoint startup CO",
    icon: Medappoint,
    iconBg: "#383E56",
    date: " May2024",
    points: [
      "Develop backend logic.",
      "Integrate chat support features.",
      "Authentication, appointments and clinic management features development.",
      "Participate in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Developer & Founder",
    company_name: "BLU NOVA",
    icon: blunova,
    iconBg: "#E6DEDD",
    date: "August 2024",
    points: [
      "Develop company's portfolio",
      "Marketing strategies with co-founders",
      "Networking strategies",
      "Project management.",
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
];

export { services, technologies, experiences, testimonials, projects };
