import { motion } from 'motion/react';
import { Heart, Edit3, Trophy, Code2, Terminal, Download, Star, Monitor, Users, Zap, ChevronRight, Swords } from 'lucide-react';
import pixelCastle from '../assets/images/pixel_castle_no_ui_1786739265346.jpg';

const experiences = [
    {
        year: '2026 - PRESENT',
        title: 'CONTENT WRITING INTERN',
        org: 'CIE – MLRIT',
        desc: 'Creating content for events, social media, campaigns, and CIE communications.',
        icon: Edit3,
        colorHex: '#ec4899', // Pink
        domains: 'Content • Communication • Branding',
        domainIcon: Heart
    },
    {
        year: '2026 - PRESENT',
        title: 'TECHNICAL INTERN',
        org: 'Scyte.in',
        desc: 'Working on technical projects, development tasks, and practical software solutions.',
        icon: Terminal,
        colorHex: '#3b82f6', // Blue
        domains: 'Development • Problem Solving',
        domainIcon: Monitor
    },
    {
        year: '2026 - PRESENT',
        title: 'OPEN SOURCE CONTRIBUTOR',
        org: 'Open Source',
        desc: 'Contributing to open-source projects through code, improvements, and collaboration.',
        icon: Code2, // Github / Code
        colorHex: '#22c55e', // Green
        domains: 'Open Source • Collaboration • Code',
        domainIcon: Users
    },
    {
        year: '2025 - PRESENT',
        title: 'HACKATHON PARTICIPANT',
        org: 'Hackathons',
        desc: 'Participating in hackathons and building innovative solutions to real-world problems under time constraints.',
        icon: Trophy,
        colorHex: '#eab308', // Yellow
        domains: 'Innovation • Teamwork • Problem Solving',
        domainIcon: Zap
    }
];

export default function ExperienceSection() {
    return (
        <section 
            id="experience" 
            className="pixel-panel bg-[#09040f] p-4 md:p-6 lg:p-8 min-h-[calc(100vh-120px)] flex flex-col justify-center gap-6 border border-[#2d1b36] shadow-[0_0_30px_rgba(168,85,247,0.05)] rounded-xl relative overflow-hidden"
        >
            {/* Background Image Castle */}
            <div className="absolute right-0 top-0 bottom-0 w-[40%] opacity-20 pointer-events-none hidden lg:block" style={{ backgroundImage: `url(${pixelCastle})`, backgroundSize: 'cover', backgroundPosition: 'center right', imageRendering: 'pixelated', maskImage: 'linear-gradient(to right, transparent, black 80%)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 80%)' }} />

            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 relative z-10 w-full lg:w-[90%]">
                 <div>
                    <div className="flex items-center space-x-3 mb-2">
                        <Heart className="w-6 h-6 text-pink-500 fill-pink-500 drop-shadow-[0_0_5px_rgba(236,72,153,0.8)]" />
                        <h2 className="font-pixel text-white text-2xl lg:text-3xl tracking-widest drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">EXPERIENCE</h2>
                    </div>
                    <p className="text-blue-400 font-vt323 text-lg lg:text-xl drop-shadow-[0_0_2px_rgba(96,165,250,0.5)]">My journey so far, level by level.</p>
                 </div>
                 
                 <div className="border border-[#2d1b36] bg-[#0b0514]/80 backdrop-blur rounded-lg p-3 flex items-center gap-4 lg:gap-8 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                     <div className="flex items-center gap-3">
                          <Star className="w-6 h-6 text-yellow-400 fill-yellow-400 drop-shadow-[0_0_5px_rgba(250,204,21,0.8)]" />
                          <div>
                              <p className="font-pixel text-[8px] text-slate-400 mb-1 tracking-widest">TOTAL XP</p>
                              <p className="font-pixel text-pink-500 text-sm">1520</p>
                          </div>
                     </div>
                     <div className="w-px h-8 bg-[#2d1b36]"></div>
                     <div className="pr-2">
                          <p className="font-pixel text-[8px] text-slate-400 mb-1 tracking-widest">LEVEL</p>
                          <p className="font-pixel text-blue-400 text-sm">06</p>
                     </div>
                 </div>
            </div>

            {/* Timeline & Cards */}
            <div className="relative flex flex-col gap-5 z-10 w-full lg:w-[85%] mt-4">
                 {/* Main subtle vertical line behind the dots */}
                 <div className="absolute left-2 top-8 bottom-8 w-0.5 bg-[#2d1b36]/50 md:left-2" />

                 {experiences.map((exp, i) => (
                      <motion.div 
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: i * 0.15 }}
                          viewport={{ once: true }}
                          key={i} 
                          className="flex group w-full"
                      >
                           {/* Timeline Dot */}
                           <div className="relative flex flex-col items-center mr-4 md:mr-6 shrink-0 z-10">
                               <div className="w-4 h-4 rounded-full border-2 bg-[#0b0514] mt-6 transition-all duration-300 group-hover:scale-125"
                                    style={{ borderColor: exp.colorHex, boxShadow: `0 0 10px ${exp.colorHex}80` }}
                               />
                           </div>
                           
                           {/* Card */}
                           <div className="flex-1 border bg-[#0b0514]/90 backdrop-blur-sm rounded-xl p-4 lg:p-5 flex flex-col lg:flex-row gap-4 lg:gap-6 transition-all duration-300 group-hover:-translate-y-1 hover:z-20 relative"
                                style={{ borderColor: `${exp.colorHex}40`, boxShadow: `0 0 20px ${exp.colorHex}10` }}
                           >
                                {/* Left Icon Box */}
                                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-lg border flex items-center justify-center shrink-0"
                                     style={{ borderColor: `${exp.colorHex}50`, backgroundColor: `${exp.colorHex}15` }}>
                                     <exp.icon className="w-7 h-7 lg:w-8 lg:h-8" style={{ color: exp.colorHex, filter: `drop-shadow(0 0 5px ${exp.colorHex}80)` }} />
                                </div>
                                
                                {/* Middle Content */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex flex-col md:flex-row md:items-center gap-2 lg:gap-4 mb-2 lg:mb-1">
                                         <div className="font-pixel text-[9px] px-2 py-1 rounded inline-flex shrink-0 w-max border"
                                              style={{ borderColor: `${exp.colorHex}50`, backgroundColor: `${exp.colorHex}15`, color: exp.colorHex }}>
                                             {exp.year}
                                         </div>
                                         <h3 className="font-pixel text-white text-xs lg:text-sm truncate pt-1">{exp.title}</h3>
                                    </div>
                                    <p className="font-vt323 text-lg lg:text-xl mb-1" style={{ color: exp.colorHex }}>{exp.org}</p>
                                    <p className="text-slate-400 font-vt323 text-base lg:text-lg leading-snug max-w-2xl">{exp.desc}</p>
                                </div>

                                {/* Right Domains */}
                                <div className="hidden md:flex flex-col justify-center items-start lg:items-end min-w-[220px] lg:border-l border-slate-800 lg:pl-6 shrink-0 mt-4 lg:mt-0">
                                     <div className="flex items-center gap-2 mb-2" style={{ color: exp.colorHex }}>
                                          <exp.domainIcon className="w-4 h-4" />
                                          <span className="font-pixel text-[8px] tracking-widest">DOMAINS</span>
                                     </div>
                                     <div className="font-vt323 text-slate-300 text-[15px] lg:text-base px-3 py-1 rounded-full border text-center lg:text-right"
                                          style={{ borderColor: `${exp.colorHex}30`, backgroundColor: `${exp.colorHex}10` }}>
                                          {exp.domains}
                                     </div>
                                </div>
                                
                                {/* Chevron */}
                                <div className="hidden lg:flex items-center justify-center pl-2 transition-colors" style={{ color: `${exp.colorHex}50` }}>
                                     <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" style={{ color: exp.colorHex }} />
                                </div>
                           </div>
                      </motion.div>
                 ))}
            </div>

            {/* Footer Area */}
            <div className="mt-4 border-2 border-[#2d1b36] rounded-xl bg-[#0b0514]/90 p-4 md:p-5 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left z-10 shadow-[0_0_15px_rgba(0,0,0,0.5)] relative">
                 
                 <div className="flex flex-col gap-2.5 items-center md:items-start w-full md:w-auto">
                     <p className="font-pixel text-[8px] lg:text-[10px] text-blue-400 leading-relaxed drop-shadow-[0_0_2px_rgba(96,165,250,0.5)]">
                         KEEP BUILDING.<br/>
                         <span className="text-white drop-shadow-[0_0_3px_rgba(255,255,255,0.5)]">THE BEST IS YET TO COME!</span>
                     </p>
                     <div className="flex gap-1.5">
                          <Heart className="w-3 h-3 text-pink-500 fill-pink-500 drop-shadow-[0_0_3px_rgba(236,72,153,0.8)]" />
                          <div className="w-6 h-2.5 bg-pink-500 rounded-sm shadow-[0_0_5px_#ec4899]"></div>
                          <div className="w-6 h-2.5 bg-pink-500 rounded-sm shadow-[0_0_5px_#ec4899]"></div>
                          <div className="w-6 h-2.5 bg-pink-500 rounded-sm shadow-[0_0_5px_#ec4899]"></div>
                     </div>
                 </div>
                 
                 <button className="pixel-button bg-[#4c1d95] hover:bg-[#5b21b6] text-white border-2 border-[#2e1065] shadow-[2px_3px_0_#a855f7] active:shadow-[0_0_0_#a855f7] active:translate-y-1 font-pixel py-3 px-6 lg:px-10 text-[10px] lg:text-xs flex items-center justify-center space-x-3 transition-all w-full md:w-auto shrink-0 z-10">
                     <Download className="w-4 h-4 lg:w-5 lg:h-5 -mt-1 drop-shadow-[0_0_2px_rgba(255,255,255,0.8)]" />
                     <span className="drop-shadow-[0_0_2px_rgba(255,255,255,0.5)]">DOWNLOAD RESUME</span>
                 </button>

                 <div className="flex flex-col gap-2.5 items-center md:items-end text-center md:text-right w-full md:w-auto">
                     <div className="flex items-center gap-3">
                         <Swords className="w-5 h-5 text-yellow-400 hidden lg:block drop-shadow-[0_0_5px_rgba(250,204,21,0.6)]" />
                         <p className="font-pixel text-[8px] lg:text-[10px] text-pink-400 leading-relaxed drop-shadow-[0_0_2px_rgba(236,72,153,0.5)]">
                             STAY CURIOUS.<br/>
                             <span className="text-white drop-shadow-[0_0_3px_rgba(255,255,255,0.5)]">KEEP LEVELING UP!</span>
                         </p>
                     </div>
                     <div className="flex items-center gap-2">
                         <div className="w-24 lg:w-32 h-2 border border-[#4c1d95] rounded-full bg-[#09040f] overflow-hidden">
                              <div className="w-[80%] h-full bg-[#a855f7] shadow-[0_0_5px_#a855f7]"></div>
                         </div>
                         <Star className="w-3 h-3 text-[#a855f7] fill-transparent" />
                     </div>
                 </div>
            </div>
        </section>
    );
}
