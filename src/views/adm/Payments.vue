<template>
    <div class="containerPage listview">
    <Sidebar/>
    <div class="containerDashboard">
        <div class="listScroll">
        <div class="listStyle">
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
            <br>
            <div v-show="select">
            <div class="containerMenu">
            <v-card color="#f2f2f2" class="infobox infoNumbers grey--text text--darken-1 infonum1">
                Valor Total / Mês
                <div>
                    <h1>{{menu.total}}</h1>
                </div>
            </v-card>
            <v-card color="#f2f2f2" class="infobox infoNumbers grey--text text--darken-1 infonum2">
                Quantidade de Beneficiários
                <div>
                    <h1>{{menu.beneficiarios}}</h1>
                </div>
            </v-card>

            
            <v-card color="#f2f2f2" class="infobox infoNumbers grey--text text--darken-1 infonum2">
                Valor médio / Beneficiário
                <div>
                    <h1>{{menu.total / menu.beneficiarios}}</h1>
                </div>
            </v-card>
            <v-card color="#f2f2f2" class="infobox infoNumbers grey--text text--darken-1 infonum3">
                Parcial
                <div>
                    <h1>{{menu.parcial}}</h1>
                </div>
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
                    <b>Beneficiário: -------------- 
                        <v-list-item>
                        <v-combobox 
                            :items="teste"
                            item-text="name"
                            multiple
                            small-chips
                            v-model="selectedBeneficiary"
                        /> 
                        </v-list-item>
                        <div v-for='(beneficiario,index) in selectedBeneficiary' :key="index">
                            {{beneficiario}}
                            <v-text-field v-model='beneficiario.value'></v-text-field>
                        </div>
                    </b>
                </div>
               
                <div>
                    <b>Telefone</b> .............. {{item.donator_data.phone}} 
                </div>
                <div>
                    <b>Data:</b> .............. {{item.created_time | dateToPT}}
                </div>
                <v-card-actions>
                    <v-spacer/>
                    <v-btn color="blue darken-4n white--text" @click="updateDonation(item._id.$oid,selectedBeneficiary)"> Enviar </v-btn>
                </v-card-actions>
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
    import { Administrator } from "../../functions/administrator.js"
// @ is an alias to /src

let Admin = new Administrator()

export default {
    components:{
        Sidebar,
        Nav
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
        selectedBeneficiary:[ ]
    }),
    filters: {
        toReal: function(value){
            return value.toLocaleString('pt-br', { style: 'currency', currency: "BRL" })
        },
        dateToPT(value){
                var data = new Date(value)
                let dia  = data.getDate().toString()
                let diaF = (dia.length == 1) ? '0'+dia : dia
                let mes  = (data.getMonth()+1).toString() //+1 pois no getMonth Janeiro começa com zero.
                let mesF = (mes.length == 1) ? '0'+mes : mes
                let anoF = data.getFullYear()
                let hora = data.getHours()
                let minuto = data.getMinutes()
            return diaF+"/"+mesF+"/"+anoF+"  "+hora+":"+minuto;
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
        async getBeneficiarios(){
            this.menu.beneficiarios = ( (await Admin.getAllBeneficiaries()).data ).length
        },
        async getBeneficiariosNames(){
            this.teste=(await Admin.getBeneficiaryNames()).data
           
            this.teste.forEach(element => {
                this.teste_combobox.push(element.name)
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
        margin-top: 10%;

        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .listScroll{
        height: 60%;
        display:block;
        overflow-y:scroll;
        position:fixed;
        margin-top:5%;
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

    .totalCard {
        background-color: #717171;
    }
    .listview {
        overflow: none;
    }

    .infoNumbers {
        width: 40%;
        text-align: center;
    }
    .menuIcon {
    color: white;
  }

    .infonum1 {
        margin-right: 10px;
        margin-left: 35px;
    }

    .infonum2 {
        margin-right: 10px;
        margin-left: 10px;
    }

    .infonum3 {
        margin-left: 10px;
    }

    .infoboxdata {
        margin-left: 30px;
    }

</style>
