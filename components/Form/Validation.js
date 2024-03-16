const validation = (data) => {

    let errors = {}
    
    if(!data.email) {
        errors.email = "esta vacio"
    } else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email)) {
        errors.email = "no es un formato de email valido"
    } else if (data.email.length > 35) {
        errors.email = "zaracho sais... : mucho texto"
    }
    
    if(!data.password) {
        errors.password = "pone una contraseña"
    } else if(!/\d/.test(data.password)){
        errors.password = "te olvidaste de poner un numero"
    } else if(data.password.length < 6 || data.password.length > 20) {
        errors.password = "la contraseña tiene que tener de 6 a 20 caracteres"
    }
    
    return errors
    
    }
    
    export default validation