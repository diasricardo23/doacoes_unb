<template>
  <div class="container3">
    <div class="primary containerDrawer">
      <v-btn to="/" class="backButton">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
    </div>

    <div class="containerImg">
      <v-img alt="Logo UnB" src="../assets/LogoSemFundo_CorAlternativa.png" contain />
    </div>
    <div class="containerAbout">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
      aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  data: () => ({
    drawer: false,
    group: null
  }),

  watch: {
    group() {
      this.drawer = false;
    }
  }
};
</script>

<style scoped>
.container3 {
  background-color: white;
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

.containerAbout {
  width: 80%;
  text-align: justify;
  color: black;
}

.containerMenu {
  width: 85%;
  display: flex;
  justify-content: space-between;
}

.containerImg {
  width: 70% !important;
  max-height: 400px !important;
  display: flex;
  flex: 2;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.infobox {
  background-color: white;
  color: #547a9c;
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

.backButton {
  background-color: transparent !important;
  color: white !important;
  box-shadow: none !important;
}
</style>
