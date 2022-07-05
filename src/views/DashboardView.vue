<template>
    <div class="card p-4 border-0 shadow d-flex" style="border-radius: 8px;">
        <span class="text-success fw-bold d-flex fs-2">Dashboard</span>
        <hr class="w-100 mb-4" />
        <div class="dashboard-items row">
            <div class="col pe-2">
                <div class="total-products card p-4 border-0 shadow" style="border-radius: 8px;">
                    <div class="d-flex w-100 align-items-start">
                        <img src="@/assets/img/icon-grid.svg" class="me-2">
                        <div class="row text-white fw-bold d-flex ">
                            <span class="fs-4 text-left d-flex">8</span>
                            <span class="text-left d-flex" style="font-size: 14px">Total Produk</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col pe-2">
                <div class="card p-4 border-0 shadow" style="border-radius: 8px;">
                    <div class="d-flex w-100 align-items-start">
                        <img src="@/assets/img/icon-verification.svg" class="me-2">
                        <div class="row fw-bold d-flex ">
                            <span class="fs-4 text-left d-flex">8</span>
                            <span class="text-left d-flex" style="font-size: 14px">Menunggu Verifikasi</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col pe-2">
                <div class="card p-4 border-0 shadow" style="border-radius: 8px;">
                    <div class="d-flex w-100 align-items-start">
                        <img src="@/assets/img/icon-verification-failed.svg" class="me-2">
                        <div class="row fw-bold d-flex ">
                            <span class="fs-4 text-left d-flex">8</span>
                            <span class="text-left d-flex" style="font-size: 14px">Gagal Verifikasi</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col pe-2">
                <div class="card p-4 border-0 shadow" style="border-radius: 8px;">
                    <div class="d-flex w-100 align-items-start">
                        <img src="@/assets/img/icon-verification-success.svg" class="me-2">
                        <div class="row fw-bold d-flex ">
                            <span class="fs-4 text-left d-flex">8</span>
                            <span class="text-left d-flex" style="font-size: 14px">Berhasil Verifikasi</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ShopInfo"
}
</script>

<style scoped>
.total-products {
    background-image: linear-gradient(to right, #4E944F, #6ADF8B);
}

.dashboard-items:nth-last-child {
    margin-right: 0;
}
</style>