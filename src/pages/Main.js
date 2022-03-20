import Card from "../components/Card";

import { useEffect, useState } from "react";

const Main = () => {
    const [pokemons, setPokemon] = useState([]);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/")
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => {
                setPokemon(data.results.map(pokemon => pokemon.name))
            })

    }, [])

    return (
        <div>
            {pokemons.map((pokemon, index) => {
                return <Card key={index} pokemon={pokemon} />
            })}
        </div>
    )
}

export default Main;