import "./experience.css"

interface Experience {
  id: number;
  year: string;
  title: string;
  company: string;
  location: string;
  description: string;
}

const Experience = () => {
  const experiences: Experience[] = [
    {
      id: 1,
      year: "2024",
      title: "Junior Full Stack Developer",
      company: "Shaper",
      location: "Johannesburg",
      description:
        "During the 6 month period of the IT: Systems Support NQF 5 learnership programme at Shaper, I worked on a team that created a mobile application called MedSecura. My main responsibilities were to design a PostgreSQL database that communicates with the backend RESTful API, managing requests and responses from the client-side application.",
    },
    {
      id: 2,
      year: "2024",
      title: "Contract Monthly Claim System Project",
      company: "IIE Rosebank College",
      location: "Aug 2024 - Nov 2024",
      description:
        "Created a contract monthly claim system using .Net Core MVC. This system was designed to streamline the submission and approval process for monthly claims, specifically for Independent Contractor (IC) lecturers.",
    },
    {
      id: 3,
      year: "2024",
      title: "Recipe Application Project",
      company: "IIE Rosebank College",
      location: "Mar 2024 - Jun 2024",
      description:
        "Developed a command-line application that allows users to manage recipes by entering ingredients and steps. Users can add ingredients with their quantities and units of measurement, add steps with descriptions, display the full recipe, scale the recipe by a factor, reset the recipe scale, and clear all data to enter a new recipe.",
    },
  ]

  return (
    <section id="experience" className="experience-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">EXPERIENCE</h2>
          <div className="title-underline"></div>
        </div>

        <div className="experience-content">
          <div className="experience-sidebar">
            <h3>Work Experience</h3>
            <p>My professional journey in the tech industry.</p>
            <a href="/resume.pdf" download className="btn btn-primary">
              Download CV
            </a>
          </div>

          <div className="experience-timeline">
            {experiences.map((exp) => (
              <div key={exp.id} className="experience-item">
                <div className="experience-marker"></div>
                <div className="experience-content">
                  <span className="experience-year">{exp.year}</span>
                  <h4 className="experience-title">{exp.title}</h4>
                  <p className="experience-company">
                    {exp.company} | {exp.location}
                  </p>
                  <p className="experience-description">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
