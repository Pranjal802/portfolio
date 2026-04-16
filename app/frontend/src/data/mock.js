export const MY_DATA = {
  personalInfo: {
    name: "PRANJAL PATEL",
    title: "Web Developer Intern / React js Internship Trainee",
    shortBio: "I build responsive and dynamic web applications with a focus on the MERN stack.",
    email: "patelpranjalinfo6@gmail.com",
    phone: "+91 9313729507",
    linkedin: "https://linkedin.com", // Placeholder
    github: "https://github.com", // Placeholder
    leetcode: "https://leetcode.com" // Placeholder
  },
  skills: {
    frontend: [
      "HTML5", "CSS3", "Shadcn UI", "JavaScript (ES6+)", "TypeScript", 
      "React.js", "JSX", "React Hooks", "React Router", "Next.js", 
      "Tailwind CSS", "Bootstrap", "Responsive Design"
    ],
    backend: [
      "Node.js", "Express.js", "RESTful APIs", "JWT", "OAuth", 
      "Zod", "Middleware", "Error Handling"
    ],
    database: [
      "MongoDB", "Mongoose", "CRUD Operations", "Data Modeling", 
      "Aggregation", "Indexing"
    ],
    tools: [
      "Git", "GitHub", "npm/yarn", "Postman", "Vercel", "Netlify", "Heroku"
    ],
    advanced: [
      "Redux", "Context API", "GraphQL (Apollo)", "WebSockets", 
      "Jest", "React Testing Library", "Firebase", "Appwrite", 
      "Performance Optimization", "Security Best Practices"
    ]
  },
  experience: [
    {
      id: 1,
      company: "RKIT Software Pvt. Ltd.",
      role: "Web Developer Intern",
      date: "Jan 2026 - Present",
      location: "On-site, Rajkot",
      descriptions: [
        "Worked on building responsive and interactive web applications using HTML, CSS, JavaScript, Bootstrap, and jQuery.",
        "Assisted in designing UI components, implementing dynamic features, and optimizing web pages for cross-browser compatibility."
      ]
    },
    {
      id: 2,
      company: "Tech Elecon Pvt. Ltd",
      role: "React js Internship Trainee",
      date: "May 2025 - June 2025",
      location: "Hybrid, Anand, Vallabh Vidyanagar",
      descriptions: [
        "Developed dynamic and responsive web applications using React.js.",
        "Integrating components, state management, and RESTful APIs, Redux Toolkit.",
        "Worked on building reusable UI components, improving performance, and enhancing user experience, reliability."
      ]
    }
  ],
  projects: [
    {
      id: 1,
      title: "PranHire – The Hiring WebApp",
      date: "April 2025",
      status: "Live",
      category: "Full Stack",
      description: "An AI-powered hiring platform that streamlines the recruitment process for both job seekers and recruiters. Built with the MERN stack, it features intelligent resume parsing using the Gemini API to extract skills and match candidates with job listings automatically.",
      highlights: [
        "AI-powered resume parsing using Google Gemini API for intelligent skill extraction",
        "Cloudinary integration for secure, optimized file uploads and management",
        "JWT-based authentication with role-based access for candidates and recruiters",
        "Real-time job application tracking dashboard with status updates",
        "Responsive UI built with React.js and Tailwind CSS"
      ],
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Cloudinary", "Gemini API"],
      repoLink: "https://github.com/Pranjal802",
      demoLink: "#"
    },
    {
      id: 2,
      title: "Freelancing Platform",
      date: "August 2024",
      status: "Completed",
      category: "Full Stack",
      description: "A comprehensive full-stack freelancing marketplace connecting clients with skilled freelancers. Features a complete bidding system, project management tools, and secure OAuth authentication — built to mirror platforms like Fiverr and Upwork.",
      highlights: [
        "End-to-end bidding system where freelancers can propose and negotiate project prices",
        "Google OAuth and Email/Password authentication via Passport.js",
        "Project management dashboard with milestones and progress tracking",
        "Freelancer profile pages with ratings, reviews, and portfolio showcase",
        "Advanced search and filter system by skills, budget, and availability"
      ],
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      repoLink: "https://github.com/Pranjal802",
      demoLink: "#"
    },
    {
      id: 3,
      title: "BlogApp",
      date: "May 2024",
      status: "Completed",
      category: "Frontend",
      description: "A feature-rich blogging platform with a rich-text editor, secure user authentication, and a clean reading experience. Leverages Appwrite as a backend-as-a-service for rapid development without managing server infrastructure.",
      highlights: [
        "TinyMCE rich text editor for creating beautifully formatted blog posts",
        "Appwrite BaaS for database, authentication, and file storage",
        "User profiles with personalized blog feeds and draft management",
        "Redux Toolkit for efficient global state management",
        "Responsive card-based layout with category filtering"
      ],
      techStack: ["React.js", "Tailwind CSS", "TinyMCE", "Appwrite"],
      repoLink: "https://github.com/Pranjal802",
      demoLink: "#"
    }
  ],
  education: [
    {
      id: 1,
      institution: "G H Patel College of Engineering & Technology, CVMU",
      degree: "Bachelor of Engineering in Information Technology",
      date: "Nov 2022 - Apr 2026",
      cgpa: "8.91"
    }
  ],
  certifications: [
    {
      id: 1,
      title: "Introduction to SQL",
      issuer: "University of Michigan (Coursera)"
    }
  ],
  achievements: {
    hackathons: [
      { id: 1, title: "Smart India Hackathon", description: "Participated in the prestigious national level hackathon." },
      { id: 2, title: "SSIP Hackathon", description: "State-level innovation program hackathon." },
      { id: 3, title: "Odoo Hackathon", description: "Competitive programming and software development hackathon by Odoo." },
      { id: 4, title: "Tic-Tac-Toe Hackathon", description: "Held at DA-IICT College, Gandhinagar." }
    ],
    certifications: [
      { id: 1, title: "SQL (Basic) Certificate", platform: "HackerRank" },
      { id: 2, title: "SQL (Intermediate) Certificate", platform: "HackerRank" }
    ],
    milestones: [
      { id: 1, title: "200+ Questions Solved", platform: "LeetCode" },
      { id: 2, title: "50 Days SQL Badge", platform: "LeetCode" },
      { id: 3, title: "Data Navigator Badge", platform: "LeetCode" }
    ]
  }
};
