export const METADATA: {
  author: string;
  title: string;
  keywords: string;
  image: string;
  language: string;
} = {
  author: "Vaibhav Mathur",
  title: "Portfolio | Vaibhav Mathur",
  keywords: [
    "Vaibahv Mathur",
    "Java Developer",
    "Springboot Developer",
    "Commercetools Developer",
    "Software Developer",
    "Portfolio",
    "website",
    "Folio",
  ].join(", "),
  image:
   "https://res.cloudinary.com/djcadkzcd/image/upload/v1697348779/dqae8uykirjyzlqjtfyj.png",
  language: "English",
};

export const MENULINKS: { name: string; ref: string }[] = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Resume",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS: string[] = [
  "Java Developer",
  "Spring Boot Developer",
  "Commercetools Developer",
  "Software Developer",
  "Backend Developer",
];

export const SOCIAL_LINKS: { name: string; url: string }[] = [
  {
    name: "mail",
    url: "mailto:1998vaibhavmathur@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/vaibhavmathur07/",
  },
  {
    name: "github",
    url: "https://github.com/vaibhavmathur07",
  },
];

export const SKILLS: {
  languages: string[];
  librariesAndFrameworks: string[];
  platform: string[];
  databases: string[];
  ToolsandIDE: string[];
  APITechnology: string[];
  // WebDevelopmentTechnologies: string[];
  DesignandGraphics: string[];
} = {
  languages: ["Java"],
  librariesAndFrameworks: [
    "Spring Boot",
    "Spring Security",
    "Spring JPA",
    "Spring MVC",
    "Microservices",
  ],
  platform: ["Commercetools"],
  databases: ["MySQL", "Firebase"],
  ToolsandIDE: [
    "cpp",
    "nodejs",
    "moralis",
    "webpack",
    "git",
    "python",
    "vite",
    "stripe",
    "figma",
  ],
  APITechnology: ["mongodb", "tanstack-query"],
  // WebDevelopmentTechnologies: ["Html", "Css"],
  DesignandGraphics: ["redux", "react", "nextjs", "tailwindcss"],
};

export const PROJECTS: {
  name: string;
  image: string;
  blurImage: string;
  url: string;
}[] = [
    {
      name: "Commercetools",
      image: "/projects/project1.png",
      blurImage: "/projects/project1.png",
      url: "https://github.com/VaibhavMathur07/Commercetools-Project/blob/master/README.md",
    },
    {
      name: "Hotel User Rating",
      image: "/projects/project2.png",
      blurImage: "/projects/project2.png",
      url: "https://github.com/VaibhavMathur07/Hotel-Rating-User-Microservices",
    },
    {
      name: "Firebase CRUD Operation",
      image: "/projects/project3.png",
      blurImage: "/projects/project3.png",
      url: "https://github.com/VaibhavMathur07/FireBase-Crud-Operations",
    },
    {
      name: "Spring Security CRUD",
      image: "/projects/project4.png",
      blurImage: "/projects/project4.png",
      url: "https://github.com/VaibhavMathur07/SpringSecurityJWT",
    },
    {
      name: "Spring MVC",
      image: "/projects/project5.png",
      blurImage: "/projects/project5.png",
      url: "https://github.com/VaibhavMathur07/Spring-MVC-PLP-PDP",
    },
  ];

export const WORK: {
  id: number;
  company: string;
  title: string;
  location: string;
  range: string;
  responsibilities: string[];
  url: string;
  video: string;
}[] = [
    {
      id: 1,
      company: "Dukaan",
      title: "Frontend Developer",
      location: "Bangalore, Karnataka",
      range: "December - Current",
      responsibilities: [
        "Led creation of a captivating cross-platform e-commerce solution.",
        "Enhanced UX with gamification and personalized push notifications ensuring an ever-improving shopping journey.",
        "The app boasts a DAU base of 13k and an extensive MAU count of 170k.",
      ],
      url: "https://mydukaan.io/",
      video: "/work/dukaan.mp4",
    },
    {
      id: 2,
      company: "Aviate",
      title: "Frontend Developer Intern",
      location: "Goa",
      range: "May - October 2022",
      responsibilities: [
        "Built their flagship product Q-Rate, a voice-based applicant screening platform.",
        "Developed pixel-perfect responsive web applications achieving daily traffic of 1000-2000 users.",
        "Successfully rolled out an error-logging and bug reporting system that cut user-reported bugs by 30%.",
      ],
      url: "https://www.aviate.jobs/",
      video: "/work/aviate.mp4",
    },
    {
      id: 3,
      company: "Spacenos",
      title: "Web Developer Intern",
      location: "Bangalore, Karnataka",
      range: "September - December 2021",
      responsibilities: [
        "Led the Full Stack revamp on the Admin Portal.",
        "Developed app integration with REST APIs, Google Maps, User Auth, Stripe and other libraries.",
        "Implemented CRUD features for all the services and providers.",
      ],
      url: "https://spacenos.com/",
      video: "/work/spacenos.mp4",
    },
  ];

export const GTAG: string = "G-5HCTL2TJ5W";
