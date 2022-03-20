// import { useState } from "react";

const Card = ({ pokemon }) => {
    // const [abilities, setAbility] = useState([]);

    const handleClick = async () => {

        console.log(pokemon)
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        await fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data.abilities)
                console.log(data.abilities.map(ability => ability.ability.name))
                // console.log(data.results.map(pokemon => pokemon.url))
            })
    }

    return (

        <div onClick={handleClick}>
            {pokemon}
        </div>
    )
}

export default Card;