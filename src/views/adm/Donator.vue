<template>
  <div class="containerPage listview">
      <Sidebar/>

    <div class="containerDashboard">
        <div class="listScroll">
        <div class="listStyle">

           <v-card class="infobox total" >
            <div>
                <h1>Fulano Ciclano</h1>
            </div>
            <div>
                <b>Contato</b>
            </div>
            <div>
                <b>(61)xxxx-xxxx</b>
                </div>

           </v-card>

                               <v-card class="infobox total" >
            <div>
                <h1>Fulano Ciclano</h1>
            </div>
            <div>
                <b>Contato</b>
            </div>
            <div>
                <b>(61)xxxx-xxxx</b>
                </div>

           </v-card>
                      <v-card class="infobox total" >
            <div>
                <h1>Fulano Ciclano</h1>
            </div>
            <div>
                <b>Contato</b>
            </div>
            <div>
                <b>(61)xxxx-xxxx</b>
                </div>

           </v-card>

                      <v-card class="infobox total" >
            <div>
                <h1>Fulano Ciclano</h1>
            </div>
            <div>
                <b>Contato</b>
            </div>
            <div>
                <b>(61)xxxx-xxxx</b>
                </div>

           </v-card>

                      <v-card class="infobox total" >
            <div>
                <h1>Fulano Ciclano</h1>
            </div>
            <div>
                <b>Contato</b>
            </div>
            <div>
                <b>(61)xxxx-xxxx</b>
                </div>

           </v-card>
        </div>
        </div>
    </div>

    <AdminBottomTabs />
  </div>
</template>

<script>
    import Sidebar from '../../components/Sidebar.vue';
    import AdminBottomTabs from "../../components/AdminBottomTabs.vue";
// @ is an alias to /src


export default {
    components:{
        Sidebar,
        AdminBottomTabs
    },
    data: () => ({
      drawer: false,
      group: null
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
  }

</script>

<style scoped>
    .containerPage {
        background-color: #DADADA;
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .listStyle{
        margin-top: 10%;

        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .listScroll{
        height: 60%;
        display:block;
        overflow-y:scroll;
        position:fixed;
        margin-top:5%;
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

    .containerMenu {
        width: 85%;
        display: flex;
        justify-content: space-between;
    }

    .infobox {
        background-color: white;
        color: #485550;
        padding: 10px;
        border-radius: 10px;
        margin-bottom: 20px;
        margin-top: 20px;
    }

    .total{
        width: 88%;
    }

    .totalCard{
        background-color: #717171;
    }
    .listview{
        overflow: none;
    }

    .infoNumbers {
        width: 40%;
        text-align: center;
    }
  .menuIcon{
    color: white;
  }


</style>
