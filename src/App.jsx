import { useEffect } from 'react'
import About from "./components/About";
import Cursor from "./components/Cursor";
import FeaturesStrip from "./components/FeaturesStrip";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Join from "./components/Join";
import MarqueeStrip from "./components/MarqueeStrip";
import Navbar from "./components/Navbar";
import Programs from "./components/Programs";
import Quote from "./components/Quote";
import Values from "./components/Values";

export default function App() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) }
      }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <div className="font-jakarta bg-off-white text-ink overflow-x-hidden">
      <Cursor />
      <Navbar />
      <Hero />
      <MarqueeStrip />
      <About />
      <FeaturesStrip />
      <Programs />
      <Values />
      <Quote />
      <Join />
      <Footer />
    </div>
  )
}