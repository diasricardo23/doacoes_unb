<template>
  <div class="container1">
    <div class="containerImg">
        <v-img alt="Logo UnB" src="../assets/logo.png" max-width="200" max-height="150" contain />
    </div>
    <div class="containerLogin">
        <div class="containerInput">
            <input type="text" class="form-control white emailInput" placeholder="E-mail" />
            <input type="text" class="form-control white emailInput" placeholder="Senha" />
        </div>
        <v-btn class="secondary white--text loginBtn" to="/dashboard">Entrar</v-btn>
        <div class="white--text mb-2">
            Não tem uma conta? 
            <v-btn outlined class="white--text cadastro" to="/signup">Cadastre-se aqui.</v-btn>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

</script>

<style>
    .container1 {
        background-color: #1D2D50;
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

    .cadastro {
        font-weight: normal !important;
        text-transform: none !important;
        letter-spacing: 0 !important;
        padding: 0.2em !important;
        margin-left: 0.5em;
    }
</style>
