import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <header className="relative min-h-screen flex flex-col justify-center px-8 pt-32 md:pt-40 overflow-hidden regal-gradient">
        {/* Ornamental framing corners (gold) */}
        <div className="pointer-events-none absolute top-40 md:top-48 left-6 md:left-10 w-16 h-16 border-t border-l border-[#a8874e]/40"></div>
        <div className="pointer-events-none absolute top-40 md:top-48 right-6 md:right-10 w-16 h-16 border-t border-r border-[#a8874e]/40"></div>

        <div className="grid grid-cols-12 gap-8 items-center h-full max-w-screen-2xl mx-auto w-full">
          <div className="col-span-12 md:col-span-7 z-10">

            <h1 className="font-display italic font-light text-6xl md:text-9xl leading-[1.05] text-primary mb-8 max-w-2xl">
              A Legacy <br/> <span className="pl-24 gold-shimmer">Reborn in Rose</span>
            </h1>
            <p className="font-display italic text-lg md:text-xl text-primary/60 max-w-xl mb-10 leading-relaxed">
              Where petals of heritage unfold into heirlooms &mdash; woven in blush, gilded in gold.
            </p>
            <div className="flex items-center gap-12 mt-12">
              <button className="group relative bg-primary text-on-primary px-12 py-4 font-headline tracking-[0.25em] text-xs uppercase overflow-hidden cursor-pointer">
                <span className="absolute inset-0 bg-gradient-to-r from-[#a8874e] to-[#d29a9e] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
                <span className="relative z-10 group-hover:text-primary transition-colors duration-500">Discover the Loom</span>
              </button>
              <div className="hidden md:block w-32 h-[1px] bg-gradient-to-r from-[#a8874e] via-[#d29a9e] to-transparent"></div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-5 relative mt-12 md:mt-0">
            <div className="aspect-[3/4] w-full bg-surface-container overflow-hidden gild-border">
              <img
                className="w-full h-full object-cover grayscale-[0.1] hover:grayscale-0 transition-all duration-1000"
                alt="Close-up of blush rose silk fabric with gold embroidery"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAjepFWBe6158luIFk4ncl2jryei0TN9cNrzzUbg23t_DaNeh_sb2f0ye676MqCm9VNFgEP-9bXx58z59CkwVwsZpVNTD4W65QYiDm7F22kWpX95KjY09ev4olA1okYmHf40nRD9pYKcuYpMiZV1pdCgI8Np0ngn_oPCJ1Nq96IcbsM57jmRqaIBnXtqhpNv4LmwMQkXnvcv4kCIeTC0JQ1SBMRGFoNDxcbBx_tec8e5dxosPcYPK03pB3SixjmsLAAceNYsKWscZL"
              />
            </div>
            {/* Artistic Overlap */}
            <div className="absolute -bottom-12 -left-12 w-2/3 aspect-square bg-surface-container-low hidden md:block gild-border p-2 shadow-[0_20px_60px_-20px_rgba(61,31,42,0.25)]">
              <img
                className="w-full h-full object-cover"
                alt="Intricate gold silk weave patterns on rose ivory background"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrK5dBfuwTOwP7AR_8hkr5Nlcsvg3xIGzGceWPh4nGAk__xCR0BZ9FU4oTjWZ-GIr4J-8k8GQOlRrhl5eTinx0Wl1cbOR6SxPpAHvkV1AwoPF8IMpWrQf7apHNYg627n9VfmTAnLt5v1j-gG1thMA8P4urc3RC45ufmYwkSa0_U34XeIAJn1zHDBs07OgEB7b_UyAKTV2KMjT1rx8GD9gy3EHZXMKeol7KBmAeYd7CIxak1ddkOdXrzL6VmmEbOCYClquAeo-DdWB8"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Philosophy Bar */}
      <section className="w-full py-16 bg-surface-bright border-y border-[#a8874e]/20 overflow-hidden relative">
        <div className="flex whitespace-nowrap animate-infinite-scroll">
          {[1, 2].map((i) => (
            <div key={i} className="flex gap-24 items-center px-12">
              <span className="font-headline text-secondary tracking-[0.3em] uppercase text-sm">Woven from the breath of gods</span>
              <span className="w-2 h-2 rounded-full bg-[#d29a9e]"></span>
              <span className="font-headline text-secondary tracking-[0.3em] uppercase text-sm">Every thread a silent poem</span>
              <span className="w-2 h-2 rounded-full bg-[#d29a9e]"></span>
              <span className="font-headline text-secondary tracking-[0.3em] uppercase text-sm">Heritage distilled in silk</span>
              <span className="w-2 h-2 rounded-full bg-[#d29a9e]"></span>
              <span className="font-headline text-secondary tracking-[0.3em] uppercase text-sm">The architecture of grace</span>
              <span className="w-2 h-2 rounded-full bg-[#d29a9e]"></span>
            </div>
          ))}
        </div>
      </section>

      {/* Masterpiece Grid */}
      <section className="py-32 px-8 max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-24">
          <div>
            <span className="font-label text-[10px] tracking-[0.4em] uppercase text-secondary mb-3 block">The Curated Archive</span>
            <h2 className="font-display italic text-5xl md:text-6xl tracking-tight text-primary">The Masterpiece Selection</h2>
          </div>
          <Link to="/collection" className="font-label text-xs tracking-[0.25em] uppercase text-secondary mt-4 md:mt-0 hover:text-primary transition-colors border-b border-[#a8874e]/40 pb-1">
            View All Creations
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Product Card 1 */}
          <div className="group relative">
            <Link to="/zenith" className="block aspect-[2/3] overflow-hidden bg-surface-container-low mb-6 relative gild-border">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="Blush rose Kanchipuram silk saree with heavy gold border"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4pRPnoNEe_VtmyaA-7ZAbh7VRVtzzmWQRkyiltLkcKTEY9TIAoXAH9wiVy3gvWS_eLjl7iB0qyLLZhtSKUqeRUV4EhDiGmnOSfHdODVEH-qAByChhBeAFzVbblg7jA814aGrkcvOZr3dpi-FD2kubpkCReMsVBywy4zjQDXL9GqUiubNLoyPaFg1BJub5wLRCW2fLB_8YcFCxpS8uUjdD8kHWgDMCkh0UxO7rWKp6GDUXBQ7ycYbI3BYN8z0KzNEdsIudU0ZyZF_e"
              />
              <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4 px-6">
                <button className="bg-surface text-primary font-headline text-[10px] tracking-widest uppercase py-3 px-6 w-1/2 cursor-pointer z-10 hover:bg-[#f4dcdd]">Enquire</button>
                <button className="bg-[#a8874e] text-on-primary font-headline text-[10px] tracking-widest uppercase py-3 px-6 w-1/2 cursor-pointer z-10 hover:bg-[#d29a9e] hover:text-[#3d1f2a] transition-colors">Add to Bag</button>
              </div>
            </Link>
            <div className="space-y-2">
              <h3 className="font-display italic text-2xl text-primary">Kanchipuram Zenith</h3>
              <p className="font-label text-[10px] tracking-widest text-secondary uppercase">Pure Mulberry Silk &bull; 24K Gold Zari</p>
              <p className="font-body italic text-primary/70">A symphony of temple motifs bathed in rose light.</p>
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="group relative md:translate-y-12">
            <Link to="/product" className="block aspect-[2/3] overflow-hidden bg-surface-container-low mb-6 relative gild-border">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="Radiant gold Mysore silk saree shimmering in studio light"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzDTPHGdUJEriuFn5ElQZy4V5RRAdzZCJs21nz-PSRCFoi_Cx_Q-3Uxld-29XcSkYPxA2sXRO0ayxzwJ0ETkKimEpAWxc47pKU9CxMH1IM2viNHr_NJYxKC9wZoMXPwu3Z7DcsbkyHcsyyiDZngR9UNL5PIqlKhMTT-5aApb0nv0PiYChP86ZdydFnnvYfd4yiEuHnQ1EwZM6D2l4rXcBAcGi5d5vXBWZ4KOkko6XqVy8wtiazRblFA3ayULLNN29HmuDlS1u0hwSv"
              />
              <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4 px-6">
                <button className="bg-surface text-primary font-headline text-[10px] tracking-widest uppercase py-3 px-6 w-1/2 cursor-pointer z-10 hover:bg-[#f4dcdd]">Enquire</button>
                <button className="bg-[#a8874e] text-on-primary font-headline text-[10px] tracking-widest uppercase py-3 px-6 w-1/2 cursor-pointer z-10 hover:bg-[#d29a9e] hover:text-[#3d1f2a] transition-colors">Add to Bag</button>
              </div>
              <div className="absolute top-4 right-4 bg-[#d29a9e] text-[#3d1f2a] px-3 py-1 font-label text-[8px] tracking-widest uppercase">Rare Archive</div>
            </Link>
            <div className="space-y-2">
              <h3 className="font-display italic text-2xl text-primary">Mysore Aurum</h3>
              <p className="font-label text-[10px] tracking-widest text-secondary uppercase">Liquid Gold Weave &bull; Bespoke Order</p>
              <p className="font-body italic text-primary/70">Woven with the precision of a jeweller.</p>
            </div>
          </div>

          {/* Product Card 3 */}
          <div className="group relative">
            <Link to="/product" className="block aspect-[2/3] overflow-hidden bg-surface-container-low mb-6 relative gild-border">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="Ivory Banarasi silk saree with rose and silver accents"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhKgVthk-pO-f-li0qrj0tRHAQhT7PH9C7oSgCAhZmqNUfFfbco3BMLv5rVvDdM3uohiP6s7-cKaC2IRlOTdvvg6ED-iG-E4or0CvRLOWDWz_LcwxR0kHTyuw-XEYRt0dfstdE7RBKc3uuQZ8GyK21SAPMbuQgF-7PvvwSfr4OhMWSs9vASETPJfHULFe5owcFb_AGbnNbNE3StytB6Sx5dkrORcCM09f_-nt0egUhHZ3e94BPKuhLYN1lI56cqfz7XjD4308Hmvzj"
              />
              <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4 px-6">
                <button className="bg-surface text-primary font-headline text-[10px] tracking-widest uppercase py-3 px-6 w-1/2 cursor-pointer z-10 hover:bg-[#f4dcdd]">Enquire</button>
                <button className="bg-[#a8874e] text-on-primary font-headline text-[10px] tracking-widest uppercase py-3 px-6 w-1/2 cursor-pointer z-10 hover:bg-[#d29a9e] hover:text-[#3d1f2a] transition-colors">Add to Bag</button>
              </div>
            </Link>
            <div className="space-y-2">
              <h3 className="font-display italic text-2xl text-primary">Banarasi Celestine</h3>
              <p className="font-label text-[10px] tracking-widest text-secondary uppercase">Hand-Spun Silver Mesh &bull; Antique Rose</p>
              <p className="font-body italic text-primary/70">The whisper of history in every fold.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curated Detail Section */}
      <section className="py-40 silk-gradient text-on-primary overflow-hidden relative">
        {/* Rose glow accents */}
        <div className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-25 blur-3xl" style={{ background: 'radial-gradient(circle, #d29a9e 0%, transparent 70%)' }}></div>
        <div className="pointer-events-none absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl" style={{ background: 'radial-gradient(circle, #a8874e 0%, transparent 70%)' }}></div>

        <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-12 items-center gap-16 relative z-10">
          <div className="col-span-12 md:col-span-6 order-2 md:order-1 relative z-10">
            <span className="font-label text-[10px] tracking-[0.4em] uppercase text-[#e8c887] mb-6 block">Chapter One</span>
            <h2 className="font-display italic text-5xl md:text-7xl mb-8 text-[#d29a9e]">The Rose Archive</h2>
            <div className="space-y-6 max-w-lg">
              <p className="font-body text-xl leading-relaxed opacity-90">
                Our silk is not merely woven; it is orchestrated. Using ancient looms that have survived centuries of transformation, we preserve the exact tension required for &lsquo;Hiranyam Silk&rsquo;&mdash;a fabric so light it catches the dust of the sun.
              </p>
              <div className="pt-8 flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <span className="w-12 h-[1px] bg-[#e8c887]"></span>
                  <span className="font-label text-xs tracking-widest uppercase text-[#e8c887]">100% GOTS Certified Mulberry Silk</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-12 h-[1px] bg-[#e8c887]"></span>
                  <span className="font-label text-xs tracking-widest uppercase text-[#e8c887]">320 Hours per Masterpiece</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 order-1 md:order-2">
            <div className="relative">
              <div className="aspect-square bg-surface-container-highest overflow-hidden gild-border">
                <img
                  className="w-full h-full object-cover"
                  alt="Hands of a weaver working on a traditional handloom"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPis-pAHDwhJieO1PPRLlvcut-T9FxRJXR2BQJYTpO8xUv6T6r1RsKEAmyKo5jnrXRLUjSIG7FIPmExsnaWjsluBLkcpUgjnyo2MpCuOF55rS5ypwvacd7_H7YqRPOQPgPpBrGXnMUErqPFi2MwEq6fj_05RMVi1jB12dVj1ERo1ru_NKmVWjy3mIcMBgDqoOIlrVbZshbOWN1b6b_pDJ9ICXAhbLxVWHMi3hsRCfkNoY40A2F__4t4ipI5ll1345l6TYjcGpEY2iX"
                />
              </div>
              <div className="absolute -top-12 -right-12 w-1/2 aspect-square border border-[#e8c887]/30 hidden lg:block"></div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 opacity-[0.04] pointer-events-none">
          <span className="font-headline text-[30rem] leading-none select-none text-[#d29a9e]">H</span>
        </div>
      </section>

      {/* Newsletter/Bespoke Callout */}
      <section className="py-32 px-8 text-center max-w-2xl mx-auto relative">
        <span className="font-headline text-secondary tracking-[0.4em] uppercase text-xs mb-8 block">Private Consultations</span>
        <h2 className="font-display text-5xl italic text-primary mb-4">Commission your own <br/> family heirloom.</h2>
        <p className="font-display italic text-lg text-primary/50 mb-12">An invitation reserved for the discerning few.</p>
        <div className="relative border-b border-[#a8874e]/40 flex items-center py-4 group focus-within:border-[#a8874e]">
          <input
            className="w-full bg-transparent border-none focus:ring-0 focus:outline-none font-label text-xs tracking-[0.2em] uppercase placeholder:text-primary/30 py-4"
            placeholder="YOUR EMAIL ADDRESS"
            type="email"
          />
          <button className="font-headline text-[10px] tracking-widest uppercase hover:text-secondary transition-colors cursor-pointer">Request Access</button>
        </div>
      </section>
    </>
  );
}
