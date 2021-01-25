export class Util {
    constructor() { }

    checkToken(){
        if(localStorage.getItem("userData")){
            let user =  JSON.parse(localStorage.getItem("userData"))
            if(user.token){
                let token = user.token
                // Validar se token é valido, se sim, retorna o token se não, retorna false
                return token
            }else{
                return false
            }
            // if token is valid, return true, else, return false
        }else{
            return false
        }
    }
}