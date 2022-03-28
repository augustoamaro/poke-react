import React from "react";
import Modal from "../components/Modal";

import { useEffect, useState } from "react";

const Main = () => {
    const [pokemons, setPokemons] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(null);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/")
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => {
                setPokemons(data.results)
            })

    }, [])

    return (
        <div className="container">
            {selectedPokemon && <Modal closeModal={() => setSelectedPokemon(null)} pokemon={selectedPokemon} />}
            <ol>
                {pokemons.map((pokemon, index) => {
                    return <li onClick={(e) => setSelectedPokemon(pokemon)} key={index}>{pokemon.name}</li>
                })}
            </ol>

        </div>
    )
}

export default Main;