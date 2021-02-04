<template>
  <div class="container">
    <div class="primary containerDrawer dark" >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
         <p class = "header">
            Pagina de Doação
        </p>
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
    </v-navigation-drawer>
    
    <div class="containerDashboard">
        <div class="donations mt-2">
            <b>Olá, Fulano de Tal!</b>
        </div>

        <!-- <v-card class="infobox donations">
            Você não tem nenhuma doação agendada no momento.
        </v-card> -->
        {{ donation }}
        <v-card class="infobox donations">
          <h3> XX/XX/2021 </h3>
          <h4> Beneficiário: </h4>
          <h4> Valor: </h4>
        </v-card>

        <v-card class="infobox donations">
          <h3> XX/XX/2021 </h3>
          <h4> Beneficiário: </h4>
          <h4> Valor: </h4>
        </v-card>
    </div>
    
    <Nav/>
  </div>
</template>

<script>
import Nav from "../../components/DonatorNavigation.vue"
import { Donator } from "../../functions/donator.js"
// @ is an alias to /src

let Don = new Donator()

export default {
  components: {
    Nav
  },
    data: () => ({
      drawer: false,
      group: null,
      donation: []
    }),
    async mounted() {
      this.getDonations()
    },
    methods: {
      async getDonations(){
        this.donations = ( (await Don.getDonations()).data )
      },
    },
    watch: {
      group () {
        this.drawer = false
      },
    },
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


    .header {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #fff;
        margin-top: 15px;
        justify-content: center;

    }

    .containerDrawer {
        width: 100%;
        height: 7%;
        display: flex;
        align-items: center;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
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

    .donations {
        width: 88%;
    }

    .menu {
        width: 45%;
        text-align: center;
    }

    .imglink{
      width:100%;
    }

</style>
