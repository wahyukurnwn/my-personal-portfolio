"use client";

import { DisableCard } from "@/components/disable-card";
import { PinContainer } from "@/components/ui/3d-pin";
import { projects } from "@/data";
import { motion } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa6";

export const MyProject = () => {
  const MIN_CARD_COUNT = 4;
  const mockCount = Math.max(0, MIN_CARD_COUNT - projects.length);

  return (
    <section id="projects" className="py-20">
      <motion.h2 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} className="text-center text-3xl md:text-5xl font-bold mb-12">
        My <span className="text-pink-500">Projects</span>
      </motion.h2>

      <div className="flex flex-wrap items-center justify-center p-4 gap-x-16 gap-y-8 mt-10">
        {projects.map((project) => (
          <div key={project.id} className="flex items-center justify-center  w-[80vw] h-128 sm:w-[570px] sm:h-164 lg:min-h-130">
            <PinContainer title={project.link} href={project.link}>
              <div className="relative flex items-center justify-center w-[80vw] h-[20vh] sm:w-[570px] sm:h-[40vh] mb-10 overflow-hidden">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <img src="/bg.png" alt="bg-img" />
                </div>
                <img src={project.img} alt={project.title} className="absolute bottom-0 z-10" />
              </div>
              <h1 className="font-bold text-base line-clamp-1 md:text-xl lg:text-2xl">{project.title}</h1>
              <p className="text-sm text-muted-foreground line-clamp-2 font-light lg:text-xl lg:font-normal">{project.des}</p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {project.iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="flex items-center justify-center rounded-full bg-black w-8 h-8 lg:w-10 lg:h-10 border border-white/[20"
                      style={{
                        transform: `translateX(-${5 * index * 2})px`,
                      }}
                    >
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center">
                  <p className="flex text-purple-300 text-sm md:text-xs lg:text-xl">Check Live Site</p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}

        {[...Array(mockCount)].map((_, index) => (
          <DisableCard key={`mock-${index}`} />
        ))}
      </div>
    </section>
  );
};
