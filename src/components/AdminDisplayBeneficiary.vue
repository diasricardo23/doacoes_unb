<template>
  <div>
    <div >
        <v-list>
            <v-list-item v-for="(beneficiary,index) in data.beneficiary_data" :key="index">
            <v-list-item-title v-text="beneficiary.name"></v-list-item-title>
            <v-list-item-subtitle v-text="beneficiary.value"></v-list-item-subtitle>
            </v-list-item>
        </v-list>
    </div>
    <v-card-actions>
        <v-btn small depressed color="error" @click="deleteDonation(data._id.$oid)"> Deletar </v-btn> - <b class="text-caption">Esta é uma ação definitiva</b>
        <v-spacer/>
        <v-btn color="blue darken-4n white--text" @click="updateDonation(data._id.$oid,data.beneficiary_data)"> Enviar </v-btn>
    </v-card-actions>
  </div>
</template>

<script>
import {Administrator} from "../functions/administrator.js"
let Admin = new Administrator(); 

export default {
    props:['data'],
    data:()=>({
        donations:[],
        total:"",
        beneficiarios:[],
        
    }),
    async mounted(){
        this.getBeneficiariosNames()
    },
    methods:{
         async deleteDonation(id){
            let res = (await Admin.deleteDonation(id)).data
            console.log(res)
        },
        async getBeneficiarios(){
            this.menu.beneficiarios = ( (await Admin.getAllBeneficiaries()).data ).length
        },
        async getBeneficiariosNames(){
            this.beneficiarios=(await Admin.getBeneficiaryNames()).data
           
            this.beneficiarios.forEach(element => {
                this.beneficiarios_combobox.push({
                    "_id":element._id.$oid, 
                    "name":element.name})
            }); 
            console.log('***res.data',this.teste)
        },
        async getMonths(){
            this.months = ( (await Admin.getDonationsMonths()).data )
        },
        async totalByMonth(){
            this.menu.total = (await Admin.getTotalByMonth(this.select)).data
        },
        // async getDonations(){
        //     this.donations = ( await Admin.getDonations() ).data.reverse()
        // },
        async searchDonations(){
            this.donations = ( await Admin.getDonationsByMonth(this.select) ).data
            this.totalByMonth()
        },
        async updateDonation(id, data){
            let aux = {beneficiary_data:data}
            await Admin.editDonation(id,aux)
        }
    }
}
    
</script>

<style>

</style>