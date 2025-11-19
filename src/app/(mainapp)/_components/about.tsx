"use client";

import { BtnContactCTA } from "@/components/ui/btn-contact-cta";
import { motion } from "framer-motion";
import { SendHorizontalIcon } from "lucide-react";

import Link from "next/link";

export const About = () => {
  return (
    <section id="about" className="flex flex-col items-center justify-center overflow-hidden py-28 px-10  dark:bg-black">
      {/* ===== Content ===== */}
      <div className="flex flex-col items-center justify-center sm:flex-row gap-12 ">
        {/* ==== Image / Portrait ==== */}
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ once: true }} className="flex justify-center md:justify-end">
          <div className="relative w-60 h-80 md:w-[300px] md:h-[420px] rounded-2xl overflow-hidden border border-gray-800/60 shadow-[0_0_30px_rgba(255,255,255,0.05)] bg-linear-to-br from-indigo-950/40 via-purple-900/20 to-teal-900/30">
            <img src="/profile.jpg" alt="Wahyu Kurniawan" className="object-cover opacity-90" />
          </div>
        </motion.div>

        {/* ==== Text Section ==== */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col justify-center text-left max-w-lg sm:max-w-xl"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            About <span className=" text-pink-500">Me</span>
          </h2>

          <p className="text-gray-400 leading-relaxed text-base md:text-lg mb-4">
            Hi, I&apos;m <span className="text-gray-100 font-semibold">Wahyu</span> — a self-taught web developer who transitioned from curiosity to code. My journey into tech began with a fascination for how the web works and how ideas can
            become interactive experiences. Over time, I started learning modern tools like <span className="text-gray-100 font-medium">Next.js</span>, <span className="text-blue-400 font-medium">TailwindCSS</span>, and
            <span className="text-teal-400 font-medium"> Prisma</span>, building small projects to strengthen both my frontend and backend skills.
          </p>

          <p className="text-gray-400 leading-relaxed text-base md:text-lg mb-4">
            I&apos;m passionate about creating clean, user-friendly web applications, and I enjoy continuously learning new technologies that improve performance and user experience. My goal is to grow as a
            <span className="text-gray-100 font-medium"> Full Stack Developer</span> who builds impactful products that make a difference.
          </p>

          <Link href="#contact">
            <BtnContactCTA title="Contact Me" position="right" icon={<SendHorizontalIcon />} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
