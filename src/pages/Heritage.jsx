export default function Heritage() {
  return (
    <div className="w-full bg-surface">
      {/* Hero Section: Editorial & Asymmetrical */}
      <section className="relative min-h-[85vh] md:min-h-[90vh] flex flex-col justify-center px-6 md:px-8 max-w-[1920px] mx-auto pt-32 pb-16 md:pb-0 overflow-hidden">
        <div className="grid grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="col-span-12 md:col-span-7 relative z-10 pl-0 md:pl-16 mt-8 md:mt-0">
            <span className="font-label text-[10px] tracking-[0.3em] uppercase text-secondary mb-6 md:mb-8 block">The Digital Curator</span>
            <h1 className="font-display italic text-5xl md:text-8xl leading-[1.1] text-primary">
              A Museum of <br/> <span className="ml-8 md:ml-32">Living Silk</span>
            </h1>
            <p className="font-body text-lg md:text-2xl mt-8 md:mt-12 max-w-xl text-primary/80 leading-relaxed border-l border-secondary/30 pl-6 md:pl-8 ml-2 md:ml-8">
              Every thread is a silent poem. We reject the standard in favor of true Parisian Couture architectural discipline, married with traditional Indian soul. 
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 relative mt-12 md:mt-0 right-0 md:-right-8 lg:-right-16">
            <div className="aspect-[4/5] md:aspect-[3/4] bg-surface-container-low p-4 ghost-border">
              <img 
                className="w-full h-full object-cover filter brightness-95 contrast-125 scale-100 hover:scale-[1.03] transition-transform duration-[1500ms]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPis-pAHDwhJieO1PPRLlvcut-T9FxRJXR2BQJYTpO8xUv6T6r1RsKEAmyKo5jnrXRLUjSIG7FIPmExsnaWjsluBLkcpUgjnyo2MpCuOF55rS5ypwvacd7_H7YqRPOQPgPpBrGXnMUErqPFi2MwEq6fj_05RMVi1jB12dVj1ERo1ru_NKmVWjy3mIcMBgDqoOIlrVbZshbOWN1b6b_pDJ9ICXAhbLxVWHMi3hsRCfkNoY40A2F__4t4ipI5ll1345l6TYjcGpEY2iX" 
                alt="Weaver at loom" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Story Rail */}
      <section className="py-24 md:py-32 bg-primary text-on-primary">
        <div className="px-6 md:px-8 max-w-[1920px] mx-auto mb-16 md:mb-24">
          <h2 className="font-display italic text-4xl md:text-7xl text-[#80bea6]">The Architectural <br/> Restraint</h2>
        </div>
        
        {/* Horizontal scroll container (Story Rail) */}
        <div className="flex overflow-x-auto gap-8 md:gap-16 px-6 md:px-8 max-w-[1920px] mx-auto pb-16 no-scrollbar snap-x snap-mandatory">
          {[
            {
              title: "Ivory & Emerald",
              desc: "A dialogue between the warmth of unbleached silk and the weight of timeless green ink.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrK5dBfuwTOwP7AR_8hkr5Nlcsvg3xIGzGceWPh4nGAk__xCR0BZ9FU4oTjWZ-GIr4J-8k8GQOlRrhl5eTinx0Wl1cbOR6SxPpAHvkV1AwoPF8IMpWrQf7apHNYg627n9VfmTAnLt5v1j-gG1thMA8P4urc3RC45ufmYwkSa0_U34XeIAJn1zHDBs07OgEB7b_UyAKTV2KMjT1rx8GD9gy3EHZXMKeol7KBmAeYd7CIxak1ddkOdXrzL6VmmEbOCYClquAeo-DdWB8"
            },
            {
              title: "Tonal Layering",
              desc: "Stacked sheets of fine rag paper create a lift that is felt rather than seen. We disdain shadows.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAO5n9Ve8ASs8iBqEDx9ETF9MZcEhZq9Zfl_n8-uxeOe27U0xw7YfNGKq6k0d_fRd1MpYwIcI5Pg47bynWIcuW2L9KU1hne-sYP8s05CpDcW-x8_mUB4ctK_k5N6G8aYf2epDqoLGxBjcptTcGJtn3sWGW5Ygc3vNy8lTu1m4r4JHflylEGDSHL9zKs8Id6CIIAlmYzbaHboX2CbwpnmZ5OCeq_ebElaBK6IXYZfr08CKGHQlcM93WNch0E_3F_eJScVpC5CU-KkKAK"
            },
            {
              title: "Burnished Gold",
              desc: "Reserved for moments of jewelry—active states, thin accents, and rare prestige.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBO3cENt07oNIosEMwa5GO3sPpjGg_N4EZB5n5ZofeJcVcGdwL01x1hRPaR0BtOA091XiU14ntdwv3aZSrwgVoisx36wMFwjjE2DgFTBgEEfjGVSRnWPKP61kAjxHdgYE8CI49nUdVDsMJSvMFqLmi2T5iGiXz10Cf0ssIivFdDpQ8-aNZ0QIMK09HeCVYgV3b_TZhantDSu9m82Bo1k6IfnnEhwd_W6wXh7AAj7ASIZ-jpGhLNQ4OBni9jYjEcIrND0PM7gsPFN3uu"
            }
          ].map((item, i) => (
            <div key={i} className="min-w-[85vw] md:min-w-[700px] flex flex-col md:flex-row gap-6 md:gap-12 items-center bg-[#002f23] p-6 md:p-12 snap-center ghost-border relative overflow-hidden group">
              <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-square overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover scale-100 group-hover:scale-[1.04] transition-transform duration-[1500ms]" />
              </div>
              <div className="w-full md:w-1/2 p-2 md:p-6 flex flex-col justify-center">
                <span className="font-label text-[9px] md:text-[10px] tracking-[0.3em] text-[#ffe08f] uppercase block mb-3 md:mb-5">Chapter 0{i+1}</span>
                <h3 className="font-headline text-3xl md:text-4xl mb-4 md:mb-6 text-[#faf9f5] leading-tight">{item.title}</h3>
                <p className="font-body text-base md:text-lg text-[#faf9f5]/70 leading-relaxed md:leading-[1.8]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy Details */}
      <section className="py-40 px-8 max-w-[1920px] mx-auto text-center">
        <h2 className="font-headline text-sm tracking-[0.4em] text-secondary uppercase mb-20 relative inline-block">
          The No-Line Rule
          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-px h-6 bg-secondary/40 block"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 text-left">
          <div className="group flex flex-col items-center">
            <div className="w-full aspect-[3/4] overflow-hidden mb-8 relative ghost-border">
              <div className="absolute inset-0 bg-[#003527]/10 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1605389025114-1f6cc9e0ed65?auto=format&fit=crop&q=80&w=800"
                alt="Zero Shadows"
                className="w-full h-full object-cover grayscale transition-all duration-[1000ms] ease-out scale-100 group-hover:scale-105 group-hover:grayscale-0"
              />
            </div>
            <div className="w-full px-4 text-center">
              <h3 className="font-display italic text-3xl mb-4 text-primary">Zero Shadows</h3>
              <p className="font-body text-primary/70 leading-relaxed max-w-sm mx-auto">
                If an element needs to float, we use a tinted ambient shadow at 4% opacity. Depth is achieved entirely through compositional gravity.
              </p>
            </div>
          </div>

          <div className="group flex flex-col items-center pt-0 md:pt-16">
            <div className="w-full px-4 text-center order-2 md:order-none mt-8 md:mt-0 mb-0 md:mb-8">
              <h3 className="font-display italic text-3xl mb-4 text-primary">Sharp Edges</h3>
              <p className="font-body text-primary/70 leading-relaxed max-w-sm mx-auto">
                All components—buttons, inputs, cards—must use a 0px border radius. No exceptions. We mirror the precision of a perfectly cut gem.
              </p>
            </div>
            <div className="w-full aspect-[3/4] overflow-hidden order-1 md:order-none relative ghost-border">
              <div className="absolute inset-0 bg-[#003527]/10 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800"
                alt="Sharp Edges"
                className="w-full h-full object-cover grayscale transition-all duration-[1000ms] ease-out scale-100 group-hover:scale-105 group-hover:grayscale-0"
              />
            </div>
          </div>

          <div className="group flex flex-col items-center">
            <div className="w-full aspect-[3/4] overflow-hidden mb-8 relative ghost-border">
              <div className="absolute inset-0 bg-[#003527]/10 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1550684376-efcbd6e3f031?auto=format&fit=crop&q=80&w=800"
                alt="Tinted Blacks"
                className="w-full h-full object-cover grayscale transition-all duration-[1000ms] ease-out scale-100 group-hover:scale-105 group-hover:grayscale-0"
              />
            </div>
            <div className="w-full px-4 text-center">
              <h3 className="font-display italic text-3xl mb-4 text-primary">Tinted Blacks</h3>
              <p className="font-body text-primary/70 leading-relaxed max-w-sm mx-auto">
                We never use absolute black. Deep Emerald acts as the ink for all typographic weight, providing warmth underneath the authority.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
