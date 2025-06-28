import { 
  Code, 
  Server, 
  Cloud, 
  Database, 
  Briefcase, 
  GraduationCap, 
  Mail, 
  Phone, 
  Linkedin, 
  Github,
  Award,
  Users,
  Zap,
  Target
} from "lucide-react";

export const personalInfo = {
  name: "Dheeraj Singh Bisht",
  title: "Salesforce Developer & Full Stack Engineer",
  email: "dheerajsingh78677@gmail.com",
  phone: "+61480599488",
  linkedin: "https://www.linkedin.com/in/dheeraj-singh-bisht-34a494156/",
  github: "https://github.com/dheerajsingh",
  objective: "Highly skilled and certified Salesforce Developer with over five years of experience designing, developing, and deploying innovative, user-centric solutions. Proven expertise in integrating cloud technologies, optimizing business processes, and enhancing user engagement. Seeking an opportunity to put my knowledge into action, contribute to impactful projects."
};

export const skills = {
  frontend: [
    { name: "HTML/CSS/JavaScript", level: 95 },
    { name: "React", level: 90 },
    { name: "Lightning Web Components", level: 95 },
    { name: "TypeScript", level: 85 }
  ],
  backend: [
    { name: "Apex", level: 95 },
    { name: "Java", level: 80 },
    { name: "Node.js/Express", level: 85 },
    { name: "REST/SOAP APIs", level: 90 }
  ],
  cloud: [
    { name: "Salesforce CRM", level: 95 },
    { name: "AWS", level: 80 },
    { name: "Dell Boomi", level: 85 },
    { name: "CloudSense", level: 90 }
  ],
  devops: [
    { name: "SOQL/SOSL", level: 95 },
    { name: "PostgreSQL", level: 80 },
    { name: "CI/CD (ANT/Copado)", level: 85 },
    { name: "Git/GitHub", level: 90 }
  ]
};

export const certifications = [
  "Salesforce Certified AI Associate",
  "Platform Developer I",
  "Service Cloud Consultant",
  "Sales Cloud Consultant",
  "Salesforce Administrator",
  "Flosum Certified Professional",
  "CloudSense Q2C 401 Certified"
];

export const workExperience = [
  {
    title: "Salesforce Consultant",
    company: "Wipro - ACG (Aging Care Giver)",
    period: "Oct 2021 – Jun 2023",
    achievements: [
      "Automated CI/CD pipelines using ANT and Package.XML, boosting deployment efficiency by 9%",
      "Customized Service Cloud workflows to improve customer satisfaction and staff productivity",
      "Integrated Salesforce with third-party systems using REST APIs and outbound messages",
      "Designed scalable middleware layer via Dell Boomi, enhancing system performance by 3%"
    ]
  },
  {
    title: "Business Technology Analyst",
    company: "Deloitte USI - Uplink (World Economic Forum)",
    period: "Dec 2020 – Oct 2021",
    achievements: [
      "Built interactive Community Cloud portals using Lightning Web Components and Einstein Analytics",
      "Conducted root cause analysis and authored detailed technical documentation",
      "Designed workflows, triggers, and validation rules aligned with Agile sprint cycles",
      "Achieved 100% sprint delivery rate and reduced post-deployment defects"
    ]
  },
  {
    title: "Senior System Engineer",
    company: "Infosys - Telstra, LTFS, Allstate Insurance",
    period: "Jun 2018 – Dec 2021",
    achievements: [
      "Optimized CPQ processes for Telstra using Salesforce and CloudSense",
      "Automated loan processing workflows for LTFS via Apex batch jobs, increasing efficiency by 25%",
      "Customized loan management modules with tailored layouts and security controls",
      "Delivered scalable Salesforce solutions using Apex, Web Services, and Lightning Components"
    ]
  }
];

export const projects = [
  {
    title: "TeachTeam Platform",
    period: "Mar - Jun 2025",
    description: "Full-featured academic recruitment platform with separate portals for Tutors, Lecturers, and Admins. Built with modern full-stack technologies including React, Node.js, and PostgreSQL.",
    features: [
      "Role-based dashboards and authentication",
      "Application workflows and ranking systems",
      "Admin course assignment and management",
      "RESTful and GraphQL API integration"
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "GraphQL"],
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    hasViewDocs: false
  },
  {
    title: "Voltage Training Club",
    period: "Mar - Jun 2025",
    description: "Mobile fitness application connecting trainers with clients. Features workout programs, real-time messaging, payment integration, and comprehensive fitness tracking capabilities.",
    features: [
      "Trainer-client matching algorithm",
      "Dynamic workout program creation",
      "Stripe payment integration",
      "Real-time chat with Stream.io",
      "AWS backend services integration"
    ],
    technologies: ["React Native", "AWS Amplify", "Stripe", "DynamoDB", "Expo", "TypeScript"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    hasViewDocs: false
  },
  {
    title: "Splitwise Clone",
    period: "2024",
    description: "Complete replica of Splitwise expense-sharing application built using Salesforce Lightning Components. Features comprehensive expense management, group creation, and financial tracking capabilities.",
    features: [
      "User authentication with login/signup modals",
      "Group creation with friend management via dueling picklist",
      "Expense tracking with custom lookup components",
      "Interactive dashboard with high charts pie chart visualization",
      "Expense splitting among group members",
      "Contact management and friend addition system"
    ],
    technologies: ["Salesforce Lightning Components", "Apex", "SOQL", "Lightning Design System", "JavaScript"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    hasViewDocs: true
  },
  {
    title: "Shopping Cart App",
    period: "2024",
    description: "E-commerce shopping cart application built with Salesforce Lightning Components. Features product catalog browsing, cart management, and complete checkout functionality with modern user interface.",
    features: [
      "Product catalog with search and filtering capabilities",
      "Add to cart and quantity management functionality",
      "Shopping cart with item modification and removal",
      "Responsive Lightning Design System interface",
      "Real-time cart total calculations",
      "User-friendly checkout process"
    ],
    technologies: ["Salesforce Lightning Components", "Apex", "SOQL", "Lightning Design System", "JavaScript"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    hasViewVideo: true
  }
];

export const education = [
  {
    degree: "Master of Information Technology",
    institution: "RMIT University, Australia",
    period: "July 2023 - June 2025",
    description: "Advanced studies in modern software development, cloud computing, and enterprise systems.",
    icon: GraduationCap
  },
  {
    degree: "Bachelor of Electronics & Telecommunication Engineering",
    institution: "University of Mumbai, India",
    period: "August 2014 - June 2018",
    description: "Foundation in engineering principles, electronics, and communication systems.",
    icon: GraduationCap
  }
];

export const navigationItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" }
];
