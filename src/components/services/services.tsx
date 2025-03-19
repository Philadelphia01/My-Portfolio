import "./services.css"

interface Service {
  id: number;
  icon: "mobile" | "web" | "database" | "desktop";
  title: string;
  description: string;
}

const Services = () => {
  const services: Service[] = [
    {
      id: 1,
      icon: "mobile",
      title: "Mobile App Development",
      description: "Creating responsive and user-friendly mobile applications for Android and iOS platforms.",
    },
    {
      id: 2,
      icon: "web",
      title: "Web Development",
      description: "Building modern, responsive websites and web applications using the latest technologies.",
    },
    {
      id: 3,
      icon: "database",
      title: "Database Development",
      description: "Designing and implementing efficient database solutions for various applications.",
    },
    {
      id: 4,
      icon: "desktop",
      title: "Desktop App Development",
      description: "Creating robust desktop applications using C# and .NET Framework.",
    },
  ]

  const getIconElement = (iconName: "mobile" | "web" | "database" | "desktop") => {
    switch (iconName) {
      case "mobile":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
            <line x1="12" y1="18" x2="12" y2="18" />
          </svg>
        )
      case "web":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
          </svg>
        )
      case "database":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          </svg>
        )
      case "desktop":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <section id="services" className="services-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">SERVICES</h2>
          <div className="title-underline"></div>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{getIconElement(service.icon)}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
