
const INITIAL_STATE = {
    frutas: [
        {id: 1, nome: 'Uva', quantidade: 5},
        {id: 2, nome: 'Maçã', quantidade: 2},
    ]
}

const actionsType = {
    ADICIONAR_FRUTA: 'ADICIONAR_FRUTA',
    REMOVER_FRUTA: 'REMOVER_FRUTA'
}
const frutaReducers = (state = INITIAL_STATE, action) => {

    switch(action.type){
        case actionsType.ADICIONAR_FRUTA:
            return { frutas: [...state.frutas, {...action.payload}] }
        case actionsType.REMOVER_FRUTA:
            return {frutas: [...state.frutas.filter(x => x.id !== action.payload.id)] }
        default:
            return state
    }
}

export { frutaReducers }
