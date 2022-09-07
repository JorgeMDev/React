import React, { useState, useEffect } from 'react'
import axios from "axios"

const DisplayOnLoad = () => {
    const [pokemonData, setPokemonData] = useState([]);


    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`)
            .then(response => {
                console.log(response.data.results)
                setPokemonData(response.data.results)
            })
            .catch()
    }, [])

    return (
        <div>
            
            {pokemonData.map((pokemon) => {
                return (
                   <div>
                       {pokemon.name}
                    </div>
                  )
            })} 
            
            
        </div>
    )
        }
        
export default DisplayOnLoad