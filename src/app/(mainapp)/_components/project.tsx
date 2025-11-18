"use client";

import { PinContainer } from "@/components/ui/3d-pin";
import { projects } from "@/data";
import { motion } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa6";

export const MyProject = () => {
  return (
    <section id="projects" className="py-20">
      <motion.h2 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} className="text-center text-3xl md:text-4xl font-bold mb-6">
        My <span className="text-pink-600">Projects</span>
      </motion.h2>

      <div className="flex flex-wrap items-center justify-center p-4 gap-x-16 gap-y-8 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div key={id} className="flex items-center justify-center h-128 w-[80vw] sm:h-164 sm:w-[570px] lg:min-h-130">
            <PinContainer title={title} href={link}>
              <div className="relative flex items-center justify-center overflow-hidden w-[80vw] h-[30vh] sm:h-[40vh] sm:w-96  mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <img src="./bg.png" alt="bg-img" />
                </div>

                <img src={img} alt={title} className="z-10 absolute bottom-0" />
              </div>

              <h1 className="font-bold text-base line-clamp-1 md:text-xl lg:text-2xl">{title}</h1>

              <p className="text-sm text-muted-foreground line-clamp-2 font-light lg:text-xl lg:font-normal">{des}</p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
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
      </div>
    </section>
  );
};
