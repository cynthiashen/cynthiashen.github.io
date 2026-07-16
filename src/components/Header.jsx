import { Link, NavLink, useLocation } from 'react-router-dom'
import { useState } from 'react'
import './Header.css'

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const { pathname } = useLocation()
  const interestsActive = pathname.startsWith('/interests')

  return (
    <header className="home">
      <Link to="/">cynthia shen</Link>
      <nav>
        <li className="nav-li">
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-active' : undefined)}>
            about
          </NavLink>
        </li>
        <div
          className="nav-dropdown"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <li className={`nav-dropdown-li${interestsActive ? ' nav-active' : ''}`}>
            <span>interests</span>
          </li>
          <div className={`nav-dropdown-content ${dropdownOpen ? 'open' : ''}`}>
            <li>
              <NavLink to="/interests/books" className={({ isActive }) => (isActive ? 'nav-active' : undefined)}>
                books
              </NavLink>
            </li>
            <li>
              <NavLink to="/interests/cycling" className={({ isActive }) => (isActive ? 'nav-active' : undefined)}>
                cycling
              </NavLink>
            </li>
            <li>
              <NavLink to="/interests/food" className={({ isActive }) => (isActive ? 'nav-active' : undefined)}>
                food
              </NavLink>
            </li>
            <li>
              <NavLink to="/interests/knitting" className={({ isActive }) => (isActive ? 'nav-active' : undefined)}>
                yarn
              </NavLink>
            </li>
          </div>
        </div>
        <li className="nav-li">
          <NavLink to="/projects" className={({ isActive }) => (isActive ? 'nav-active' : undefined)}>
            projects
          </NavLink>
        </li>
        <li className="nav-li">
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'nav-active' : undefined)}>
            contact
          </NavLink>
        </li>
      </nav>
    </header>
  )
}
