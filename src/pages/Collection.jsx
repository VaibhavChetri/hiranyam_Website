import { Link } from 'react-router-dom';

export default function Collection() {
  return (
    <div className="pt-32 pb-24 px-8 max-w-[1920px] mx-auto min-h-screen">
      {/* Background tint inspired by silk-overlay from Stitch */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      {/* Header Section */}
      <header className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="max-w-2xl">
          <span className="font-label text-[10px] tracking-[0.3em] uppercase text-secondary mb-4 block">The Curated Archive</span>
          <h1 className="font-display text-6xl md:text-8xl italic font-light leading-tight">Heritage Collection</h1>
          <p className="mt-6 font-body text-lg text-primary/70 leading-relaxed max-w-lg">
            A selection of museum-grade weaves, hand-loomed over months of meticulous craftsmanship. Each saree is a testament to the silk route's enduring legacy.
          </p>
        </div>
        <div className="flex items-center gap-4 font-label text-[10px] tracking-[0.2em] uppercase text-primary/60">
          <span>Showing 06 Artworks</span>
          <span className="w-12 h-[1px] bg-primary/20"></span>
          <button className="flex items-center gap-2 hover:text-secondary transition-colors cursor-pointer">
            Filter <span className="material-symbols-outlined text-sm">tune</span>
          </button>
        </div>
      </header>
      
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Minimalist Sidebar */}
        <aside className="w-full lg:w-64 flex-shrink-0">
          <div className="sticky top-32 space-y-12">
            <section>
              <h3 className="font-headline text-xs tracking-[0.2em] uppercase mb-6 text-primary">Weave</h3>
              <div className="space-y-4">
                {['Kanchipuram', 'Banarasi', 'Paithani', 'Chanderi'].map((weave, idx) => (
                  <label key={idx} className="flex items-center group cursor-pointer">
                    <input className="hidden peer" type="checkbox" />
                    <div className="w-3 h-3 border border-outline-variant peer-checked:bg-secondary peer-checked:border-secondary transition-all"></div>
                    <span className="ml-4 font-body text-sm tracking-wide group-hover:text-secondary transition-colors">{weave}</span>
                  </label>
                ))}
              </div>
            </section>
            
            <section>
              <h3 className="font-headline text-xs tracking-[0.2em] uppercase mb-6 text-primary">Color</h3>
              <div className="grid grid-cols-4 gap-4">
                <button className="w-6 h-6 bg-[#d29a9e] border border-primary/20 ring-offset-2 hover:ring-1 ring-secondary transition-all cursor-pointer" title="Blush Rose"></button>
                <button className="w-6 h-6 bg-[#3d1f2a] border border-primary/20 ring-offset-2 hover:ring-1 ring-secondary transition-all cursor-pointer" title="Regal Plum"></button>
                <button className="w-6 h-6 bg-[#a8874e] border border-primary/20 ring-offset-2 hover:ring-1 ring-secondary transition-all cursor-pointer" title="Antique Gold"></button>
                <button className="w-6 h-6 bg-[#fbf4f1] border border-primary/20 ring-offset-2 hover:ring-1 ring-secondary transition-all cursor-pointer" title="Rose Ivory"></button>
              </div>
            </section>
            
            <div className="pt-8 border-t border-secondary/20">
              <button className="font-label text-[10px] tracking-[0.2em] uppercase text-secondary hover:opacity-70 transition-opacity cursor-pointer">Clear All Filters</button>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-grow">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            
            {/* Product Card 1 */}
            <article className="group relative">
              <Link to="/product" className="block relative overflow-hidden aspect-[3/4] bg-surface-container mb-6">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Emerald green Kanchipuram silk saree" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCITJmw9vudHITcwa6MZPH43nk6gQIltPk3XPMBKAEVd7yPxTckhLdWQcv4n6BMgWFoUKt2ECfycjmq8CnC5vrxd3jMBSxIxrUzB-wmQBRr5Wcoj5mqXbg6rowcvgGvwaigEUbkUI0D5yuXmwzoy_fnk6Se-0i-slTcBikDzZz1No_SH66ykO0qVNht_3KjJk6ZI8WHK_GZ8vRHm7dvs-3jUgIN3vX8mtU1R3zB9z0-lzCAruz6NCmM6-FvQR-Fq_7H8uW802lAHPMZ" />
                <div className="absolute inset-0 bg-primary/20 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-500 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
                  <button className="bg-surface px-8 py-3 text-tertiary font-headline text-[10px] tracking-widest uppercase hover:bg-tertiary hover:text-surface transition-colors">Add to Bag</button>
                  <button className="bg-transparent border border-secondary px-8 py-3 text-secondary font-headline text-[10px] tracking-widest uppercase hover:bg-secondary hover:text-surface transition-colors">View Details</button>
                </div>
                <span className="absolute top-4 left-4 font-headline text-[9px] tracking-[0.2em] uppercase bg-surface-container-highest/80 backdrop-blur px-3 py-1 text-primary">Heirloom Grade</span>
              </Link>
              <h2 className="font-display text-2xl font-light mb-1 italic">The Sovereign Rose</h2>
              <div className="flex justify-between items-center">
                <p className="font-label text-[10px] tracking-[0.2em] uppercase text-primary/50">Kanchipuram Silk</p>
                <p className="font-body text-lg text-secondary">₹1,85,000</p>
              </div>
            </article>

            {/* Product Card 2 */}
            <article className="group relative md:mt-12">
              <Link to="/product" className="block relative overflow-hidden aspect-[3/4] bg-surface-container mb-6">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Deep crimson Banarasi silk saree" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCa7gkUTXTQ07k2t9-gENOIP3bTlNXVzLjBN5whRUYP1-L2LfFGh-UUjNIecKdU_OpPEomaVVnrCWkQhxleC0c-ZZZs2qJnTICFd1qP_Amh38AB8vgpPvjbxePOEF_IsYpVaKEfscHwzJ3j7lY9qa0O2N6UE2wMMNLS2Q6xZaYPtACJxclPxqZZ5FJlyZ_-wdEpQ-WBHUjH79pikW5C2FtqHryXvGh2SSfibAx9jRIKhltIrFRV2p08f-0LqOLsZIoeQj8oYRPYBzjt" />
                <div className="absolute inset-0 bg-primary/20 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-500 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
                  <button className="bg-surface px-8 py-3 text-tertiary font-headline text-[10px] tracking-widest uppercase hover:bg-tertiary hover:text-surface transition-colors">Add to Bag</button>
                  <button className="bg-transparent border border-secondary px-8 py-3 text-secondary font-headline text-[10px] tracking-widest uppercase hover:bg-secondary hover:text-surface transition-colors">View Details</button>
                </div>
                <span className="absolute top-4 left-4 font-headline text-[9px] tracking-[0.2em] uppercase bg-surface-container-highest/80 backdrop-blur px-3 py-1 text-primary">Heirloom Grade</span>
              </Link>
              <h2 className="font-display text-2xl font-light mb-1 italic">Crimson Heritage</h2>
              <div className="flex justify-between items-center">
                <p className="font-label text-[10px] tracking-[0.2em] uppercase text-primary/50">Banarasi Brocade</p>
                <p className="font-body text-lg text-secondary">₹2,40,000</p>
              </div>
            </article>

            {/* Product Card 3 */}
            <article className="group relative">
              <Link to="/product" className="block relative overflow-hidden aspect-[3/4] bg-surface-container mb-6">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Ivory white silk saree" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAO5n9Ve8ASs8iBqEDx9ETF9MZcEhZq9Zfl_n8-uxeOe27U0xw7YfNGKq6k0d_fRd1MpYwIcI5Pg47bynWIcuW2L9KU1hne-sYP8s05CpDcW-x8_mUB4ctK_k5N6G8aYf2epDqoLGxBjcptTcGJtn3sWGW5Ygc3vNy8lTu1m4r4JHflylEGDSHL9zKs8Id6CIIAlmYzbaHboX2CbwpnmZ5OCeq_ebElaBK6IXYZfr08CKGHQlcM93WNch0E_3F_eJScVpC5CU-KkKAK" />
                <div className="absolute inset-0 bg-primary/20 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-500 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
                  <button className="bg-surface px-8 py-3 text-tertiary font-headline text-[10px] tracking-widest uppercase hover:bg-tertiary hover:text-surface transition-colors">Add to Bag</button>
                  <button className="bg-transparent border border-secondary px-8 py-3 text-secondary font-headline text-[10px] tracking-widest uppercase hover:bg-secondary hover:text-surface transition-colors">View Details</button>
                </div>
                <span className="absolute top-4 left-4 font-headline text-[9px] tracking-[0.2em] uppercase bg-surface-container-highest/80 backdrop-blur px-3 py-1 text-primary">Heirloom Grade</span>
              </Link>
              <h2 className="font-display text-2xl font-light mb-1 italic">Ivory Whispers</h2>
              <div className="flex justify-between items-center">
                <p className="font-label text-[10px] tracking-[0.2em] uppercase text-primary/50">Chanderi Silk</p>
                <p className="font-body text-lg text-secondary">₹95,000</p>
              </div>
            </article>

            {/* Product Card 4 */}
            <article className="group relative">
              <Link to="/product" className="block relative overflow-hidden aspect-[3/4] bg-surface-container mb-6">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Deep royal blue saree" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBcU5qmSkT7r7XBI2m6H-pAp2rhIEx_XKMWm0DxVHA4O-urXVW-M7-PkP7YYmmG6lZUhgBerDz6mYCg21Nr4a9bm18rQL-F7y3IEr7hft_zvZKJ5pL0VfnHBeT0lRuSYFjggdAn7OORDDJv38eFnfcSBqm3ufEfcAh3qE-8JE86XPw9RiijnsvPg1kqv1Cn9ON-uJyCsHyWU3RQi_MrdtdreLn4NEjKqOrq6QvvC0CjIZ8TOWEKzt_LRAc_NNfxRlWT_MCqI_NhBCo" />
                <div className="absolute inset-0 bg-primary/20 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-500 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
                  <button className="bg-surface px-8 py-3 text-tertiary font-headline text-[10px] tracking-widest uppercase hover:bg-tertiary hover:text-surface transition-colors">Add to Bag</button>
                  <button className="bg-transparent border border-secondary px-8 py-3 text-secondary font-headline text-[10px] tracking-widest uppercase hover:bg-secondary hover:text-surface transition-colors">View Details</button>
                </div>
                <span className="absolute top-4 left-4 font-headline text-[9px] tracking-[0.2em] uppercase bg-surface-container-highest/80 backdrop-blur px-3 py-1 text-primary">Heirloom Grade</span>
              </Link>
              <h2 className="font-display text-2xl font-light mb-1 italic">Midnight Palace</h2>
              <div className="flex justify-between items-center">
                <p className="font-label text-[10px] tracking-[0.2em] uppercase text-primary/50">Kanchipuram Pattu</p>
                <p className="font-body text-lg text-secondary">₹2,15,000</p>
              </div>
            </article>

            {/* Product Card 5 */}
            <article className="group relative md:mt-12">
              <Link to="/product" className="block relative overflow-hidden aspect-[3/4] bg-surface-container mb-6">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Burnished gold saree" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBO3cENt07oNIosEMwa5GO3sPpjGg_N4EZB5n5ZofeJcVcGdwL01x1hRPaR0BtOA091XiU14ntdwv3aZSrwgVoisx36wMFwjjE2DgFTBgEEfjGVSRnWPKP61kAjxHdgYE8CI49nUdVDsMJSvMFqLmi2T5iGiXz10Cf0ssIivFdDpQ8-aNZ0QIMK09HeCVYgV3b_TZhantDSu9m82Bo1k6IfnnEhwd_W6wXh7AAj7ASIZ-jpGhLNQ4OBni9jYjEcIrND0PM7gsPFN3uu" />
                <div className="absolute inset-0 bg-primary/20 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-500 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
                  <button className="bg-surface px-8 py-3 text-tertiary font-headline text-[10px] tracking-widest uppercase hover:bg-tertiary hover:text-surface transition-colors">Add to Bag</button>
                  <button className="bg-transparent border border-secondary px-8 py-3 text-secondary font-headline text-[10px] tracking-widest uppercase hover:bg-secondary hover:text-surface transition-colors">View Details</button>
                </div>
                <span className="absolute top-4 left-4 font-headline text-[9px] tracking-[0.2em] uppercase bg-surface-container-highest/80 backdrop-blur px-3 py-1 text-primary">Heirloom Grade</span>
              </Link>
              <h2 className="font-display text-2xl font-light mb-1 italic">The Auric Thread</h2>
              <div className="flex justify-between items-center">
                <p className="font-label text-[10px] tracking-[0.2em] uppercase text-primary/50">Paithani Silk</p>
                <p className="font-body text-lg text-secondary">₹3,10,000</p>
              </div>
            </article>

            {/* Product Card 6 */}
            <article className="group relative">
              <Link to="/product" className="block relative overflow-hidden aspect-[3/4] bg-surface-container mb-6">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Deep forest green saree" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGmRFB3zzormGtKXQ-d_Uq4nktDKHkKtT0AAx9Ehswc3ZIfnPd9ulJvrNIrBTKlyOBA0uSYmde2PTuNTkuPmSGh3y0nhc7GtnfVyJq_6fuL6MmQIG-f40VFdaDBH9GKjWedUHyDC6cokQNUuKPhV-vtCj1N3CB3C5K-QsApSEhb8uIpzNdOsTdDpqWYzdVh9_tGXh1Jnyq9Iq_W_b5VXgye7jyDd-aqeerbBdqdR5wPCBXEKrmNgh3cUZLZhQd3wUlMf64mxwbK9vQ" />
                <div className="absolute inset-0 bg-primary/20 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-500 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
                  <button className="bg-surface px-8 py-3 text-tertiary font-headline text-[10px] tracking-widest uppercase hover:bg-tertiary hover:text-surface transition-colors">Add to Bag</button>
                  <button className="bg-transparent border border-secondary px-8 py-3 text-secondary font-headline text-[10px] tracking-widest uppercase hover:bg-secondary hover:text-surface transition-colors">View Details</button>
                </div>
                <span className="absolute top-4 left-4 font-headline text-[9px] tracking-[0.2em] uppercase bg-surface-container-highest/80 backdrop-blur px-3 py-1 text-primary">Heirloom Grade</span>
              </Link>
              <h2 className="font-display text-2xl font-light mb-1 italic">Forest Sanctuary</h2>
              <div className="flex justify-between items-center">
                <p className="font-label text-[10px] tracking-[0.2em] uppercase text-primary/50">Banarasi Katan</p>
                <p className="font-body text-lg text-secondary">₹1,65,000</p>
              </div>
            </article>

          </div>
        </div>
      </div>
      
      {/* Pagination */}
      <div className="mt-32 flex justify-center items-center gap-12 font-headline text-xs tracking-[0.3em] uppercase">
        <button className="opacity-30 cursor-not-allowed">Previous</button>
        <div className="flex gap-8">
          <span className="text-secondary border-b border-secondary pb-1">01</span>
          <span className="opacity-50 hover:text-secondary cursor-pointer transition-colors">02</span>
          <span className="opacity-50 hover:text-secondary cursor-pointer transition-colors">03</span>
        </div>
        <button className="hover:text-secondary transition-colors cursor-pointer">Next</button>
      </div>
    </div>
  );
}
