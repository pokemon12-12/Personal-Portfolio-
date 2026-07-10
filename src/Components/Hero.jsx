import Image1 from "../assets/Image1.jpg";
const Hero = () => {
  return (
    <div className="Hero_section">
      <div className="description">
        <h1>I'M A Full Stack Developer</h1>
        <button>View My Work</button>
        <a href="#" style={{color: "black"}}>Contact Me ↓ </a>
      </div>
      <div className="Hero_image">
        <img className="MyImage" src={Image1} alt="Developer Image" />
      </div>
    </div>
  );
};

export default Hero;
