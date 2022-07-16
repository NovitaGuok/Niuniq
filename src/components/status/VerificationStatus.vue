<template>
    <div class="rounded-pill text-white fw-bold py-1 px-2 d-inline-block "
        :class="verificationStatus ? 'bg-success' : (verificationStatus === null ? 'bg-warning' : 'bg-danger')">
        {{ verificationStatus ?
        "Berhasil" :
        (verificationStatus === null ? "Menunggu" : "Gagal")
        }}
    </div>
</template>

<script>
export default {
    name: "VerificationStatus",
    props: ["verification-status"],
}
</script>