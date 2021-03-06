<template>
  <div class="container2">
    <div class="containerUserData">
      <div class="containerLogo">
        <img alt="Vue logo" src="../assets/logo.png" width="58" />
        <b class="white--text mt-2">Cadastro do Doador</b>
      </div>
      <div class="containerInput">
        <input type="text" class="form-control white emailInput" placeholder="Nome Completo" />
        <input type="text" class="form-control white emailInput" placeholder="E-mail" />
        <input type="text" class="form-control white emailInput" placeholder="Telefone" />
        <input type="text" class="form-control white emailInput" placeholder="Senha" />
      </div>
    </div>
    <div class="containerPaymentData">
      <div class="containerTitle">
        <div class="pipe" />
        <b class="white--text">Dados para Doação</b>
        <div class="pipe" />
      </div>
      <div class="containerInput">
        <!-- <v-select class="selectInput" :items="items" dense label="Standard"></v-select> -->
        <input type="text" class="form-control white emailInput" placeholder="Banco" />
        <input type="text" class="form-control white emailInput" placeholder="Frequência de Doação" />
      </div>
      <v-btn outlined elevation="0" class="white--text loginBtn" to="/dashboard">Cadastre-se</v-btn>
      <div class="white--text mb-2">
        Já tem uma conta?
        <v-btn outlined class="white--text cadastro" to="/login">Entre aqui.</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  data: () => ({
    items: ["Foo", "Bar", "Fizz", "Buzz"]
  })
};
</script>

<style scoped>
.container2 {
  background-color: #547a9c;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.containerLogo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.containerUserData {
  width: 100% !important;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 5px;
  padding-top: 15px;
}

.containerPaymentData {
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.containerTitle {
  width: 80%;
  display: flex;
  justify-content: space-between;
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
  margin-bottom: 10px;
  padding: 5px;
}

.loginBtn {
  width: 60%;
  margin-bottom: 1.5em;
}

.pipe {
  width: 20%;
  border: 1px solid white;
}

.selectInput {
  background-color: white;
  width: 80%;
}

.v-text-field__details {
  display: none;
}

.cadastro {
  font-weight: normal !important;
  text-transform: none !important;
  letter-spacing: 0 !important;
  padding: 0.2em !important;
  margin-left: 0.5em;
}
</style>
