import React, { useEffect, useState } from 'react'
import './style.css'
import Searchbar from '../../components/Searchbar'
import Card from '../../components/Card'
import axios from 'axios'
import geracoes from '../../data/geracoes'

const Home = () => {

    const [pokemons, setPokemons] = useState([]);
    const [geracao, setGeracao] = useState(geracoes[0]);

    const selectedGen = (value) => {
        const geracaoAtual = geracoes.find((g) => g.nome == value);
        setGeracao(geracaoAtual);
    }

    const filterPokemon = async (value) => {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=1010`);
            const allPokemons = response.data.results;
            const findPokemons = allPokemons.filter((p) => p.name.toLowerCase().includes(value.toLowerCase()));
            setPokemons(findPokemons);
        } catch (error) {
            console.log(error);
        }
    }

    const getAllPokemonsByGen = async (generation) => {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${generation.start}&limit=${generation.end - generation.start}`);
            setPokemons(response.data.results);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllPokemonsByGen(geracao);
    }, [geracao]);

    return (
        <div className='home-search'>
            <div className='container-search'>
                <div className='header-search'>
                    <Searchbar selectedGen={selectedGen} filterPokemon={filterPokemon} />
                </div>
            </div>
            <div className='container-cards'>
                <div className='cards'>
                    {pokemons.length === 0 ? <p>Carregando...</p> : (
                        pokemons.map((param) => (
                            <div key={param.url}>
                                <Card name={param.name} />
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>

    )
}

export default Home