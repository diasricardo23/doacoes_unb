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
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Fooooo</v-list-item-title>
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
        <div class="donations mt-2">
            <b>Olá, {{user.name}}</b>
        </div>

        <!-- <v-card class="infobox donations">
            Você não tem nenhuma doação agendada no momento.
        </v-card> -->

        <v-card class="infobox donations">
            Sua próxima doação será na data xx/xx/xx no valor de R$: 0,00
        </v-card>

        <v-card class="infobox donations">
            Você receberá uma mensagem com os dados para doação. <br/>
            Ao realizá-la, enviar o comprovante para: <br/>
            (61) xxxx-xxxx <br/>
            xxxxxxxx@xxxx.com <br/>
        </v-card>

        <!-- 
          ---------------------------------------ALA DOS BOTÕES----------------------------------------          
         -->

        <div> 
          <template>            
            <v-row align="center" justify="space-around">              
              <div class="button">
                <v-dialog
                  v-model="dialog"
                  width="500"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn block v-bind="attrs" v-on="on" x-large class="imglink" >
                      <img alt="Vue logo" src="../../assets/logo.png" width="88" />
                      ⠀⠀⠀⠀⠀⠀Sobre o Projeto⠀⠀⠀⠀⠀⠀
                    </v-btn>
                  </template>

                        <v-card>
                          <v-card-title class="headline grey lighten-2">
                            Sobre o Projeto
                          </v-card-title>
                          <div class="sobre-text">
                          <v-card-text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                          </v-card-text>
                          </div>
                          <v-divider></v-divider>

                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                              color="primary"
                              text
                              @click="dialog = false"
                            >
                              Fechar
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </div>
              </v-row>


            <v-row align="center" justify="space-around">
              <div class="containerButtons">
                <v-btn block x-large class="imglink"><img alt="Vue logo" src="../../assets/logo.png" width="88" />
                  ⠀⠀⠀⠀⠀⠀⠀Nova Doação⠀⠀⠀⠀⠀⠀⠀⠀
                </v-btn>
              </div>
            </v-row>

          </template>
        </div>


    </div>
    
    <Nav/>
  </div>
</template>

<script>
import BottomTabs from '../../components/BottomTabs.vue'
import Nav from "../../components/DonatorNavigation.vue"
// @ is an alias to /src
export default {
    components:{
        BottomTabs,
        Nav
    },
    data: () => ({
      drawer: false,
      group: null,
      dialog: false,
      user: JSON.parse(localStorage.getItem('userData')) ? JSON.parse(localStorage.getItem('userData')) : { name: "Txt default" }
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
    methods: {
      logout(){
        localStorage.removeItem('userData')
        this.$router.push('/');
      }
    }
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

    .imglink{
      width:100%;
    }

    .sobre {
        padding-bottom: 30px;
        padding-top: 40px;
    }

    .sobre-text {
        padding-bottom: 20px;
        padding-top: 20px;
    }

    .button {
        padding-bottom: 25px;
        padding-top: 20px;
    }
    
    .containerButtons {
      width: 100%;
      display: flex;
      flex: 1;
      flex-direction: column;
      align-items: center;
    }

</style>