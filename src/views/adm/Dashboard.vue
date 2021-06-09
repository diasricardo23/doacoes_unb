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
                <v-col class="text-center"><h1><span>{{ donations_amount | toReal }}</span></h1></v-col>
            </v-row>
        </v-card>

        <div class="containerMenu" v-if="windowWidth > 540">
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
        <div class="containerMenuMobile" v-else>
            <v-card contain color="#f2f2f2" class="infoboxMobile infoNumbers grey--text text--darken-1 d-flex justify-space-around align-center" style="width: 90%">
                <div style="width: 80%" class="text-left">Quantidade de Administradores</div>
                <h3>{{administrators_amount}}</h3>
            </v-card>
            <v-card contain color="#f2f2f2" class="infoboxMobile infoNumbers grey--text text--darken-1 d-flex justify-space-around align-center" style="width: 90%">
                <div style="width: 80%" class="text-left">Quantidade de Doadores</div>
                <h3>{{donators_amount}}</h3>
            </v-card>
            <v-card contain color="#f2f2f2" class="infoboxMobile infoNumbers grey--text text--darken-1 d-flex justify-space-around align-center" style="width: 90%">
                <div style="width: 80%" class="text-left">Quantidade de Beneficiários</div>
                <h3>{{beneficiaries_amount}}</h3>
            </v-card>
        </div>
        
        <v-card contain color="#C4C4C4" class="infobox total">
            <b>SISTEMA DE CONTROLE</b>
            <v-card-text>
                <div v-if="status_month != null">
                    Status da doação:
                    <span class="green pa-1" v-if="status_month.status">
                        Aberta
                    </span>
                    <span class="red pa-1" v-else>
                        Fechada
                    </span>
                </div>
                <div v-else>
                    Status da doação:
                    <span class="pa-1">
                        -
                    </span>
                </div>
            </v-card-text>
            <v-card-actions :class="windowWidth > 540 ? 'alinhamento' : 'alinhamentoMobile'">
                <v-btn @click="sendReminder()"> Lembrar de criar doação </v-btn>
                <v-btn class="green ma-3" @click="open_month"> Abrir Mês </v-btn>
                <v-btn class="red lighten-3" @click="close_month"> Fechar Mês </v-btn>
            </v-card-actions>
            <v-card-text>
            <v-data-table
                :headers="headers"
                :items="logs"
                :items-per-page="5"
                :footer-props="{ itemsPerPageText: 'Items por Página', disableItemsPerPage: windowWidth < 540 }"
                class="elevation-1"
            >
                <template v-slot:item.created_time="{ item }">
                    {{item.created_time | moment}}
                </template>
            </v-data-table>
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
    import moment from 'moment'
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
        status_month: null,
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth,
    }),
    filters: {
        toReal: function(value){
            return value.toLocaleString('pt-br', { style: 'currency', currency: "BRL" })
        },
        moment: function (date) {
            return moment(date).format('DD/MM/yy HH:mm:ss');
        },
    },
    watch: {
        group () {
            this.drawer = false
        },
    },
    async mounted(){
        await this.getDonationsQtd()
        await this.getDonatorsQtd()
        await this.getBeneficiariesQtd()
        await this.getAdministratorsQtd()
        await this.getMonths()
        await this.getLogs()
        await this.statusMonth()
    },
    methods: {
        async getMonths(){
            this.months = ( (await Admin.getDonationsMonths()).data )
        },
        async getDonationsQtd(){
            this.donations_amount = ( await Admin.getDonationsAmount() ).data
            console.log(this.donations_amount)
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
            console.log('teste1')
            this.status_month = (await Admin.status_month()).data
            console.log('teste2')
            console.log(this.status_month)
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

    .containerMenuMobile {
        width: 90%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
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

    .infoboxMobile {
        background-color: white;
        color: #485550;
        padding: 5px;
        border-radius: 10px;
        margin-bottom: 10px;
        margin-top: 10px;
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
    display: flex;
  }

  .alinhamentoMobile {
      display: flex;
      flex-direction: column;
  }


</style>
