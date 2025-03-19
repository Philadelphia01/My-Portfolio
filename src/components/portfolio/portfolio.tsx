"use client"

import { useState } from "react"
import "./portfolio.css"

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("mobile")

  const projects = [
    {
      id: 1,
      category: "mobile",
      title: "Contract Monthly Claim System",
      description:
        "Created a contract monthly claim system using .Net Core MVC. This system is designed to streamline the submission and approval process for monthly claims, specifically for Independent Contractor (IC) lecturers.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-17%20at%2014.08.12%20%281%29-sPQ4Yh0Vy4um97F3kCi3F19URkCMkI.jpeg",
      technologies: ["ASP.NET MVC", "C#", "MySQL"],
      languages: ["C#", "SQL", "HTML", "CSS", "JavaScript"],
      demoLink: "https://github.com/yourusername/contract-claim-system",
    },
    {
      id: 2,
      category: "mobile",
      title: "Recipe Application",
      description:
        "This command-line application allows users to manage recipes by entering ingredients and steps. Users can add ingredients with their quantities and units of measurement, add steps with descriptions, display the full recipe, scale the recipe by a factor, reset the recipe scale, and clear all data to enter a new recipe.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-17%20at%2014.08.12-UISltqYxvE2sHZmo57PtiU0nSpqtSn.jpeg",
      technologies: ["C#", ".NET Framework", "WPF"],
      languages: ["C#", "XAML"],
      demoLink: "https://github.com/yourusername/recipe-application",
    },
    {
      id: 3,
      category: "mobile",
      title: "MedSecura Mobile Application",
      description:
        "During my 6-month learnership at Shaper, I worked on a team that created a mobile application called MedSecura. My main responsibilities were to design a PostgreSQL database that communicates with the backend RESTful API, managing requests and responses from the client-side application.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kX0tpms6kE4mWHHMjvZkLQq0fKFSE5.png",
      technologies: ["PostgreSQL", "Spring Boot", "Angular"],
      languages: ["Java", "TypeScript", "SQL", "HTML", "CSS"],
      demoLink: "https://github.com/yourusername/medsecura-app",
    },
    {
      id: 4,
      category: "website",
      title: "Portfolio Website",
      description:
        "A responsive portfolio website built with React and CSS to showcase my projects, skills, and experience. Features a clean, modern design with smooth animations and a user-friendly interface.",
      image: "/placeholder.svg?height=300&width=600",
      technologies: ["React", "CSS", "JavaScript"],
      languages: ["JavaScript", "HTML", "CSS"],
      demoLink: "https://github.com/yourusername/portfolio-website",
    },
  ]

  const filters = [
    { id: "mobile", label: "Mobile App" },
    { id: "website", label: "Website" },
    { id: "desktop", label: "Desktop" },
    { id: "other", label: "Other Projects" },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">PORTFOLIO</h2>
          <div className="title-underline"></div>
        </div>

        <div className="portfolio-filters">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? "active" : ""}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="languages-container">
                  {project.languages.map((lang, index) => (
                    <span key={index} className="language-tag">
                      {lang}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    View Demo
                  </a>
                </div>
              </div>

              <div className="project-image">
                <img src={project.image || "/placeholder.svg"} alt={project.title} />
              </div>
            </div>
          ))}
        </div>

        <div className="portfolio-cta">
          <button className="btn btn-secondary">View all</button>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
