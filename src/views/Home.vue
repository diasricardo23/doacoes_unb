<template>
  <div class="container1">
    <div class="containerImg">
      <v-img alt="Logo UnB" src="../assets/LogoSemFundo_CorAlternativa.png" contain class="mt-8"/>
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
  </div>
</template>

<script>
// @ is an alias to /src
</script>

<style scoped>
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
</style>
