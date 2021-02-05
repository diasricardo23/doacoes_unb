import axios from "axios"
let api_url = process.env.VUE_APP_API_URL
// let api_url = "http://localhost:5000"

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

    createAdministrator(data){
        return axios.post(`${api_url}/admin/adm`, data, {
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

    editAdministrator(id, data){
        return axios.patch(`${api_url}/admin/adm/${id}`, data, {
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

    createDonator(data){
        return axios.post(`${api_url}/admin/donator`, data, {
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

    editDonator(id, data){
        return axios.patch(`${api_url}/admin/donator/${id}`, data, {
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

    createBeneficiary(data){
        return axios.post(`${api_url}/admin/beneficiary`, data, {
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

    editBeneficiary(id, data){
        return axios.patch(`${api_url}/admin/beneficiary/${id}`, data, {
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

    deleteBeneficiary(id){
        return axios.delete(`${api_url}/admin/beneficiary/${id}`, {
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

    deleteAdmin(id){
        return axios.delete(`${api_url}/admin/adm/${id}`, {
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
    
    deleteDonator(id){
        return axios.delete(`${api_url}/admin/donator/${id}`, {
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
