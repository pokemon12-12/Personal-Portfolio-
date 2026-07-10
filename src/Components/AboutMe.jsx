const AboutMe = () => {
  return (
    <section className="about-container" id="about">
      <div className="container">
        <div className="about-intro">
          <span>About Me</span>
          <h1>Know Me More</h1>
        </div>

        <div className="row mt-5 gy-4">
          <div className="col-lg-8 about-description">
            <h2>
              Hi! I'm <span className="highlight">Anish Kumar</span>
            </h2>

            <p>
              I am a Computer Science student and Full Stack Developer
              passionate about building responsive, user-friendly web
              applications. I enjoy turning ideas into real-world projects using
              React, and I am currently expanding my backend skills with
              Node.js.
            </p>

            <p>
              I have worked on projects like a Myntra Clone, Resume Builder App,
              and Smart Email Automation using n8n, Airtable, Gmail, and AI.
            </p>
          </div>

          <div className="col-lg-4 about-details">
            <ul>
              <li>
                <strong>Name:</strong>
                <span>Anish Kumar</span>
              </li>

              <li>
                <strong>Email:</strong>
                <span>patelanish7872@gmail.com</span>
              </li>

              <li>
                <strong>LinkedIn:</strong>
                <a href="#" target="_blank" rel="noreferrer">
                  Visit Profile
                </a>
              </li>

              <li>
                <strong>GitHub:</strong>
                <a href="#" target="_blank" rel="noreferrer">
                  Visit GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
