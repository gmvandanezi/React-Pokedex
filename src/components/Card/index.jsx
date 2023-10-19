import React, { useEffect, useState } from 'react'
import './style.css'
import axios from 'axios';


const Card = (props) => {

    const [pokemon, setPokemon] = useState({});
    const [pokeTypes, setPokeTypes] = useState([]);
    const imgPokemon = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

    const getPokemon = async (name) => {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`);
            setPokemon(response.data);
            setPokeTypes(response.data.types)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPokemon(props.name);
    }, []);

    return (
        <div className='card'>
            <h5>#{pokemon.id}</h5>
            <h3>{pokemon.name}</h3>
            <img className="pokemon-img" src={imgPokemon} alt="pokemon" />
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
    )
}

export default Card