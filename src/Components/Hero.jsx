import Image1 from "../assets/Image1.jpg";

const heroFacts = [
  "Frontend Developer Fresher",
  "React, Redux, JavaScript",
  "Live e-commerce app shipped",
];

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-7">
            <p className="section-kicker">Anish Kumar</p>
            <h1 className="hero-title">
              Frontend Developer focused on clean, production-ready UI.
            </h1>
            <p className="hero-text">
              I build responsive web applications with React, JavaScript, and
              component-first thinking. My work combines practical UI
              implementation, REST API integration, and a strong problem-solving
              base from DSA practice.
            </p>

            <div className="d-flex flex-wrap gap-3 mt-4">
              <a className="btn btn-dark btn-lg" href="#projects">
                View Projects
              </a>
              <a className="btn btn-outline-dark btn-lg" href="#contact">
                Contact Me
              </a>
            </div>

            <div className="hero-tags">
              {heroFacts.map((item) => (
                <span key={item} className="hero-tag">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="col-lg-5">
            <div className="hero-image-wrap">
              <img className="hero-image" src={Image1} alt="Anish Kumar" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
