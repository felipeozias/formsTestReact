import React from 'react'
import './Form.css';

export default function Form({setOpenModal}) {
    return (
        <form>
            <h1>Formulário</h1>
            <label for='name'>Nome:</label>
            <input id='name' type='text' placeholder='Digite seu nome (ao menos 3 caracteres)' min={3} max={20} pattern='[A-Z][a-z]{1,}( [A-Z][a-z]{1,}){0,}$'></input>

            <label for='email'>E-mail:</label>
            <input id='email' type='email' placeholder='Digite seu e-mail aqui' pattern='/\S+@\S+\.\S+/' min={5} max={80}></input>
            <button onClick={setOpenModal} type='button'>Enviar</button>
        </form>
    )
}

