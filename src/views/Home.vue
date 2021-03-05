<template>
  <div class="container1">
    <div class="containerImg">
      <v-img alt="Logo UnB" src="../assets/LogoSemFundo_CorAlternativa.png" contain />
    </div>
    <div class="containerButtons">
      <v-btn outlined elevation="0" color="#C5DDF7" class="loginBtn mb-5" to="/loginadm">Login Admin</v-btn>
      <v-btn outlined elevation="0" color="#C5DDF7" class="loginBtn mb-5" to="/logindonator">Login Doador</v-btn>
      <v-btn outlined elevation="0" color="#C5DDF7" class="loginBtn mb-5" to="/about">Sobre a Ação</v-btn>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
</script>

<style scoped>
.container1 {
  background-color: #547A9C;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.containerImg {
  width: 30% !important;
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
