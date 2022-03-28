import React, { useEffect, useState } from "react";
import "./Modal.css";

const Modal = ({ pokemon, closeModal }) => {
    const [abilities, setAbilities] = useState([]);
    // const [sprites, setSprites] = useState([]);

    useEffect(() => {
        fetch(pokemon.url)
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => {
                setAbilities(data.abilities)
                // setSprites(data.sprites)
            })
    })

    return (

        pokemon ?
            <div className="modal">
                < div className="overlay" ></div >
                <div className="modal-content">

                    {/* {sprites.map((sprite) => {
                        return console.log(sprite)
                        return <img>{sprite.front_default}</img>
                    })} */}


                    <p className="pokemon">
                        {pokemon.name}
                    </p>


                    {abilities.map((ability, index) => {
                        return <p key={index}>Skill: {ability.ability.name}</p>
                    })}


                    <button onClick={closeModal} className="close-modal">
                        X
                    </button>
                </div>
            </div > : <></>
    );
}

export default Modal;