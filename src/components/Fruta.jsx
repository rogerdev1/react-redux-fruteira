import React from 'react'
import './Fruta.css'
import { useDispatch } from 'react-redux'
import { actions } from '../actions/frutas.actions'

function Fruta({fruta}){

    const dispatch = useDispatch()

    return(
        <div className='Fruta'>
            <ul>
                <li><strong>Fruta: </strong> {fruta.nome}</li>
                <li><strong>Quantidade: </strong> {fruta.quantidade}</li>
            </ul>
            <div>
                <button onClick={() => dispatch(actions.remover(fruta))}>X</button>
            </div>
        </div>
    )

}


export default Fruta
