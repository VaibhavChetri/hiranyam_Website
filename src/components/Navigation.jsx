import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Heritage', path: '/heritage' },
    { name: 'Collection', path: '/collection' },
    { name: 'Bespoke', path: '/bespoke' },
  ];

  return (
    <>
      <nav className={`fixed top-0 inset-x-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-[#faf9f5]/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-b border-[#003527]/5 py-4' : 'bg-transparent py-4 md:py-6'}`}>
        <div className="max-w-[1920px] mx-auto px-6 md:px-8 flex justify-between items-center w-full">
          
          {/* Mobile Layout (Visible < md) */}
          <div className="flex md:hidden items-center justify-between w-full">
            <Link to="/" className="font-['Cinzel'] text-xl tracking-[0.2em] font-light text-[#003527]">
              HIRANYAM
            </Link>
            
            <div className="flex items-center gap-8">
              <button 
                className="hover:opacity-70 transition-opacity active:scale-95 duration-150 cursor-pointer font-label text-[11px] tracking-[0.25em] uppercase text-[#003527]"
                onClick={() => setMobileMenuOpen(true)}
              >
                Menu
              </button>
              <button className="hover:opacity-70 transition-opacity active:scale-95 duration-150 relative cursor-pointer text-[#003527]">
                <ShoppingBag size={20} strokeWidth={1.5} />
                <span className="absolute -top-1.5 -right-1.5 bg-[#755b00] text-white text-[9px] w-[15px] h-[15px] rounded-full flex items-center justify-center font-label">0</span>
              </button>
            </div>
          </div>

          {/* Desktop Layout (Visible >= md) */}
          <div className="hidden md:flex items-center justify-between w-full">
            <div className="flex items-center gap-12">
              <Link to="/" className="font-['Cinzel'] text-2xl tracking-[0.2em] font-light text-[#003527]">
                HIRANYAM
              </Link>
              <div className="hidden md:flex gap-8 font-['Cinzel'] tracking-[0.15em] uppercase text-xs">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link 
                      key={link.name} 
                      to={link.path}
                      className={isActive 
                        ? "text-[#755b00] border-b border-[#755b00] pb-1"
                        : "text-[#003527] hover:text-[#755b00] transition-colors duration-300"
                      }
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="flex items-center gap-6 text-[#003527]">
              <button className="hover:opacity-70 transition-opacity active:scale-95 duration-150 relative cursor-pointer">
                <Search size={22} strokeWidth={1.5} />
              </button>
              <button className="hover:opacity-70 transition-opacity active:scale-95 duration-150 relative cursor-pointer">
                <ShoppingBag size={22} strokeWidth={1.5} />
                <span className="absolute -top-1 -right-1 bg-[#755b00] text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-label">0</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Full-Screen Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[200] bg-[#faf9f5] flex flex-col px-6 py-4 md:hidden"
          >
            <div className="flex justify-between items-center w-full relative mb-16">
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#003527] hover:opacity-70 transition-opacity"
              >
                <X size={28} strokeWidth={1} />
              </button>
              <span className="font-['Cinzel'] text-xl tracking-[0.2em] font-light text-[#003527] absolute left-1/2 -translate-x-1/2">
                HIRANYAM
              </span>
            </div>

            <div className="flex flex-col items-center justify-center flex-grow gap-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + (i * 0.1), duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link 
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-['Cinzel'] text-3xl tracking-[0.2em] uppercase text-[#003527] hover:text-[#755b00] transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 mb-4 text-center font-label text-[9px] tracking-[0.3em] text-[#003527]/40 uppercase">
              © 2024 HIRANYAM. All Rights Reserved.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
