<template>
  <div class="container1">
    <div class="containerImg">
        <v-img alt="Logo UnB" src="../assets/logo.png" max-width="200" max-height="150" contain />
    </div>
    <div class="containerButtons">
        <v-btn rounded class="secondary white--text loginBtn mb-4" to="/login">Entrar</v-btn>
        <v-btn rounded class="secondary white--text loginBtn" to="/about">Sobre a Ação</v-btn>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

</script>

<style>
    .container1 {
        background-color: rgb(19, 62, 121);
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
