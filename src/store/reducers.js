import { combineReducers } from 'redux';

const historicNames = (state = [], action) => {
    if (action.type === "ADD_HISTORIC_NAME") {
        return [action.payload].concat(state).slice(0, 5);
    }

    return state;
}

const favouritesReducer = (state = [], action) => {
    if (action.type === "ADD_FAV_NAME") {
        return state.concat(action.payload);
    }

    return state;
}

const initState = {
    forename: 'Haydn',
    surname: 'SWE'
}

const currentNameReducer = (state = initState, action) => {
    if (action.type === "SET_CURRENT_FORENAME") {
        return Object.assign({}, state, { forename: action.payload })
    } else if (action.type === "SET_CURRENT_SURNAME") {
        return Object.assign({}, state, { surname: action.payload })
    }

    return state;
}

const filtersInitState = {
    isBoy: true,
    foreNameChar: null
}

const filtersReducer = (state = filtersInitState, action) => {
    if (action.type === 'SET_GENDER_FILTER') {
        return Object.assign({}, state, { isBoy: action.payload === 'BOY' })
    } else if (action.type === 'SET_FORE_NAME_CHAR') {
        return Object.assign({}, state, { foreNameChar: action.payload })
    }

    return state;
}

export default combineReducers({
    history: historicNames,
    favourites: favouritesReducer,
    currentName: currentNameReducer,
    filters: filtersReducer,
})