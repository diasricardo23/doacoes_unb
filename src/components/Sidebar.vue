<template>
  <div class="encapsulate">
    <div class="primary containerDrawerElement dark" >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="white--text"></v-app-bar-nav-icon>
    </div>

    <v-navigation-drawer v-model="drawer" absolute left temporary>
      <v-list nav dense>
        
        <v-list-item-group v-model="group" active-class="blue--text text--accent-4" >
          <v-list-item link to="/admin/admin">
            <v-list-item-icon>
              <v-icon>mdi-account-cog</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>ADMINISTRADORES</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item link to="/admin/doadores">
            <v-list-item-icon>
              <v-icon>mdi-account-cash</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>DOADORES</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item link to="/admin/listabeneficiarios">
            <v-list-item-icon>
              <v-icon>mdi-account-group</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>BENEFICIÁRIOS</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
            
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