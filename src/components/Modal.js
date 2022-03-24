import React from "react";
import "./Modal.css";

const Modal = ({ pokemon, closeModal }) => {

    return (

        pokemon ?
            <div className="modal">
                < div className="overlay" ></div >
                <div className="modal-content">
                    <h2>Hello Modal</h2>
                    <p>
                        {pokemon.name}
                    </p>
                    <p>
                        {pokemon.url}
                    </p>
                    <button onClick={closeModal} className="close-modal">
                        CLOSE
                    </button>
                </div>
            </div > : <></>
    );
}

export default Modal;