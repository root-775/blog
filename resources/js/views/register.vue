<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();
const full_name = ref('');
const email = ref('');
const password = ref('');
const confirm_password = ref('');
const errors = ref([]);

function onSubmit () {
    const formData = new FormData();
    formData.append('name', full_name.value);
    formData.append('email', email.value);
    formData.append('password', password.value);
    formData.append('confirm_password', confirm_password.value);
    axios.post('/register', formData)
        .then((res) => {
            if(res.data.data.status) {
                alert(res.data.data.message);
                router.push({ name: 'Login' })
            }
        })
        .catch((error) => {
            if(error.response.data.data) {
                errors.value = error.response.data.data;
            }else {
                alert(error.response.data.message);
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
                        <div class="col-lg-7">
                            <div class="card shadow-lg border-0 rounded-lg mt-5">
                                <div class="card-header">
                                    <h3 class="text-center font-weight-light my-4">
                                        Create Account
                                    </h3>
                                </div>
                                <span class="ms-4 text-danger" v-for="(error, index) in errors" :key="error.id">
                                    {{ error[0] }}
                                </span>
                                <div class="card-body">
                                    <form @submit.prevent="onSubmit">

                                        <div class="form-floating mb-3">
                                            <input class="form-control" id="full_name" type="text" v-model="full_name" />
                                            <label for="full_name">Name</label>
                                        </div>
                                        <div class="form-floating mb-3">
                                            <input class="form-control" id="inputEmail" type="email" v-model="email"  />
                                            <label for="inputEmail">Email address</label>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-md-6">
                                                <div class="form-floating mb-3 mb-md-0">
                                                    <input class="form-control" id="inputPassword" type="password" v-model="password" placeholder="Create a password" />
                                                    <label for="inputPassword">Password</label>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-floating mb-3 mb-md-0">
                                                    <input class="form-control" id="inputPasswordConfirm" v-model="confirm_password" type="password" placeholder="Confirm password" />
                                                    <label for="inputPasswordConfirm">Confirm Password</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mt-4 mb-0">
                                            <div class="d-grid">
                                                <button type="submit" class="btn btn-primary btn-block"> Create Account </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div class="card-footer text-center py-3">
                                    <div class="small">
                                        <router-link to="/login">Have an account? Go to login</router-link>
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
