import './bootstrap';
import { createApp } from 'vue';

import App from './App.vue';
import { router } from './router';

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';

const app = createApp(App);


app.use(router);

app.mount("#root");
