import styles from "./Skills.module.css";
import { skills } from "../data/skills";

const Skills = () => {
  return (
    <section className={styles.skillsSection} id="skills">
      <div className="container">
        <div className={styles.sectionTitle}>
          <span>My Skills</span>
          <h2>Technologies I Work With</h2>
        </div>

        <div className="row gy-4 mt-5">
          {skills.map((skill) => (
            <div className="col-lg-6" key={skill.name}>
              <div className={styles.skillCard}>
                <div className={styles.skillInfo}>
                  <span>{skill.name}</span>
                  <span>{skill.percentage}%</span>
                </div>

                <div className={styles.progress}>
                  <div
                    className={styles.progressBar}
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <button className={styles.resumeBtn}>Download Resume</button>
        </div>
      </div>
    </section>
  );
};

export default Skills;
