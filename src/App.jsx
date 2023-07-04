import "./App.css";
import Header from "./components/header/Header";
import Header1 from "./components/header1/Header1"
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Work from "./components/work/Work";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Education from "./components/education/Education";
import Footer from "./components/footer/Footer";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import PreLoader from "./components/preloader/PreLoader";
import hexagons from "./particles/hexagons.json";
import nasa from "./particles/nasa.json";
import starry from "./particles/starry.json";

function App() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  return (
    <div className="App">
      {/* <PreLoader /> */}
      {/* <Header1 /> */}
      <Header />
      <Nav />
      <About />
      <Experience />
      <Education />
      <Work />
      <Portfolio /> 
      {/* <Testimonials /> */}
      {/* <Contact />
      <Footer /> */}
      {/* <Particles init={particlesInit} options={hexagons}></Particles> */}
    </div>
  );
}

export default App;
