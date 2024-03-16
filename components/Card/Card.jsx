import { useNavigate } from "react-router-dom"
import style from "./Card.module.css"
import { addFav, removeFav } from "../../redux/actions"
import {connect } from "react-redux"
import { useState, useEffect } from "react"

function Card(props) {
   const navigate = useNavigate()

const [isfav, setIsFav] = useState(false)

useEffect(() => {
   props.myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
         setIsFav(true);
      }
   });

}, [props.myFavorites, props.id]);

const handleFavorite = () => {
   isfav ? props.removeFav(props.id)
   : props.addFav({
      id: props.id,
      name: props.name,
      image: props.image,      
      status: props.status,
      species: props.species,
      gender: props.gender,
      origin: props.origin
   })
   setIsFav(!isfav)
}

   return (
      <div className={style.carta}>
         <p></p>
         {
   isfav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
}
         <button className={style.close} onClick={() => props.onClose(props.id)}>X</button>
         <p></p>
         <h2>{props.name}</h2>
         <img className={style.img} src={props.image} alt='' onClick={() => navigate(`/detail/${props.id}`)} />
         <h2>{props.status}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.origin}</h2>
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => {
         dispatch(addFav(character))
      },
      removeFav: (id) =>{
         dispatch(removeFav(id))
      }
   }
}

const mapStateToProps = (state) => {
   return { myFavorites: state.myFavorites}

}

export default connect(mapStateToProps, mapDispatchToProps)(Card)