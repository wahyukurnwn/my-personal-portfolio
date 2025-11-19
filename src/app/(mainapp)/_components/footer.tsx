"use client";

import { Mail, Send } from "lucide-react";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import Link from "next/link";

export const Footer = () => {
  const contacts = [
    {
      name: "Email",
      icon: <Mail className="w-5 h-5" />,
      link: "mailto:wahyukurniaaawan@gmail.com",
      color: "hover:text-pink-400",
    },
    {
      name: "GitHub",
      icon: <FaGithub className="w-5 h-5" />,
      link: "https://github.com/wahyukurnwn",
      color: "hover:text-gray-300",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="w-5 h-5" />,
      link: "https://linkedin.com/in/wahyukurn/",
      color: "hover:text-blue-400",
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="w-5 h-5" />,
      link: "https://instagram.com/wahyukurnwn_",
      color: "hover:text-pink-500",
    },
  ];

  return (
    <section id="contact" className="bg-black text-white overflow-hidden bg-linear-to-b from-black via-black to-gray-900 py-20 px-5 ">
      {/* Title */}
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.0, delay: 0.5 }} className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-pink-400">Let&apos;s Connect!</h2>
        <p className="text-gray-400 mt-3">Interested in working together or just saying hi?</p>
      </motion.div>

      {/* Contact Buttons */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="flex flex-wrap justify-center gap-6">
        {contacts.map((item) => (
          <Link key={item.name} href={item.link} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition ${item.color}`}>
            {item.icon}
            <span className="font-medium">{item.name}</span>
          </Link>
        ))}
      </motion.div>

      {/* Footer message */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mt-12 text-gray-400 text-sm flex items-center justify-center gap-2"
      >
        <Send className="w-4 h-4 text-pink-500" />
        <span>Open for collaboration & opportunities.</span>
      </motion.div>
    </section>
  );
};
