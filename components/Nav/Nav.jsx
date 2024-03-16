import SearchBar from "../SearchBar/SearchBar";
import { useNavigate } from "react-router-dom"
import style from "./Nav.module.css"

const Nav = ({onSearch}) => {
    const navigate = useNavigate()
    return (      
        <div className={style.wallpaper}>
            <button className={style.boton1} onClick={() => navigate("/home")} >HOME</button>
            <button className={style.boton2} onClick={() => navigate("/about")} >ABOUT</button>
            <button className={style.boton3} onClick={() => navigate("/favorites")} >FAVORITES</button>
            <SearchBar onSearch={onSearch}/>
        </div>    
    )
}

export default Nav