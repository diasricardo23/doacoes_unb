<template>
  <div class="containerPage listview">
    <Sidebar />

    <div class="containerDashboard" justify="center">
        <div style="width: 90%" class="pr-2">
          <v-expansion-panels>
            <v-expansion-panel v-for="(item, index) in months" :key="index" class="ms-5 mt-3 mb-2">
              <v-expansion-panel-header>{{item | moment}}</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-list subheader>
                  <v-subheader class="pl-0">Doações</v-subheader>
                  <admin-display-donation :data="item"/>
                </v-list>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
    </div>

    <Nav />
  </div>
</template>

<script>
import VueScrollSnap from "vue-scroll-snap";
import Sidebar from "../../components/Sidebar.vue";
import Nav from "../../components/AdminNavigation.vue";
import moment from 'moment'
import { Administrator } from "../../functions/administrator";
import AdminDisplayDonation from "../../components/AdminDisplayDonation.vue";
// @ is an alias to /src

let Admin = new Administrator();

export default {
  components: {
    Sidebar,
    Nav,
    AdminDisplayDonation
  },
  data: () => ({
    drawer: false,
    group: null,
    months:[],
    donations: []
  }),
  filters: {
    toReal: function(value) {
      return value.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL"
      });
    },
    moment: function (date) {
        return moment(date).locale('pt-br').format('MMMM/YYYY');
    },
  },
  watch: {
    group() {
      this.drawer = false;
    }
  },
  async mounted() {
    this.getDonations();
    this.getMonths();
  },
  methods: {
    async getDonations() {
      this.donations = (await Admin.getDonations()).data.reverse();
    },
    async getMonths(){
      this.months = ( (await Admin.getDonationsMonths()).data )
    },
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

.listStyle {
  margin-top: 10%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.listScroll {
  width: 88%;
  height: 70%;
  display: block;
  overflow-y: scroll;
  position: fixed;
  margin-top: 5%;
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

.months {
  width: 80%;
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

.item {
  /* Set the minimum height of the items to be the same as the height of the scroll-snap-container.*/
  min-height: 500px;
}

.scroll-snap-container {
  height: 500px;
  width: 500px;
}
</style>
