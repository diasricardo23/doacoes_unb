<template>
    <div class="container listview">
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
            </div><br>
            <div v-show="select.name">
            <div class="containerMenu">
            <v-card color="#f2f2f2" class="infobox infoNumbers grey--text text--darken-1">
                Valor Total / Mês
                <div>
                    <h1>{{menu.total}}</h1>
                </div>
            </v-card>
            <v-card color="#f2f2f2" class="infobox infoNumbers grey--text text--darken-1">
                Quantidade de Beneficiários
                <div>
                    <h1>{{menu.beneficiarios}}</h1>
                </div>
            </v-card>
            <v-card color="#f2f2f2" class="infobox infoNumbers grey--text text--darken-1">
                Valor médio / Beneficiário
                <div>
                    <h1>{{menu.valor_medio}}</h1>
                </div>
            </v-card>
            <v-card color="#f2f2f2" class="infobox infoNumbers grey--text text--darken-1">
                Parcial
                <div>
                    <h1>{{menu.parcial}}</h1>
                </div>
            </v-card>
        </div>
            <v-card class="infobox total" v-for="item in donations" :key="item._id.$oid">
                <div>
                    <b>Doador .............. {{ item.donator_data.name }}</b>
                </div>
                <div>
                    <b>Valor Informado .............. {{ item.value | toReal}}</b>
                </div>
                <div>
                    <b>Valor Real .............. {{ item.real_value | toReal }}</b>
                </div>
                <div>
                    <b>Beneficiário: -------------- 
                        <v-combobox 
                            v-model="combo_model" 
                            :items="teste_combobox"
                            multiple
                            small-chips
                        /> 
                    </b>
                </div>
                <div>
                    <b>Telefone .............. {{item.donator_data.phone}} </b>
                </div>
                <div>
                    <b>Data: .............. {{item.created_time | dateToPT}}</b>
                </div>
                <div>
                    <b>Beneficiário .............. ---</b>
                </div>
                <v-card-actions>
                    <v-spacer/>
                    <v-btn color="blue darken-4n white--text"> Enviar </v-btn>
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
        select: {},
        is_selected: false,
        menu: {
            total: 0,
            beneficiarios: 0,
            valor_medio: 0,
            parcial: 0,
        },
        combo_model: ["João"],
        teste_combobox: [ "João", "Maria", "josé" ]
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
        this.getDonations()
        this.getMonths()
        this.getBeneficiarios()
    },
    methods: {
        async getBeneficiarios(){
            this.menu.beneficiarios = ( (await Admin.getAllBeneficiaries()).data ).length
        },
        async getMonths(){
            this.months = ( (await Admin.getDonationsMonths()).data )
        },
        async getDonations(){
            this.donations = ( await Admin.getDonations() ).data.reverse()
        }
    }
}

</script>

<style scoped>
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

    .totalCard{
        background-color: #717171;
    }
    .listview{
        overflow: none;
    }

    .infoNumbers {
        width: 40%;
        text-align: center;
    }
  .menuIcon{
    color: white;
  }
  

</style>
