import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/PageTransition';

// Pages
import Home from './pages/Home';
import Heritage from './pages/Heritage';
import Collection from './pages/Collection';
import ProductDetail from './pages/ProductDetail';
import ZenithDetail from './pages/ZenithDetail';
import Bespoke from './pages/Bespoke';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/heritage" element={<PageTransition><Heritage /></PageTransition>} />
        <Route path="/collection" element={<PageTransition><Collection /></PageTransition>} />
        <Route path="/product" element={<PageTransition><ProductDetail /></PageTransition>} />
        <Route path="/zenith" element={<PageTransition><ZenithDetail /></PageTransition>} />
        <Route path="/bespoke" element={<PageTransition><Bespoke /></PageTransition>} />
        <Route path="*" element={<PageTransition><Home /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-surface font-body text-primary min-h-screen flex flex-col antialiased selection:bg-[#d29a9e]/40 selection:text-[#3d1f2a] w-full overflow-x-hidden relative">
        <Navigation />
        <main className="flex-grow w-full relative">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
