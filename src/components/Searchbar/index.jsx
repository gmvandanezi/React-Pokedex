import './style.css'
import geracoes from '../../data/geracoes.js'
import { useState } from 'react'

const Searchbar = ({ selectedGen, filterPokemon }) => {

  const [busca, setBusca] = useState("");

  return (
    <div className='search-pokemon'>
      <div className='search'>
        <input type="text" value={busca} onChange={(e) => setBusca(e.target.value)} />
        <select name="generation" id="generation" onChange={(e) => { selectedGen(e.target.value) }}>
          {
            geracoes.map((geracao, index) => (
              <option className={`opt-generation`} key={index} value={geracao.nome}>{geracao.nome}</option>
            ))
          }
        </select>
      </div>
      <div>
        <button className='search-btn' onClick={filterPokemon(busca)}></button>
      </div>
    </div>
  )
}

export default Searchbar