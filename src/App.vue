<template>
    <nav-bar />
    <div class="flex-row">
        <side-bar />
        <router-view />
    </div>
</template>

<script>
import NavBar from "./components/bar/NavBar.vue";
import SideBar from "./components/bar/SideBar.vue";

export default {
    name: "App",
    components: {
        NavBar,
        SideBar
    },
};
</script>

<style>
#app {
    font-family: Inter, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #42b983;
}
</style>