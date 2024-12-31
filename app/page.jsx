import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import Social from "@/components/ui/Social";
import { FiDownload } from "react-icons/fi";

function page() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Engineer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />
              <span className="text-accent">Zunaira Javaid</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I am a highly skilled and experienced Full Stack Software Engineer
              with 5 years of expertise in developing mobile and web
              applications. My technical proficiency spans across technologies
              like React, React Native, Next.js, Vue.js, Node.js, JavaScript
              (JS), TypeScript (TS), and full-stack frameworks such as MERN,
              PERN and FERN. I specialize in creating efficient, scalable, and
              user-friendly solutions that cater to diverse business needs. With
              a passion for innovation and problem-solving, I thrive in dynamic
              environments where I can deliver high-quality software that drives
              performance and enhances user experience.
            </p>
            {/* button ans social */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8  xl:mb-0">
                <h2 className="h3 mb-4">FIND ME ON</h2>

                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      {/* stats */}
      <Stats />
    </section>
  );
}

export default page;
