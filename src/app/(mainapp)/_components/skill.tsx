"use client";

import { CustomCard } from "@/components/ui/custom-card";
import { motion } from "framer-motion";
import { SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiNodedotjs, SiPrisma, SiGit, SiVercel, SiPostman } from "react-icons/si";

export const MySkill = () => {
  return (
    <section id="skills" className="py-20 px-5">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center text-4xl md:text-5xl font-bold bg-linear-to-r from-pink-600 via-purple-700 to-blue-200 bg-clip-text text-transparent mb-12"
      >
        Skills & Tech Stack
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-10 px-6 mx-auto min-w-[380px  ] max-w-4xl">
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
            <CustomCard name="Prisma ORM" icon={<SiPrisma className="text-teal-400" />} />
            <CustomCard name="REST API" icon={<SiPostman className="text-orange-400" />} />
          </div>
        </motion.div>

        {/* Tools */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.3, delay: 0.8 }}>
          <h3 className="text-xl font-semibold mb-4 text-teal-300">🧰 Tools & Others</h3>
          <div className="flex flex-col gap-3">
            <CustomCard name="Git" icon={<SiGit className="text-orange-500" />} />
            <CustomCard name="Vercel" icon={<SiVercel className="text-white" />} />
            <CustomCard name="Postman" icon={<SiPostman className="text-orange-400" />} />
            <CustomCard name="VS Code" icon={<SiVercel className="text-blue-400" />} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
