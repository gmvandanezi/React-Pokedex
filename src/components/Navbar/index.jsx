import React from 'react'
import './style.css'
import { Link } from 'react-router-dom';

const Navbar = () => {

  const pokemon_logo = "../../src/assets/pokemon-logo.png";

  return (
    <div className='nav-container'>
      <nav className='navbar'>
        <div className='navbar-logo'>
          <Link to={'/'}><img src={pokemon_logo} alt="pokemon-logo" /></Link>
        </div>
        <div className='navbar-menu'>
          <ul>
            <li><Link className='menu-item' to={'/'}>SEARCH</Link></li>
            <li><Link className='menu-item' to={'/'}>COMPARE</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar