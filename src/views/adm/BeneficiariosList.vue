<template>
  <div class="containerPage listview">
    <Sidebar />

    <div class="containerDashboard">
      <div class="listScroll">
        <div class="listStyle">
          <v-card class="infobox months">
            <div>
              <h1>Fulano Ciclano<br><br></h1>
            </div>
            <div class="information">
                <h3>Contato</h3><br>
                <h3>(61) xxxx-xxxx</h3>
                <h3>xxxxxxxxxxxxxxxx@gmail.com</h3>
            </div>
            <div class="information banking">
                <h3>Dados Bancários</h3><br>
                <v-row>
                    <v-col md="4">
                        <h3>Banco:</h3>
                    </v-col>
                    <v-col offset-md="4">
                        <span><a>Editar</a></span>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md="4">
                        <h3>CPF xxxx-xxxx</h3>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md="4">
                        <h3><span>Agencia:              </span><span>Conta:        </span></h3>
                    </v-col>
                    <v-col offset-md="4">
                        <span><a>Apagar</a></span>
                    </v-col>
                </v-row>

            </div>
          </v-card>

        </div>
      </div>
    </div>

    <AdminBottomTabs />
  </div>
</template>

<script>
import Sidebar from "../../components/Sidebar.vue";
import AdminBottomTabs from "../../components/AdminBottomTabs.vue";
// @ is an alias to /src

export default {
  components: {
    Sidebar,
    AdminBottomTabs
  },
  data: () => ({
    drawer: false,
    group: null
  }),

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

.listStyle {
  margin-top: 10%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.listScroll {
  width:100%;
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
  width: 88%;
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
.bankEdit{
    margin-left: 30%;
}
</style>
