import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/home.vue';
import accountRoutes from './account.routes';
import blogRoutes from './blog.routes';

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    linkActiveClass: 'active',
    routes: [
        { path: '/', component: Home, meta: {authRequired : true} },
        { ...accountRoutes },
        { ...blogRoutes },
        // catch all redirect to home page
        { path: '/:pathMatch(.*)*', redirect: '/' }
    ]
});

// router.beforeEach(async (to) => {
//     // clear alert on route change
//     // const alertStore = useAlertStore();
//     // alertStore.clear();

//     // redirect to login page if not logged in and trying to access a restricted page
//     const authRequired = to.matched.some(record => record.meta.authRequired);
//     // const authStore = useAuthStore();

//     if (authRequired) {
//         return '/login';
//     }
// });


router.beforeEach((to, from, next) => {
    if(to.meta.authRequired) {
        if(JSON.parse(localStorage.getItem('user'))) {
            next();
        }
        else {
            next('/account/login');
        }
    }
    else {
      next();
    }
  });
