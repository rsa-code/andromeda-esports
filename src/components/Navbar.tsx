import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../assets/andromeda-04.svg';

const NAV_ITEMS = [
  { label: 'HOME', href: '#' },
  { 
    label: 'TEAMS', 
    href: '#',
    children: [
      { label: 'VALORANT', href: '#' },
      { label: 'LEAGUE OF LEGENDS', href: '#' },
      { label: 'CS2', href: '#' },
      { label: 'ROCKET LEAGUE', href: '#' },
    ]
  },
  { label: 'SHOP', href: '#' },
  { label: 'NEWS', href: '#' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/50 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={Logo} alt="Andromeda" className="h-14 w-auto" />
            <span className="font-display text-2xl font-bold text-white tracking-wider">
              ANDROMEDA
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="relative group">
                <a
                  href={item.href}
                  className="flex items-center gap-1 text-sm font-medium text-slate-300 transition-colors hover:text-accent"
                >
                  {item.label}
                </a>
                
                {item.children && (
                  <div className="absolute left-0 top-full pt-4 opacity-0 invisible -translate-y-2 transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                    <div className="w-48 rounded-lg border border-white/10 bg-slate-950 p-2 shadow-xl backdrop-blur-xl">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="block rounded-md px-4 py-2 text-sm text-slate-300 transition-colors hover:bg-white/5 hover:text-accent"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-slate-950 px-4 py-4 animate-fade-in-up">
          <div className="flex flex-col space-y-4">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                <a
                  href={item.href}
                  className="text-slate-300 hover:text-accent block"
                >
                  {item.label}
                </a>
                {item.children && (
                  <div className="ml-4 mt-2 flex flex-col space-y-2 border-l border-white/10 pl-4">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="text-sm text-slate-400 hover:text-accent"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
