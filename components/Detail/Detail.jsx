import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import style from "./Detail.module.css"


const Detail = () => {
   const { id } = useParams()
   const [characters, setCharacters] = useState()
   useEffect(() => {
      axios(`https://rym2.up.railway.app/api/character/${id}?key=pi-jlpodesta`).then(
         ({ data }) => {
            if (data.name) {
               setCharacters(() => data);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         }
      );
   }, [id])

   return !characters ? <div>cargando...</div> : (

      <div className={style.detail}>
         <div className={style.card}>           
            <p></p>
            <h2>{characters.name}</h2>
            <img className={style.img} src={characters.image} alt='' />            
            <h2>{characters.status}</h2>
            <h2>{characters.species}</h2>
            <h2>{characters.gender}</h2>         
            <h2>{characters.origin.name}</h2>
         </div>
      </div >
   )
}

export default Detail
 