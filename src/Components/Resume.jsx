const education = [
  {
    title: "B.Tech, Computer Science & Technology",
    place: "Sage University, Indore",
    date: "2024 - Present",
    note: "CGPA: 8.41 / 10 | Current Semester (Sem 8) GPA: 8.01 / 10",
  },
  {
    title: "XII (CBSE)",
    place: "Vidyapati Public School",
    date: "Completed",
    note: "68%",
  },
];

const experience = [
  {
    title: "Technical Team Member",
    place: "SCYP, Sage University",
    date: "Nov 2024 - Present",
    note:
      "Participated in Smart India Hackathon internal hackathon and Google's Generative AI program while contributing structured code documentation.",
  },
  {
    title: "Trooper Tier",
    place: "Generative AI Program, Google",
    date: "Dec 2025",
    note:
      "Completed Google's Generative AI program and gained structured exposure to AI-assisted digital tools.",
  },
];

const Resume = () => {
  return (
    <section className="section-block" id="resume">
      <div className="container">
        <div className="section-header">
          <p className="section-kicker">Resume</p>
          <h2 className="section-title">Education and experience</h2>
        </div>

        <div className="row g-4">
          <div className="col-lg-6">
            <div className="content-card">
              <h3>Education</h3>
              <div className="stack-list">
                {education.map((item) => (
                  <article key={item.title} className="stack-item">
                    <h4>{item.title}</h4>
                    <p className="stack-meta">
                      {item.place} - {item.date}
                    </p>
                    <p>{item.note}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="content-card">
              <h3>Experience</h3>
              <div className="stack-list">
                {experience.map((item) => (
                  <article key={item.title} className="stack-item">
                    <h4>{item.title}</h4>
                    <p className="stack-meta">
                      {item.place} - {item.date}
                    </p>
                    <p>{item.note}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="content-card mt-4">
          <h3>Achievements</h3>
          <ul className="detail-list compact">
            <li>
              <span>LeetCode</span>
              <strong>70+ DSA problems solved in C++</strong>
            </li>
            <li>
              <span>Recognition</span>
              <strong>Trooper Tier in Google's Generative AI Program</strong>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Resume;
