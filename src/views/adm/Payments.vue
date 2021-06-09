<template>
    <div class="containerPage listview">
    <Sidebar/>
    <div class="containerDashboard">
        <div class="listScroll">
            <div class="listStyle">
                <div style="width: 100%">
                    <div class="infobox total">
                        <v-menu>
                            Meses
                        </v-menu>
                        <v-select
                            v-model="select"
                            :items="months"
                            item-text="name"
                            return-object
                        />
                        <v-btn @click="searchDonations()">
                            Pesquisar
                        </v-btn>
                    </div>
                </div>
                
                <div v-show="select">

                    <div class="containerMenu" v-if="windowWidth > 540">
                        <v-card color="#f2f2f2" class="infobox infoNumbers grey--text text--darken-1 infonum1">
                            Valor Total / Mês
                            <div>
                                <h2>{{menu.total | toReal}}</h2>
                            </div>
                        </v-card>
                        <v-card color="#f2f2f2" class="infobox infoNumbers grey--text text--darken-1 infonum2">
                            Quantidade de Beneficiários
                            <div>
                                <h2>{{menu.beneficiarios}}</h2>
                            </div>
                        </v-card>
                        <v-card color="#f2f2f2" class="infobox infoNumbers grey--text text--darken-1 infonum2">
                            Valor médio / Beneficiário
                            <div>
                                <h2>{{menu.total / menu.beneficiarios | toReal}}</h2>
                            </div>
                        </v-card>
                        <v-card color="#f2f2f2" class="infobox infoNumbers grey--text text--darken-1 infonum3">
                            Parcial
                            <div>
                                <h2>{{menu.parcial | toReal}}</h2>
                            </div>
                        </v-card>
                    </div>
                    <div class="containerMenuMobile" v-else>
                        <v-card contain color="#f2f2f2" class="infoboxMobile infoNumbers grey--text text--darken-1 d-flex justify-space-around align-center" style="width: 90%">
                            <div style="width: 80%" class="text-left">Valor Total / Mês</div>
                            <h3>{{menu.total | toReal}}</h3>
                        </v-card>
                        <v-card contain color="#f2f2f2" class="infoboxMobile infoNumbers grey--text text--darken-1 d-flex justify-space-around align-center" style="width: 90%">
                            <div style="width: 80%" class="text-left">Quantidade de Beneficiários</div>
                            <h3>{{menu.beneficiarios}}</h3>
                        </v-card>
                        <v-card contain color="#f2f2f2" class="infoboxMobile infoNumbers grey--text text--darken-1 d-flex justify-space-around align-center" style="width: 90%">
                            <div style="width: 80%" class="text-left">Valor médio / Beneficiário</div>
                            <h3>{{menu.total / menu.beneficiarios | toReal}}</h3>
                        </v-card>
                        <v-card contain color="#f2f2f2" class="infoboxMobile infoNumbers grey--text text--darken-1 d-flex justify-space-around align-center" style="width: 90%">
                            <div style="width: 80%" class="text-left">Parcial</div>
                            <h3>{{menu.parcial | toReal}}</h3>
                        </v-card>
                    </div>

                    <v-card class="infobox total infoboxdata " v-for="item in donations" :key="item._id.$oid">
                        <div>
                            <b>Doador</b> .............. {{ item.donator_data.name }}
                        </div>
                        <div>
                            <b>Valor Informado</b> .............. {{ item.value | toReal}}
                        </div>
                        <div>
                            <b>Valor Real</b> .............. {{ item.real_value | toReal }}
                        </div>
                    
                        <div>
                            <b>Telefone</b> .............. {{item.donator_data.phone}} 
                        </div>
                        <div>
                            <b>Data:</b> .............. {{item.created_time | moment}}
                        </div>
                        <div>
                            <b>Beneficiário: 
                                <admin-display-beneficiary :data="item"/>
                            </b>
                        </div>
                    </v-card>
                </div>
            </div>
        </div>
    </div>
    
    <Nav/>
  </div>
</template>

<script>
    import Sidebar from '../../components/Sidebar.vue'
    import Nav from "../../components/AdminNavigation.vue"
    import moment from 'moment'
    import { Administrator } from "../../functions/administrator.js"
    import AdminDisplayBeneficiary from "../../components/AdminDisplayBeneficiary.vue"
// @ is an alias to /src

let Admin = new Administrator()

export default {
    components:{
        Sidebar,
        Nav,
        AdminDisplayBeneficiary
    },
    data: () => ({
        drawer: false,
        group: null,
        donations: [],
        months: [],
        select: null,
        is_selected: false,
        menu: {
            total: 0,
            beneficiarios: 0,
            valor_medio: 0,
            parcial: 0,
        },
        teste_combobox: [ ],
        teste:[ ],
        selectedBeneficiary:[ ],
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
        monthReadable: function(date) {
            return moment(date).locale('pt-br').format('MMMM/YYYY');
        }
    },
    watch: {
        group () {
            this.drawer = false
        },
        combo_model (val) {
            if (val.length > 5) {
            this.$nextTick(() => this.model.pop())
            }
        },

    },
    async mounted() {
        // this.getDonations()
        this.getMonths()
        this.getBeneficiarios()
        this.getBeneficiariosNames()
    },
    methods: {
        async deleteDonation(id){
            let res = (await Admin.deleteDonation(id)).data
            console.log(res)
        },
        async getBeneficiarios(){
            this.menu.beneficiarios = ( (await Admin.getAllBeneficiaries()).data ).length
        },
        async getBeneficiariosNames(){
            this.teste=(await Admin.getBeneficiaryNames()).data
           
            this.teste.forEach(element => {
                this.teste_combobox.push({
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
            console.log(this.donations)
            this.totalByMonth()
        },
        async updateDonation(id, data){
            let aux = {beneficiary_data:data}
            await Admin.editDonation(id,aux)
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
    
    .container {


        background-color: #DADADA;
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .listStyle{
        display: flex;
        flex-direction: column;
        /* flex-wrap: wrap; */
        /* justify-content: center; */
        width: 100%;
    }

    .listScroll{
        width: 90vw;
        height: 80vh;
        display:flex;
        flex: 1;
        overflow-y:scroll;
        position:fixed;
        margin-top:10px;
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
        margin: 0 auto;
    }

    .containerMenuMobile {
        width: 100%;
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
    }

    .infoboxMobile {
        background-color: white;
        color: #485550;
        padding: 5px;
        border-radius: 10px;
        margin-bottom: 5px !important;
        margin-top: 5px !important;
    }

    .total{
        width: 100%;
    }

    .totalCard {
        background-color: #717171;
    }
    .listview {
        overflow: none;
    }

    .infoNumbers {
        width: 20%;
        margin: 0px 5px;
        text-align: center;
    }
    .menuIcon {
    color: white;
  }

</style>
