<template>
  <div class="container1">
    <div class="containerImg">
      <v-img alt="Logo UnB" src="../assets/logo.png" max-width="200" max-height="150" contain />
    </div>
    <div class="containerLogin">
      <div class="containerInput">
        <input
          v-model="login_form.email"
          type="text"
          class="form-control white emailInput"
          placeholder="E-mail"
        />
        <input
          v-model="login_form.password"
          type="text"
          class="form-control white emailInput"
          placeholder="Senha"
        />
      </div>
      <v-btn outlined elevation="0" @click="login()" class="white--text loginBtn">Entrar</v-btn>
      <br />
      <div class="white--text mb-2">
        Não tem uma conta?
        <v-btn outlined class="white--text cadastro" to="/signup">Cadastre-se aqui.</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import { Donator } from "../functions/donator.js";

let Don = new Donator();

export default {
  data() {
    return {
      login_form: {
        email: "victor@teste.com",
        password: "123456"
      }
    };
  },
  methods: {
    async login() {
      let user = await Don.login(this.login_form);
      console.log(user);
      if (user.status == 200) {
        localStorage.setItem("userData", JSON.stringify(user.data));
        this.$router.push("donator");
      }
      if (user.status == 401) {
        console.log("N pode, man");
      }
    }
  }
};
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
  width: 100% !important;
  display: flex;
  flex: 2;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.containerLogin {
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.containerInput {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5em;
}

.emailInput {
  border-radius: 8px;
  width: 80%;
  height: 36px;
  margin-bottom: 5px;
  padding: 5px;
}

.loginBtn {
  margin-top: 3em;
  width: 60%;
}

.cadastro {
  font-weight: normal !important;
  text-transform: none !important;
  letter-spacing: 0 !important;
  padding: 0.2em !important;
  margin-left: 0.5em;
}
</style>
