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
        <div class="donations mt-2">
            <b>Olá, Fulano de Tal!</b>
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

        <div class="containerMenu">
            <v-card class="infobox menu">
                Nova Doação
                <div class="imglink"><img alt="Vue logo" src="../assets/logo.png" width="58" /></div>
            </v-card>
            <v-card class="infobox menu">
                Sobre o Projeto
                <div class="imglink"><img alt="Vue logo" src="../assets/logo.png" width="58" /></div>
            </v-card>
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
// @ is an alias to /src
export default {
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

</style>
