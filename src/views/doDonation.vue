<template>
  <div class="container">
    <div class="primary containerDrawer dark" >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </div>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      left
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    
    <div class="containerDashboard">
        <div>
            <v-row>
                <v-col cols="5">
                    <v-subheader light>Doação (valores multiplos de 50)</v-subheader>
                </v-col>
                <v-col cols="7">
                    <v-text-field
                    label="Valor"
                    value="10.00"
                    prefix="R$"
                    ></v-text-field>
                </v-col>
            </v-row>
        </div>
    
        <div class="date">
            <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                min-width="290px"
            >
                <template v-slot:activator="{ on, attrs }">
                <v-text-field
                    v-model="date"
                    label="Data da doação"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                ></v-text-field>
                </template>
                <v-date-picker
                ref="picker"
                v-model="date"
                :max="new Date().toISOString().substr(0, 10)"
                min="1950-01-01"
                @change="save"
                ></v-date-picker>
            </v-menu>
        </div>

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

    <v-btn rounded class="secondary white--text loginBtn mb-4" to="/doDonation">Doar</v-btn>
    
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

        <v-btn @click="logout()">
            <span>Logout</span>
            <v-icon>mdi-logout</v-icon>
        </v-btn>

    </v-bottom-navigation>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
    data: () => ({
      drawer: false,
      group: null,
      date: null,
      menu: false,
    }),
    
    methods: {
      save (date) {
        this.$refs.menu.save(date)
      },
      logout(){
        localStorage.removeItem('userData')
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
