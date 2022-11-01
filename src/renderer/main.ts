import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import {createRouter, createWebHashHistory} from 'vue-router';
import App from './App.vue';
import Main from './pages/Main.vue';

const app = createApp(App);

const routes = [
    { path: '/', component: Main },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

app.use(ElementPlus);
app.use(router);
app.mount('#app');
