<template>
    <div class="encapsulate">
        <v-bottom-navigation absolute hide-on-scroll v-model="value">
            <v-btn to="/dashboard">
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
        </v-bottom-navigation>
    </div>
</template>

<script>
// @ is an alias to /src
export default {

}

</script>
<style scoped>
    .encapsulate{
        width: 100%;
        height: 40px;
    }
</style>