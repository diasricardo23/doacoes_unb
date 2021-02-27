<template>
  <div class="container1">
    <div class="containerImg">
      <v-img alt="Logo UnB" src="../assets/logo.png" contain />
    </div>
    <div class="logo-title">DOAÇÕES COVID UNB</div>
    <div class="containerButtons">
      <v-btn color="primary" class="loginBtn mb-4" to="/loginadm">Login Admin</v-btn>
      <v-btn color="primary" class="loginBtn mb-4" to="/logindonator">Login Doador</v-btn>
      <v-btn color="primary" class="loginBtn mb-4" to="/about">Sobre a Ação</v-btn>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
</script>

<style scoped>
.container1 {
  background-color: white;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.logo-title {
  color: #1d2d50;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 25%;
}

.containerImg {
  width: 60% !important;
  display: flex;
  flex: 2;
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

.emailInput {
  border-radius: 8px;
  width: 80%;
  height: 36px;
  margin-bottom: 5px;
  padding: 5px;
}

.loginBtn {
  width: 60%;
}
</style>
