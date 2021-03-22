<template>
  <div class="containerPage">
    <SidebarDonator />

    <div class="containerDashboard">
      <div class="donations mt-2">
        <b>Olá, {{user.name}}</b>
      </div>
      <v-card class="infobox donations mb-2" v-for="item in donations" :key="item._id.$oid">
        <div class="left">
          <v-badge v-if="item.is_changeable" color="red" />
          <v-badge v-else color="grey" />
          <v-badge v-if="item.aproved" color="green" />
        </div>
        <div class="right" style="width: 40%">
          <p class="text-subtitle-2 font-weight-thin mt-1">{{ item._id.$oid }}</p>
          <h3>Criação: {{ item.created_time | format_date }}</h3>
          <h4>Data de validação: dd/mm/yyyy</h4>
          <div v-for="benef_data in item.beneficiary_data" :key="benef_data.id">
            <div v-if="benef_data.name != null">
              <div v-if="innerWidth > 520" class="d-flex justify-space-between" style="width: 100%">
                <div class="d-flex">
                  <h4 class="mr-2">Beneficiário: </h4> 
                  <span>{{benef_data.name}}</span>
                  
                </div>
                <div v-if="benef_data.bank != null" class="mr-3">
                  <div>
                    <h5>Banco</h5>
                    {{benef_data.bank.bank}}
                  </div>
                  <div>
                    <h5>Conta</h5>
                    {{benef_data.bank.account}}
                  </div>
                  <div>
                    <h5>Agência</h5>
                    {{benef_data.bank.agency}}
                  </div>
                  <div>
                    <h5>Chave PIX</h5>
                    {{(benef_data.bank.pix_type)}} {{benef_data.bank.pix}}
                  </div>
                </div>
              </div>

              <div v-else style="width: 100%">
                <div class="d-flex">
                  <h4 class="mr-2">Beneficiário: </h4> 
                  <span>{{benef_data.name}}</span>
                  
                </div>
                <div class="mr-3">
                  <div>
                    <h5>Banco</h5>
                    {{benef_data.bank.bank}}
                  </div>
                  <div>
                    <h5>Conta</h5>
                    {{benef_data.bank.account}}
                  </div>
                  <div>
                    <h5>Agência</h5>
                    {{benef_data.bank.agency}}
                  </div>
                  <div>
                    <h5>Chave PIX</h5>
                    {{(benef_data.bank.pix_type)}} {{benef_data.bank.pix}}
                  </div>
                </div>
              </div>
            
            </div>
          </div>
          
          <h4>Valor: {{ item.value }}</h4>
          <v-card-actions>
            <v-btn
              rounded
              class="red lighten-2"
              small
              v-if="item.is_changeable"
              @click="deleteDonation(item._id.$oid)"
            >Deletar Doação</v-btn>
          </v-card-actions>
        </div>
      </v-card>
    </div>

    <Nav />
  </div>
</template>

<script>
import SidebarDonator from "../../components/SidebarDonator.vue";
import Nav from "../../components/DonatorNavigation.vue";
import { Donator } from "../../functions/donator.js";
// @ is an alias to /src

let Don = new Donator();

export default {
  components: {
    SidebarDonator,
    Nav
  },
  data: () => ({
    drawer: false,
    group: null,
    innerWidth: window.innerWidth,
    donations: [],
    user: JSON.parse(localStorage.getItem("userData"))
      ? JSON.parse(localStorage.getItem("userData"))
      : { name: "Txt default" }
  }),
  async mounted() {
    this.getDonations();
  },
  methods: {
    async getDonations() {
      this.donations = (await Don.getDonations()).data.reverse();
      console.log(this.donations);
    },
    async deleteDonation(donation_id) {
      let res = (await Don.deleteDonation(donation_id)).data;
      console.log(res);
    }
  },
  filters: {
    format_date(item) {
      let data = new Date(item);
      let dia = data.getDate().toString();
      let diaF = dia.length == 1 ? "0" + dia : dia;
      let mes = (data.getMonth() + 1).toString(); //+1 pois no getMonth Janeiro começa com zero.
      let mesF = mes.length == 1 ? "0" + mes : mes;
      let anoF = data.getFullYear();
      return diaF + "/" + mesF + "/" + anoF;
    }
  },
  watch: {
    group() {
      this.drawer = false;
    }
  }
};
</script>

<style scoped>
.containerPage {
  background-color: #dadada;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.active {
  background-color: blue;
}
.left,
.right {
  display: inline-block;
  *display: inline;
  zoom: 1;
  vertical-align: top;
}
.left {
  width: 25px;
  height: 100%;
}
.right {
  width: 25%;
}
.container {
  background-color: #dadada;
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

.imglink {
  width: 100%;
}

.teste {
  border: 1px solid black;
}
</style>
