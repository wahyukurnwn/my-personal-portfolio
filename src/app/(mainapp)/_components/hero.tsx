"use client";

import { Spotlight } from "@/components/ui/spotlight-new";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { motion } from "framer-motion";
import { BtnExploreCTA } from "@/components/ui/btn-explore-cta";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

export const Hero = () => {
  return (
    <section className="py-30">
      {/* Spotlight */}
      <div>
        <Spotlight
          gradientFirst="radial-gradient(60% 60% at 50% 30%, hsla(260, 90%, 70%, 0.30), hsla(280, 100%, 60%, 0.15), transparent 80%)"
          gradientSecond="radial-gradient(50% 50% at 60% 50%, hsla(210, 100%, 60%, 0.25), hsla(230, 100%, 55%, 0.10), transparent 100%)"
          gradientThird="radial-gradient(50% 50% at 40% 60%, hsla(290, 100%, 75%, 0.20), hsla(260, 80%, 60%, 0.08), transparent 100%)"
          translateY={-400}
          width={140}
          height={1200}
          smallWidth={60}
          duration={7}
          xOffset={120}
        />
      </div>

      {/* Grid and dot Background */}
      <div className="absolute top-0 left-0 flex items-center justify-center h-screen w-full dark:bg-black">
        <div
          className={cn(
            "absolute inset-0 z-10 opacity-20",
            "bg-size-[40px_40px]",
            "bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:bg-[linear-gradient(to_right,#1b1b2e_1px,transparent_1px),linear-gradient(to_bottom,#1b1b2e_1px,transparent_1px)]"
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center mask-[radial-gradient(ellipse_at_center,tran sparent_20%,black)] dark:bg-black" />
      </div>

      <div className="relative flex justify-center z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl md:text-5xl  lg:text-6xl font-extrabold tracking-tight leading-tight 
                     bg-linear-to-r from-pink-500 via-purple-500  to-blue-400 bg-clip-text 
                    drop-shadow-[0_0_6px_#042424] text-transparent"
          >
            Hello, I&apos;m Wahyu Kurniawan!
          </motion.h1>

          <TextGenerateEffect words="Driven by curiosity, crafting meaningful web experiences with modern technologies." />

          <motion.p initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.5 }} className="mt-6 text-sm sm:text-base md:text-lg text-gray-400 max-w-xl leading-relaxed">
            What started as curiosity became a passion for creating. I&apos;m a self-taught web developer from <span className="text-pink-300 drop-shadow-[0_0_6px_#e100ff] font-medium">Jakarta</span>, continuously learning to craft
            experiences that connect people and ideas.
          </motion.p>

          <Link href="#projects">
            <BtnExploreCTA title="Show my work" position="right" icon={<FaLocationArrow />} />
          </Link>
        </div>
      </div>
    </section>
  );
};
