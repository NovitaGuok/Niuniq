<template>
  <div
    id="shop-info"
    class="menu-item-list shop-info card p-4 border-0 shadow"
    style="border-radius: 8px"
  >
    <span class="text-success fw-bold d-flex align-items-center fs-2"
      >Informasi Toko</span
    >
    <hr />
    <img src="@/assets/img/shop-info.png" class="card-img-bottom mt-3 mb-3" />
    <div class="d-flex w-100 mb-3 align-items-center justify-content-between">
      <div class="d-flex align-items-center">
        <img
          src="@/assets/img/dummy-logo.svg"
          alt=""
          class="d-inline-block align-text-top w-25 me-3"
        />
        <span class="fs-1 fw-bold">Roemah Bamboe</span>
      </div>
      <button class="border-0 bg-white">
        <img
          src="@/assets/img/ic-edit.svg"
          alt=""
          class="d-inline-block align-text-top"
        />
      </button>
    </div>
    <div class="mb-3">
      <span class="text-success fw-bold d-flex">Alamat Toko</span>
      <span class="d-flex"
        >Desa, Gontor 1, Gontor, Kec. Mlarak, Kabupaten Ponorogo, Jawa Timur
        63472</span
      >
    </div>
    <div class="mb-3">
      <span class="text-success fw-bold d-flex">Tahun Tercipta</span>
      <span class="d-flex">2018</span>
    </div>
    <div class="mb-3">
      <span class="text-success fw-bold d-flex">Link Shoope</span>
      <span class="d-flex">https://shopee.co.id/</span>
    </div>
    <div class="mb-3">
      <span class="text-success fw-bold d-flex">Alamat Toko</span>
      <span class="d-flex">https://www.tokopedia.com/</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopInfoView",
};
</script>