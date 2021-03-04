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
      <v-card
      class="mx-auto"
      max-width="344"
      outlined
      >
        <v-list-item-content>
          <div class="overline text-center mb-2">
            <h3>{{ user.name }}</h3>
          </div>
          <hr class="mb-3">
          <div class="text-center">
            <v-list-item-title class="headline mb-2 body-1 font-weight-medium">ID</v-list-item-title>
            <v-list-item-subtitle class="mb-3">{{ user._id.$oid }}</v-list-item-subtitle>
            <v-list-item-title class="headline mb-2 body-1 font-weight-medium">EMAIL</v-list-item-title>
            <v-list-item-subtitle class="mb-3">{{ user.email }}</v-list-item-subtitle>
            <v-list-item-title class="headline mb-2 body-1 font-weight-medium">TELEFONE</v-list-item-title>
            <v-list-item-subtitle class="mb-3">{{ user.phone }}</v-list-item-subtitle>
            <v-list-item-title class="headline mb-2 body-1 font-weight-medium">CPF</v-list-item-title>
            <v-list-item-subtitle class="mb-3">{{ user.cpf }}</v-list-item-subtitle>
            <v-list-item-title class="headline mb-2 body-1 font-weight-medium">ENDEREÇO</v-list-item-title>
            <v-list-item-subtitle class="mb-3">{{ user.address.address }}</v-list-item-subtitle>
            <v-list-item-title class="headline mb-2 body-1 font-weight-medium">CEP</v-list-item-title>
            <v-list-item-subtitle class="mb-3">{{ user.address.cep }}</v-list-item-subtitle>
            <v-list-item-title class="headline mb-2 body-1 font-weight-medium">CIDADE</v-list-item-title>
            <v-list-item-subtitle class="mb-3">{{ user.address.city }}</v-list-item-subtitle>
            <v-list-item-title class="headline mb-2 body-1 font-weight-medium">ESTADO</v-list-item-title>
            <v-list-item-subtitle class="mb-3">{{ user.address.state }}</v-list-item-subtitle>
            <v-list-item-title class="headline mb-2 body-1 font-weight-medium">NÚMERO</v-list-item-title>
            <v-list-item-subtitle class="mb-3">{{ user.address.number }}</v-list-item-subtitle>
          </div>
        </v-list-item-content>
    </v-card>

  <template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <div class="senha mb-5">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Trocar a Senha
        </v-btn>
        </div>
      
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Trocar a Senha</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>

              <v-col cols="12">
                <v-text-field
                  label="Nova Senha*"
                  type="password"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  label="Confirmar Nova Senha*"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
                            
            </v-row>
          </v-container>
          <small>*indica campos obrigatórios</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text 
            @click="dialog = false"
          >
            Cancelar
          </v-btn>

          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Confirmar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

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
      dialog: false,
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

    .senha {
        padding-bottom: 30px;
        padding-top: 40px;
    }

</style>