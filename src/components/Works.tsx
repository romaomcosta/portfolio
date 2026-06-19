import './Works.css'

interface Experience {
  title: string
  role: string
  description: string
  period: string
  tech: string
}

const experiences: Experience[] = [
  {
    title: 'Critical Software',
    role: 'Software Engineer',
    description:
      'Designing scalable backend services and event-driven solutions. Building and maintaining cloud-native infrastructure and automated CI/CD pipelines across distributed environments.',
    period: '2024 — Present',
    tech: 'Java · Spring Boot · Kafka · AWS · Docker',
  },
  {
    title: 'Caixa Mágica Software',
    role: 'Software Developer',
    description:
      'Led development of client-facing web applications. Collaborated on API design, performance optimisation, and translated business requirements into production-ready products.',
    period: '2023 — 2024',
    tech: 'React · Redux · REST APIs',
  },
  {
    title: 'CyberMap',
    role: 'Summer Internship',
    description:
      'Developed a sports results app with real-time updates. Designed and implemented the database schema for efficient data storage and retrieval.',
    period: '2021',
    tech: 'Dart · SQL',
  },
]

const Works = () => {
  return (
    <section className="works" id="works">
      <div className="works__label">
        <span className="works__dash">—</span>
        SELECTED WORK
      </div>
      <h2 className="works__heading">EXPERIENCE</h2>
      <div className="works__list">
        {experiences.map((exp, index) => (
          <div className="works__item" key={index}>
            <span className="works__item-period">{exp.period}</span>
            <div className="works__item-main">
              <h3 className="works__item-title">{exp.title}</h3>
              <span className="works__item-role">{exp.role}</span>
            </div>
            <p className="works__item-desc">{exp.description}</p>
            <span className="works__item-tech">{exp.tech}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Works
