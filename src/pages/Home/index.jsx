import React from 'react'
import './style.css'
import Searchbar from '../../components/Searchbar'
import Card from '../../components/Card'

const Home = () => {
    return (
        <div className='container'>
            <Searchbar />
            <div className='cards'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Home