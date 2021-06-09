<template>
  <div>
    <div v-for="(donation,index) in donations" :key="index">
        <v-list-item-content>
          <v-list-item-title v-text="donation.donator_data.name"></v-list-item-title>
          <v-list-item-subtitle  v-text="$options.filters.toReal(donation.value)"></v-list-item-subtitle>
                    <v-btn
                      class="ma-1"
                      color="blue darken-4n white--text"
                      plain
                      @click="approve(donation._id.$oid)"
                    v-if="!donation.aproved"
                    >Aprovar</v-btn>
        </v-list-item-content>
    </div>
    <div>Total Arrecadado: {{total | toReal}}</div>
  </div>
</template>

<script>
import {Administrator} from "../functions/administrator.js"
let Admin = new Administrator(); 

export default {
    props:['data'],
    data:()=>({
        donations:[],
        total:""
    }),
    filters: {
      toReal: function(value) {
        return value.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL"
        });
      }
    },
    async mounted(){
        this.searchDonations()
        this.totalByMonth()
    },
    // watch:{
    //     data: function(val){
    //         this.searchDonations()    
    //         this.totalByMonth()
    //         console.log(val)
    //     }

    // },
    methods:{
        async searchDonations(){
            this.donations = ( await Admin.getDonationsByMonth(this.data)).data
        },
        async approve(id) {
            await Admin.approveDonation(id);    
        },
        async totalByMonth(){
            this.total = (await Admin.getTotalByMonth(this.data)).data
    },
    }
}
    
</script>

<style>

</style>