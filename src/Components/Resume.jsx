const education = [
  {
    degree: "Bachelor of Computer Science & Engineering",
    institute: "SAGE University, Indore",
    duration: "2024 - Present",
    description:
      "Currently pursuing B.Tech in Computer Science with a strong focus on Web Development, Data Structures & Algorithms, and Full Stack Development.",
    score: "CGPA : 8.1",
  },
  {
    degree: "Higher Secondary Education",
    institute: "Bihar School Examination Board",
    duration: "2022 - 2024",
    description:
      "Completed higher secondary education with a strong foundation in Mathematics and Science.",
    score: "",
  },
];

const experience = [
  {
    role: "Technical Team Member",
    company: "SCYP Club",
    duration: "2025 - Present",
    description:
      "Contributed to technical events, hackathons, and development activities while collaborating with the technical team.",
  },
  {
    role: "Google Developer Groups Member",
    company: "GDG On Campus",
    duration: "2025 - Present",
    description:
      "Actively participate in workshops, technical sessions, and collaborative projects focused on modern web technologies.",
  },
];

const Resume = () => {
  return (
    <section className="resume-section" id="resume">
      <div className="container">
        <div className="section-title">
          <span>Resume</span>
          <h2>A Summary Of My Resume</h2>
        </div>

        <div className="row mt-5">
          {/* Education */}

          <div className="col-lg-6 resume-column">
            <h3 className="resume-heading">Education</h3>

            {education.map((item) => (
              <div className="resume-card" key={item.degree}>
                <h4>{item.degree}</h4>

                <span className="duration">{item.duration}</span>

                <h6>{item.institute}</h6>

                <p>{item.description}</p>

                {item.score && <strong>{item.score}</strong>}
              </div>
            ))}
          </div>

          {/* Experience */}

          <div className="col-lg-6 resume-column experience-column">
            <h3 className="resume-heading">Experience</h3>

            {experience.map((item) => (
              <div className="resume-card" key={item.role}>
                <h4>{item.role}</h4>

                <span className="duration">{item.duration}</span>

                <h6>{item.company}</h6>

                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
