import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4 md:px-8 overflow-hidden bg-[#F4F4F4]">
      
      {/* Structural Grid Lines (Background) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Horizontal Line */}
        <div className="absolute top-[35%] left-0 w-full h-[1px] bg-blood-coral/20"></div>
        <div className="absolute top-[75%] left-0 w-full h-[1px] bg-gray-200"></div>
        {/* Vertical Line */}
        <div className="absolute top-0 right-[25%] lg:right-[30%] w-[1px] h-full bg-blood-coral/20"></div>
      </div>

      {/* Panoramic Center Container (Wide, blending with grid) */}
      <div className="relative w-full max-w-[1400px] z-10 flex items-center justify-center mt-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full bg-[#F9F9F9]/80 backdrop-blur-3xl border border-gray-200/80 p-8 md:p-12 lg:p-16 flex flex-col justify-between overflow-hidden shadow-2xl shadow-gray-200/50"
          style={{ minHeight: '70vh' }}
        >
          {/* Inner Structural Lines (Matching the reference) */}
          <div className="absolute top-[35%] left-0 w-full h-[1px] bg-blood-coral/30"></div>
          <div className="absolute top-0 right-[25%] lg:right-[30%] w-[1px] h-full bg-blood-coral/30"></div>

          {/* TOP SECTION: Branding & Main Typography */}
          <div className="flex-1 flex flex-col relative z-10">
            {/* Branding */}
            <div className="flex items-center gap-3 mb-10">
              <div className="w-8 h-8 bg-deep-black text-white flex items-center justify-center font-bold text-xs tracking-tighter">
                We
              </div>
              <span className="text-sm font-bold text-deep-black uppercase tracking-widest">
                Creative Studio
              </span>
            </div>

            {/* Restored Original Korean Typography */}
            <div className="max-w-4xl relative z-10 mt-4">
              <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-black text-deep-black leading-[1.05] tracking-tight">
                당신의 아이디어를
                <br />
                <span className="text-blood-coral">
                  가장 감각적으로
                </span>
                <br />
                현실화합니다<span className="text-blood-coral animate-pulse">_</span>
              </h1>
            </div>

            {/* CENTRAL ABSTRACT GRAPHIC */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-[55%] -translate-y-1/2 w-[300px] h-[300px] md:w-[450px] md:h-[450px] opacity-20 pointer-events-none select-none text-[8px] md:text-[10px] font-mono leading-none flex flex-wrap content-center justify-center"
              style={{ letterSpacing: '0.2em' }}
            >
              <div className="text-center whitespace-pre text-deep-black font-bold">
{`          :::::::           
      :::::::::::::::       
    :::::::::::::::::::     
   :::::::::::::::::::::    
  :::::::::::::::::::::::   
 :::::::::::   :::::::::::  
 :::::::::       :::::::::  
:::::::::         ::::::::: 
::::::::           :::::::: 
::::::::           :::::::: 
:::::::::         ::::::::: 
 :::::::::       :::::::::  
 :::::::::::   :::::::::::  
  :::::::::::::::::::::::   
   :::::::::::::::::::::    
    :::::::::::::::::::     
      :::::::::::::::       
          :::::::           `}
              </div>
            </motion.div>
          </div>

          {/* BOTTOM SECTION: Restored Description & 2 Buttons */}
          <div className="mt-auto pt-16 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 relative z-10 w-full">
            
            {/* Restored Description */}
            <div className="max-w-xl">
              <p className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed tracking-tight">
                공장형 제작에서 벗어나 한 프로젝트에 모든 역량을 집중합니다.
                <br className="hidden lg:block"/>신설 스튜디오만의 열정으로 가장 트렌디한 디지털 경험을 선물합니다.
              </p>
            </div>

            {/* 2 CTA Buttons on the Right */}
            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <button className="w-full sm:w-auto bg-deep-black text-white px-8 py-4 rounded-full font-bold text-sm md:text-base hover:bg-blood-coral transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-black/10 hover:-translate-y-0.5">
                프로젝트 시작하기
                <ArrowRight size={18} />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-sm md:text-base text-deep-black border-2 border-gray-200 hover:border-deep-black hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2">
                우리의 가치 보기
              </button>
            </div>

          </div>

          {/* Right Floating Doodle/Icon */}
          <div className="absolute bottom-[15%] right-[5%] opacity-40 hidden lg:block">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-deep-black transform -rotate-12">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              <path d="M9 10h.01"/><path d="M15 10h.01"/><path d="M9 14h6"/>
            </svg>
          </div>

        </motion.div>
      </div>

    </section>
  );
};
