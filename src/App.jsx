import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import Resume from "./Components/Resume";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <div className="portfolio-shell">
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <Projects />
        <Resume />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}

export default App;
