<template>
  <div class="containerPage">
      <Sidebar/>
 <!-- <div class="primary containerDrawer dark" >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </div>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      left
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer> -->

    <div class="containerDashboard">
        <div class="donations mt-2">
            <b>Olá, Fulano de Tal!</b>
        </div>

        <v-card color="#C4C4C4" class="infobox total" >
            <b>TOTAL ARRECADADO</b>
            <v-row>
                <v-col offset-md="5"><h1>R$<span>0000,00</span></h1></v-col>
            </v-row>
        </v-card>
        <div class="containerMenu">
            <v-card color="#f2f2f2" class="infobox infoNumbers grey--text text--darken-1">
                Nova Doação
                <div>
                    <h1>7</h1>
                </div>
            </v-card>
            <v-card color="#f2f2f2" class="infobox infoNumbers grey--text text--darken-1">
                Sobre o Projeto
                <div>
                   <h1> 7</h1>
                </div>
            </v-card>
        </div>
    </div>

    <AdminBottomTabs />
  </div>
</template>

<script>
  import Sidebar from '../../components/Sidebar.vue'
  import AdminBottomTabs from '../../components/AdminBottomTabs.vue'
  // @ is an alias to /src
  export default {
    components:{
        Sidebar,
        AdminBottomTabs
    },
    data: () => ({
      drawer: false,
      group: null,
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
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
