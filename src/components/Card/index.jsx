import React, { useEffect, useState } from 'react'
import './style.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
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


const Card = (props) => {

    const [pokemon, setPokemon] = useState({});
    const [pokeTypes, setPokeTypes] = useState([]);
    const imgPokemon = pokemon?.id ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon?.id}.png` : "";

    const getPokemon = async (name) => {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`);
            setPokemon(response.data);
            setPokeTypes(response.data.types);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPokemon(props.name);
    }, []);

    return (
        <div className='card'>
            <div className='card-h'>
                <h6>#{pokemon.id}</h6>
                <h5>{pokemon.name}</h5>
            </div>
            <Link to={`/details/${pokemon.id}`} className="pokemon-img"><img src={imgPokemon} alt="pokemon" /></Link>
            <div className='pokemon-types' key={pokemon.id}>
                {
                    pokeTypes.map((param, index) => (
                        <div className='pokemon-type' key={index}>
                            {param?.type?.name && <img src={param?.type?.name} alt="type-pokemon" />}
                            {param?.type?.name && <span key={index}>{param.type.name}</span>}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Card