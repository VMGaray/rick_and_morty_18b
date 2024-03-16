import { useState } from "react";
import validation from "./validation";
import style from "./Form.module.css"

const Form = ({ login }) => {

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
        setErrors(validation({ ...userData, [event.target.name]: event.target.value }))
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        login(userData)
    }

    return (
        
        <div className= {style.body}>
            <form onSubmit={handleSubmit} className= {style.etiquetaForm}>
                <div>
                    <label className={style.estatico1}>E-mail</label>
                    <input className={style.estaticoform1}
                        type="text" name="email" value={userData.email} onChange={handleChange} />
                    {errors.email && <span className={style.errores1}>{errors.email}</span>}
                </div>

                <div>
                    <label className={style.estatico2}>Password</label>
                    <input className={style.estaticoform2}
                        type="password" name="password" value={userData.password} onChange={handleChange} />
                    {errors.password && <span className={style.errores2}>{errors.password}</span>}
                </div>

                <button type="submit" className={style.boton}>SUBMIT</button>

            </form>
        </div>      
    )   
}

export default Form
        
