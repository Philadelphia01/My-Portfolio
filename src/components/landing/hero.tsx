import React from "react"
import "./hero.css"

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-greeting">
              Hello, I am <span className="hero-name">Tricia Nkunalo</span>
            </h1>
            <div className="hero-description">
              <p>I'm a recent graduate with a Bachelor's (Honours) in Information Technology in Software Development, specializing in Full Stack Development.</p>
              <p>I'm passionate about web development and creating innovative solutions. Eager to learn and grow, I thrive in every step of the development process, from brainstorming fresh ideas to delivering impactful and engaging applications.</p>
              <p>Feel free to check out my portfolio. If you're interested in collaborating with me or have any inquiries, I would be delighted to hear from you. Your visit to my portfolio is greatly appreciated!</p>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-container">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-17%20at%2013.07.32-QeHbXMsC5IHAPBM67F3f49EBMxwlGR.jpeg" 
                alt="Profile" 
                className="profile-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
