<template>
  <div class="encapsulate">
    <div class="primary containerDrawerElement dark" >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </div>

    <v-navigation-drawer v-model="drawer" absolute left temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          <v-list nav dense>
            <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4" >
              <v-btn to="/admin/admin" class="ms-5">
                Administradores
              </v-btn>

              <v-btn to="/admin/doadores" class="ms-5 mt-3 mb-3">
                Doadores
              </v-btn>

              <v-btn to="/admin/listabeneficiarios" class="ms-5">
                Beneficiários
              </v-btn>
              
            </v-list-item-group>
          </v-list>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
name:'sidebar',
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
.containerDrawerElement {
    width: 100%;
    height: 100%!important;
    display: flex;
    align-items: center;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
}

.containerDashboard {
    width: 100% !important;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    padding-bottom: 30px;
    padding-top: 10px;
}
.encapsulate{
    width: 100%;
    height: 40px;
}
</style>