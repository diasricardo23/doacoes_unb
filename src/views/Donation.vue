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
          <v-btn @click="logout()">
            <span>Logout</span>
            <v-icon>mdi-logout</v-icon>
        </v-btn>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    
      <div class="containerInfos">
          <div class="containerInput">
              <input type="text" class="form-control white emailInput" placeholder="Valor a ser doado (multiplo de 50)" />
              <input type="text" class="form-control white emailInput" placeholder=" Data prevista para doação" />
          </div>
          <p class="text">
            Ao clicar em SALVAR, você terá registrado a sua doação.

              Você receberá uma mensagem com os dados bancários para realizar a transferência no dia xx/xx/xx.

              Após realizar a transferência, favor enviar comprovante para:
          </p>
          <div class="icon">
            <img  alt="icon Whatsapp" src="../assets/whatsapp.png" />
            <h4> (61) xxxx-xxxx </h4>
            <img alt="icon arroba" src="../assets/arroba.png" />
            <h4 > xxxxxxxx@xxxx.com </h4>
          </div>
          <v-btn class="secondary white--text loginBtn" to="/dashboard"> SALVAR </v-btn>
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

    .header {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #fff;
        margin-top: 15px;
        justify-content: center;

    }


    .containerInfos {
        width: 100%;
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: center;

    }

    .containerInput {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 30px;

    }

    .form-control {
      margin:10px;
      width: 80%;
    }

    .text {
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #000;
        margin: 1em 0 0 0;
    }

    .icon {
      display: grid;
      grid-template-columns: 0.49fr 1fr;
      grid-row-gap: 1em;
      align-self: start;
      margin-left: 5.5em;
      margin-top: 2em;
    }

    .infobox {
        background-color: white;
        color: #485550;
        padding: 10px;
        border-radius: 10px;
        margin-bottom: 20px;
        margin-top: 20px;
        vertical-align: 0%;
    }

    .secondary {
        width: 80%;
        border-radius: 10px;
        top: 20%;
    }

    .menu {
        width: 45%;
        text-align: center;
    }

</style>
