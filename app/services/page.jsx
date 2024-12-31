"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Crafting modern, responsive, and scalable websites tailored to meet your business needs. From simple landing pages to complex web applications, I ensure a seamless and intuitive user experience, focusing on speed, performance, and accessibility.",
    href: "",
  },
  {
    num: "02",
    title: "App Development",
    description:
      "Building feature-rich, user-friendly mobile applications for both iOS and Android. Whether it's native or cross-platform, I deliver applications that perform seamlessly and provide a top-notch user experience, keeping your target audience engaged.",
    href: "",
  },
  {
    num: "03",
    title: "Backend Development",
    description:
      "Designing and developing robust, secure, and scalable backends that power your applications and websites. With expertise in databases, APIs, and cloud infrastructure, I ensure your system runs efficiently and can grow with your business.",
    href: "",
  },
  {
    num: "04",
    title: "Full Stack Development",
    description:
      "Deliver complete front-end and back-end solutions, creating seamless, scalable, and secure applications. With a focus on responsive design and robust server-side functionality, I ensure optimal performance across all devices, tailored to meet your business needs.",
    href: "",
  },
  {
    num: "05",
    title: "UI/UX Design",
    description:
      "Creating intuitive, visually appealing designs that not only look great but also offer an excellent user experience. I focus on user-centered design principles to ensure that your customers can navigate and interact with your product effortlessly.",
    href: "",
  },
];
function Services() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px] "
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                    href={`/contact?service=${encodeURIComponent(
                      service.title
                    )}`}
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* heading */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
