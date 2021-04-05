<template>
  <div class="container3">
    <div class="primary containerDrawer">
      <v-btn to="/" class="backButton">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
    </div>

    <div class="containerImg">
      <v-img alt="Logo UnB" src="../assets/LogoSemFundo_CorAlternativa.png" contain />
    </div>
    <div class="containerAbout">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
      aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
    <doughnut-chart v-if="loaded" :data="doughnutData" :options="doughnutOptions"></doughnut-chart>
    <bar-chart v-if="loaded" :data="barData" :options="barOptions"></bar-chart>
    <br/>
    
  </div>

  
</template>

<script>
// @ is an alias to /src
import DoughnutChart from '../components/DoughnutChart.js'
import BarChart from '../components/BarChart.js'
import { Administrator } from "../functions/administrator.js"
let Admin = new Administrator();

export default {
  components: { DoughnutChart, BarChart },
  data: () => ({
    data: {},
    test: [],
    loaded: false,
    drawer: false,
    group: null,
    doughnutOptions: {
      hoverBorderWidth: 20
    },
    doughnutData: null,
    barOptions: {
      hoverBorderWidth: 20
    },
    barData: null
  }),

  watch: {
    group() {
      this.drawer = false;
    }
  },

  methods: {
    
  },

  async mounted () {
  
    this.loaded = false
    try {
      this.data = ( (await Admin.public_info()).data )
    } catch (e) {
      console.error(e)
    }
    
    this.loaded = true

    let dates = [];
    let beneficiaryAmounts = [];
    let donatorAmounts = [];
    let collectedAmounts = [];

    let i;

    for(i = 0; i < this.data.length; i++) {
      dates.push(this.data[i].date);
      beneficiaryAmounts.push(this.data[i].beneficiary_amount);
      donatorAmounts.push(this.data[i].donator_amount);
      collectedAmounts.push(this.data[i].collectedAmounts);
    }

    this.doughnutData = {
        hoverBackgroundColor: "red",
        hoverBorderWidth: 10,
        labels: dates,
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["#41B883", "#E46651", "#00D8FF"],
            // data: [this.data[0].beneficiary_amount,this.data[0].beneficiary_amount,this.data[0].beneficiary_amount]
            data: beneficiaryAmounts
          }
        ]
      }

    this.barData = {
        hoverBackgroundColor: "red",
        hoverBorderWidth: 10,
        labels: dates,
        datasets: [
          {
            label: "Doades Ativos",
            backgroundColor: ["#41B883", "#E46651", "#00D8FF"],
            // data: [this.data[0].beneficiary_amount,this.data[0].beneficiary_amount,this.data[0].beneficiary_amount]
            data: donatorAmounts
          }
        ]
      }

  }
};
</script>

<style scoped>
.container3 {
  background-color: white;
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

.containerAbout {
  width: 80%;
  text-align: justify;
  color: black;
}

.containerMenu {
  width: 85%;
  display: flex;
  justify-content: space-between;
}

.containerImg {
  width: 70% !important;
  max-height: 400px !important;
  display: flex;
  flex: 2;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.infobox {
  background-color: white;
  color: #547a9c;
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

.backButton {
  background-color: transparent !important;
  color: white !important;
  box-shadow: none !important;
}
</style>
