<template>
    <router-link class="nav-link" :to="`${route}`">
        <button type="button" class="border-0 p-2 mb-3 fw-bold w-100 rounded menu-btn">
            <div class="d-flex flex-row">
                <div class="bg-success me-2 rounded d-flex align-items-center justify-content-center menu-num">{{
                menuNum }}
                </div>
                <span class="text-success d-flex align-items-center">{{ menu }}</span>
            </div>
        </button>
    </router-link>
</template>

<script>
export default {
    name: "BtnSideBar",
    props: ["menu-num", "menu", "route"],
    mounted() {
        console.log("BtnSideBar", this.route)
    }
}
</script>

<style scoped>
.menu-btn {
    background-color: #E9F8EE;
}

.menu-num {
    color: white;
    width: 2rem;
    height: 2rem;  
}
</style>

