import React from "react";
import { useSelector } from "react-redux";
import Fruta from "./Fruta";
import AdicionarFruta from "./AdicionarFruta";

function ListaFrutas(){

    const frutas = useSelector(state => state.frutaReducers.frutas)

    return (
        <div>
            <h1>Lista de Frutas</h1>

            <AdicionarFruta />

            {frutas.map( fruta => (
                <Fruta key={fruta.id} fruta={fruta} />
            ))}
        </div>
    )

}

export default ListaFrutas
