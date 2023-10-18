import React from 'react'
import './style.css'

const Navbar = () => {

  const pokemon_logo = "../../src/assets/pokemon-logo.png";

  return (
    <div className='nav-container'>
      <nav className='navbar'>
        <div className='navbar-logo'>
          <a href="../pages/Home"><img src={pokemon_logo} alt="pokemon-logo" /></a>
        </div>
        <div className='navbar-menu'>
          <ul>
            <li>HOME</li>
            <li>COMPARE</li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar