import Navbar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Hero from "./Components/Hero";
import AboutMe from "./Components/AboutMe";
import Resume from "./Components/Resume";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <center className="protfolio">
        <Navbar />
        <Hero />
        <AboutMe/>
        <Resume/>
        <Skills/>
        <Footer/>
      </center>
    </>
  );
}

export default App;
