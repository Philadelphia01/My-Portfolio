import "./hero.css"

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            I'm a <span className="highlight">Full Stack</span> Software Developer.
          </h1>
          <p className="hero-subtitle">
            Final year IT student at Rosebank College with 6 months experience as a Junior Full Stack Developer at
            Shaper in Johannesburg.
          </p>
          <div className="hero-cta">
            <a href="#portfolio" className="btn btn-primary">
              Previous Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
