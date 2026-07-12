const projects = [
  {
    name: "Myntra Clone",
    type: "E-Commerce Web Application",
    stack: "React.js, Redux, Redux Toolkit, React Router, REST API",
    summary:
      "Built and deployed a production-ready e-commerce clone with product listing, category filtering, search, and cart management on Vercel.",
    links: [
      ["Live Demo", "https://myntra-clone-five-ruddy.vercel.app"],
      ["GitHub", "https://github.com/anishkumar-1212/Myntra-Clone"],
    ],
  },
  {
    name: "AI Email Automation Agent",
    type: "Workflow Automation",
    stack: "n8n, Agentic AI Workflows, LLM API Integration, Email APIs",
    summary:
      "Built an email automation flow that classifies incoming emails in real time and drafts context-aware replies automatically.",
    links: [["GitHub", "https://github.com/anishkumar-1212/Smart-Email-Automation"]],
  },
  {
    name: "Social Media App",
    type: "Interactive Frontend",
    stack: "React.js, Context API, useReducer, CSS3",
    summary:
      "Developed a social feed application with post creation, likes, and responsive card layouts using centralized state management.",
    links: [],
  },
];

const Projects = () => {
  return (
    <section className="section-block" id="projects">
      <div className="container">
        <div className="section-header">
          <p className="section-kicker">Projects</p>
          <h2 className="section-title">Selected work</h2>
        </div>

        <div className="row g-4">
          {projects.map((project) => (
            <div className="col-lg-4" key={project.name}>
              <article className="content-card project-card">
                <p className="card-kicker">{project.type}</p>
                <h3>{project.name}</h3>
                <p>{project.stack}</p>
                <p>{project.summary}</p>

                <div className="d-flex flex-wrap gap-2 mt-3">
                  {project.links.map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-sm btn-dark"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
