import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__top">
        <div className="hero__top-left">
          <h1 className="hero__role">
            SOFTWARE
            <br />
            ENGINEER
          </h1>
          <div className="hero__sub">
            <span className="hero__dash">—</span>
            <span>BACKEND & CLOUD FOCUSED</span>
          </div>
        </div>
        <div className="hero__photo">
          <img src="./images/profile.jpeg" alt="Romão Costa" />
        </div>
      </div>
      <div className="hero__bottom">
        <div className="hero__name-block">
          <h2 className="hero__name">
            ROMÃO
            <br />
            COSTA
          </h2>
          <div className="hero__sub hero__sub--right">
            <span className="hero__available">
              <span className="hero__available-dot" />
              AVAILABLE FOR WORK
            </span>
          </div>
        </div>
      </div>
      <div className="hero__scroll">
        <span className="hero__scroll-line" />
        <span className="hero__scroll-text">SCROLL</span>
      </div>
    </section>
  )
}

export default Hero
