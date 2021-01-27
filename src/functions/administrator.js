import axios from "axios"
// let api_url = process.env.VUE_APP_API_URL
let api_url = "http://localhost:5000"

let user = JSON.parse(localStorage.getItem("userData"))
export class Administrator {
    constructor(){
        this.token = user ? user.token : null
    }

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
    
    getAllAdministrators(){
        return axios.get(`${api_url}/admin/adm`, {
            headers: { Authorization: `Bearer ${this.token}` }
        })
        .then(res => {
            return res
        })
        .catch(err => {
            if(err.response && err.response.status == 401){
                return { status: 401 }
            }
        })
    }

    getAllDonators(){
        return axios.get(`${api_url}/admin/donator`, {
            headers: { Authorization: `Bearer ${this.token}` }
        })
        .then(res => {
            return res
        })
        .catch(err => {
            if(err.response && err.response.status == 401){
                return { status: 401 }
            }
        })
    }

    getAllBeneficiaries(){
        return axios.get(`${api_url}/admin/beneficiary`, {
            headers: { Authorization: `Bearer ${this.token}` }
        })
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