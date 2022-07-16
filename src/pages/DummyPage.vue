<template>
    <button @click="login">
        Login
    </button>
</template>

<script>
import axios from 'axios'

export default {
    methods: {
        async login() {
            await axios.post("https://niuniq.herokuapp.com/api/web/niuniq/auth/login", {
                "email": "admin@niuniq.com",
                "password": "admin123"
            })
                .then(res => {
                    console.log('res :>> ', res);
                    alert("berhasil dapat token")
                    localStorage.setItem("token", res?.data.token)
                })
                .catch(err => {
                    console.log('err.response', err.response)
                })
            // console.log(auth)
        },
    },
};
</script>