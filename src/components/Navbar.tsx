import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <span className="navbar__name">RC</span>
      <div className="navbar__links">
        <a href="#about">About</a>
        <a href="#works">Works</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  )
}

export default Navbar
