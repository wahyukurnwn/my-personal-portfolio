"use client";

import { CustomCard } from "@/components/ui/custom-card";
import { motion } from "framer-motion";
import { SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiNodedotjs, SiPrisma, SiVercel, SiClerk, SiCloudflare, SiBun, SiDocker, SiGithub } from "react-icons/si";

export const MySkill = () => {
  return (
    <section id="skills" className="py-20 px-5">
      <motion.h2 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} className="text-center text-3xl md:text-5xl font-bold  mb-12 ">
        <span className="text-pink-500 drop-shadow-[0_0_6px_#e100ff]">Skills</span> & <span className="text-[#0ff] drop-shadow-[0_0_6px_#0ff]">Tech Stack</span>
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-10 px-6 mx-auto min-w-[330px] max-w-4xl">
        {/* Frontend */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.3, delay: 0.8 }}>
          <h3 className="text-xl font-semibold mb-4 text-indigo-300">🖥️ Frontend</h3>
          <div className="flex flex-col gap-3">
            <CustomCard name="React" icon={<SiReact className="text-sky-400" />} />
            <CustomCard name="Next.js" icon={<SiNextdotjs className="text-white" />} />
            <CustomCard name="Tailwind CSS" icon={<SiTailwindcss className="text-cyan-400" />} />
            <CustomCard name="TypeScript" icon={<SiTypescript className="text-blue-500" />} />
          </div>
        </motion.div>

        {/* Backend */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.3, delay: 0.8 }}>
          <h3 className="text-xl font-semibold mb-4 text-pink-300">⚙️ Backend</h3>
          <div className="flex flex-col gap-3">
            <CustomCard name="Node.js" icon={<SiNodedotjs className="text-green-500" />} />
            <CustomCard name="Bun.js" icon={<SiBun className="text-white" />} />
            <CustomCard name="Docker" icon={<SiDocker className="text-blue-400" />} />
            <CustomCard name="Prisma" icon={<SiPrisma className="text-teal-400" />} />
          </div>
        </motion.div>

        {/* Tools */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.3, delay: 0.8 }}>
          <h3 className="text-xl font-semibold mb-4 text-teal-300">🧰 Tools & Others</h3>
          <div className="flex flex-col gap-3">
            <CustomCard name="Github" icon={<SiGithub className="text-white" />} />
            <CustomCard name="Vercel" icon={<SiVercel className="text-white" />} />
            <CustomCard name="Clerk" icon={<SiClerk className="text-white-400" />} />
            <CustomCard name="Cloudflare" icon={<SiCloudflare className="text-orange-400" />} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
