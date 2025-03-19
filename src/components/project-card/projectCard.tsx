import "../styles/ProjectCard.css"

const ProjectCard = ({ project }) => {
  const { title, description, image, technologies, demoLink } = project

  return (
    <div className="project-card">
      <div className="project-info">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>

        <div className="project-technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-links">
          <a href={demoLink} target="_blank" rel="noopener noreferrer" className="project-link">
            View Demo
          </a>
        </div>
      </div>

      <div className="project-image">
        <img src={image || "/placeholder.svg"} alt={title} />
      </div>
    </div>
  )
}

export default ProjectCard

