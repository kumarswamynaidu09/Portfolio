import { Heart, User, Gamepad2, Star, MessageSquare, Briefcase } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'HOME', icon: Heart, color: 'text-pink-400' },
  { id: 'about', label: 'ABOUT', icon: User, color: 'text-teal-400' },
  { id: 'projects', label: 'PROJECTS', icon: Gamepad2, color: 'text-blue-400' },
  { id: 'skills', label: 'SKILLS', icon: Star, color: 'text-yellow-400' },
  { id: 'experience', label: 'EXPERIENCE', icon: Briefcase, color: 'text-purple-400' },
  { id: 'contact', label: 'CONTACT', icon: MessageSquare, color: 'text-rose-400' },
];

export default function Navbar({ activeSection, setActiveSection }: { activeSection: string, setActiveSection: (id: string) => void }) {
  return (
    <header className="bg-[#161b22] border-b-4 border-black w-full flex items-center justify-between px-4 md:px-6 py-3 shrink-0 z-50">
      {/* Logo / Player info */}
      <div className="flex items-center space-x-4 shrink-0">
         <div className="flex space-x-1">
           <div className="w-3 h-3 bg-slate-500 rounded-full"></div>
           <div className="w-3 h-3 bg-slate-500 rounded-full"></div>
           <div className="w-3 h-3 bg-slate-500 rounded-full"></div>
         </div>
         <span className="font-pixel text-xs text-slate-400 tracking-wider hidden sm:inline-block mt-1">PORTFOLIO</span>
      </div>

      {/* Nav links */}
      <nav 
        className="flex space-x-1 md:space-x-2 overflow-x-auto flex-1 justify-center mx-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                setActiveSection(item.id);
                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg font-pixel text-[10px] md:text-xs transition-colors whitespace-nowrap ${isActive ? 'bg-[#21262d] text-white' : 'text-slate-400 hover:bg-[#21262d] hover:text-slate-200'}`}
            >
              <item.icon className={`w-4 h-4 ${item.color} hidden md:block`} strokeWidth={2.5} />
              <span className="mt-1">{item.label}</span>
            </button>
          )
        })}
      </nav>

      {/* Player level info */}
      <div className="hidden lg:flex items-center space-x-3 shrink-0">
         <div className="w-8 h-8 bg-blue-500/20 border-2 border-blue-400 rounded flex items-center justify-center overflow-hidden">
            <img src="https://api.dicebear.com/9.x/pixel-art/svg?seed=Kumarswamy" alt="Avatar" className="w-full h-full object-cover rounded-sm scale-150" />
        </div>
        <div className="text-xs font-pixel flex flex-col justify-center">
            <div className="text-slate-400 mb-1">PLAYER 1</div>
            <div className="text-yellow-400 text-[8px] flex items-center">
                <span>LVL 19</span>
                <div className="w-16 bg-black h-1.5 ml-2 rounded-full overflow-hidden inline-block">
                    <div className="bg-green-400 h-full w-[84%]"></div>
                </div>
            </div>
        </div>
      </div>
    </header>
  );
}
