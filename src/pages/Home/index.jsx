import React, { useEffect, useState } from 'react'
import './style.css'
import Searchbar from '../../components/Searchbar'
import Card from '../../components/Card'
import axios from 'axios'

const Home = () => {

    const [pokemons, setPokemons] = useState([]);

    const getAllPokemons = async () => {
        try {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151');
            setPokemons(response.data.results);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllPokemons();
    }, []);

    return (
        <div className='home-search'>
            <div className='container-search'>
                <div className='header-search'>
                    <Searchbar />
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