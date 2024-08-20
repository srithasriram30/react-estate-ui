import { useState } from 'react'
import './navbar.scss'

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav>
        <div className="left">
            <a href="/" className='logo'>
              <img src="/logo.png" alt="Logo" />
              <span>LinaEstates</span>
            </a>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
            <a href="/">Agents</a>
        </div>
        <div className="right">
            <a href="/">Sign In</a>
            <a href="/" className='register'>Sign Up</a>
            <div className="menuIcon" onClick={() => setOpen((prev) => !prev)}>
              <img src="/menu.png" alt="hamburger menu" />
            </div>
            <div className="menu" className={open? "menu active" : "menu"}>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
            <a href="/">Agents</a>
            <a href="/">Sign In</a>
            <a href="/">Sign Up</a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar