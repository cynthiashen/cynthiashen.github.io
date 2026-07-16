import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Header.css'

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <header className="home">
      <Link to="/">cynthia shen</Link>
      <nav>
        <li className="nav-li">
          <Link to="/about">about</Link>
        </li>
        <div
          className="nav-dropdown"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <li className="nav-dropdown-li">
            <span>interests</span>
          </li>
          <div className={`nav-dropdown-content ${dropdownOpen ? 'open' : ''}`}>
            <li><Link to="/interests/books">books</Link></li>
            <li><Link to="/interests/cycling">cycling</Link></li>
            <li><Link to="/interests/food">food</Link></li>
            <li><Link to="/interests/knitting">yarn</Link></li>
          </div>
        </div>
        <li className="nav-li">
          <Link to="/projects">projects</Link>
        </li>
        <li className="nav-li">
          <Link to="/contact">contact</Link>
        </li>
      </nav>
    </header>
  )
}
