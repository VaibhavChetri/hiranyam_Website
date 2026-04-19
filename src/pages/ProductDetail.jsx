import { Link } from 'react-router-dom';

export default function ProductDetail() {
  return (
    <div className="pt-24 min-h-screen">
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Left: Editorial Image Series */}
        <section className="w-full md:w-3/5 lg:w-2/3 bg-surface-container-low overflow-y-auto">
          <div className="flex flex-col gap-2">
            <div className="relative group cursor-zoom-in">
              <img 
                className="w-full h-auto object-cover" 
                alt="Close-up of emerald silk with gold zari" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAe0qJK8GahrkCVhXxcNsB6-bzakHE246Kyz7LDarnp4K2UhXXXyzwbR7I8zrxQfhUbIkIX_ak7VU6BZqAkXJnE1m-Aq5awtsB-DaXbtA01HbAyOUS6mh7FpW2_ZwaCr_CKSeT0_cM1KunlWzH-qrRRNMmAWroc-3ydkqDPATTIYP117ZjjcgqQzijr1AmoXiWbsDq2BGcI1HqbTuyCUXGuY4FnqtmBaE_whDKH-i3niwLEjLkIKvQcQ-SjqFsVHNus9nMM3aMFo05q"
              />
              <div className="absolute bottom-8 left-8">
                <span className="font-label text-[10px] uppercase tracking-[0.3em] bg-surface/80 backdrop-blur-sm px-4 py-2 text-primary border-l-2 border-crimson-accent" style={{ borderColor: '#8c3a48' }}>Plate No. 001 — The Weave</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <img 
                className="w-full aspect-[4/5] object-cover" 
                alt="Micro detail of pure 24k gold zari threads on traditional South Indian silk" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHnOnlnDGdb4kFutk9Nbs-oWMwYC0Oic0JApdB2TyXCUlSnY5LwXKdnecHtZdbo4KpeBkknKMzIMo0Iw51zXUM2Voh9xBdx9d2PYzRtdmY_F8AORN7BMMlmSx66JRvgZTMP0pnxxJbqVzVWqg2cJ_F1eAnvo4HTVaAsTGOVwExtRHWYSss1wlcMBynDoP07mXTnFjj05pau9nMYXlNfiQniBr8MSdYL4WERGG_ge8-ZrAeht0oIoZPOjakCzXLmkh_5-69wkG2yIZ4"
              />
              <img 
                className="w-full aspect-[4/5] object-cover" 
                alt="Liquid drape of emerald Pattu silk showing natural sheen" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAe0qJK8GahrkCVhXxcNsB6-bzakHE246Kyz7LDarnp4K2UhXXXyzwbR7I8zrxQfhUbIkIX_ak7VU6BZqAkXJnE1m-Aq5awtsB-DaXbtA01HbAyOUS6mh7FpW2_ZwaCr_CKSeT0_cM1KunlWzH-qrRRNMmAWroc-3ydkqDPATTIYP117ZjjcgqQzijr1AmoXiWbsDq2BGcI1HqbTuyCUXGuY4FnqtmBaE_whDKH-i3niwLEjLkIKvQcQ-SjqFsVHNus9nMM3aMFo05q"
              />
            </div>
            <div className="relative">
              <img 
                className="w-full h-auto object-cover" 
                alt="Traditional geometric temple borders in gold zari" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvrMmY1uJqKzEl7fxzeApAqNYyLy517raWyyrzTiWQ7hD7JuhEqL3iQApX5f2D_MSwi8nd_aXT5hHh-Yol8vBdX3HheueP51Vej8LrX34frLtPmnkzxLt_HvLFXQNkHhFhqqCM6mP0Gmr38srP70WzXJvLMOWFEKLnwBJPsTfJyFEB2WqZUGo_VMfLJ3eUIYGDg9bgAmlAnRV4uwhU7YgTXrV4Y56-MMr67gnZCUWpAwYBEaMdfqj-NZC1RlV8CEv6JDwHIkQpc1XC"
              />
              <div className="absolute inset-x-0 bottom-0 h-1 bg-crimson-accent/20"></div>
            </div>
          </div>
        </section>

        {/* Right: Sticky Content Panel */}
        <aside className="w-full md:w-2/5 lg:w-1/3 md:sticky md:top-24 md:h-[calc(100vh-6rem)] bg-surface border-l border-outline-variant/15 flex flex-col p-8 md:p-12 overflow-y-auto no-scrollbar">
          <div className="mb-12">
            <nav className="flex items-center gap-2 mb-8 text-[10px] font-label uppercase tracking-widest text-outline">
              <Link to="/collection" className="hover:text-secondary">Collection</Link>
              <span className="text-xs">/</span>
              <span className="text-primary">Heritage</span>
            </nav>
            <h1 className="font-display text-5xl md:text-7xl leading-tight font-light mb-6">
              Kanchipuram <br/>
              <span className="italic">Zenith</span>
            </h1>
            <div className="flex justify-between items-baseline mb-12">
              <span className="font-display italic text-2xl text-secondary">On Inquiry</span>
              <span className="font-label text-[10px] tracking-widest text-outline uppercase">Product ID: HKZ-2024-09</span>
            </div>
            
            {/* Crimson Thread Divider */}
            <div className="w-8 h-px bg-crimson-accent mb-12" style={{ backgroundColor: '#8c3a48' }}></div>
            
            <p className="font-body text-lg leading-relaxed text-on-surface-variant mb-12">
              A masterpiece of artisanal restraint in <strong>South Indian Silk</strong>. Hand-loomed over 400 hours using pure mulberry silk and 24-karat gold dipped zari, the Zenith represents the absolute pinnacle of our <strong>Pattu heritage</strong> archive.
            </p>
            
            <div className="flex flex-col gap-4 mb-16">
              <Link to="/bespoke" className="btn-glow-crimson w-full bg-primary text-on-primary py-5 px-8 font-headline tracking-[0.2em] uppercase text-xs flex items-center justify-center gap-3 hover:bg-primary-container transition-all active:scale-[0.98] duration-150">
                Request Private Viewing
                <span className="material-symbols-outlined text-sm">calendar_month</span>
              </Link>
              <button className="w-full border border-primary text-primary py-5 px-8 font-headline tracking-[0.2em] uppercase text-xs hover:bg-surface-container-low transition-colors active:scale-[0.98] duration-150 group cursor-pointer">
                <span className="group-hover:text-crimson-accent transition-colors">Add to Bag</span>
              </button>
            </div>

            {/* Details Accordions */}
            <div className="space-y-0">
              {/* Accordion 1 */}
              <div className="border-t border-secondary/30 py-6">
                <details className="group" open>
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <h3 className="font-headline text-sm tracking-widest uppercase text-secondary">The Pattu Thread</h3>
                    <span className="material-symbols-outlined text-secondary transition-transform group-open:rotate-180">expand_more</span>
                  </summary>
                  <div className="pt-6 text-on-surface-variant space-y-4">
                    <div className="flex justify-between items-start">
                      <span className="font-label text-[10px] uppercase tracking-wider">Material</span>
                      <span className="font-body italic text-sm">100% Pure Mulberry Pattu Silk</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="font-label text-[10px] uppercase tracking-wider">Zari Quality</span>
                      <span className="font-body italic text-sm">Pure 24k Gold Zari</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="font-label text-[10px] uppercase tracking-wider">Weight</span>
                      <span className="font-body italic text-sm">840 Grams</span>
                    </div>
                  </div>
                </details>
              </div>

              {/* Accordion 2 */}
              <div className="border-t border-secondary/30 py-6">
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <h3 className="font-headline text-sm tracking-widest uppercase text-secondary">The Weave</h3>
                    <span className="material-symbols-outlined text-secondary transition-transform group-open:rotate-180">expand_more</span>
                  </summary>
                  <div className="pt-6 text-on-surface-variant space-y-4">
                    <div className="flex justify-between items-start">
                      <span className="font-label text-[10px] uppercase tracking-wider">Technique</span>
                      <span className="font-body italic text-sm">Korvai Weaving</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="font-label text-[10px] uppercase tracking-wider">Loom Type</span>
                      <span className="font-body italic text-sm">Traditional Pit Loom</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="font-label text-[10px] uppercase tracking-wider">Artisan</span>
                      <span className="font-body italic text-sm">Master Weaver (3rd Gen)</span>
                    </div>
                  </div>
                </details>
              </div>

              {/* Accordion 3 */}
              <div className="border-t border-b border-secondary/30 py-6">
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <h3 className="font-headline text-sm tracking-widest uppercase text-secondary">South Indian Heritage</h3>
                    <span className="material-symbols-outlined text-secondary transition-transform group-open:rotate-180">expand_more</span>
                  </summary>
                  <div className="pt-6 text-on-surface-variant space-y-4">
                    <div className="flex justify-between items-start">
                      <span className="font-label text-[10px] uppercase tracking-wider">Origin</span>
                      <span className="font-body italic text-sm">Kanchipuram, Tamil Nadu</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="font-label text-[10px] uppercase tracking-wider">Warranty</span>
                      <span className="font-body italic text-sm">3-Generation Warranty</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="font-label text-[10px] uppercase tracking-wider">Certification</span>
                      <span className="font-body italic text-sm">Silk Mark &amp; GI Tagged</span>
                    </div>
                  </div>
                </details>
              </div>
            </div>

            {/* Editorial Sidebar Quote */}
            <div className="mt-16 pt-16 border-t border-outline-variant/10">
              <p className="font-display italic text-2xl text-primary/40 leading-relaxed">
                "To wear a Zenith is to carry the weight of three thousand years of silent dedication."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-crimson-accent rounded-full" style={{ backgroundColor: '#8c3a48' }}></span>
                <div className="font-label text-[10px] uppercase tracking-[0.2em] text-secondary">
                  — The Curators Note
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Complementary Curator Section */}
      <section className="bg-surface-container-low py-32 px-12 md:px-24">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <img 
              className="w-full h-[600px] object-cover" 
              alt="Liquid drape of emerald Pattu silk against a dark wood background" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvrMmY1uJqKzEl7fxzeApAqNYyLy517raWyyrzTiWQ7hD7JuhEqL3iQApX5f2D_MSwi8nd_aXT5hHh-Yol8vBdX3HheueP51Vej8LrX34frLtPmnkzxLt_HvLFXQNkHhFhqqCM6mP0Gmr38srP70WzXJvLMOWFEKLnwBJPsTfJyFEB2WqZUGo_VMfLJ3eUIYGDg9bgAmlAnRV4uwhU7YgTXrV4Y56-MMr67gnZCUWpAwYBEaMdfqj-NZC1RlV8CEv6JDwHIkQpc1XC"
            />
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-primary p-8 flex flex-col justify-end hidden lg:flex border-2 border-[#8c3a48] shadow-[0_30px_80px_-20px_rgba(61,31,42,0.45)]">
              <span className="font-display text-4xl text-on-primary italic">Authenticity</span>
              <span className="font-label text-[10px] uppercase tracking-widest text-on-primary/60 mt-4">Verified by Hiranyam</span>
            </div>
          </div>
          <div>
            <span className="font-label text-xs uppercase tracking-[0.4em] text-secondary mb-8 flex items-center gap-4">
              <span className="w-12 h-px bg-crimson-accent/40"></span>
              The Archives
            </span>
            <h2 className="font-display text-5xl md:text-6xl mb-8 leading-tight">Preserving the <br/><span className="italic text-crimson-accent" style={{ color: '#8c3a48' }}>Imperial Drape</span></h2>
            <p className="font-body text-lg text-on-surface-variant leading-loose mb-12">
              Every thread in the Kanchipuram Zenith is tested for tensile strength and metallic purity. We believe that true luxury is defined by the <strong>South Indian Pattu</strong> tradition—not just what you see, but what survives the passage of time. Our heritage pieces are designed to be heirlooms, passing from mother to daughter as living chronicles of family history.
            </p>
            <Link to="/collection" className="inline-flex items-center gap-4 font-headline text-sm tracking-[0.2em] uppercase border-b border-primary pb-2 hover:text-crimson-accent hover:border-crimson-accent transition-all group">
              Discover the Archive
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
