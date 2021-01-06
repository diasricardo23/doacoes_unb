<template>
  <div class="container listview">
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

    <v-bottom-navigation v-model="value">
      <v-btn to="/dashboard">
        <span>Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn to="/donation">
        <span>Doar</span>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn to="/history">
        <span>Histórico</span>
        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn to="/profile">
        <span>Perfil</span>
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
import Sidebar from "../../components/Sidebar.vue";
// @ is an alias to /src

export default {
  components: {
    Sidebar
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
.container {
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
    width:80%;
  height: 60%;
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
.bankEdit{
    margin-left: 30%;
}
</style>
