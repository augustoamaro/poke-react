// import Card from "../components/Card";
import Modal from "../components/Modal";

import { useEffect, useState } from "react";

const Main = () => {
    const [pokemons, setPokemon] = useState([]);
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/")
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => {
                setPokemon(data.results.map(pokemon => pokemon.name))
            })

    }, [])

    return (
        <div className="container">
            <ol>
                {pokemons.map((pokemon, index) => {
                    return <li onClick={toggleModal} key={index}><Modal />{pokemon}</li>
                })}
            </ol>

        </div>
    )
}

export default Main;