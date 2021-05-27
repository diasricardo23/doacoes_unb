<template>
  <div class="container1">
    <div class="containerImg">
      <v-img alt="Logo UnB" src="../assets/LogoSemFundo_CorAlternativa.png" max-height="300" class="mt-5"/>
    </div>
    <div class="containerButtons">
      <v-btn outlined elevation="0" color="#C5DDF7" class="loginBtn mb-5" to="/loginadm">Login Admin</v-btn>
      <v-btn
        outlined
        elevation="0"
        color="#C5DDF7"
        class="loginBtn mb-5"
        to="/logindonator"
      >Login Doador</v-btn>
      <v-btn outlined elevation="0" color="#C5DDF7" class="loginBtn mb-5" to="/about">Sobre a Ação</v-btn>
    </div>
    <div class="footer" dark padless absolute>
      <v-card flat tile color="#547a9c" class="lighten-1 white--text text-center main_footer">
        <v-card-text class="white--text pt-0 text_footer">
          <p class="text-subtitle-1">Este projeto foi desenvolvido pelo  <a class="a" href="http://www.uiot.org">laboratório UIoT</a> e financiado pelo Laboratório de Tomata de Decisão <a class="a" href="http://redes.unb.br">Latitude</a></p>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Dissemine Amor</strong>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
</script>

<style scoped>
.a{
  color: white;
}

.footer{
  width: 100%;
  position: absolute;
  bottom: 0;
}

.container1 {
  background-color: #547a9c;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.containerImg {
  width: 80% !important;
  max-height: 500px !important;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.containerButtons {
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
}

.containerInput {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.loginBtn {
  width: 60%;
}

a{
  color: red;
}
</style>
