import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { FeaturedProjects } from './components/FeaturedProjects';
import { AboutPreview } from './components/AboutPreview';
import { CallToAction } from './components/CallToAction';

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-500 focus:text-white focus:rounded">
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content">
        <div className="max-w-[1050px] mx-auto px-6 md:px-12">
          <Hero />
        </div>
        <FeaturedProjects />
        <div className="max-w-[1050px] mx-auto px-6 md:px-12">
          <AboutPreview />
          <CallToAction />
        </div>
      </main>
    </div>
  );
}