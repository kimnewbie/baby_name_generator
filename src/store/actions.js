const addHistoricName = payload => {
    return { type: 'ADD_HISTORIC_NAME', payload }
}

const addToFavorites = payload => {
    return { type: 'ADD_FAV_NAME', payload }
}

const setCurrentForename = payload => {
    return { type: 'SET_CURRENT_FORENAME', payload }
}

const setCurrentSurname = payload => {
    return { type: 'SET_CURRENT_SURNAME', payload }
}

const setFilterGender = payload => {
    return { type: 'SET_GENDER_FILTER', payload }
}

const setFilterForeNameChar = payload => {
    return { type: 'SET_FORE_NAME_CHAR', payload }
}


export {
    addToFavorites,
    addHistoricName,
    setCurrentForename,
    setCurrentSurname,
    setFilterGender,
    setFilterForeNameChar
}