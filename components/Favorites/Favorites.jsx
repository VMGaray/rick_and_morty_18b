import React, { useState } from "react"
import { connect, useDispatch } from "react-redux"
import Card from "../Card/Card"
import style from "./Favorites.module.css"
import { filterCards, orderCards } from "../../redux/actions"

const Favorites = ({ myFavorites }) => {
    const [aux, setAux] = useState(false)
    const dispatch = useDispatch()

    const handleOrder = (e) => {
        dispatch(orderCards(e.target.value))
        setAux(!aux)
    }

    const handleFilter = (e) => {
        const selectedValue = e.target.value
if (selectedValue ==="ALL") {
    dispatch(filterCards(null))
} else {
    dispatch(filterCards(selectedValue))
        }       
        setAux(false)
    }

    return (
        <div className={style.fondo}>
            <div>
                <label>Ordenar:</label>
                <select onChange={handleOrder}>
                    <option value="A">Ascendente</option>
                    <option value="D">Descendente</option>
                </select>
            </div>
            {myFavorites.length >= 0 && (
            <div>
                <label>Filtrar por genero</label>
                <select onChange={handleFilter}>
                    <option value= "ALL">All</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option Value="Genderless">Genderless</option>
                    <option Value="unknown">Unknown</option>
                </select>
            </div>
            )}
            {myFavorites.map((fav) => (
                <Card
                    key={fav.id}
                    id={fav.id}
                    name={fav.name}
                    image={fav.image}
                    status={fav.status}
                    species={fav.species}
                    gender={fav.gender}
                    origin={fav.origin}
                />
    ))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites,
        allCharacters: state.allCharacters
    }
}

export default connect(mapStateToProps)(Favorites)
