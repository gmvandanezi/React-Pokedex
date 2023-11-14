import React, { useEffect, useState } from 'react'
import './style.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../assets/pokemon-types/bug.png';
import '../../assets/pokemon-types/dark.png';
import '../../assets/pokemon-types/dragon.png';
import '../../assets/pokemon-types/electric.png';
import '../../assets/pokemon-types/fairy.png';
import '../../assets/pokemon-types/fighting.png';
import '../../assets/pokemon-types/fire.png';
import '../../assets/pokemon-types/flying.png';
import '../../assets/pokemon-types/ghost.png';
import '../../assets/pokemon-types/grass.png';
import '../../assets/pokemon-types/ground.png';
import '../../assets/pokemon-types/ice.png';
import '../../assets/pokemon-types/normal.png';
import '../../assets/pokemon-types/poison.png';
import '../../assets/pokemon-types/psychic.png';
import '../../assets/pokemon-types/rock.png';
import '../../assets/pokemon-types/steel.png';
import '../../assets/pokemon-types/water.png';


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
                            {param?.type?.name && <img src={`../src/assets/pokemon-types/${param?.type?.name}.png`} alt="type-pokemon" />}
                            {param?.type?.name && <span key={index}>{param.type.name}</span>}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Card