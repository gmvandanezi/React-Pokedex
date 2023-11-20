import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import './style.css';
import typeImages from '../../data/typeImages';

const Details = () => {

  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});
  const [pokeTypes, setPokeTypes] = useState([]);
  const [pokeStats, setPokeStats] = useState([]);
  const imgPokemon = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

  const getPokemon = async (id) => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
      if (response.data) {
        setPokemon(response.data);
        setPokeTypes(response.data.types);
        setPokeStats(response.data.stats);
      } else {
        console.error('Dados de Pokémon não encontrados.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPokemon(id);
  }, []);

  return (
    <div className='info-pokemon'>
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
                <img src={typeImages[param.type.name]} alt="type-pokemon" />
                <span key={index}>{param.type.name}</span>
              </div>
            ))
          }
        </div>
      </div>
      <div className='details'>
        <div className='details-title'>
          <h1>Stats</h1>
        </div>
        <div className='pokemon-stats' key={pokemon.id}>
          {
            pokeStats.map((param, index) => (
              <div className='pokemon-stat' key={index}>
                <span key={index}>{param.stat.name}: {param.base_stat}</span>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Details