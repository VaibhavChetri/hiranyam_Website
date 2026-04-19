import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, X } from 'lucide-react';
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
      <nav className={`fixed top-0 inset-x-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-[#fbf4f1]/92 backdrop-blur-md shadow-[0_4px_40px_rgba(61,31,42,0.06)] border-b border-[#a8874e]/15 py-4' : 'bg-transparent py-4 md:py-6'}`}>
        <div className="max-w-[1920px] mx-auto px-6 md:px-8 flex justify-between items-center w-full">

          {/* Mobile Layout (Visible < md) */}
          <div className="flex md:hidden items-center justify-between w-full">
            <Link to="/" className="flex items-center gap-2.5">
              <img src="/logo.jpeg" alt="Hiranyam lotus" className="h-9 w-auto drop-shadow-[0_2px_4px_rgba(61,31,42,0.12)]" />
              <span className="font-['Cinzel'] text-lg tracking-[0.28em] font-light text-[#3d1f2a]">HIRANYAM</span>
            </Link>

            <div className="flex items-center gap-8">
              <button
                className="hover:opacity-70 transition-opacity active:scale-95 duration-150 cursor-pointer font-label text-[11px] tracking-[0.25em] uppercase text-[#3d1f2a]"
                onClick={() => setMobileMenuOpen(true)}
              >
                Menu
              </button>
              <button className="hover:opacity-70 transition-opacity active:scale-95 duration-150 relative cursor-pointer text-[#3d1f2a]">
                <ShoppingBag size={20} strokeWidth={1.5} />
                <span className="absolute -top-1.5 -right-1.5 bg-[#a8874e] text-white text-[9px] w-[15px] h-[15px] rounded-full flex items-center justify-center font-label">0</span>
              </button>
            </div>
          </div>

          {/* Desktop Layout (Visible >= md) */}
          <div className="hidden md:flex items-center justify-between w-full">
            <div className="flex items-center gap-12">
              <Link to="/" className="flex items-center gap-3 group">
                <img src="/logo.jpeg" alt="Hiranyam lotus" className="h-12 w-auto drop-shadow-[0_2px_6px_rgba(61,31,42,0.14)] transition-transform duration-500 group-hover:scale-105" />
                <span className="relative font-['Cinzel'] text-2xl tracking-[0.28em] font-light text-[#3d1f2a]">
                  HIRANYAM
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-transparent via-[#a8874e] to-transparent group-hover:w-full transition-all duration-500"></span>
                </span>
              </Link>
              <div className="hidden md:flex gap-8 font-['Cinzel'] tracking-[0.18em] uppercase text-xs">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      className={isActive
                        ? "text-[#a8874e] border-b border-[#a8874e] pb-1"
                        : "text-[#3d1f2a] hover:text-[#a8874e] transition-colors duration-300"
                      }
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="flex items-center gap-6 text-[#3d1f2a]">
              <button className="hover:opacity-70 transition-opacity active:scale-95 duration-150 relative cursor-pointer">
                <Search size={22} strokeWidth={1.5} />
              </button>
              <button className="hover:opacity-70 transition-opacity active:scale-95 duration-150 relative cursor-pointer">
                <ShoppingBag size={22} strokeWidth={1.5} />
                <span className="absolute -top-1 -right-1 bg-[#a8874e] text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-label">0</span>
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
            className="fixed inset-0 z-[200] regal-gradient flex flex-col px-6 py-4 md:hidden"
          >
            <div className="flex justify-between items-center w-full relative mb-12">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#3d1f2a] hover:opacity-70 transition-opacity"
              >
                <X size={28} strokeWidth={1} />
              </button>
              <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
                <img src="/logo.jpeg" alt="Hiranyam lotus" className="h-8 w-auto" />
                <span className="font-['Cinzel'] text-lg tracking-[0.28em] font-light text-[#3d1f2a]">HIRANYAM</span>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center flex-grow gap-10">
              <motion.img
                src="/logo.jpeg"
                alt="Hiranyam lotus"
                className="w-44 h-auto mb-4 drop-shadow-[0_8px_30px_rgba(210,154,158,0.35)]"
                initial={{ opacity: 0, scale: 0.85, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              />
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
                    className="font-['Cinzel'] text-3xl tracking-[0.28em] uppercase text-[#3d1f2a] hover:text-[#a8874e] transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 mb-4 text-center font-label text-[9px] tracking-[0.3em] text-[#3d1f2a]/40 uppercase">
              © 2024 HIRANYAM. All Rights Reserved.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
