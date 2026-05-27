const config = {
  title: "Himanshu Patil | Software Engineer",
  description: {
    long: "Himanshu Patil is a Software Engineer specialized in architecting scalable systems, backend architecture, and high-performance engineering. Discover my latest work including Apex Interceptor, Cookmate, and Satark.",
    short:
      "Architecting Scalable Systems — Backend & Design.",
  },
  keywords: [
    "Himanshu Patil",
    "portfolio",
    "software engineer",
    "backend architecture",
    "scalable systems",
    "Apex Interceptor",
    "Cookmate",
    "Satark",
    "Nexus Lidar",
    "Asha Copilot",
    "Quantum Neural Agent",
    "React",
    "Next.js",
    "Framer Motion",
  ],
  author: "Himanshu Patil",
  email: "hello@example.com", // Placeholder, since not provided
  site: "https://himanshu-patil.github.io",

  // for github stars button
  githubUsername: "himanshu-anonymous",
  githubRepo: "portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/",
    linkedin: "https://www.linkedin.com/in/",
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
    github: "https://github.com/himanshu-anonymous",
  },
};
export { config };
