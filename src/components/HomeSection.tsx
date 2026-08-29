import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export default function HomeSection() {
  return (
    <section 
      id="home" 
      className="pixel-panel bg-[var(--color-panel-home)] relative min-h-[calc(100vh-120px)] flex flex-col items-center justify-center p-8 text-center overflow-hidden"
    >
        {/* Decorative background elements could go here */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #ffffff 2px, transparent 2px)', backgroundSize: '100px 100px' }}></div>
        
        <div className="relative z-10 flex flex-col items-center -mt-16 md:-mt-24">
            <h2 className="font-pixel text-teal-400 mb-4 tracking-widest text-sm md:text-base">WELCOME TO</h2>
            <h1 className="font-pixel text-4xl md:text-6xl text-pink-400 mb-6 drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">MY PORTFOLIO</h1>
            <p className="font-pixel text-slate-300 tracking-widest text-sm md:text-lg mb-8">I BUILD + DESIGN + SOLVE</p>
            
            <div className="relative bg-[#11091f]/80 rounded-2xl p-6 md:p-8 mb-12 max-w-lg mx-auto shadow-xl">
                <h3 className="font-pixel text-pink-400 text-sm md:text-base mb-4 leading-relaxed">
                    Hi! I'm Kumarswamy.
                </h3>
                <p className="font-vt323 text-slate-200 text-xl md:text-2xl leading-relaxed">
                    A passionate developer<br/>
                    who loves to build<br/>
                    cool things for the web.
                </p>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
                    <Heart className="w-6 h-6 text-pink-400 fill-pink-400 drop-shadow-md" />
                </div>
            </div>
            
            <button className="pixel-button bg-pink-400 hover:bg-pink-300 text-black font-pixel py-4 px-8 text-sm md:text-base">
                PRESS START
            </button>
        </div>
        
        <div className="absolute bottom-8 flex flex-col items-center text-slate-400 font-pixel text-xs animate-bounce">
            <span>SCROLL DOWN</span>
            <svg className="w-4 h-4 mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </div>
    </section>
  );
}
