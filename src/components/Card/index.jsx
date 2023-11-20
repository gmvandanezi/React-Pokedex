import React, { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import typeImages from '../../data/typeImages';

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
                            {param?.type?.name && <img src={typeImages[param.type.name]} alt='tipo' />}
                            {param?.type?.name && <span key={index}>{param?.type?.name}</span>}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Card