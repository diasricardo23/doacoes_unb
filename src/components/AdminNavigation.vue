<template>
    <v-bottom-navigation fixed absolute>
        <v-btn to="/adm">
            <span>Home</span>
            <v-icon>mdi-home</v-icon>
        </v-btn>

        <v-btn to="/admin/payment">
            <span>Pagamentos</span>
            <v-icon>mdi-currency-brl</v-icon>
        </v-btn>

        <v-btn to="/admin/history">
            <span>Historico</span>
            <v-icon>mdi-history</v-icon>
        </v-btn>

        <v-btn to="/admin/admin">
            <span>Admin</span>
            <v-icon>mdi-face-profile</v-icon>
        </v-btn>

        <v-btn to="/admin/doadores">
            <span>Doadores</span>
            <v-icon>mdi-face-profile</v-icon>
        </v-btn>

        <v-btn to="/admin/listabeneficiarios">
            <span>Beneficiários</span>
            <v-icon>mdi-face-profile</v-icon>
        </v-btn>


        <v-btn @click="logout">
            <span>Sair</span>
            <v-icon>mdi-logout</v-icon>
        </v-btn>

    </v-bottom-navigation>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods: {
        logout(){
            localStorage.removeItem("userData")
            this.$router.push('/');
        }
    }
}
</script>