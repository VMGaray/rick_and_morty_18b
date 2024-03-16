import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions-type"

const initialState = {
    allCharacters: [],
    myFavorites: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                allCharacters: [...state.allCharacters, action.payload],
                myFavorites: [...state.myFavorites, action.payload]
            }

        case REMOVE_FAV:
            const filteredFavs = state.myFavorites.filter((fav) => {
                return fav.id !== Number(action.payload)
            })
            return {
                ...state,
                myFavorites: filteredFavs
            }
        case FILTER:
            if (action.payload === null) {
                return {
                    ...state,
                    myFavorites: state.allCharacters
                }
            } else {
            const filteredCharacters = state.allCharacters.filter((character) => {
                return character.gender === action.payload
            })
            return {
                ...state,
                myFavorites: filteredCharacters
            }
        }
        case ORDER:
            const orderedFavorites = [...state.myFavorites]
            orderedFavorites.sort((a, b) => {
                if (action.payload === "A") {
                    return a.id - b.id
                } else if (action.payload === "D") {
                    return b.id - a.id
                } else {
                    return 0
                }
            })
            return {
                ...state,
                myFavorites: orderedFavorites
            }

        default:
            return state
    }
}

export default rootReducer