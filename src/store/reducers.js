import { combineReducers } from 'redux';

const reducersInit = {
    initState: {
        forename: 'Youjin',
        surname: 'Kim'
    },
    filtersInitState: {
        isBoy: true,
        foreNameChar: null
    }
}

const historicNames = (state = [], action) => {
    switch (action.type) {
        case "ADD_HISTORIC_NAME":
            return [action.payload].concat(state).slice(0, 5);
        default: return state;
    }
}

const favoritesReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_FAV_NAME":
            if (state.find((name) => name.forename === action.payload.forename && name.surname === action.payload.surname)) {
                return state;
            } else {
                return state.concat(action.payload);
            }
        default: return state;
    }
}


const currentNameReducer = (state = reducersInit.initState, action) => {
    if (action.type === "SET_CURRENT_FORENAME") {
        return Object.assign({}, state, { forename: action.payload })
    } else if (action.type === "SET_CURRENT_SURNAME") {
        return Object.assign({}, state, { surname: action.payload })
    }

    return state;
}

const filtersReducer = (state = reducersInit.filtersInitState, action) => {
    if (action.type === 'SET_GENDER_FILTER') {
        return Object.assign({}, state, { isBoy: action.payload === 'BOY' })
    } else if (action.type === 'SET_FORE_NAME_CHAR') {
        return Object.assign({}, state, { foreNameChar: action.payload })
    }

    return state;
}

export default combineReducers({
    history: historicNames,
    favorites: favoritesReducer,
    currentName: currentNameReducer,
    filters: filtersReducer,
})