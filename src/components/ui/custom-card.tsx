import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  name: string;
  icon: ReactNode;
}

export function CustomCard({ name, icon }: Props) {
  return (
    <motion.div whileHover={{ scale: 1.08, y: -3 }} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-md hover:bg-white/10 transition-all">
      <div className="text-2xl">{icon}</div>
      <span className="text-gray-300">{name}</span>
    </motion.div>
  );
}
