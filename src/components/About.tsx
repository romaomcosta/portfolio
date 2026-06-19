import './About.css'

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__label">
        <span className="about__dash">—</span>
        WHO AM I
      </div>
      <h2 className="about__heading">
        I BUILD THE SYSTEMS
        <br />
        BEHIND THE SCENES.
      </h2>
      <div className="about__content">
        <p>
          I'm a software engineer with a Master's degree in Computer Science
          from NOVA SST. I work at the intersection of distributed systems,
          event-driven architecture, and cloud infrastructure — designing
          services that are reliable, scalable, and built to last.
        </p>
        <p>
          While my focus is on backend and cloud engineering, I'm also
          comfortable building on the frontend side with React and TypeScript,
          allowing me to deliver end-to-end solutions when needed. I care
          about clean architecture, infrastructure as code, and shipping
          with confidence through automated testing and CI/CD.
        </p>
      </div>
      <div className="about__skills">
        <div className="about__skill-group">
          <span className="about__skill-category">Backend</span>
          <div className="about__skill-tags">
            <span className="about__skill-tag">Java</span>
            <span className="about__skill-tag">Spring Boot</span>
            <span className="about__skill-tag">Kafka</span>
            <span className="about__skill-tag">MQTT</span>
            <span className="about__skill-tag">REST APIs</span>
            <span className="about__skill-tag">Python</span>
          </div>
        </div>
        <div className="about__skill-group">
          <span className="about__skill-category">Frontend</span>
          <div className="about__skill-tags">
            <span className="about__skill-tag">React</span>
            <span className="about__skill-tag">TypeScript</span>
            <span className="about__skill-tag">JavaScript</span>
            <span className="about__skill-tag">Redux</span>
            <span className="about__skill-tag">Bootstrap</span>
          </div>
        </div>
        <div className="about__skill-group">
          <span className="about__skill-category">Cloud & DevOps</span>
          <div className="about__skill-tags">
            <span className="about__skill-tag">AWS CDK</span>
            <span className="about__skill-tag">ECS</span>
            <span className="about__skill-tag">EKS</span>
            <span className="about__skill-tag">API Gateway</span>
            <span className="about__skill-tag">Cognito</span>
            <span className="about__skill-tag">S3</span>
            <span className="about__skill-tag">Docker</span>
            <span className="about__skill-tag">Jenkins</span>
            <span className="about__skill-tag">CI/CD</span>
          </div>
        </div>
        <div className="about__skill-group">
          <span className="about__skill-category">Data</span>
          <div className="about__skill-tags">
            <span className="about__skill-tag">Aurora PostgreSQL</span>
            <span className="about__skill-tag">MongoDB Atlas</span>
            <span className="about__skill-tag">SQL</span>
          </div>
        </div>
        <div className="about__skill-group">
          <span className="about__skill-category">Tools</span>
          <div className="about__skill-tags">
            <span className="about__skill-tag">Git</span>
            <span className="about__skill-tag">Jira</span>
            <span className="about__skill-tag">Figma</span>
            <span className="about__skill-tag">Photoshop</span>
            <span className="about__skill-tag">Premiere</span>
          </div>
        </div>
      </div>
      <div className="about__accent-line" />
    </section>
  )
}

export default About
