const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-background">
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        
        <h1 className="mb-6 font-display text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-cyan-400 sm:text-8xl drop-shadow-[0_0_30px_rgba(124,58,237,0.5)]">
          Join the Galaxy.
        </h1>
        
        <p className="max-w-2xl text-lg font-sans text-slate-300 sm:text-xl leading-relaxed">
          Be part of the cosmos.
        </p>
      </div>
    </div>
  );
};

export default Hero;
