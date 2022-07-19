<template>
  <button
    type="button"
    class="p-2 mb-3 fw-bold w-100 rounded menu-btn"
    :class="
      this.activeRoute === route && this.activeRoute === this.current
        ? 'border-0'
        : 'border border-muted bg-transparent'
    "
    :style="[
      this.activeRoute === route && this.activeRoute === this.current
        ? { 'background-color': '#e9f8ee' }
        : { 'background-color': 'transparent' },
    ]"
    v-scroll-to="`#${route}`"
  >
    <div class="d-flex flex-row">
      <div
        class="bg-success me-2 rounded d-flex align-items-center justify-content-center menu-num"
        :class="
          this.activeRoute === route && this.activeRoute === this.current
            ? 'bg-success'
            : 'border border-muted bg-transparent text-muted'
        "
      >
        {{ menuNum }}
      </div>
      <span
        class="d-flex align-items-center"
        :class="
          this.activeRoute === route && this.activeRoute === this.current
            ? 'border-0 text-success'
            : 'bg-transparent text-muted'
        "
        >{{ menu }}</span
      >
    </div>
  </button>
</template>

<script>
export default {
  name: "BtnSideBar",
  props: ["menu-num", "menu", "route"],
  data() {
    return {
      activeRoute: this.route,
      current: "shop-info",
    };
  },
  mounted() {
    this.activeRoute = this.route;
    window.addEventListener("scroll", this.getElIdByScroll);
  },
  methods: {
    getElIdByScroll() {
      const section = document.querySelectorAll(".menu-item-list");
      //   let current;

      section.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 200) {
          this.current = section.getAttribute("id");
        }
      });

      section.forEach((sec) => {
        sec.classList.remove("active");
        if (sec.classList.contains(this.current)) {
          sec.classList.add("active");
          this.activeRoute = this.current;
          console.log("fdsajfajdsh c", this.activeRoute);
        }
      });
    },
  },
};
</script>

<style scoped>
.menu-btn {
  background-color: #e9f8ee;
}

.menu-num {
  color: white;
  width: 2rem;
  height: 2rem;
}
</style>

