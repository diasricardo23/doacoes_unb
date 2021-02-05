<template>
  <div class="containerPage">
    <div class="primary containerDrawer dark" >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </div>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      left
      temporary
    >
    </v-navigation-drawer>

    <div class="containerDashboard">
        <v-card class="infobox donations">
          <h2>
            PÁGINA DE PERFIL
          </h2>
        </v-card>
        <v-card class="infobox donations">
          <v-card-title>
            {{ user.name }}
          </v-card-title>
          <v-card-text>
            ID: {{ user._id.$oid }}<br>
            EMAIL: {{ user.email }}<br>
            TELEFONE: {{ user.phone }}<br>
            ENDEREÇO --------------------------------------- <br> 
            Endereço: {{ user.address.address }}<br>
            Cep: {{ user.address.cep }}<br>
            Cidade: {{ user.address.city }}<br>
            Número: {{ user.address.number }}<br>
            Estado: {{ user.address.state }}<br>
          </v-card-text>
        </v-card>

    </div>

    <Nav/>
  </div>
</template>

<script>
import Nav from "../../components/DonatorNavigation.vue"
// @ is an alias to /src
export default {
  components: {
    Nav
  },
    data: () => ({
      drawer: false,
      group: null,
      user: JSON.parse(localStorage.getItem('userData')) ? JSON.parse(localStorage.getItem('userData')) : { name: "Error" }
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

</style>
