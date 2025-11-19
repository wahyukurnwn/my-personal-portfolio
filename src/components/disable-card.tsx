"use client";

export const DisableCard = () => {
  return (
    <div
      className="flex items-center justify-center w-[80vw] h-[20vh] sm:w-[570px] sm:h-[40vh] 
                 relative p-6 rounded-3xl overflow-hidden group"
    >
      {/* --- Hologram Glow Background --- */}
      <div
        className="absolute inset-0 bg-linear-to-br from-[#0ff] via-[#8f00ff] to-[#ff00ff] 
                      opacity-20 blur-xl group-hover:opacity-35 transition-all duration-500"
      />

      {/* --- Cyberpunk Grid Pattern --- */}
      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.06)_1px,transparent_1px)] 
                      bg-size-[20px_20px] opacity-10"
      ></div>

      {/* --- Holographic Border (Animated Neon) --- */}
      <div
        className="absolute inset-0 rounded-3xl border-2 border-transparent 
                   group-hover:border-[#0ff] transition-all duration-500
                   before:content-[''] before:absolute before:inset-0 
                   before:rounded-3xl before:border-2 
                   before:border-[#ff00ff] before:animate-pulse 
                   before:opacity-50"
      />

      {/* --- Floating Glitch Hologram Box --- */}
      <div
        className="relative w-40 h-24 rounded-xl bg-white/10 backdrop-blur-sm 
                   border border-white/20 flex items-center justify-center 
                   animate-[float_3s_ease-in-out_infinite]"
      >
        <span className="text-cyan-300 text-sm font-semibold opacity-80 tracking-widest">UNAVAILABLE</span>

        {/* Glitch lines */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#0ff]/10 to-transparent animate-[scan_2s_linear_infinite]" />
      </div>

      {/* --- Text --- */}
      <div className="absolute bottom-6 text-center">
        <h1 className="font-bold text-lg md:text-xl text-[#0ff] drop-shadow-[0_0_6px_#0ff]">Upcoming Project</h1>
        <p className="text-sm text-[#ff00ff]/80 mt-1 tracking-wide">Another project is coming soon.</p>
      </div>
    </div>
  );
};
