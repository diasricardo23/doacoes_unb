<template>
  <div class="container listview">
      <Sidebar/>
    
    <div class="containerDashboard">
        <div class="listScroll">
        <div class="listStyle">
            <v-card class="infobox total" v-for="item in donations.reverse()" :key="item._id.$oid">
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
                    <b>Telefone .............. {{item.donator_data.phone}} </b>
                    </div>
                <div>
                    <b>Beneficiário .............. ---</b>
                </div>
            </v-card>
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
    async mounted() {
        this.getDonations()
    },
    methods: {
        async getDonations(){
            this.donations = ( await Admin.getDonations() ).data
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
