import React from "react";
import { useState } from "react";
import './AdicionarFruta.css'
import { useDispatch } from "react-redux";
import { actions } from "../actions/frutas.actions";

function AdicionarFruta(){

    const [nome, setNome] = useState('')
    const [quantidade, setQuantidade] = useState(0)

    const dispatch = useDispatch()

    const adicionarFruta = (e) => {
        e.preventDefault()

        const fruta = {
            id: defineID(),
            nome,
            quantidade,
        }

        dispatch(actions.adicionar(fruta))
    }

    const defineID = () => {
        const id = Math.floor(Math.random() * 1000)
        return id
    }

    return (
        <form onSubmit={adicionarFruta}>
            <input
                type="text"
                name={nome}
                placeholder="Nome da Fruta"
                onChange={e => setNome(e.target.value)}
                required
            />
            <input
                type="number"
                name={quantidade}
                placeholder="Quantidade da Fruta"
                onChange={e => setQuantidade(e.target.value)}
                required
            />
            <button>Adicicionar</button>
        </form>
    )

}

export default AdicionarFruta
