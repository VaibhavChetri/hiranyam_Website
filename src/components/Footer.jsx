import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="flex flex-col items-center text-center w-full bg-[#f4f4f0] dark:bg-[#00281d] py-24 px-12 border-t border-[#003527]/5">
      <div className="font-['Cinzel'] text-3xl tracking-[0.3em] mb-8 text-[#003527] dark:text-[#faf9f5]">
        HIRANYAM
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16 w-full max-w-4xl font-['EB_Garamond'] text-sm italic tracking-wide">
        <Link to="/collection" className="text-[#003527]/60 dark:text-[#faf9f5]/60 hover:text-[#755b00] transition-colors">The Silk Archive</Link>
        <Link to="/privacy" className="text-[#003527]/60 dark:text-[#faf9f5]/60 hover:text-[#755b00] transition-colors">Privacy Policy</Link>
        <Link to="/terms" className="text-[#003527]/60 dark:text-[#faf9f5]/60 hover:text-[#755b00] transition-colors">Terms of Service</Link>
        <Link to="/contact" className="text-[#003527]/60 dark:text-[#faf9f5]/60 hover:text-[#755b00] transition-colors">Contact</Link>
      </div>
      
      <div className="w-24 h-[1px] bg-primary/10 mb-8"></div>
      
      <p className="font-label text-[10px] tracking-[0.2em] text-primary/40 uppercase">
        © {new Date().getFullYear()} HIRANYAM. ALL RIGHTS RESERVED.
      </p>
    </footer>
  );
}
