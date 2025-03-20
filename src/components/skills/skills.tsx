import React from 'react';
import "./skills.css";

const Skills = () => {
  const technicalSkills = [
    { name: "HTML & CSS", percentage: 85 },
    { name: "JavaScript", percentage: 80 },
    { name: "C#", percentage: 75 },
    { name: "Java", percentage: 70 },
    { name: "React", percentage: 75 },
    { name: "Tailwind CSS", percentage: 85 },
  ];

  const softSkills = [
    { name: "Communication", rating: 4 },
    { name: "Problem Solving", rating: 3 },
    { name: "Interpersonal Skills", rating: 3 },
    { name: "Leadership Skills", rating: 3 },
  ];

  const languages = [
    
    { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    
    { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Node.JS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    
    { name: "C#", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
    { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
  ];

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
        </div>
        
        {/* Languages section with dark background */}
        <div className="languages-section">
          <h2 className="languages-title">LANGUAGES</h2>
          <div className="languages-grid">
            {languages.map((language, index) => (
              <div key={index} className="language-item">
                <div className="language-logo">
                  <img src={language.logo || "/placeholder.svg"} alt={language.name} />
                </div>
                <p className="language-name">{language.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
