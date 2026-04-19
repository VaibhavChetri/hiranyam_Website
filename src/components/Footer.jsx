import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative flex flex-col items-center text-center w-full silk-gradient text-[#fbf4f1] py-24 px-12 overflow-hidden">
      {/* Ornamental gold hairline at the top */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#a8874e] to-transparent"></div>

      {/* Soft rose glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl" style={{ background: 'radial-gradient(circle, #d29a9e 0%, transparent 70%)' }}></div>

      <img src="/logo.png" alt="Hiranyam lotus" className="relative z-10 h-20 w-auto mb-5 drop-shadow-[0_6px_25px_rgba(210,154,158,0.45)]" />
      <div className="relative z-10 font-['Cinzel'] text-3xl tracking-[0.35em] mb-4">
        <span className="gold-shimmer">HIRAṆYAM</span>
      </div>
      <div className="relative z-10 font-display italic text-sm text-[#fbf4f1]/60 tracking-[0.2em] mb-12">
        — WOVEN IN GOLD, DRAPED IN HERITAGE —
      </div>

      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-12 mb-16 w-full max-w-4xl font-['EB_Garamond'] text-sm italic tracking-wide">
        <Link to="/collection" className="text-[#fbf4f1]/70 hover:text-[#e8c887] transition-colors">The Silk Archive</Link>
        <Link to="/privacy" className="text-[#fbf4f1]/70 hover:text-[#e8c887] transition-colors">Privacy Policy</Link>
        <Link to="/terms" className="text-[#fbf4f1]/70 hover:text-[#e8c887] transition-colors">Terms of Service</Link>
        <Link to="/contact" className="text-[#fbf4f1]/70 hover:text-[#e8c887] transition-colors">Contact</Link>
      </div>

      <div className="relative z-10 w-24 h-[1px] bg-gradient-to-r from-transparent via-[#a8874e] to-transparent mb-8"></div>

      <p className="relative z-10 font-label text-[10px] tracking-[0.3em] text-[#fbf4f1]/40 uppercase">
        © {new Date().getFullYear()} HIRAṆYAM. ALL RIGHTS RESERVED.
      </p>
    </footer>
  );
}
