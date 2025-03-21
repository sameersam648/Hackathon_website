import { BrowserRouter } from "react-router-dom";
import { Suspense, lazy, useState, useEffect } from "react";
import { Navbar, Hero, PrizePool } from "./components";

// Lazy load non-critical components
const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Tech = lazy(() => import("./components/Tech"));
const Works = lazy(() => import("./components/Works"));
const Patrons = lazy(() => import("./components/patron"));
const Faq = lazy(() => import("./components/Faq"));
const Contact = lazy(() => import("./components/Contact"));
const StarsCanvas = lazy(() => import("./components/canvas/Stars"));

// Simple loading component
const LazyLoadingFallback = () => <div className="w-full h-20"></div>;

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <Suspense fallback={<LazyLoadingFallback />}>
          <About />
        </Suspense>
        <Suspense fallback={<LazyLoadingFallback />}>
          <Experience />
        </Suspense>
        <PrizePool />
        <Suspense fallback={<LazyLoadingFallback />}>
          <Tech />
        </Suspense>
        <Suspense fallback={<LazyLoadingFallback />}>
          <Patrons />
        </Suspense><Suspense fallback={<LazyLoadingFallback />}>
          <Works />
        </Suspense>
        <div className="relative z-0">
          <Suspense fallback={<LazyLoadingFallback />}>
            <Faq />
          </Suspense>
          <Suspense fallback={<LazyLoadingFallback />}>
            <Contact />
          </Suspense>
          {!isMobile && (
            <Suspense fallback={null}>
              <StarsCanvas />
            </Suspense>
          )}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

