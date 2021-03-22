<template>
  <div class="containerPage">
    <Sidebar/>
    <div class="containerDashboard">
        <div class="donations mt-2">
            <h2 class="black--text"><b>Olá, {{ user.name }}</b></h2>
        </div>

        <v-card color="#C4C4C4" class="infobox total" >
            <b>TOTAL ARRECADADO</b>
            <v-row>
                <v-col offset-md="5"><h1><span>{{ donations_amount | toReal }}</span></h1></v-col>
            </v-row>
        </v-card>

        <div class="containerMenu">
            <v-card contain color="#f2f2f2" class="infobox infoNumbers grey--text text--darken-1 ">
                Quantidade de Administradores
                <div>
                    <h1>{{administrators_amount}}</h1>
                </div>
            </v-card>
            <v-card contain color="#f2f2f2" class="infobox infoNumbers grey--text text--darken-1 ">
                Quantidade de Doadores
                <div>
                    <h1>{{donators_amount}}</h1>
                </div>
            </v-card>
            <v-card contain color="#f2f2f2" class="infobox infoNumbers grey--text text--darken-1 ">
                Quantidade de Beneficiários
                <div>
                    <h1>{{beneficiaries_amount}}</h1>
                </div>
            </v-card>
        </div>

        <v-card contain color="#C4C4C4" class="infobox total">
            <b>SISTEMA DE CONTROLE</b>
            <v-card-text>
                    Status da doação:
                <span class="green" v-if="status_month.status">
                    Aberta
                </span>
                <span class="red" v-else>
                    Fechada
                </span>
            </v-card-text>
            <v-card-actions class="alinhamento">
                <v-btn @click="sendReminder()"> Lembrar de criar doação </v-btn>
                <v-btn class="green ma-3" @click="open_month"> Abrir Mês </v-btn>
                <v-btn class="red lighten-3" @click="close_month"> Fechar Mês </v-btn>
            </v-card-actions>
            <v-card-text>
            <v-data-table
                :headers="headers"
                :items="logs"
                :items-per-page="5"
                class="elevation-1"
            ></v-data-table>
            </v-card-text>
        </v-card>

        <!-- <v-card color="#C4C4C4" class="infobox total" >
            <b>TOTAL ARRECADADO - MÊS</b>
        </v-card>

        <v-card color="#C4C4C4" class="infobox total" v-for="(item, index) in months" :key="index">
            <b>{{months}}</b><br>
            {{ searchDonations(item) }}
        </v-card> -->

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
        months: 0,
        logs: [],
        headers: [
            {
                text: 'Ação realizada',
                align: 'start',
                sortable: false,
                value: 'action',
            },
            {
                text: 'Afetados',
                align: 'start',
                sortable: false,
                value: "affected"
            },
            {
                text: 'Horário',
                align: 'start',
                sortable: false,
                value: "created_time"
            }
        ],
        status_month: null
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
    async mounted(){
        this.getDonationsQtd()
        this.getDonatorsQtd()
        this.getBeneficiariesQtd()
        this.getAdministratorsQtd()
        this.getMonths()
        this.getLogs()
        this.statusMonth()
    },
    methods: {
        async getMonths(){
            this.months = ( (await Admin.getDonationsMonths()).data )
        },
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
        },
        async searchDonations(month){
            let item = ( await Admin.getDonationsByMonth(month) ).data
            console.log("teste")
            console.log(item)
            return item
        },
        async sendReminder(){
            let res = ( await Admin.sendReminder() )
            console.log(res)
        },
        async getLogs(){
            this.logs = (await Admin.get_logs()).data.reverse()
        },
        async open_month(){
            (await Admin.open_month())
        },
        async close_month(){
            (await Admin.close_month())
        },
        async statusMonth(){
            this.status_month = (await Admin.status_month()).data
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
        flex-shrink: inherit;
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
        width: 30%;
        text-align: center;
    }
  .menuIcon{
    color: white;
  }

  .alinhamento {
      flex-direction: column;
  }


</style>
