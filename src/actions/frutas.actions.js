const actionsType = {
    ADICIONAR_FRUTA: 'ADICIONAR_FRUTA',
    REMOVER_FRUTA: 'REMOVER_FRUTA'
}


const actions = {
    adicionar: fruta => ({
        type: actionsType.ADICIONAR_FRUTA,
        payload: fruta
    }),
    remover: fruta => ({
        type: actionsType.REMOVER_FRUTA,
        payload: fruta,
    })
}

export { actions }
