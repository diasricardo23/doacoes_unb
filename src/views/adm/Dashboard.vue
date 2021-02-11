<template>
  <div class="containerPage">
      <Sidebar/>
    
    <div class="containerDashboard">
        <div class="donations mt-2">
            <h2 class="grey--text"><b>Olá, {{ user.name }}</b></h2>
        </div>
        <v-card color="#C4C4C4" class="infobox total" >
            <b>TOTAL ARRECADADO</b>
            <v-row>
                <v-col offset-md="5"><h1><span>{{ donations_amount | toReal }}</span></h1></v-col>
            </v-row>
        </v-card>
        <div class="containerMenu">
            <v-card color="#f2f2f2" class="infobox infoNumbers grey--text text--darken-1">
                Quantidade de Administradores
                <div>
                    <h1>{{administrators_amount}}</h1>
                </div>
            </v-card>
            <v-card color="#f2f2f2" class="infobox infoNumbers grey--text text--darken-1">
                Quantidade de Doadores
                <div>
                    <h1>{{donators_amount}}</h1>
                </div>
            </v-card>
            <v-card color="#f2f2f2" class="infobox infoNumbers grey--text text--darken-1">
                Quantidade de Beneficiários
                <div>
                    <h1>{{beneficiaries_amount}}</h1>
                </div>
            </v-card>
        </div>
    </div>

    <div class="containerDashboard">
        <v-card color="#C4C4C4" class="infobox total" >
            <b>TOTAL ARRECADADO - MES</b>
            <v-row>
            </v-row>
        </v-card>
        
    </div>
    
    <Nav />
  </div>
</template>

<script>
    import Sidebar from '../../components/Sidebar.vue'
    import Nav from "../../components/AdminNavigation.vue"
    import { Administrator } from "../../functions/administrator.js"

    let Admin = new Administrator();

// @ is an alias to /src
export default {
    components:{
        Sidebar,
        Nav
    },
    data: () => ({
        drawer: false,
        group: null,
        user: JSON.parse(localStorage.getItem('userData')) ? JSON.parse(localStorage.getItem('userData')) : { name: "Txt default" },
        donations_amount: 0,
        donators_amount: 0,
        beneficiaries_amount: 0,
        administrators_amount: 0,
    }),
    filters: {
        toReal: function(value){
            return value.toLocaleString('pt-br', { style: 'currency', currency: "BRL" })
        }
    },
    watch: {
        group () {
            this.drawer = false
        },
    },
    mounted(){
        this.getDonationsQtd()
        this.getDonatorsQtd()
        this.getBeneficiariesQtd()
        this.getAdministratorsQtd()
    },
    methods: {
        async getDonationsQtd(){
            this.donations_amount = ( await Admin.getDonationsAmount() ).data
        },
        async getDonatorsQtd(){
            this.donators_amount = ( await Admin.getAllDonators() ).data.length
        },
        async getBeneficiariesQtd(){
            this.beneficiaries_amount = ( await Admin.getAllBeneficiaries() ).data.length
        },
        async getAdministratorsQtd(){
            this.administrators_amount = ( await Admin.getAllAdministrators() ).data.length
        }
    }
}

</script>

<style scoped>
    .containerPage {
        background-color: #DADADA;
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .containerDashboard {
        width: 100% !important;
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: center;
        padding-bottom: 30px;
        padding-top: 10px;
    }

    .containerMenu {
        width: 85%;
        display: flex;
        justify-content: space-between;
    }

    .infobox {
        background-color: white;
        color: #485550;
        padding: 10px;
        border-radius: 10px;
        margin-bottom: 20px;
        margin-top: 20px;
    }

    .total{
        width: 88%;
    }

    .totalCard{
        background-color: #717171;
    }



    .infoNumbers {
        width: 40%;
        text-align: center;
    }
  .menuIcon{
    color: white;
  }


</style>
