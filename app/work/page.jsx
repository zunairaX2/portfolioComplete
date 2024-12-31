"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { FaApple, FaGooglePlay } from "react-icons/fa";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const projects = [
  {
    num: "01",
    category: "Website",
    title: "The Acoustic Lab",
    description:
      "The Acoustic Lab is a modern web app built with Next.js and powered by Strapi.io, designed to streamline the process of home and office decoration. The platform offers a curated selection of acoustic decor solutions that not only enhance the aesthetics of living and workspaces but also improve sound quality. With an intuitive interface and powerful content management capabilities, it provides users with the tools to explore, select, and integrate acoustic decor solutions effortlessly.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind.css" },
      { name: "strapi.io" },
    ],
    image: "/assets/work/tal.png",
    live: "https://tal.magnified.com.sg/",
    github: "https://github.com/Zunairajavaid",
  },
  {
    num: "02",
    category: "Website",
    title: "Gravity Balls",
    description:
      "Gravity Balls is a quirky web experiment that simulates the behavior of balls under the influence of gravity. The simulation demonstrates how gravity affects the motion of the balls, creating an engaging and interactive experience for users to explore the physics of gravitational forces in a fun and visual way.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind.css" },
      { name: "strapi.io" },
    ],
    image: "/assets/work/gravity-balls.png",
    live: "https://gravity-balls.vercel.app/",
    github: "https://github.com/Zunairajavaid",
  },
  {
    num: "03",
    category: "Website",
    title: "Privacy Beauty Lab",

    description:
      "The Privacy Beauty Lab is a Vue 3 based salon management platform designed to streamline the interaction between salons and their customers. The project enables salon managers to create sessions by capturing customer details and selecting services. Each service comes with an integrated consultation and consent form, which the customer fills out before receiving the service. The platform also features a dynamic Form Builder, allowing the manager to create or modify consultation and consent forms for specific services, providing flexibility and customization in service delivery.",
    stack: [
      { name: "Vue.js" },
      { name: "Tailwind.css" },
      { name: "Javascript" },
    ],
    image: "/assets/work/pbl.png",
    live: "https://privacybeautylab.magnified.com.sg/",
    github: "https://github.com/Zunairajavaid",
  },

  {
    num: "04",
    category: "Website",
    title: "POS Admin",
    description:
      "POS Admin is an admin dashboard designed for managing a Point of Sale (POS) system. It allows administrators to oversee and manage orders, track and control inventory, generate reports, and handle various administrative tasks associated with the POS mobile app. This comprehensive solution simplifies the operational management of the POS system, offering efficient tools for business management.",
    stack: [
      { name: "Vue.js" },
      { name: "Tailwind.css" },
      { name: "Javascript" },
    ],
    image: "/assets/work/pos.png",
    live: "https://posadmin.magnified.com.sg/",
    github: "https://github.com/Zunairajavaid",
  },
  {
    num: "05",
    category: "Website",
    title: "Maniax Lab",
    description:
      "Maniax Lab is a content marketing strategy platform focused on helping lawyers optimize and update their most important and high-performing content. It ensures that legal professionals stay ahead by providing relevant, timely updates tailored to specific circumstances. The platform is designed to address key claims and legal obligations while promoting efficiency in content management for legal practices.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind.css" },
      { name: "Javascript" },
    ],
    image: "/assets/work/maniax-lab.png",
    live: "https://maniax-lab.vercel.app/",
    github: "https://github.com/Zunairajavaid",
  },
  {
    num: "06",
    category: "Website",
    title: "GPT 3",
    description:
      "GPT-3 (Generative Pre-trained Transformer 3) is a large language model developed by OpenAI, based on the third iteration of the GPT architecture. Like ChatGPT, it can generate human-like text responses and perform a wide range of natural language processing tasks such as answering questions, summarizing information, and creating content. It is known for its ability to understand context and generate coherent responses based on the input it receives, making it useful for applications such as chatbots, virtual assistants, content generation, and more.",
    stack: [
      { name: "React.js" },
      { name: "Tailwind.css" },
      { name: "Javascript" },
    ],
    image: "/assets/work/gpt-3.png",
    live: "https://ai-landing-page-seven.vercel.app/",
    github: "https://github.com/Zunairajavaid",
  },
  {
    num: "07",
    category: "Website",
    title: "GERICHT Resturant",
    description:
      "GERICHT Restaurant is a restaurant website that offers a seamless user experience for viewing the menu and making table reservations. The platform is designed to showcase the restaurant's offerings while allowing customers to easily book tables online, enhancing the dining experience through efficient online management.",
    stack: [
      { name: "React.js" },
      { name: "Tailwind.css" },
      { name: "Javascript" },
    ],
    image: "/assets/work/gericht.png",
    live: "https://react-restaurant-dashboard.vercel.app/",
    github: "https://github.com/Zunairajavaid",
  },
  {
    num: "08",
    category: "Website",
    title: "Alina Lee",
    description:
      "Alina Lee is a photographer's website designed to showcase the portfolio and work of the photographer. The platform highlights the artistic vision and captures of Alina Lee, providing a visually appealing and user-friendly interface for clients and visitors to explore her photography projects.",
    stack: [
      { name: "React.js" },
      { name: "Tailwind.css" },
      { name: "Javascript" },
    ],
    image: "/assets/work/thumb3.png",
    live: "https://tal.magnified.com.sg/",
    github: "https://github.com/Zunairajavaid",
  },
  {
    num: "09",
    category: "Website",
    title: "Interno",
    description:
      "Interno is a furniture and home decor website designed to showcase a wide range of stylish furniture and interior decoration products. The platform allows users to explore and shop for items that enhance the aesthetic of their living spaces, providing an elegant and user-friendly online shopping experience for home decor enthusiasts.",
    stack: [
      { name: "React.js" },
      { name: "Tailwind.css" },
      { name: "Javascript" },
    ],
    image: "/assets/work/thumb2.png",
    live: "https://tal.magnified.com.sg/",
    github: "https://github.com/Zunairajavaid",
  },
  {
    num: "10",
    category: "Website",
    title: "Furnishop",
    description:
      "Furnishop is a furniture and home decor website designed to showcase a curated selection of stylish and functional home furnishings. The platform offers users a visually appealing way to browse and explore a wide range of decor options, helping them create beautiful and well-designed spaces for their homes.",
    stack: [
      { name: "React.js" },
      { name: "Tailwind.css" },
      { name: "Javascript" },
    ],
    image: "/assets/work/thumb1.png",
    live: "https://tal.magnified.com.sg/",
    github: "https://github.com/Zunairajavaid",
  },

  {
    num: "11",
    category: "Mobile App",
    title: "Taleharbor",
    description:
      "Taleharbor is a digital storytelling platform designed to preserve and share the personal stories and memories that shape our lives. With an intuitive interface, users can easily capture and archive their cherished moments, ensuring they endure for future generations. Whether it's a personal milestone, a family tale, or a meaningful life experience, Taleharbor provides a space to safeguard these memories and share them with loved ones. Together, let's create a lasting legacy, one story at a time.",
    stack: [
      { name: "React Native" },
      { name: "Javascript" },
      { name: "Typescript" },
    ],
    image: "/assets/work/tale-app.png",
    live: "https://play.google.com/store/apps/details?id=com.taleharbor",
    android: "https://play.google.com/store/apps/details?id=com.taleharbor",
    apple: "https://apps.apple.com/in/app/taleharbor/id6478490521",
    github: "https://github.com/Zunairajavaid",
  },
  {
    num: "12",
    category: "Mobile App",
    title: "Ambiel IT",
    description:
      "Ambiel IT is a project management application developed for Ambiel IT, an IT company that sells and manages a range of IT products. This app is designed for internal use by their employees, providing functionalities similar to JIRA. It allows the team to efficiently manage IT products, track tasks, and streamline workflow processes, enhancing productivity and organization within the company.",
    stack: [
      { name: "React Native" },
      { name: "Javascript" },
      { name: "Typescript" },
    ],
    image: "/assets/work/ambiel-app.png",
    live: "https://play.google.com/store/apps/details?id=com.ambiel.app",
    android: "https://play.google.com/store/apps/details?id=com.ambiel.app",
    apple: "https://apps.apple.com/kw/app/ambiel-it/id6448795880",
    github: "https://github.com/Zunairajavaid",
  },
  {
    num: "13",
    category: "Mobile App",
    title: "UNIE App",
    description:
      "Unie is your daily companion for fostering self-kindness and navigating life's challenges. Whether you're grappling with self-doubt, anxiety, or other personal struggles, Unie provides supportive audio sessions designed to guide you toward a more compassionate self. While your journey is unique to you, Unie ensures you’re never alone in facing life's difficulties, offering a comforting presence and guidance every step of the way.",
    stack: [
      { name: "React Native" },
      { name: "Typescript" },
      { name: "Sanity.io" },
    ],
    image: "/assets/work/unie-app.png",
    live: "https://play.google.com/store/apps/details?id=app.unie.app",
    android: "https://play.google.com/store/apps/details?id=app.unie.app",
    apple: "https://apps.apple.com/pk/app/unie-self-kindness/id6475303518",
    github: "https://github.com/Zunairajavaid",
  },
  {
    num: "14",
    category: "Mobile App",
    title: "Bit EU App",
    description:
      "BIT.EU is a comprehensive crypto products trading platform, offering a range of services for trading cryptocurrency derivatives. Managed by Yellow Sand Oasis Ltd, a company incorporated in Saint Lucia, BIT.EU and its associated mobile apps provide users with tools to engage in the dynamic world of cryptocurrency trading. Due to the inherent risks associated with trading in cryptocurrency derivatives, users are advised to carefully consider their suitability for using BIT.EU.",
    stack: [{ name: "React Native" }, { name: "Typescript" }],
    image: "/assets/work/bit-eu-app.png",
    live: "https://play.google.com/store/apps/details?id=com.combiteu&hl=en",
    android: "https://play.google.com/store/apps/details?id=com.combiteu&hl=en",
    apple: "https://play.google.com/store/apps/details?id=com.combiteu&hl=en",
    github: "https://github.com/Zunairajavaid",
  },
  {
    num: "15",
    category: "Mobile App",
    title: "When I Die App",
    description:
      "Planning for the uncomfortable topic of death is typically not high on the list, but we understand removing the chaos from the surviving person’s life after your passing is the most impactful step you can take. The peace of mind that you will have once this critical and responsible step is complete is priceless. We have made the process extremely simple, with help modals on every screen. There is a checklist that will provide visual clues as to what is complete, what still needs attention and what does not apply to you",
    stack: [{ name: "React Native" }, { name: "Typescript" }],
    image: "/assets/work/die-app.png",
    live: "https://play.google.com/store/apps/details?id=com.Death_AP",
    android: "https://play.google.com/store/apps/details?id=com.Death_AP",
    apple: "https://apps.apple.com/ar/app/when-i-die/id6474850922?l=en-GB",
    github: "https://github.com/Zunairajavaid",
  },
  {
    num: "16",
    category: "Mobile App",
    title: "Inventory & Collectibles",
    description:
      "Two awesome apps in one! Free and paid versions with advanced functionality including Sharing, Loan and Borrow and Rewards for Invitations. Have fun being organized and financially responsible. Loan or Borrow feature makes for friendly sharing of items. Forgot where you put something? Not any more! With this app, everything you own can be conveniently itemized in a beautifully designed interface. 35 (and growing) collectible categories, pre-populated with custom fields make it easy to enter your collections and quickly see total values.",
    stack: [{ name: "React Native" }, { name: "Typescript" }],
    image: "/assets/work/inventory-collectibles.png",
    live: "https://play.google.com/store/apps/details?id=com.assetplanetapp&pli=1",
    android:
      "https://play.google.com/store/apps/details?id=com.assetplanetapp&pli=1",
    apple:
      "https://apps.apple.com/pk/app/inventory-and-collectibles/id6444125040",
    github: "https://github.com/Zunairajavaid",
  },
  {
    num: "17",
    category: "Mobile App",
    title: "Medilis AI App",
    description:
      "Medilis AI is a mobile healthcare app designed for pets, providing AI-assisted support for pet owners. Built using React Native for both iOS and Android platforms, the app allows users (patients) to consult with veterinarians (doctors) by describing their pet's health issues. Through AI-driven chat, users receive medical advice, diagnosis, and treatment options tailored to their pets' needs. The app aims to make pet healthcare more accessible and convenient by offering real-time solutions for common pet health concerns.",
    stack: [{ name: "React Native" }, { name: "Typescript" }],
    image: "/assets/work/medilis-app.png",
    live: "",
    android: "",
    apple: "",
    github: "https://github.com/Zunairajavaid",
  },
  {
    num: "18",
    category: "Mobile App",
    title: "Quick Ex App",
    description:
      "QuickEx is an on-demand delivery service that simplifies parcel shipments. Users can quickly book a delivery by providing the pickup address, drop-off location, and relevant parcel details. Once booked, a rider is dispatched to collect the parcel and deliver it to its destination. QuickEx offers a seamless solution for hassle-free, fast, and reliable parcel delivery.",
    stack: [{ name: "React Native" }, { name: "Typescript" }],
    image: "/assets/work/quick-ex.png",
    live: "",
    android: "",
    apple: "",
    github: "https://github.com/Zunairajavaid",
  },
  {
    num: "19",
    category: "Mobile App",
    title: "Before After App",
    description:
      " Before After is a photo editing app that allows users to enhance their photos with ease. Users can frame their pictures, crop them to the desired size, and apply various editing tools to improve the visual appeal. Whether it's adjusting the composition or making creative edits, Before After offers a streamlined experience for personalizing photos.",
    stack: [{ name: "React Native" }, { name: "Typescript" }],
    image: "/assets/work/before-after.png",
    live: "",
    android: "",
    apple: "",
    github: "https://github.com/Zunairajavaid",
  },
  {
    num: "20",
    category: "Mobile App",
    title: "Plano Cut App",
    description:
      "Plano Cut is a salon appointment booking app that connects customers with nearby hairdressers. Customers can easily find and book appointments with salons in their area, while barbers and stylists can manage and track their appointments efficiently. The app streamlines the booking process, ensuring convenient scheduling and smooth communication between customers and hairdressers.",
    stack: [{ name: "React Native" }, { name: "Typescript" }],
    image: "/assets/work/plano-cut.png",
    live: "",
    android: "",
    apple: "",
    github: "https://github.com/Zunairajavaid",
  },
  {
    num: "21",
    category: "Mobile App",
    title: "Prayer Times App",
    description:
      "Prayer Times is an Islamic app designed to support users in their spiritual practices. It features a Qibla finder for accurate direction during prayers, full Quran recitation in audio format, and engaging videos of Islamic stories. The app also provides accurate prayer (namaz) timings based on the user's location, making it a comprehensive tool for Muslims to stay connected with their faith.",
    stack: [{ name: "React Native" }, { name: "Typescript" }],
    image: "/assets/work/prayer-times.png",
    live: "",
    android: "",
    apple: "",
    github: "https://github.com/Zunairajavaid",
  },
];

function Work() {
  const [selectedTab, setSelectedTab] = useState("Website");
  const filteredProjects = projects.filter(
    (project) => project.category === selectedTab
  );

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        {/* Tabs for Websites and Mobile Apps */}
        <Tabs
          defaultValue={selectedTab}
          onValueChange={(value) => setSelectedTab(value)}
        >
          <TabsList className="flex flex-row w-full  mx-auto xl:ml-0 gap-6 mb-8">
            <TabsTrigger value="Website">Websites</TabsTrigger>
            <TabsTrigger value="Mobile App">Mobile Apps</TabsTrigger>
          </TabsList>

          <TabsContent value={selectedTab}>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-gray-900 p-6 rounded-lg flex flex-col justify-between"
                >
                  {/* Project Image */}
                  <div className="relative h-48 mb-4">
                    <Image
                      src={project.image}
                      fill
                      className="object-cover rounded-lg"
                      alt={project.title}
                    />
                  </div>
                  {/* Project Info */}
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <ul className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map((item, index) => (
                      <li key={index} className="text-sm text-accent">
                        {item.name}
                        {index !== project.stack.length - 1 && ","}
                      </li>
                    ))}
                  </ul>
                  {/* Buttons */}
                  <div className="flex gap-4">
                    {project.category === "Mobile App" ? (
                      <>
                        {/* Apple Store */}
                        <Link
                          href={project.apple}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group">
                                <FaApple className="text-white text-xl group-hover:text-accent" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Apple Store</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </Link>
                        {/* Play Store */}
                        <Link
                          href={project.android}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group">
                                <FaGooglePlay className="text-white text-xl group-hover:text-accent" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Play Store</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </Link>
                        {/* Git  */}
                        <Link
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group">
                                <BsGithub className="text-white text-xl group-hover:text-accent" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>GitHub Repository</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </Link>
                      </>
                    ) : (
                      <>
                        <Link
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group">
                                <BsArrowUpRight className="text-white text-xl group-hover:text-accent" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Live Project</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </Link>
                        <Link
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group">
                                <BsGithub className="text-white text-xl group-hover:text-accent" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>GitHub Repository</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </motion.section>
  );
}

export default Work;
