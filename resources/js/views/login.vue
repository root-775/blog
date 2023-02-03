<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';


const email = ref('');
const password = ref('');
const errors = ref([]);
const router = useRouter();

function onSubmit() {
    const formData = new FormData();
    formData.append('email', email.value);
    formData.append('password', password.value);
    axios.post('/login', formData)
        .then((res) => {
            localStorage.setItem('user', JSON.stringify(res.data.data));
            router.push('/account/login')
        }).catch((error) => {
            if(error.response.data.data) {
                errors.value = error.response.data.data;
            }else {
                alert(error.response.data.data.message);
            }
        });
}
</script>

<template>
    <div id="layoutAuthentication">
        <div id="layoutAuthentication_content">
            <main>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-5">
                            <div class="card shadow-lg border-0 rounded-lg mt-5">
                                <div class="card-header">
                                    <h3 class="text-center font-weight-light my-4">Login</h3>
                                </div>
                                <span class="ms-4 text-danger" v-for="(error, index) in errors" :key="error.id">
                                    {{ error[0] }}
                                </span>
                                <div class="card-body">
                                    <form @submit.prevent="onSubmit">
                                        <div class="form-floating mb-3">
                                            <input class="form-control" id="inputEmail" type="email" v-model="email"  />
                                            <label for="inputEmail">Email address</label>
                                        </div>
                                        <div class="form-floating mb-3">
                                            <input class="form-control" id="inputPassword" type="password" v-model="password"
                                                placeholder="Password" />
                                            <label for="inputPassword">Password</label>
                                        </div>
                                        <div class="form-check mb-3">
                                            <input class="form-check-input" id="inputRememberPassword" type="checkbox"
                                                value="" />
                                            <label class="form-check-label" for="inputRememberPassword">Remember
                                                Password</label>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                                            <a class="small" href="#">Forgot Password?</a>
                                            <button class="btn btn-primary" type="submit">Login</button>
                                        </div>
                                    </form>
                                </div>
                                <div class="card-footer text-center py-3">
                                    <div class="small">
                                        <router-link to="/register">Need an account? Sign up!</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>
