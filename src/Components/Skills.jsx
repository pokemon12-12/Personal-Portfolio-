const skillGroups = [
  "HTML5",
  "CSS3",
  "JavaScript (ES6+)",
  "C++",
  "SQL",
  "React.js",
  "Redux",
  "Redux Toolkit",
  "React Router",
  "Context API",
  "React Hooks",
  "Bootstrap",
  "Tailwind CSS",
  "Responsive Web Design",
  "Node.js fundamentals",
  "MongoDB",
  "REST API Integration",
  "Git",
  "GitHub",
  "Vercel",
  "n8n",
  "LLM API Integration",
];

const Skills = () => {
  return (
    <section className="section-block" id="skills">
      <div className="container">
        <div className="section-header">
          <p className="section-kicker">Skills</p>
          <h2 className="section-title">Technologies I work with</h2>
        </div>

        <div className="content-card">
          <div className="skill-tags">
            {skillGroups.map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="content-card mt-4">
          <h3>Currently learning</h3>
          <p className="mb-0">
            Next.js in progress, then TypeScript, while continuing to refine UI
            clarity, accessibility, and production-ready frontend workflows.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
