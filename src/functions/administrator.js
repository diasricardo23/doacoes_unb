import axios from "axios"
// let api_url = process.env.VUE_APP_API_URL
let api_url = "http://localhost:5000"


export class Administrator {
    constructor(){}

    login(login_cred){
        return axios.post(`${api_url}/admin/login`, login_cred)
        .then(res => {
            return res
        })
        .catch(err => {
            if(err.response && err.response.status == 401){
                return { status: 401 }
            }
        })
    }
    

}