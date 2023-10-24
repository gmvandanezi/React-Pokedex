import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import './style.css';

const Details = () => {

  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});
  const [pokeTypes, setPokeTypes] = useState([]);
  const imgPokemon = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

  const getPokemon = async (id) => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
      setPokemon(response.data);
      setPokeTypes(response.data.types)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPokemon(id);
  }, []);

  return (
    <div className='info-pokemon'>
      <div className='info'>
        <p>informacoes</p>
      </div>
      <div className='details'>
        <div className='details-title'>
          <h3>#{pokemon.id}</h3>
          <h1>{pokemon.name}</h1>
        </div>
        <img src={imgPokemon} alt="pokemon" />
        <div className='pokemon-types' key={pokemon.id}>
          {
            pokeTypes.map((param, index) => (
              <div className='pokemon-type' key={index}>
                <img src={`../src/assets/pokemon-types/${param.type.name}.png`} alt="type-pokemon" />
                <span key={index}>{param.type.name}</span>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Details