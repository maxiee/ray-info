import { createApp } from 'vue';
import {createRouter, createWebHashHistory} from 'vue-router';
import App from './App.vue';
import Main from './pages/Main.vue';
import store from './store';
import ColumnCategory from './components/ColumnCategory.vue';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App);

const routes = [
    { path: '/', component: Main },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

app.component('ColumnCategory', ColumnCategory);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(router);
app.use(store);
app.mount('#app');
