import { useEffect } from "react";
import "./App.css";
import Nav from "./components/nav/Nav";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Work from "./components/work/Work";
import Skills from "./components/skills/Skills";
import Footer from "./components/footer/Footer";

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
    );

    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document
          .querySelectorAll(".reveal")
          .forEach((el) => observer.observe(el));
      });
    });

    return () => {
      cancelAnimationFrame(id);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="App">
      <Nav />
      <main>
        <Header />
        <About />
        <Experience />
        <Work />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}

export default App;
