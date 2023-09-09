import './App.css';
import About from './components/about/About';
import Hero from './components/hero/Hero';
import Work from './components/work/Work';
import Skills from './components/skills/skills';
import Testimonial from './components/testimonials/testimonial';
function App() {
  return (
    <div className='app'>
    <Hero/>
    <About/>
    <Work/>
    <Skills/>
    <Testimonial/>
    </div>
  );
}

export default App;
