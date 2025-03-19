import "./about.css"

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">ABOUT ME</h2>
          <div className="title-underline"></div>
        </div>

        <div className="about-content">
          <div className="about-image">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-17%20at%2013.07.32-QeHbXMsC5IHAPBM67F3f49EBMxwlGR.jpeg"
              alt="Profile"
            />
          </div>

          <div className="about-text">
            <h3>Who I Am</h3>
            <p>
              I'm a passionate Full Stack Developer with a strong foundation in both front-end and back-end
              technologies. Currently completing my final year in Information Technology in Software Development, I
              bring 6 months of professional experience as a Junior Full Stack Developer at Shaper in Johannesburg.
            </p>
            <p>
              I specialize in creating responsive web applications and have a keen interest in cloud applications and
              database development. My goal is to build efficient, scalable, and user-friendly applications that solve
              real-world problems.
            </p>

            <div className="about-details">
              <div className="detail-item">
                <span className="detail-label">Location:</span>
                <span className="detail-value">Johannesburg</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Education:</span>
                <span className="detail-value">Information Technology in Software Development</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Experience:</span>
                <span className="detail-value">Junior Full Stack Developer</span>
              </div>
            </div>

            <div className="about-cta">
              <a href="/resume.pdf" download className="btn btn-primary">
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
