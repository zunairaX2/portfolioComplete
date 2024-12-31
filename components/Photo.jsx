"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/* Image container with responsive sizes */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[240px] h-[240px]
           sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] lg:w-[440px] lg:h-[440px] xl:mt-8 xl:ml-8
            xl:w-[440px] xl:h-[440px] mix-blend-lighten absolute overflow-hidden rounded-full"
        >
          <Image
            src="/assets/photo-3.png"
            quality={100}
            fill
            alt=""
            className="object-cover"
          />
        </motion.div>

        {/* Circle SVG */}
        <motion.svg
          className="w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] lg:w-[440px] lg:h-[440px] xl:w-[506px] xl:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/200/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#bca2ca"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["150 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
