import "../styles/ExperienceItem.css"

const ExperienceItem = ({ experience }) => {
  const { year, title, company, location, description } = experience

  return (
    <div className="experience-item">
      <div className="experience-marker"></div>
      <div className="experience-content">
        <span className="experience-year">{year}</span>
        <h4 className="experience-title">{title}</h4>
        <p className="experience-company">
          {company} | {location}
        </p>
        <p className="experience-description">{description}</p>
      </div>
    </div>
  )
}

export default ExperienceItem

