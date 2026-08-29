import { motion } from 'motion/react';
import { Heart, Star, Monitor, Code } from 'lucide-react';

export default function SkillsSection() {
  return (
    <section 
        id="skills" 
        className="pixel-panel bg-[var(--color-panel-skills)] p-6 flex flex-col min-h-[calc(100vh-120px)] justify-center"
    >
        <div className="flex items-center space-x-2 mb-6">
            <Heart className="w-5 h-5 text-yellow-400" />
            <h2 className="font-pixel text-white text-lg">SKILLS</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 flex-1">
            {/* Languages Card */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl border border-teal-500/50 p-6 bg-[#041414]/40 shadow-[0_0_15px_rgba(20,184,166,0.15)] flex flex-col"
            >
                <h3 className="font-pixel text-teal-400 text-sm mb-6 flex items-center gap-2">
                    <Code className="w-4 h-4" /> LANGUAGES
                </h3>
                <div className="space-y-6 flex-1 flex flex-col justify-center">
                    {[
                        { name: 'JavaScript', val: 90, color: 'bg-[#4ade80]', text: 'text-[#4ade80]', shadow: 'shadow-[0_0_8px_#4ade80]' },
                        { name: 'Python', val: 80, color: 'bg-[#3b82f6]', text: 'text-[#3b82f6]', shadow: 'shadow-[0_0_8px_#3b82f6]' },
                        { name: 'C/C++', val: 75, color: 'bg-[#a855f7]', text: 'text-[#a855f7]', shadow: 'shadow-[0_0_8px_#a855f7]' },
                        { name: 'SQL', val: 70, color: 'bg-[#ec4899]', text: 'text-[#ec4899]', shadow: 'shadow-[0_0_8px_#ec4899]' },
                    ].map(lang => (
                        <div key={lang.name}>
                            <div className="font-vt323 text-lg md:text-xl mb-2">
                                <span className="text-slate-200">{lang.name}</span>
                            </div>
                            <div className="w-full bg-slate-800/50 h-2 md:h-2.5 rounded-full overflow-hidden">
                                <div className={`h-full rounded-full ${lang.color} ${lang.shadow}`} style={{ width: `${lang.val}%` }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
            
            {/* I'm Good At Card */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
                className="rounded-xl border border-yellow-500/50 p-6 bg-[#1a1500]/40 shadow-[0_0_15px_rgba(234,179,8,0.15)] flex flex-col"
            >
                <h3 className="font-pixel text-yellow-400 text-sm mb-6 flex items-center gap-2">
                    <Star className="w-4 h-4" /> I'M GOOD AT
                </h3>
                <div className="space-y-6 flex-1 flex flex-col justify-center">
                    {[
                        { name: 'Web Dev', stars: 5 },
                        { name: 'UI/UX Design', stars: 4 },
                        { name: 'Problem Solving', stars: 5 },
                        { name: 'Data Structs', stars: 4 },
                        { name: 'Team Collab', stars: 5 },
                    ].map(skill => (
                        <div key={skill.name} className="flex justify-between items-center gap-4">
                            <span className="font-vt323 text-slate-200 text-lg md:text-xl truncate">{skill.name}</span>
                            <div className="flex space-x-1 shrink-0">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`w-4 h-4 md:w-5 md:h-5 ${i < skill.stars ? 'fill-yellow-400 text-yellow-400 drop-shadow-[0_0_5px_rgba(250,204,21,0.5)]' : 'text-yellow-400/20'}`} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
            
            {/* Tools & Tech Card */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
                className="rounded-xl border border-purple-500/50 p-6 bg-[#1a0b2e]/40 shadow-[0_0_15px_rgba(168,85,247,0.15)] md:col-span-2"
            >
                <h3 className="font-pixel text-white text-sm mb-6 flex items-center gap-2">
                    <Monitor className="w-4 h-4 text-purple-400" /> TOOLS & TECH
                </h3>
                <div className="flex flex-wrap gap-4 md:gap-6 justify-start">
                    {[
                        { short: 'R', borderColor: 'border-blue-500', textColor: 'text-blue-500', shadow: 'shadow-[0_0_10px_rgba(59,130,246,0.3)]' },
                        { short: 'JS', borderColor: 'border-yellow-400', textColor: 'text-yellow-400', shadow: 'shadow-[0_0_10px_rgba(250,204,21,0.3)]' },
                        { short: 'TW', borderColor: 'border-teal-400', textColor: 'text-teal-400', shadow: 'shadow-[0_0_10px_rgba(45,212,191,0.3)]' },
                        { short: 'N', borderColor: 'border-green-500', textColor: 'text-green-500', shadow: 'shadow-[0_0_10px_rgba(34,197,94,0.3)]' },
                        { short: 'F', borderColor: 'border-orange-500', textColor: 'text-orange-500', shadow: 'shadow-[0_0_10px_rgba(249,115,22,0.3)]' },
                    ].map(tool => (
                        <div 
                            key={tool.short} 
                            className={`w-12 h-12 md:w-14 md:h-14 rounded-lg border-2 ${tool.borderColor} flex items-center justify-center ${tool.textColor} font-pixel text-sm md:text-base ${tool.shadow} bg-black/50 hover:-translate-y-1 transition-transform cursor-pointer`}
                        >
                            {tool.short}
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
        
        {/* Bottom Banner */}
        <div className="mt-6 p-4 rounded-xl border border-teal-500/50 bg-[#041414]/40 shadow-[0_0_15px_rgba(20,184,166,0.15)] text-teal-400 font-pixel text-xs flex items-center justify-center text-center shrink-0">
            <Star className="w-4 h-4 mr-2 fill-teal-400 text-teal-400 drop-shadow-[0_0_5px_rgba(45,212,191,0.8)] shrink-0" /> 
            <span>ALWAYS LEARNING. ALWAYS BUILDING.</span>
        </div>
    </section>
  );
}
