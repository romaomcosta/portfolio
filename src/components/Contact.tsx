import './Contact.css'

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact__left">
        <div className="contact__label">
          <span className="contact__dash">—</span>
          GET IN TOUCH
        </div>
        <h2 className="contact__heading">
          LET'S BUILD
          <br />
          SOMETHING
          <br />
          TOGETHER
        </h2>
      </div>
      <div className="contact__right">
        <a href="mailto:romaomcosta@gmail.com" className="contact__email">
          romaomcosta@gmail.com
        </a>
        <div className="contact__links">
          <a href="https://www.linkedin.com/in/romaomcosta/" target="_blank" rel="noopener noreferrer">
            LinkedIn &#8599;
          </a>
          <a href="https://github.com/romaomcosta" target="_blank" rel="noopener noreferrer">
            GitHub &#8599;
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
