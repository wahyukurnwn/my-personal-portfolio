"use client";

import { ReactNode } from "react";

interface Props {
  title: string;
  position: string;
  icon: ReactNode;
  onHandleClick?: () => void;
  otherClassName?: string;
}

export const BtnContactCTA = ({ title, position, icon, onHandleClick, otherClassName }: Props) => {
  return (
    <button className={`bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-sm font-semibold leading-6 text-white  ${otherClassName}`}>
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-0 rounded-full bg-[radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </span>
      <div className="relative flex items-center gap-2 z-10 rounded-full bg-zinc-950 space-x-2 py-3 px-5 ring-1 ring-white/10 ">
        <span className="flex items-center gap-2">
          {position === "left" && icon}
          {title}
          {position === "right" && icon}
        </span>
      </div>
      <span className="absolute bottom-0 left-4.5 h-px w-[calc(100%-2.25rem)] bg-linear-to-r from-emerald-400/0 via-yellow-600/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
    </button>
  );
};
