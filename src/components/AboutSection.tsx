import { motion } from 'motion/react';
import { Heart, Coffee } from 'lucide-react';

export default function AboutSection() {
  return (
    <section 
        id="about" 
        className="pixel-panel bg-[var(--color-panel-about)] p-6 md:p-8 min-h-[calc(100vh-120px)] flex flex-col justify-center"
    >
        <div className="flex items-center space-x-2 mb-8">
            <Heart className="w-5 h-5 text-teal-400" />
            <h2 className="font-pixel text-white text-lg">ABOUT ME</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="md:col-span-2 h-full">
                <div className="neon-box-teal p-6 flex flex-col md:flex-row items-center md:items-start gap-6 h-full">
                    <div className="w-32 h-32 bg-teal-900/50 border-4 border-black rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden">
                        <img src="https://api.dicebear.com/9.x/pixel-art/svg?seed=Kumarswamy" alt="Avatar" className="w-full h-full object-cover rounded-sm scale-150" />
                    </div>
                    <div className="flex-1 text-center md:text-left flex flex-col justify-center h-full">
                        <p className="font-pixel text-teal-300 text-sm mb-2">HEY, I'M</p>
                        <h3 className="font-pixel text-2xl md:text-3xl text-white mb-2">KUMARSWAMY</h3>
                        <p className="font-pixel text-slate-400 text-[10px] md:text-xs tracking-widest mb-6 leading-relaxed">DEVELOPER * DESIGNER * DREAMER</p>
                        <div className="mt-auto">
                            <button className="pixel-button bg-teal-400 hover:bg-teal-300 text-black font-pixel py-2 px-6 text-xs">
                                MORE ABOUT ME
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="md:col-span-1 h-full">
                <div className="neon-box-teal p-6 h-full flex flex-col justify-center">
                    <h4 className="font-pixel text-teal-300 text-sm mb-4">MY STORY</h4>
                    <p className="font-vt323 text-slate-300 leading-relaxed text-lg">
                        I'm a 2nd year Computer Science student who loves turning ideas into real products. 
                        I enjoy building web applications, solving problems, and learning new technologies.
                        When I'm not coding, you'll find me exploring new things and leveling up!
                    </p>
                </div>
            </div>
        </div>

        <div className="neon-box-teal p-6 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 divide-y-2 md:divide-y-0 md:divide-x-2 divide-teal-800/50">
            <div className="flex flex-col items-center justify-center p-2 text-center">
                <span className="font-pixel text-3xl md:text-4xl text-teal-300 mb-3 block">19</span>
                <span className="font-pixel text-[10px] text-teal-500 tracking-widest">YEARS OLD</span>
            </div>
            <div className="flex flex-col items-center justify-center p-2 text-center">
                <span className="font-pixel text-3xl md:text-4xl text-teal-300 mb-3 block">2+</span>
                <span className="font-pixel text-[10px] text-teal-500 tracking-widest">PROJECTS</span>
            </div>
            <div className="flex flex-col items-center justify-center p-2 text-center">
                <span className="font-pixel text-4xl md:text-5xl text-teal-300 mb-3 leading-none block">∞</span>
                <span className="font-pixel text-[10px] text-teal-500 tracking-widest">LEARNING</span>
            </div>
            <div className="flex flex-col items-center justify-center p-2 text-center">
                <Coffee className="w-8 h-8 md:w-10 md:h-10 text-teal-300 mb-3" strokeWidth={2} />
                <span className="font-pixel text-[10px] text-teal-500 tracking-widest">COFFEE</span>
            </div>
        </div>
    </section>
  );
}
