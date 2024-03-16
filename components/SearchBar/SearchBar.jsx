import { useState } from "react";
import style from "./SearchBar.module.css"

export default function SearchBar({onSearch}) {
   const [id, setId] = useState("")
   const handleChange = (event) => {
      setId(event.target.value)   
   }

   const clearInput = () => {
      setId("")
   }

   return (
      <div>
         <input className={style.imput} placeholder="Buscar..." type='search' onChange={handleChange} value={id}/>
         <button className={style.boton} onClick={() => {onSearch(id); clearInput()}}>Agregar</button>
      </div>
   );
}