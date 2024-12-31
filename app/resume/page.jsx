"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaVuejs,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiFirebase,
  SiExpress,
  SiRedux,
  SiXcode,
  SiAndroidstudio,
} from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "About me",
  description:
    "I am a highly skilled and experienced Full Stack Software Engineer with 5 years of expertise in developing mobile and web applications. My technical proficiency spans across technologies like React, React Native, Next.js, Vue.js, Node.js, JavaScript (JS), TypeScript (TS), and full-stack frameworks such as MERN, PERN and FERN. I specialize in creating efficient, scalable, and user-friendly solutions that cater to diverse business needs. With a passion for innovation and problem-solving, I thrive in dynamic environments where I can deliver high-quality software that drives performance and enhances user experience.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Zunaira Javaid",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+92) 306 755 9765",
    },
    {
      fieldName: "Experience",
      fieldValue: "5+ Years",
    },
    {
      fieldName: "Skype",
      fieldValue: "Zunairajavaid",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Pakistan",
    },
    {
      fieldName: "Email",
      fieldValue: "zunairajavaid200@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English , Urdu",
    },
  ],
};
// experience
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "With 5 years of hands-on experience in software engineering, I have worked across diverse technologies and projects, specializing in Full Stack, Mobile App, and Web App development. From designing interactive user interfaces to building complex backend systems, I’ve delivered end-to-end solutions using modern frameworks such as React, Node.js, and Tailwind CSS. My journey has been defined by continuous learning, staying ahead of industry trends, and a passion for crafting efficient, scalable, and impactful digital solutions.",
  items: [
    {
      company: "Prospiral",
      position: "Software Engineer",
      duration: "2024 - Present",
    },
    {
      company: "Techbucks Technologies",
      position: "Software Engineer || Mobile App Developer",
      duration: "2023 - 2024",
    },
    {
      company: "Codeninja Inc.",
      position: "MERN Stack Developer",
      duration: "2022 - 2023",
    },
    {
      company: "RYK Soft Inc.",
      position: "Front End Developer",
      duration: "2019 - 2021",
    },
  ],
};
// education
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "I hold a strong academic foundation in software development and computer science, which has equipped me with the technical expertise to tackle complex challenges in the tech industry. My education has been integral to understanding core principles such as algorithms, data structures, and system design, allowing me to build scalable and efficient solutions. I continuously strive to expand my knowledge through certifications and self-learning, staying updated with the latest advancements in web, mobile, and software development",
  items: [
    {
      institute: "Techlift",
      degree: "Full Stack Development",
      duration: "2023",
    },
    {
      institute: "Techbucks",
      degree: "Mobile App Development",
      duration: "2023",
    },
    {
      institute: "PASHA (Pakistan All Software House Association)",
      degree: "Certified MERN Stack Developer",
      duration: "2023",
    },
    {
      institute: "K.F.U.E.I.T , Rahimyar Khan",
      degree: "BS Software Engineering",
      duration: "2018-2022",
    },
    {
      institute: "Online Course Platform",
      degree: "Full Stack Web Development Bootcamp",
      duration: "2022",
    },
    {
      institute: "Codeacademy",
      degree: "Front-end Track",
      duration: "2022",
    },
    {
      institute: "Online Course",
      degree: "Programming Course",
      duration: "2020 - 2021",
    },
    {
      institute: "Tech Institute",
      degree: "Certified Web Developer",
      duration: "2019",
    },
  ],
};
// skills
const skills = {
  title: "My Skills",
  description:
    "Over the years, I have honed a diverse set of technical skills across various domains in software development. My expertise spans front-end technologies like React, Vue, and Tailwind CSS, and backend frameworks such as Node.js and Express. I am proficient in building full-stack applications, ensuring seamless integration between front-end and back-end. Additionally, I have experience in mobile app development using React Native, along with a deep understanding of databases, cloud services, and API development. Constantly learning and adapting, I aim to deliver optimized, scalable, and user-friendly solutions",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <SiTypescript />,
      name: "typescript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiRedux />,
      name: "redux",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <FaVuejs />,
      name: "vue.js",
    },
    {
      icon: <FaVuejs />,
      name: "vue3.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <SiFirebase />,
      name: "firebase",
    },
    {
      icon: <SiExpress />,
      name: "express.js",
    },
    {
      icon: <FaGithub />,
      name: "Github",
    },
    {
      icon: <SiXcode />,
      name: "Xcode",
    },
    {
      icon: <SiAndroidstudio />,
      name: "Android Studio",
    },
  ],
};
function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 "
    >
      <div className="container mx-auto">
        <Tabs
          className="xl:flex xl:flex-row xl:gap-6"
          defaultValue="experience"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:ml-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex  flex-col gap-[30px] text-center xl:mt-0 xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 "
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex  flex-col gap-[30px] text-center xl:mt-0 xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 "
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3 ">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institute}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] ">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2  gap-y-6 max-w-[620px] mx-auto xl:mx-0 ">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}

export default Resume;
