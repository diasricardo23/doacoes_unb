<template>
  <div class="containerPage">
    <SidebarDonator />
    <div class="containerDashboard">
        <div class="donations mt-2">
            <b>Olá, {{user.name}}</b>
        </div>

        <!-- <v-card class="infobox donations">
            Você não tem nenhuma doação agendada no momento.
        </v-card> -->

        <v-card class="infobox donations">
            Sua última doação foi em <strong>XX/XX/XXXX</strong> no valor de <strong>R$: 0,00</strong>
        </v-card>

        <v-card class="infobox donations pa-4">
            Você receberá uma mensagem com os dados para doação. <br/>
            Ao realizá-la, enviar o comprovante para: <br/><br/>
            <strong>(61) xxxx-xxxx <br/>
            xxxxxxxx@xxxx.com <br/></strong>
        </v-card>

        <v-card color="#C4C4C4" class="infobox total" >
            <b>TOTAL DOADO</b>
            <v-row>
                <v-col offset-md="5"><h1><span>{{ data.collected_amount | toReal }}</span></h1></v-col>
            </v-row>
        </v-card>

        <div class="containerMenu">
            
            <v-card contain color="#f2f2f2" class="infobox infoNumbers grey--text text--darken-1 ">
                Quantidade de Doadores
                <div>
                    <h1>{{data.donator_amount}}</h1>
                </div>
            </v-card>
            <v-card contain color="#f2f2f2" class="infobox infoNumbers grey--text text--darken-1 ">
                Quantidade de Beneficiários
                <div>
                    <h1>{{data.beneficiary_amount}}</h1>
                </div>
            </v-card>
        </div>

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
                      <img alt="Vue logo" src="../../assets/sobre.png" width="30" class="mr-4"/>
                      Sobre o Projeto 
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
            
              <div class="ms-16 posicao">
                <v-btn block x-large class="imglink" to="/donation"><img alt="Vue logo" src="../../assets/money.png" width="40" class="mr-4" />
                 Nova Doação    
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
import SidebarDonator from '../../components/SidebarDonator.vue'
import BottomTabs from '../../components/BottomTabs.vue'
import Nav from "../../components/DonatorNavigation.vue"
import { Administrator } from "../../functions/administrator.js"

let Admin = new Administrator();
// @ is an alias to /src
export default {
    components:{
        SidebarDonator,
        BottomTabs,
        Nav
    },
    data: () => ({
      drawer: false,
      group: null,
      dialog: false,
      user: JSON.parse(localStorage.getItem('userData')) ? JSON.parse(localStorage.getItem('userData')) : { name: "Txt default" },
      data: {}
    }),
    filters: {
        toReal: function(value){
            return value.toLocaleString('pt-br', { style: 'currency', currency: "BRL" })
        }
    },
    watch: {
      group () {
        this.drawer = false
      },
    },
    async mounted(){
        this.getPublicInfo()
    },
    methods: {
      logout(){
        localStorage.removeItem('userData')
        this.$router.push('/');
      },
      async getPublicInfo(){
        this.data = ( (await Admin.public_info()).data )
        console.log(data);
      },
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

    .posicao {
      margin-bottom: 4.5px !important;
    }

</style>