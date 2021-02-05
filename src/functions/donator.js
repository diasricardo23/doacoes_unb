import axios from "axios"
let api_url = process.env.VUE_APP_API_URL
// let api_url = "http://localhost:5000"

let user = JSON.parse(localStorage.getItem("userData"))

export class Donator {
    constructor(){
        this.token = user ? user.token : null
    }

    login(login_cred){
        return axios.post(`${api_url}/donator/login`, login_cred)
        .then(res => {
            return res
        })
        .catch(err => {
            if(err.response && err.response.status == 401){
                return { status: 401 }
            }
        })
    }

    create_donation(value){
        return axios.post(`${api_url}/donator/donation`, value, {
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
    
    getDonations(){
        return axios.get(`${api_url}/donator/donation`, {
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
    // getAllAdministrators(){
    //     return axios.get(`${api_url}/admin/adm`, {
    //         headers: { Authorization: `Bearer ${this.token}` }
    //     })
    //     .then(res => {
    //         return res
    //     })
    //     .catch(err => {
    //         if(err.response && err.response.status == 401){
    //             return { status: 401 }
    //         }
    //     })
    // }

    // createAdministrator(data){
    //     return axios.post(`${api_url}/admin/adm`, data, {
    //         headers: { Authorization: `Bearer ${this.token}` }
    //     })
    //     .then(res => {
    //         return res
    //     })
    //     .catch(err => {
    //         if(err.response && err.response.status == 401){
    //             return { status: 401 }
    //         }
    //     })
    // }

}
