import React from 'react'
import '../../styles/layouts/navigation.scss'
import { NavLink } from 'react-router-dom'


export const Navigation = () => {
  return (

    <header className='header'>
      <nav className='navbar'>
        <ul>
          <li>
            <NavLink to='/' className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
          </li>
          <li>
            <NavLink to='/projects' className={({ isActive }) => isActive ? "active" : ""}>Projects</NavLink>
          </li>
          <li>
            <NavLink to='/contact' className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
