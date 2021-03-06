<template>
  <div class="containerPage listview">
    <Sidebar />

    <div class="containerDashboard" justify="center">
      <vue-scroll-snap>
        <!--<div v-for="bene in beneficiarios">{{bene.beneficiario}}</div> -->
      </vue-scroll-snap>

      <v-row justify="center">
        <v-expansion-panels inset>
          <v-expansion-panel v-for="(item,i) in 5" :key="i" class="ms-5 mt-3 mb-2">
            <v-expansion-panel-header>Mês Referente</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-list subheader>
                <v-subheader>Doação</v-subheader>
                <v-list-item v-for="donation in donations" :key="donation._id.$oid">
                  <v-list-item-content>
                    <v-list-item-title v-text="donation.donator_data.name"></v-list-item-title>
                    <v-list-item-subtitle v-text="donation.value"></v-list-item-subtitle>
                    <v-btn
                      class="ma-1"
                      color="blue darken-4n white--text"
                      plain
                      @click="approve(donation._id.$oid)"
                    >Aprovar</v-btn>
                  </v-list-item-content>
                </v-list-item>
              </v-list>Total Arrecadado: R$ 00.000,00
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </div>

    <Nav />
  </div>
</template>

<script>
import VueScrollSnap from "vue-scroll-snap";
import Sidebar from "../../components/Sidebar.vue";
import Nav from "../../components/AdminNavigation.vue";
import { Administrator } from "../../functions/administrator";
// @ is an alias to /src

let Admin = new Administrator();

export default {
  components: {
    Sidebar,
    Nav
  },
  data: () => ({
    drawer: false,
    group: null,

    donations: [
      // {
      //    active:true,
      //    value:"150,00"
      // }
    ]
  }),
  filters: {
    toReal: function(value) {
      return value.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL"
      });
    }
  },
  watch: {
    group() {
      this.drawer = false;
    }
  },
  async mounted() {
    this.getDonations();
  },
  methods: {
    async getDonations() {
      this.donations = (await Admin.getDonations()).data.reverse();
    },
    async approve(id) {
      await Admin.approveDonation(id);
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
