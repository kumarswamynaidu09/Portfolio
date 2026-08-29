import { motion } from 'motion/react';
import { Heart, Mail, MapPin, Github, Linkedin, Send, Sparkles } from 'lucide-react';
import pixelMailbox from '../assets/images/pixel_mailbox_1786737160437.jpg';

export default function ContactSection() {
  return (
    <section 
        id="contact" 
        className="pixel-panel bg-[#09040f] p-4 md:p-6 lg:p-8 min-h-[calc(100vh-120px)] flex flex-col justify-center gap-4 border border-[#2d1b36] shadow-[0_0_30px_rgba(236,72,153,0.05)] rounded-xl relative overflow-hidden"
    >
        {/* Contact Header */}
        <div className="flex items-center space-x-3 mb-2 z-10">
            <Heart className="w-5 h-5 text-pink-500 fill-transparent stroke-2" />
            <h2 className="font-pixel text-white text-lg tracking-widest drop-shadow-[0_0_5px_rgba(236,72,153,0.5)]">CONTACT</h2>
        </div>
        
        {/* Main Contact Card */}
        <div className="bg-[#0b0514] border-2 border-[#2d1b36] rounded-xl p-6 md:p-8 flex flex-col lg:flex-row gap-8 relative z-10 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
            
            {/* Corner Screws/Dots */}
            <div className="absolute top-3 left-3 w-2 h-2 rounded-full bg-[#ec4899] shadow-[0_0_5px_#ec4899]"></div>
            <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-[#ec4899] shadow-[0_0_5px_#ec4899]"></div>
            <div className="absolute bottom-3 left-3 w-2 h-2 rounded-full bg-[#ec4899] shadow-[0_0_5px_#ec4899]"></div>
            <div className="absolute bottom-3 right-3 w-2 h-2 rounded-full bg-[#ec4899] shadow-[0_0_5px_#ec4899]"></div>

            {/* Left Image */}
            <div className="w-full lg:w-1/2 flex items-center justify-center relative">
                <img 
                    src={pixelMailbox} 
                    alt="Mailbox" 
                    className="w-full h-full object-cover rounded-lg border border-[#2d1b36] shadow-[0_0_15px_rgba(0,0,0,0.8)]"
                    style={{ imageRendering: 'pixelated' }}
                />
            </div>
            
            {/* Right Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="text-center mb-6">
                    <h3 className="font-pixel text-2xl md:text-3xl lg:text-4xl text-white mb-4 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                        LET'S <span className="text-[#ec4899] drop-shadow-[0_0_8px_rgba(236,72,153,0.6)]">CONNECT!</span> <Sparkles className="inline w-6 h-6 text-yellow-400 fill-yellow-400 mb-2 drop-shadow-[0_0_5px_rgba(250,204,21,0.8)]" />
                    </h3>
                    
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="h-[1px] bg-[#2d1b36] w-12 md:w-24 shadow-[0_0_2px_#ec4899]"></div>
                        <Heart className="w-4 h-4 text-[#ec4899] fill-[#ec4899] drop-shadow-[0_0_5px_rgba(236,72,153,0.8)]" />
                        <div className="h-[1px] bg-[#2d1b36] w-12 md:w-24 shadow-[0_0_2px_#ec4899]"></div>
                    </div>

                    <p className="font-vt323 text-lg md:text-xl text-[#8b9bb4]">
                        Have a project in mind?<br/>
                        Let's build something <span className="text-yellow-400 drop-shadow-[0_0_5px_rgba(250,204,21,0.5)]">awesome</span> together.
                    </p>
                </div>
                
                <div className="space-y-3 mb-8 w-full max-w-md mx-auto">
                    {[
                        { icon: Mail, label: 'EMAIL', value: 'kumarswamynaidu09@gmail.com', href: 'mailto:kumarswamynaidu09@gmail.com', color: 'text-[#ec4899]', shadow: 'drop-shadow-[0_0_5px_rgba(236,72,153,0.8)]' },
                        { icon: MapPin, label: 'LOCATION', value: 'Hyderabad, India', color: 'text-[#4ade80]', shadow: 'drop-shadow-[0_0_5px_rgba(74,222,128,0.8)]' },
                        { icon: Github, label: 'GITHUB', value: 'github.com/kumarswamynaidu09', href: 'https://github.com/kumarswamynaidu09', color: 'text-[#fbbf24]', shadow: 'drop-shadow-[0_0_5px_rgba(251,191,36,0.8)]' },
                        { icon: Linkedin, label: 'LINKEDIN', value: 'linkedin.com/in/kumarswamynaidu09', href: 'https://www.linkedin.com/in/kumarswamynaidu09/', color: 'text-[#22d3ee]', shadow: 'drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]' },
                    ].map((item, idx) => {
                        const Icon = item.icon;
                        const content = (
                            <div key={idx} className="flex items-center w-full p-3 md:p-4 border border-[#2d1b36] rounded-lg bg-[#0b0514]/80 hover:bg-[#130922] transition-colors group cursor-pointer shadow-[0_0_10px_rgba(0,0,0,0.3)]">
                                <div className={`flex items-center gap-2 w-[100px] md:w-[120px] shrink-0 ${item.color} ${item.shadow}`}>
                                    <Icon className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
                                    <span className="font-pixel text-[10px] md:text-xs">{item.label}</span>
                                </div>
                                <div className="text-[#ec4899] font-pixel text-xs mx-2 drop-shadow-[0_0_2px_#ec4899]">:</div>
                                <span className="font-vt323 text-slate-200 text-base md:text-lg lg:text-xl truncate ml-2 group-hover:text-white transition-colors">{item.value}</span>
                            </div>
                        );
                        
                        return item.href ? (
                            <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" key={idx} className="block w-full">
                                {content}
                            </a>
                        ) : content;
                    })}
                </div>
                
                <button className="pixel-button bg-[#b81d61] hover:bg-[#d82474] text-white border-2 border-[#4a0b27] shadow-[2px_3px_0_#eab308] active:shadow-[0_0_0_#eab308] active:translate-y-1 font-pixel py-3 px-8 text-xs md:text-sm flex items-center justify-center space-x-3 transition-all mx-auto w-full md:w-auto">
                    <Send className="w-4 h-4 md:w-5 md:h-5 -mt-1 -ml-1 drop-shadow-[0_0_2px_rgba(255,255,255,0.8)]" />
                    <span className="drop-shadow-[0_0_2px_rgba(255,255,255,0.5)]">SEND MESSAGE</span>
                </button>
            </div>
        </div>
        
        {/* Footer Area */}
        <div className="mt-2 border-2 border-[#2d1b36] rounded-xl bg-[#0b0514] p-4 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left z-10 shadow-[0_0_15px_rgba(0,0,0,0.5)] relative">
             <div className="text-[#ec4899] font-pixel text-[8px] md:text-[10px] leading-relaxed drop-shadow-[0_0_2px_rgba(236,72,153,0.5)]">
                 THANKS FOR VISITING!<br/>
                 LET'S BUILD THE <span className="text-yellow-400 drop-shadow-[0_0_3px_rgba(250,204,21,0.5)]">FUTURE</span> TOGETHER.
             </div>
             
             {/* Center Mini Robot icon */}
             <div className="w-10 h-8 flex flex-col items-center justify-center relative md:absolute md:left-1/2 md:-translate-x-1/2">
                <div className="w-1.5 h-1.5 bg-[#ec4899] rounded-full mb-0.5 shadow-[0_0_5px_#ec4899]"></div>
                <div className="w-8 h-6 bg-[#09040f] border-2 border-[#4b3558] rounded flex items-center justify-center">
                     <div className="w-5 h-3 bg-[#22d3ee] rounded-sm flex items-center justify-center relative shadow-[inset_0_0_5px_rgba(0,0,0,0.5),0_0_5px_rgba(34,211,238,0.5)]">
                         <div className="w-2.5 h-1 bg-[#09040f] rounded-full mt-1.5"></div>
                         <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-[#09040f]"></div>
                         <div className="absolute top-0.5 right-0.5 w-1 h-1 bg-[#09040f]"></div>
                     </div>
                 </div>
             </div>
             
             <div className="text-[#64748b] font-pixel text-[8px] md:text-[10px] leading-relaxed text-right md:w-[180px]">
                 © 2024 KUMARSWAMY<br/>
                 MADE WITH <Heart className="inline w-3 h-3 fill-[#ec4899] text-[#ec4899] drop-shadow-[0_0_3px_rgba(236,72,153,0.8)] -mt-0.5 mx-0.5" /> AND PIXELS
             </div>
        </div>
    </section>
  );
}
