import './style.css'
import geracoes from '../../data/geracoes.js'

const Searchbar = ({ selectedGen }) => {

  return (
    <div className='search-pokemon'>
      <div className='search'>
        <input type="text" />
        <select name="generation" id="generation" onChange={(e) => { console.log(selectedGen(e.target.value)) }}>
          {
            geracoes.map((geracao, index) => (
              <option key={index} value={geracao.nome}>{geracao.nome}</option>
            ))
          }
        </select>
      </div>
      <div>
        <button className='search-btn'></button>
      </div>
    </div>
  )
}

export default Searchbar