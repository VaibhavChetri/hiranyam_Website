import { Link } from 'react-router-dom';

export default function Bespoke() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-[1400px] mx-auto min-h-screen">
      {/* Soft regal rose-gold ambient wash */}
      <div className="fixed inset-0 pointer-events-none -z-10 regal-gradient opacity-70" />
      
      {/* Hero Section */}
      <header className="text-center mb-24 relative z-10">
        <span className="font-label text-[10px] tracking-[0.4em] uppercase text-secondary mb-6 inline-block">By Invitation Only</span>
        <h1 className="font-display italic text-5xl md:text-7xl tracking-tight text-primary mb-6 leading-[1.05]">An Invitation to <br/><span className="gold-shimmer">the Atelier</span></h1>
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="w-16 h-px bg-gradient-to-r from-transparent to-[#a8874e]"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#d29a9e]"></span>
          <span className="w-16 h-px bg-gradient-to-l from-transparent to-[#a8874e]"></span>
        </div>
        <p className="font-display italic text-xl md:text-2xl text-primary/70 max-w-2xl mx-auto leading-relaxed">
          Step into a world where heritage meets hauté couture. Our private viewing sessions offer an intimate encounter with the finest hand-woven silks of India.
        </p>
      </header>

      {/* Asymmetric Layout: Form & Image */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Inquiry Form Container */}
        <section className="lg:col-span-7 bg-surface-container-lowest p-10 md:p-16 gild-border relative overflow-hidden shadow-[0_30px_80px_-40px_rgba(61,31,42,0.18)]">
          {/* Subtle rose-gold gradient overlay mimicking silk */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#d29a9e]/10 via-transparent to-[#a8874e]/10 pointer-events-none"></div>
          {/* Ornamental gold corners */}
          <div className="pointer-events-none absolute top-4 left-4 w-8 h-8 border-t border-l border-[#a8874e]/40"></div>
          <div className="pointer-events-none absolute top-4 right-4 w-8 h-8 border-t border-r border-[#a8874e]/40"></div>
          <div className="pointer-events-none absolute bottom-4 left-4 w-8 h-8 border-b border-l border-[#a8874e]/40"></div>
          <div className="pointer-events-none absolute bottom-4 right-4 w-8 h-8 border-b border-r border-[#a8874e]/40"></div>
          
          <form className="relative z-10 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative group">
                <label className="font-label text-[10px] uppercase tracking-[0.2em] text-secondary mb-2 block">Your Full Name</label>
                <input className="w-full bg-transparent border-t-0 border-x-0 border-b border-outline-variant focus:ring-0 outline-none focus:border-secondary transition-colors duration-500 py-3 font-body text-lg placeholder:text-primary/20" placeholder="e.g. Arabella Sterling" type="text" />
              </div>
              <div className="relative group">
                <label className="font-label text-[10px] uppercase tracking-[0.2em] text-secondary mb-2 block">Preferred Atelier</label>
                <select className="w-full bg-transparent border-t-0 border-x-0 border-b border-outline-variant focus:ring-0 outline-none focus:border-secondary transition-colors duration-500 py-3 font-body text-lg appearance-none cursor-pointer">
                  <option>London, Mayfair</option>
                  <option>Mumbai, Colaba</option>
                  <option>New York, Upper East Side</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative group">
                <label className="font-label text-[10px] uppercase tracking-[0.2em] text-secondary mb-2 block">Requested Date</label>
                <input className="w-full bg-transparent border-t-0 border-x-0 border-b border-outline-variant focus:ring-0 outline-none focus:border-secondary transition-colors duration-500 py-3 font-body text-lg" type="date" />
              </div>
              <div className="relative group">
                <label className="font-label text-[10px] uppercase tracking-[0.2em] text-secondary mb-2 block">Collection of Interest</label>
                <select className="w-full bg-transparent border-t-0 border-x-0 border-b border-outline-variant focus:ring-0 outline-none focus:border-secondary transition-colors duration-500 py-3 font-body text-lg appearance-none cursor-pointer">
                  <option>The Banaras Archive</option>
                  <option>Heritage Bridal</option>
                  <option>Bespoke Menswear</option>
                  <option>Limited Gold Collection</option>
                </select>
              </div>
            </div>
            
            <div className="relative group">
              <label className="font-label text-[10px] uppercase tracking-[0.2em] text-secondary mb-2 block">Personal Notes / Requirements</label>
              <textarea className="w-full bg-transparent border-t-0 border-x-0 border-b border-outline-variant focus:ring-0 outline-none focus:border-secondary transition-colors duration-500 py-3 font-body text-lg placeholder:text-primary/20 resize-none" placeholder="Specify any unique requirements or pieces you wish to see..." rows={3}></textarea>
            </div>
            
            {/* Large Gold CTA */}
            <button className="group relative w-full h-20 bg-secondary overflow-hidden flex items-center justify-center transition-all duration-500 active:scale-[0.98] cursor-pointer" type="button" onClick={(e) => e.preventDefault()}>
              <span className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
              <span className="relative font-headline text-lg tracking-[0.3em] uppercase text-on-secondary group-hover:text-surface transition-colors duration-500">Request Your Invitation</span>
            </button>
            <p className="text-center font-display italic text-primary/40 text-sm">
              Submission of this form does not guarantee an appointment. Our curators will contact you within 48 hours.
            </p>
          </form>
        </section>

        {/* Side Content / Brand Pedestal */}
        <aside className="lg:col-span-5 flex flex-col gap-12">
          <div className="relative h-[450px] w-full bg-surface-container overflow-hidden">
            <img className="w-full h-full object-cover opacity-80" alt="High-end emerald green silk fabric" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJT9sogjbJfEKOGnByEwvAUpTAma-R-lNCCRGz_1zGZWoj97YFLmgxL5b5TjDx3IjG4lvAvRTnrMfD33znsF89CRx8Na-XMF21zqRVSkkT1Xc2q6yGiB6a-ACdr7YYK4_-W40Pb29UaVVYaJWiMoFeDn1i49XPWT3SFbm3HdIlfh6BNbTZ315X4-I80FtNPLTw9pDeWu34nvrE0ArMorp_O9cFKsOXrgo7lYHMXHMJ50RU8drWelM7DOxSEtbaqEPx1pVCvcmJI65k" />
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
            <div className="absolute bottom-8 left-8 p-6 bg-surface-container-lowest border border-outline-variant/10">
              <span className="font-label text-[9px] uppercase tracking-[0.4em] text-secondary">Material Detail</span>
              <p className="font-headline text-lg text-primary mt-1">100% Pure Mulberry Silk</p>
            </div>
          </div>
          <div className="p-8 border-l border-secondary/20 bg-surface/50 backdrop-blur-sm">
            <h3 className="font-headline text-xl text-primary mb-4 tracking-wider">The Concierge Service</h3>
            <p className="font-body text-primary/70 leading-relaxed text-lg mb-6">
              Each private viewing is curated by a dedicated heritage expert. We offer personalized styling, light refreshments, and a full immersion into the weave of your choice.
            </p>
            <ul className="space-y-4 font-label text-[10px] uppercase tracking-[0.2em] text-secondary">
              <li className="flex items-center gap-3">
                <span className="w-4 h-[1px] bg-secondary"></span> 1:1 Curation Session
              </li>
              <li className="flex items-center gap-3">
                <span className="w-4 h-[1px] bg-secondary"></span> Historical Contextualization
              </li>
              <li className="flex items-center gap-3">
                <span className="w-4 h-[1px] bg-secondary"></span> Global Shipping Concierge
              </li>
            </ul>
          </div>
        </aside>
      </div>

      {/* Global Ateliers Map Section */}
      <section className="mt-32 relative z-10 w-full overflow-hidden">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-label text-[10px] uppercase tracking-[0.3em] text-secondary">Our Locations</span>
            <h2 className="font-headline text-3xl md:text-4xl text-primary mt-2">Global Ateliers</h2>
          </div>
          <p className="font-display italic text-lg text-primary/60 max-w-sm">
            Find us in the cultural epicenters of the world, where luxury meets legacy.
          </p>
        </div>
        
        {/* Full bleed grid layout for ultimate premium feel */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-0 ml-[-24px] md:ml-[-48px] w-[calc(100%+48px)] md:w-[calc(100%+96px)] max-w-none">
          
          {/* Hyderabad (Light) */}
          <div className="bg-[#f4e3d9] p-12 lg:p-16 group relative overflow-hidden transition-all duration-700 min-h-[420px] flex flex-col justify-between border-r border-[#3d1f2a]/10">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1572013343866-dfbb9b0a16bc?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"></div>
            <div className="absolute inset-0 bg-[#3d1f2a]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"></div>
            
            <div className="relative z-10 flex flex-col h-full transform group-hover:-translate-y-2 transition-transform duration-700">
              <div>
                <span className="font-label text-[10px] uppercase tracking-[0.2em] text-[#a8874e] group-hover:text-[#e8c887] transition-colors duration-700">South India</span>
                <h4 className="font-headline text-3xl text-[#3d1f2a] group-hover:text-[#fbf4f1] transition-colors duration-700 mt-3">Hyderabad</h4>
                <p className="font-body text-[#3d1f2a]/70 group-hover:text-[#fbf4f1]/80 transition-colors duration-700 mt-6 leading-relaxed max-w-[240px]">
                  Banjara Hills, Hyderabad. Where the Nizami heritage embraces our silk craftsmanship.
                </p>
              </div>
            </div>
            <div className="relative z-10 mt-12">
              <span className="inline-flex items-center gap-3 font-label text-[9px] uppercase tracking-[0.3em] text-[#a8874e] border-b border-[#a8874e]/30 pb-1 group-hover:text-[#fbf4f1] group-hover:border-[#fbf4f1]/50 transition-all duration-700 cursor-pointer">
                View Map
              </span>
            </div>
          </div>

          {/* London (Dark) */}
          <div className="bg-[#3d1f2a] p-12 lg:p-16 group relative overflow-hidden transition-all duration-700 min-h-[420px] flex flex-col justify-between border-r border-[#fbf4f1]/5">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"></div>
            <div className="absolute inset-0 bg-[#3d1f2a]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"></div>
            
            <div className="relative z-10 flex flex-col h-full transform group-hover:-translate-y-2 transition-transform duration-700">
              <div>
                <span className="font-label text-[10px] uppercase tracking-[0.2em] text-[#e8c887] transition-colors duration-700">United Kingdom</span>
                <h4 className="font-headline text-3xl text-[#fbf4f1] transition-colors duration-700 mt-3">London</h4>
                <p className="font-body text-[#fbf4f1]/70 group-hover:text-[#fbf4f1]/90 transition-colors duration-700 mt-6 leading-relaxed max-w-[240px]">
                  Mount Street, Mayfair. Where heritage meets modern British elegance.
                </p>
              </div>
            </div>
            <div className="relative z-10 mt-12">
              <span className="inline-flex items-center gap-3 font-label text-[9px] uppercase tracking-[0.3em] text-[#e8c887] border-b border-[#e8c887]/30 pb-1 group-hover:text-[#fbf4f1] group-hover:border-[#fbf4f1]/50 transition-all duration-700 cursor-pointer">
                View Map
              </span>
            </div>
          </div>

          {/* New Delhi (Light) */}
          <div className="bg-[#f4e3d9] p-12 lg:p-16 group relative overflow-hidden transition-all duration-700 min-h-[420px] flex flex-col justify-between border-r border-[#3d1f2a]/5">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1587474260580-5a396264e106?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"></div>
            <div className="absolute inset-0 bg-[#3d1f2a]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"></div>
            
            <div className="relative z-10 flex flex-col h-full transform group-hover:-translate-y-2 transition-transform duration-700">
              <div>
                <span className="font-label text-[10px] uppercase tracking-[0.2em] text-[#a8874e] group-hover:text-[#e8c887] transition-colors duration-700">North India</span>
                <h4 className="font-headline text-3xl text-[#3d1f2a] group-hover:text-[#fbf4f1] transition-colors duration-700 mt-3">New Delhi</h4>
                <p className="font-body text-[#3d1f2a]/70 group-hover:text-[#fbf4f1]/80 transition-colors duration-700 mt-6 leading-relaxed max-w-[240px]">
                  Mehrauli, New Delhi. The epicenter of couture and majestic bridal grandeur.
                </p>
              </div>
            </div>
            <div className="relative z-10 mt-12">
              <span className="inline-flex items-center gap-3 font-label text-[9px] uppercase tracking-[0.3em] text-[#a8874e] border-b border-[#a8874e]/30 pb-1 group-hover:text-[#fbf4f1] group-hover:border-[#fbf4f1]/50 transition-all duration-700 cursor-pointer">
                View Map
              </span>
            </div>
          </div>

          {/* New York (Dark) */}
          <div className="bg-[#3d1f2a] p-12 lg:p-16 group relative overflow-hidden transition-all duration-700 min-h-[420px] flex flex-col justify-between">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"></div>
            <div className="absolute inset-0 bg-[#3d1f2a]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"></div>
            
            <div className="relative z-10 flex flex-col h-full transform group-hover:-translate-y-2 transition-transform duration-700">
              <div>
                <span className="font-label text-[10px] uppercase tracking-[0.2em] text-[#e8c887] transition-colors duration-700">United States</span>
                <h4 className="font-headline text-3xl text-[#fbf4f1] transition-colors duration-700 mt-3">New York</h4>
                <p className="font-body text-[#fbf4f1]/70 group-hover:text-[#fbf4f1]/90 transition-colors duration-700 mt-6 leading-relaxed max-w-[240px]">
                  Madison Avenue, Manhattan. Architectural silk and fast-paced urban luxury.
                </p>
              </div>
            </div>
            <div className="relative z-10 mt-12">
              <span className="inline-flex items-center gap-3 font-label text-[9px] uppercase tracking-[0.3em] text-[#e8c887] border-b border-[#e8c887]/30 pb-1 group-hover:text-[#fbf4f1] group-hover:border-[#fbf4f1]/50 transition-all duration-700 cursor-pointer">
                View Map
              </span>
            </div>
          </div>

        </div>
        
        {/* Stylized Global Map Placeholder */}
        <div className="h-[300px] bg-primary relative overflow-hidden ml-[-24px] md:ml-[-48px] w-[calc(100%+48px)] md:w-[calc(100%+96px)] max-w-none border-t border-[#fbf4f1]/10">
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[length:24px_24px]"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Symbolic dots for ateliers */}
            <div className="relative w-full h-full max-w-5xl mx-auto">
              <div className="absolute top-1/3 left-[20%] w-2 h-2 bg-[#a8874e] rounded-full ring-4 ring-[#a8874e]/20 shadow-[0_0_15px_#a8874e]"></div>
              <div className="absolute top-1/4 left-[45%] w-2 h-2 bg-[#a8874e] rounded-full ring-4 ring-[#a8874e]/20 shadow-[0_0_15px_#a8874e]"></div>
              <div className="absolute top-1/2 right-[30%] w-2 h-2 bg-[#a8874e] rounded-full ring-4 ring-[#a8874e]/20 shadow-[0_0_15px_#a8874e]"></div>
              <div className="absolute top-[55%] right-[25%] w-2 h-2 bg-[#a8874e] rounded-full ring-4 ring-[#a8874e]/20 shadow-[0_0_15px_#a8874e]"></div>
              
              <svg className="absolute inset-0 w-full h-full stroke-[#a8874e]/20 fill-transparent pointer-events-none" viewBox="0 0 1000 300">
                <path d="M200 100 Q 300 40 450 75 T 700 150 Q 800 110 750 165" strokeDasharray="3 6" strokeWidth="1.5"></path>
              </svg>
            </div>
          </div>
          <div className="absolute bottom-8 right-12 flex items-center gap-3">
            <span className="material-symbols-outlined text-[#a8874e] text-lg">public</span>
            <span className="font-label text-[10px] tracking-[0.4em] uppercase text-[#fbf4f1]/50">Global Logistics Hubs</span>
          </div>
        </div>
      </section>
    </div>
  );
}
