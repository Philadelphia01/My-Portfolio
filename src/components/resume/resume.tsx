import React from 'react'
import './resume.css'

const Resume = () => {
  const education = [
    {
      institution: "University of the Witwatersrand, South Africa",
      period: "2020 - 2024",
      degree: "Bachelor of Science (Honours) in Information Technology, Software Development"
    },
    {
      institution: "Johannesburg High School",
      period: "2015 - 2019", 
      degree: "National Senior Certificate with University Exemption"
    }
  ]

  const languages = [
    { name: "English", level: "Native" },
    { name: "Afrikaans", level: "Conversational" },
    { name: "Zulu", level: "Basic" }
  ]

  const softwareSkills = [
    { name: "Visual Studio Code", progress: 90 },
    { name: "React & Node.js", progress: 85 },
    { name: "JavaScript & TypeScript", progress: 80 },
    { name: "C# & .NET", progress: 75 },
    { name: "SQL Server", progress: 70 },
    { name: "Git & GitHub", progress: 85 }
  ]

  const coreSkills = [
    "Full Stack Web Development",
    "Frontend Development (React, HTML, CSS)", 
    "Backend Development (Node.js, C#)",
    "Database Design & Management",
    "API Development & Integration",
    "Version Control & Collaboration"
  ]

  const softSkills = [
    "Problem Solving",
    "Team Collaboration", 
    "Communication",
    "Time Management",
    "Adaptability",
    "Continuous Learning"
  ]

  return (
    <section id="resume" className="resume-section">
      <div className="resume-container">
        {/* Contact Information */}
        <div className="contact-card">
          <h2 className="section-title">Contact</h2>
          <div className="contact-items">
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <span>nkunalotricia@gmail.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📱</span>
              <span>+27 762596134</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <span>Johannesburg, South Africa</span>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="education-card">
          <h2 className="section-title">Education</h2>
          <div className="education-items">
            {education.map((edu, index) => (
              <div key={index} className="education-item">
                <div className="education-institution">{edu.institution}</div>
                <div className="education-period">{edu.period}</div>
                <div className="education-degree">{edu.degree}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="languages-card">
          <h2 className="section-title">Languages</h2>
          <div className="languages-grid">
            {languages.map((lang, index) => (
              <div key={index} className="language-item">
                <div className="language-name">{lang.name}</div>
                <div className="language-level">{lang.level}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Software Skills */}
        <div className="software-card">
          <h2 className="section-title">Softwares</h2>
          <div className="software-grid">
            {softwareSkills.map((skill, index) => (
              <div key={index} className="software-item">
                <div className="software-info">
                  <span className="software-name">{skill.name}</span>
                </div>
                <div className="software-progress">
                  <div 
                    className="progress-bar" 
                    style={{ width: `${skill.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          <div className="core-skills-card">
            <h2 className="section-title">Core Skills</h2>
            <ul className="skills-list">
              {coreSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>

          <div className="soft-skills-card">
            <h2 className="section-title">Soft Skills</h2>
            <ul className="skills-list">
              {softSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
