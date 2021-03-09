<template>
  <div class="containerPage">
    <SidebarDonator />
    <div class="containerDashboard">
      <div v-if="status.status">
        <div>
            <v-row>
                <v-col cols="5">
                    <v-subheader light>Doação (valores multiplos de 50)</v-subheader>
                </v-col>
                <v-col cols="7">
                    <v-text-field
                    v-model="donation.value"
                    label="Valor"
                    prefix="R$"
                    ></v-text-field>
                </v-col>
            </v-row>
        </div>
        <v-btn rounded @click="doDonation" class="secondary white--text loginBtn mb-4">Doar</v-btn>
        <v-card
        elevation="2"
        class="aviso"
        >Ao clicar em SALVAR, você terá registrado a sua doação.
        <br>Você receberá uma mensagem com os dados bancários para realizar a transferência no dia XX/XX/XXXX.
        Após realizar a transferência, favor enviar comprovante para:
        <br><br>
        <v-icon></v-icon>(61) X XXXX-XXXX <br>
        <v-icon></v-icon> xxxxxxxxxxxxxxx@xxxxx.com</v-card>
      </div>
      <div v-else>
        <v-card class="container red lighten-4">
          Você não poderá realizar doações no momento <br>
          Estamos fora do período de doações
        </v-card>
      </div>

    </div>

    <Nav/>
  </div>
</template>

<script>
import SidebarDonator from '../../components/SidebarDonator.vue'
import Nav from "../../components/DonatorNavigation.vue"
import { Donator } from "../../functions/donator.js"

let Don = new Donator()
// @ is an alias to /src
export default {
  components: {
    SidebarDonator,
    Nav
  },
    data: () => ({
      drawer: false,
      group: null,
      date: null,
      menu: false,
      donation: {
        value: null
      },
      status: null
    }),
    mounted(){
      this.status_donation()
    },
    methods: {
      save (date) {
        this.$refs.menu.save(date)
      },
      logout(){
        localStorage.removeItem('userData')
      },
      async doDonation(){
        let donation = ( await Don.create_donation(this.donation) )
        console.log(donation)
      },
      async status_donation(){
        let status = (await Don.statusDonation()).data
        console.log(status)
        this.status = status
      }
    },

    watch: {
      group () {
        this.drawer = false
      },
       menu (val) {
        val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
      },
    },
  }



</script>

<style>

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
        padding-bottom: 10px;
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

    .date {
        margin-left: 2rem;
    }

    .aviso {
        padding: 1rem;
        margin: 0 50px 0 50px;
        font-weight: bold;
    }

</style>
