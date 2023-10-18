import React from 'react'
import './style.css'

const Searchbar = () => {
  return (
    <div className='search-pokemon'>
      <div className='search'>
        <input type="text" />
      </div>
      <div>
        <button>Buscar</button>
      </div>
    </div>
  )
}

export default Searchbar