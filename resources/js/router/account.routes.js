import Login from "../views/login.vue";
import Register from "../views/register.vue"
import Layout from "../App.vue"

export default {
    path: '/account',
    component: Layout,
    meta: {authRequired : false},
    children: [
        { path: '', redirect: 'login' },
        { path: 'login', component: Login },
        { path: 'register', component: Register }
    ]
};
