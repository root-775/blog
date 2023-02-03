import Layout from "../views/blogs/Layout.vue";
import Create from "../views/blogs/Create.vue";
import Edit from "../views/blogs/Edit.vue";
import View from "../views/blogs/View.vue";

export default {
    path: '/blog',
    component: Layout,
    meta: {authRequired : true},
    children: [
        { path: '', redirect: '/blog/create' },
        { path: 'create', component: Create },
        { path: 'edit', component: Edit },
        { path: 'view', component: View }
    ]
};
