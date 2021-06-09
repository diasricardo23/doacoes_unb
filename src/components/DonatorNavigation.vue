<template>
    <v-bottom-navigation fixed>
        <v-btn to="/donator">
            <span>Home</span>
            <v-icon>mdi-home</v-icon>
        </v-btn>

        <v-btn to="/donation">
            <span>Doar</span>
            <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn to="/history">
            <span>Histórico</span>
            <v-icon>mdi-history</v-icon>
        </v-btn>

        <v-btn to="/profile">
            <span>Perfil</span>
            <v-icon>mdi-account</v-icon>
        </v-btn>
        <v-btn @click="logout()">
            <span>Logout</span>
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