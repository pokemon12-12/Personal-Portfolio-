const details = [
  ["Name", "Anish Kumar"],
  ["Email", "patelanish7872@gmail.com"],
  ["GitHub", "github.com/anishkumar-1212"],
  ["LinkedIn", "linkedin.com/in/anish-patel-2822691ba"],
  ["LeetCode", "anishpate_03"],
];

const AboutMe = () => {
  return (
    <section className="section-block" id="about">
      <div className="container">
        <div className="section-header">
          <p className="section-kicker">About Me</p>
          <h2 className="section-title">Know me more</h2>
        </div>

        <div className="row g-4">
          <div className="col-lg-7">
            <div className="content-card">
              <h3>Professional summary</h3>
              <p>
                Frontend Developer fresher with hands-on experience building
                responsive, production-grade web applications using HTML5,
                CSS3, JavaScript (ES6+), and React.js.
              </p>
              <p>
                Skilled in state management with Redux and Redux Toolkit, REST
                API integration, and component-based UI development. I
                independently built and deployed a live e-commerce application
                on Vercel.
              </p>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="content-card">
              <h3>Quick details</h3>
              <ul className="detail-list">
                {details.map(([label, value]) => (
                  <li key={label}>
                    <span>{label}</span>
                    {label === "Email" ? (
                      <a href={`mailto:${value}`}>{value}</a>
                    ) : (
                      <strong>{value}</strong>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
