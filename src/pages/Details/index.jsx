import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import './style.css';
import bug from '../../assets/pokemon-types/bug.png';
import dark from '../../assets/pokemon-types/dark.png';
import dragon from '../../assets/pokemon-types/dragon.png';
import electric from '../../assets/pokemon-types/electric.png';
import fairy from '../../assets/pokemon-types/fairy.png';
import fighting from '../../assets/pokemon-types/fighting.png';
import fire from '../../assets/pokemon-types/fire.png';
import flying from '../../assets/pokemon-types/flying.png';
import ghost from '../../assets/pokemon-types/ghost.png';
import grass from '../../assets/pokemon-types/grass.png';
import ground from '../../assets/pokemon-types/ground.png';
import ice from '../../assets/pokemon-types/ice.png';
import normal from '../../assets/pokemon-types/normal.png';
import poison from '../../assets/pokemon-types/poison.png';
import psychic from '../../assets/pokemon-types/psychic.png';
import rock from '../../assets/pokemon-types/rock.png';
import steel from '../../assets/pokemon-types/steel.png';
import water from '../../assets/pokemon-types/water.png';

const Details = () => {

  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});
  const [pokeTypes, setPokeTypes] = useState([]);
  const imgPokemon = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

  const getPokemon = async (id) => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
      setPokemon(response.data);
      setPokeTypes(response.data.types);
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
                <img src={
                  param?.type?.name === 'bug' ? bug :
                    param?.type?.name === 'dark' ? dark :
                      param?.type?.name === 'dragon' ? dragon :
                        param?.type?.name === 'electric' ? electric :
                          param?.type?.name === 'fairy' ? fairy :
                            param?.type?.name === 'fighting' ? fighting :
                              param?.type?.name === 'fire' ? fire :
                                param?.type?.name === 'flying' ? flying :
                                  param?.type?.name === 'ghost' ? ghost :
                                    param?.type?.name === 'grass' ? grass :
                                      param?.type?.name === 'ground' ? ground :
                                        param?.type?.name === 'ice' ? ice :
                                          param?.type?.name === 'normal' ? normal :
                                            param?.type?.name === 'poison' ? poison :
                                              param?.type?.name === 'psychic' ? psychic :
                                                param?.type?.name === 'rock' ? rock :
                                                  param?.type?.name === 'steel' ? steel : water
                } alt="type-pokemon" />
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