<template>
  <div class="container">
      <Sidebar/>

    
    <div class="containerDashboard">
        <div class="formSection">
            <h3 class="divider">  <span class="titleDivider">DADOS PESSOAIS</span>  </h3>
        </div>
        <div class="formFields">
        <v-form>
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="fullname" :rules="nameRules"    label="Nome completo" solo>
              </v-text-field>
            </v-col>
          </v-row>
            <v-row>
            <v-col cols="12">
              <v-text-field v-model="email" :rules="emailRules" label="Email" solo>
              </v-text-field>
            </v-col>
          </v-row>
                      <v-row>
            <v-col cols="12">
              <v-text-field v-model="phone" :rules="phoneRules" label="Telefone" solo>
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="cpf" :rules="cpfRules" label="CPF" solo>
              </v-text-field>
            </v-col>
          </v-row>
        </v-form>
        </div>
        <div class="formSection">
            <h3 class="divider">  <span class="titleDivider">DADOS BANCÁRIOS</span>  </h3>
        </div>

                <div class="formFields">
        <v-form>
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="bank" :rules="bankRules"    label="Banco" solo>
              </v-text-field>
            </v-col>
          </v-row>
            <v-row>
            <v-col cols="12">
              <v-text-field v-model="agencia" :rules="agencyRules" label="Agencia" solo>
              </v-text-field>
            </v-col>
          </v-row>
                      <v-row>
            <v-col cols="12">
              <v-text-field v-model="account" :rules="accountRules" label="Conta Corrente" solo>
              </v-text-field>
            </v-col>
          </v-row>
        </v-form>
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
    import Sidebar from '../../components/Sidebar.vue'
// @ is an alias to /src
export default {
    components:{
        Sidebar
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

<style>
    .container {
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

    .formSection{
        text-align: center;
        color: #1D2D50;
        display:flex;
        width:100%;
        justify-content: center;
    }
    .divider{
        border-bottom: #1D2D50 2px solid;
        line-height: 0.1em;
        margin-top: 5%;
        width:80%;
    }
    .side1{
        width: 20%;
        color: rgb(37, 59, 105);
        margin-top:1%;
    }
    .formSection::before{
        content:" "
    }
    .titleDivider{
        background:#dadada;
        padding: 0 2%;
    }

    .formFields{
      display:grid;
      margin-top: 15%;
      height:100%;

    }
    .v-input__slot{
      background:white;
      box-shadow: none!important;
    }


    .infoNumbers {
        width: 40%;
        text-align: center;
    }

    
  .formFields .col-12 {
    padding-top: 0;
    padding-bottom: 0;
  }
  .formFields .theme--light.v-input {
    padding-top: 0;
  }
  .formFields .v-input__slot {
    margin-bottom: 0;
  }

  .menuIcon{
    color: white;
  }
  

</style>
