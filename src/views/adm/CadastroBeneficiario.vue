<template>
  <div class="container">
      <Sidebar/>

    
    <div class="containerDashboard">
        <div class="formSection">
            <h2 class="divider">  <span class="titleDivider">DADOS PESSOAIS</span>  </h2>
        </div>

  
    </div>
    
    <Nav/>
  </div>
</template>

<script>
    import Sidebar from '../../components/Sidebar.vue'
    import Nav from "../../components/AdminNavigation.vue"
// @ is an alias to /src
export default {
    components:{
        Sidebar,
        Nav
    },
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
    .container {
        background-color: #DADADA;
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: center;
        width: 100%;
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

    .formSection{
        text-align: center;
        color: #1D2D50;
        display:flex;
        width:100%;
        justify-content: center;
    }
    .divider{
        border-bottom: #1D2D50 2px solid;
        line-height: 0.1em;
        margin-top: 5%;
        width:80%;
    }
    .side1{
        width: 20%;
        color: rgb(37, 59, 105);
        margin-top:1%;
    }
    .formSection::before{
        content:" "
    }
    .titleDivider{
        background:#dadada;
        padding: 0 2%;
    }

    .infoNumbers {
        width: 40%;
        text-align: center;
    }
  .menuIcon{
    color: white;
  }
  

</style>
