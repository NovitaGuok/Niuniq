<template>
  <div class="sidebar container-fluid">
    <div class="row flex-nowrap">
      <div
        class="col-auto col-xl-2 px-sm-2 px-0 bg-white position-fixed"
        style="width: 15%; z-index=999"
      >
        <div
          class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100"
        >
          <span
            class="fw-bold d-none d-sm-inline text-secondary mt-5 mb-4"
            style="font-size: 0.9rem"
            >Profil Saya</span
          >
          <ul
            class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start align-items-sm-start w-100"
          >
            <li
              class="nav-item flex-row w-100"
              v-for="(menu, index) in menus"
              :key="index"
            >
              <btn-side-bar
                :menu-num="index + 1"
                :menu="menu"
                :route="route[index]"
              />
            </li>
          </ul>
        </div>
      </div>
      <div
        class="bg-light p-4 pe-5"
        style="width: 85%; margin-left: 15% !important"
      >
        <!-- <router-view /> -->
        <shop-info class="mb-4" />
        <dashboard class="mb-4" />
        <product-list />
      </div>
    </div>
  </div>
</template>

<script>
import BtnSideBar from "@/components/button/BtnSideBar.vue";
import Dashboard from "@/views/DashboardView.vue";
import ProductList from "@/views/ProductListView.vue";
import ShopInfo from "@/views/ShopInfoView.vue";

export default {
  name: "SideBar",
  components: {
    BtnSideBar,
    Dashboard,
    ProductList,
    ShopInfo,
  },
  data() {
    return {
      menus: ["Informasi Toko", "Dashboard", "Daftar Produk"],
      route: ["shop-info", "dashboard", "product-list"],
    };
  },
};
</script>