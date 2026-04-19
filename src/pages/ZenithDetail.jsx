import { Link } from 'react-router-dom';

export default function ZenithDetail() {
  return (
    <div className="pt-24 min-h-screen">
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Left: Editorial Image Series */}
        <section className="w-full md:w-3/5 lg:w-2/3 bg-surface-container-low overflow-y-auto">
          <div className="flex flex-col gap-2">
            <div className="relative group cursor-zoom-in">
              <img 
                className="w-full h-auto object-cover" 
                alt="Cinematic shot of deep emerald green silk with fine gold zari work" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0FnLuFVstlV4l3BAcUYovNlgzkwnGvc7canfF_reTMh3J7oVWlusUhlW0eD0whuxvOhgRPC88S_r8f8eEb9MLhllMjDsrY6i3P4-XFl5VrR4lqeTCPJLa-eYrzLE23SnKm_Ppwd7GO2K7WKcVR7wVISKT03Q5nhuUCoaTmBesk2VfV6iVhUXL_8bpmOVgtZPXUXd-eHFSVx19Z6pLnJNPzxxjAXpPcg_bSJqUelaeMu1-Ai5yUlO9ozaeEJguDU1KbZOGgwQ_NJZB"
              />
              <div className="absolute bottom-8 left-8">
                <span className="font-label text-[10px] uppercase tracking-[0.3em] bg-surface/80 backdrop-blur-sm px-4 py-2 text-primary">Plate No. 001 — The Weave</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <img 
                className="w-full aspect-[4/5] object-cover" 
                alt="Macro detail of the hand-loomed gold threads in the Zenith weave" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8beZdPOWE8BR3O1O-e1dEVdRom5VJW7_78ipsSov8gag6JtEZNc8YHpqdwj3PKCdt4okWegLxaqSPVigRAbl9aBFFelkEdHx8Pn0yFuAtG8NdHe0zWcM9tlEuqSEWnwDtfk3VLdnxQKbv8hYkWYIMvbd8d-xqJ-DoUssJZGaYuYGjQXGnUvNV-7U3-qPdgx6X4Iz5UAJpHNkoFp_3NcyimuwFyr9r-w0YcNDm_YWlTIa1MG3xA9hjmdQNWNI_igeaqAyEja9TPTRD"
              />
              <img 
                className="w-full aspect-[4/5] object-cover" 
                alt="Rich, heavy ripples of high-denier mulberry silk" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxZWzo5r4rxkI3bqDGBqsfJZFdyL6tS8-fArXLqhMr_aE_UwuRZp7XWyuSRU33WqICfFkhyqzk51_v06iHS-YYzius-alnQ3WzbKWQQFsCqNsm5u356H8PtGByydJZuk4NLOrREYWOEs5SA-q0idzZuq5ITBJN8pn0Skm23-XooW55vfr_8NqYHGrWDMon9o5Eec1Rb0jTgRjO0dOPfhL9_wEKmn6hYKFWems40_xlEcTNdQ6ia7R1BCfBFkjG4VrzIQhUKbHCfYXA"
              />
            </div>
            <div className="relative">
              <img 
                className="w-full h-auto object-cover" 
                alt="The Kanchipuram Zenith displayed in an atmospheric editorial floor-drape shot" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYrn-X577V_ad1O7bKMxPgJsmVvcL79RIKPA4ttraC0w5G6RmSF-n6Sq03ap5Wdz7Tt84jR3rOmBUpr5JKe7nZ87RvCkDr0LrwjpuDBGCGzS2B6_4ZSJSPAHCtnHa3C1v_hpnOE9LobQ8JJKxbulR-mlIKjquR445VERGOEq0StWcWsbyIF5u1Z66Fhyo5LXRL0i_f2TYUxQlaCS3pCA1gfIMLK0e3TmYFsSKFUrnVrU9mPViwhmuaBdsbiOilDuw5L_7Xy1qPPUnG"
              />
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
            <p className="font-body text-lg leading-relaxed text-on-surface-variant mb-12">
              A masterpiece of artisanal restraint. Hand-loomed over 400 hours using pure mulberry silk and 24-karat gold dipped zari, the Zenith represents the pinnacle of the Hiranyam archive.
            </p>
            <div className="flex flex-col gap-4 mb-16">
              <Link to="/bespoke" className="w-full bg-primary text-on-primary py-5 px-8 font-headline tracking-[0.2em] uppercase text-xs flex items-center justify-center gap-3 hover:bg-primary-container transition-colors active:scale-[0.98] duration-150">
                Request Private Viewing
                <span className="material-symbols-outlined text-sm">calendar_month</span>
              </Link>
              <button className="w-full border border-primary text-primary py-5 px-8 font-headline tracking-[0.2em] uppercase text-xs hover:bg-surface-container-low transition-colors active:scale-[0.98] duration-150 cursor-pointer">
                Add to Bag
              </button>
            </div>

            {/* Details Accordions */}
            <div className="space-y-0">
              {/* Accordion 1 */}
              <div className="border-t py-6 border-[#8c3a48]/30">
                <details className="group" open>
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <h3 className="font-headline text-sm tracking-widest uppercase text-secondary">The Thread</h3>
                    <span className="material-symbols-outlined text-secondary transition-transform group-open:rotate-180">expand_more</span>
                  </summary>
                  <div className="pt-6 text-on-surface-variant space-y-4">
                    <div className="flex justify-between items-start">
                      <span className="font-label text-[10px] uppercase tracking-wider">Material</span>
                      <span className="font-body italic text-sm">100% Pure Mulberry Silk</span>
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
              <div className="border-t py-6 border-[#8c3a48]/30">
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
              <div className="border-t border-b py-6 border-[#8c3a48]/30">
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <h3 className="font-headline text-sm tracking-widest uppercase text-secondary">The Heritage</h3>
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
            <div className="mt-16 pt-16 border-t border-[#8c3a48]/20">
              <p className="font-display italic text-2xl text-primary/40 leading-relaxed">
                "To wear a Zenith is to carry the weight of three thousand years of silent dedication."
              </p>
              <div className="mt-4 font-label text-[10px] uppercase tracking-[0.2em] text-secondary">
                — The Curators Note
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
              alt="Detailed shot of the traditional wooden pit loom used for Hiranyam heritage pieces" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-QMqndOhXlXPm60ruYtkDz3p-HBugbMIlLqyC8jQdgUs_O6WxE7lhyTcXpyIyjvd-rV4uFajNzdysYBp22GYzfM78hNGwT40RSA9MbpSfrCsggmlkAtfoW5r-A6FK64ch9QVvXPLTSEXvyaLtlo7XbuLvOXwgek16-LBRB8QfLoj56GpoFQykDzm_JSAm6-z_8lhPkzeW9_Oi2Y9wx3doOQmxZC2pT5LDT-BQFv47TXDlYk_a8j7gVzP8jybC_U7ugdAPxrh3wdJH"
            />
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-primary p-8 flex flex-col justify-end hidden lg:flex">
                <span className="font-display text-4xl text-on-primary italic">Provenance</span>
                <span className="font-label text-[10px] uppercase tracking-widest text-on-primary/60 mt-4">Hand-loomed in Kanchipuram</span>
            </div>
          </div>
          <div>
            <span className="font-label text-xs uppercase tracking-[0.4em] text-secondary mb-8 block">The Archives</span>
            <h2 className="font-display text-5xl md:text-6xl mb-8 leading-tight">Preserving the <br/><span className="italic">Imperial Drape</span></h2>
            <p className="font-body text-lg text-on-surface-variant leading-loose mb-12">
              Every thread in the Kanchipuram Zenith is tested for tensile strength and metallic purity. We believe that luxury is not just what you see, but what survives the passage of time. Our heritage pieces are designed to be heirlooms, passing from mother to daughter as living chronicles of family history.
            </p>
            <Link to="/collection" className="inline-flex items-center gap-4 font-headline text-sm tracking-[0.2em] uppercase border-b border-primary pb-2 transition-all hover:text-[#8c3a48] hover:border-[#8c3a48]">
              Discover the Archive
              <span className="material-symbols-outlined">arrow_right_alt</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
