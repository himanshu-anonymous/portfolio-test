import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        {/* @ts-ignore */}
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          {/* @ts-ignore */}
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  fastapi: {
    title: "FastAPI",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  neo4j: {
    title: "Neo4j",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />, // Placeholder
  },
  celery: {
    title: "Celery",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  lidar: {
    title: "Lidar",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  llm: {
    title: "LLM",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  quantum: {
    title: "Quantum",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "apex-interceptor",
    category: "6DOF Hit-to-Kill Aerospace System",
    title: "Apex Interceptor",
    src: "/assets/projects-screenshots/project-pics/defence system.jpg",
    screenshots: ["defence system.jpg"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.framerMotion,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.fastapi,
      ],
    },
    live: "https://github.com/himanshu-anonymous",
    github: "https://github.com/himanshu-anonymous",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Physically Accurate 6DOF GNC Simulation
          </TypographyP>
          <TypographyP className="font-mono">
            Most simulations are 'dots chasing dots.' I built a system that obeys the laws of aerospace physics. Architected Apex Interceptor—a high-fidelity GNC system modeled after the PAC-3 MSE and THAAD. Transitioned from a 'trace' to a validated 'kill' at Mach 2.4+. Masterclass in vector calculus and real-time systems.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">GNC Excellence</TypographyH3>
          <p className="font-mono">Tools used: 6DOF EOM, RK4 Integration, Proportional Navigation, EKF, JIT-Backend.</p>
        </div>
      );
    },
  },
  {
    id: "cookmate",
    category: "Intelligent Cooking OS",
    title: "Cookmate",
    src: "/assets/projects-screenshots/project-pics/cookmate.png.jpeg",
    screenshots: ["cookmate.png.jpeg"],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.ts],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.llm],
    },
    live: "https://github.com/himanshu-anonymous",
    github: "https://github.com/himanshu-anonymous",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            YC Hackathon Winner. Intelligent OS designed to transform kitchen experiences using AI Computer Vision and Generative Personas.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "satark",
    category: "Fintech Security Engine",
    title: "Satark",
    src: "/assets/projects-screenshots/project-pics/satark.png.jpg",
    screenshots: ["satark.png.jpg"],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.framerMotion],
      backend: [PROJECT_SKILLS.fastapi, PROJECT_SKILLS.neo4j, PROJECT_SKILLS.celery],
    },
    live: "https://github.com/himanshu-anonymous/WelfareGuard-AI",
    github: "https://github.com/himanshu-anonymous/WelfareGuard-AI",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Collaborative Fintech Security Engine for tracking fraud networks with dynamic graph analytics.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "nexus-lidar",
    category: "Hardware & 3D Integration",
    title: "Nexus Lidar",
    src: "/assets/projects-screenshots/project-pics/nexus.png.jpg",
    screenshots: ["nexus.png.jpg"],
    skills: {
      frontend: [PROJECT_SKILLS.react],
      backend: [PROJECT_SKILLS.lidar, PROJECT_SKILLS.python],
    },
    live: "https://github.com/himanshu-anonymous/NexusLidar",
    github: "https://github.com/himanshu-anonymous/NexusLidar",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Hardware & 3D Sensor Integration constructing actionable 3D point clouds from Lidar data.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "asha-copilot",
    category: "AI Agent Copilot",
    title: "Asha Copilot",
    src: "/assets/projects-screenshots/project-pics/asha.png.jpg",
    screenshots: ["asha.png.jpg"],
    skills: {
      frontend: [PROJECT_SKILLS.react],
      backend: [PROJECT_SKILLS.llm],
    },
    live: "https://github.com/himanshu-anonymous/Asha-Copilot-",
    github: "https://github.com/himanshu-anonymous/Asha-Copilot-",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Cognitive AI copilot leveraging LLMs for integrated intelligence and real-time support.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "quantum-neural",
    category: "Hybrid Architecture",
    title: "Quantum Neural Agent",
    src: "/assets/projects-screenshots/project-pics/sapphire.png",
    screenshots: ["sapphire.png"],
    skills: {
      frontend: [PROJECT_SKILLS.react],
      backend: [PROJECT_SKILLS.quantum, PROJECT_SKILLS.llm],
    },
    live: "https://github.com/himanshu-anonymous/Hybrid-Quantum-Neural-City-Agent",
    github: "https://github.com/himanshu-anonymous/Hybrid-Quantum-Neural-City-Agent",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Hybrid Quantum-Neural Architecture led research bridging the gap between quantum computation and deep neural networks.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
];
export default projects;
