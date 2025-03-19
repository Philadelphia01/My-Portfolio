import "./skills.css"

interface TechnicalSkill {
  name: string;
  percentage: number;
}

interface SoftSkill {
  name: string;
  rating: number;
}

const Skills = () => {
  const technicalSkills: TechnicalSkill[] = [
    { name: "HTML & CSS", percentage: 85 },
    { name: "JavaScript", percentage: 80 },
    { name: "C#", percentage: 75 },
    { name: "Java", percentage: 70 },
    { name: "React", percentage: 75 },
    { name: "Tailwind CSS", percentage: 85 },
  ]

  const softSkills = [
    { name: "Communication", rating: 4 },
    { name: "Problem Solving", rating: 3 },
    { name: "Interpersonal Skills", rating: 3 },
    { name: "Leadership Skills", rating: 3 },
  ]

  const languages = ["C#", "JavaScript", "Java", "HTML", "CSS", "Kotlin"]

  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">SKILLS & TECH STACK</h2>
          <div className="title-underline"></div>
        </div>

        <div className="skills-content">
          <div className="technical-skills">
            <h3>Technical Skills</h3>
            <div className="skills-bars">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.percentage}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: `${skill.percentage}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="soft-skills">
            <h3>Soft Skills</h3>
            <div className="soft-skills-grid">
              {softSkills.map((skill, index) => (
                <div key={index} className="soft-skill-card">
                  <div className="skill-rating">{skill.rating}/5</div>
                  <h4>{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>

          <div className="languages">
            <h3>Languages</h3>
            <div className="languages-grid">
              {languages.map((language, index) => (
                <div key={index} className="language-tag">
                  {language}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
