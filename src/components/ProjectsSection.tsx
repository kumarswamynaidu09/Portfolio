import { motion } from 'motion/react';
import { Heart, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    title: 'SKILLDECK',
    domain: 'Career & Opportunity Discovery',
    type: 'WEB APP',
    description: 'Swipe-based platform to discover career opportunities matching your skills.',
    tags: ['REACT', 'FIREBASE', 'TAILWIND'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=300&auto=format&fit=crop',
    showInAll: true,
    link: 'https://skill-deck-eight.vercel.app',
  },
  {
    title: 'MARGIN DRAFT',
    domain: 'Startups & Idea Discovery',
    type: 'MOBILE APP',
    description: 'Mobile platform for discovering, sharing, and promoting startup ideas.',
    tags: ['REACT NATIVE', 'FIREBASE'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=300&auto=format&fit=crop',
    showInAll: true,
    link: 'https://github.com/kumarswamynaidu09/Margin-Draft',
  },
  {
    title: 'NOVATECH HR',
    domain: 'AI & Human Resources',
    type: 'AI TOOL',
    description: 'AI-powered HR assistant for querying company knowledge.',
    tags: ['PYTHON', 'GROQ API', 'AI'],
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=300&auto=format&fit=crop',
    showInAll: true,
    link: 'https://github.com/kumarswamynaidu09/chatbot',
  },
  {
    title: 'TREEMAN',
    domain: 'Accessibility & Employment',
    type: 'WEB APP',
    description: 'Accessible job platform helping specially-abled users find relevant opportunities.',
    tags: ['REACT', 'MUI', 'FIREBASE'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=300&auto=format&fit=crop',
    showInAll: false,
  },
  {
    title: 'RADIX',
    domain: 'Retail & Inventory',
    type: 'WEB APP',
    description: 'Smart inventory platform helping retailers clear near-expiry products.',
    tags: ['REACT', 'FIREBASE', 'ALGORITHMS'],
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=300&auto=format&fit=crop',
    showInAll: false,
    link: 'https://github.com/kumarswamynaidu09/Radix',
  }
];

const categories = ['ALL', 'WEB APP', 'MOBILE APP', 'AI TOOL'];

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState('ALL');

  const filteredProjects = projects.filter(project => {
    if (activeTab === 'ALL') return project.showInAll;
    return project.type === activeTab;
  });

  return (
    <section 
        id="projects" 
        className="pixel-panel bg-[var(--color-panel-projects)] p-6 md:p-8 min-h-[calc(100vh-120px)] flex flex-col justify-center"
    >
        <div className="flex items-center space-x-2 mb-8">
            <Heart className="w-5 h-5 text-blue-400" />
            <h2 className="font-pixel text-white text-lg">PROJECTS</h2>
        </div>
        
        <div className="flex space-x-4 mb-8 font-pixel text-xs overflow-x-auto pb-2 scrollbar-hide">
            {categories.map(cat => (
                <button 
                    key={cat}
                    onClick={() => setActiveTab(cat)}
                    className={`pixel-button py-2 px-4 whitespace-nowrap transition-colors ${
                        activeTab === cat 
                            ? 'bg-blue-400 text-black border-blue-400' 
                            : 'bg-[#111827] text-slate-300 border-slate-700 hover:text-white hover:border-slate-500'
                    }`}
                >
                    {cat}
                </button>
            ))}
        </div>
        
        <div className="space-y-4 flex-1">
            {filteredProjects.map((project, i) => (
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    key={`${activeTab}-${project.title}`}
                    className="pixel-card bg-[#1a2b5e] p-4 flex flex-col md:flex-row gap-6 items-center border-blue-800/50 hover:border-blue-400 transition-colors group"
                >
                    <div className="w-full md:w-48 h-32 bg-black border-4 border-black rounded flex-shrink-0 overflow-hidden relative">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" style={{ imageRendering: 'pixelated' }} />
                        <div className="absolute inset-0 bg-blue-900/40 mix-blend-overlay"></div>
                    </div>
                    <div className="flex-1 w-full">
                        <div className="flex justify-between items-start mb-1">
                            <h3 className="font-pixel text-xl text-white">{project.title}</h3>
                            {project.link && (
                                <a href={project.link} target="_blank" rel="noreferrer" className="p-2 bg-black border-2 border-slate-700 rounded text-slate-400 hover:text-white hover:border-blue-400 transition-colors shrink-0 ml-4 inline-block">
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            )}
                        </div>
                        <p className="font-pixel text-[10px] text-blue-300 mb-3 tracking-widest uppercase">{project.domain}</p>
                        <p className="text-slate-300 mb-4 text-base md:text-lg leading-relaxed">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, j) => (
                                <span key={j} className="font-pixel text-[10px] bg-black/50 text-slate-400 px-2 py-1 rounded border border-slate-700">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    </section>
  );
}
