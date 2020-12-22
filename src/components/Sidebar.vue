   <template>
    <div class="encapsulate">
    <div class="primary containerDrawer dark" >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </div>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      left
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
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
<style>
    .containerDrawer {
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
        height: 7%;
    }
</style>