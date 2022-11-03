import { createApp } from 'vue';
import {createRouter, createWebHashHistory} from 'vue-router';
import App from './App.vue';
import Main from './pages/Main.vue';
import store from './store';
import ColumnCategory from './components/ColumnCategory.vue';
import ArticleDetail from './components/ArticleDetail.vue';
import ArticleToolbar from './components/ArticleToolbar.vue';

const app = createApp(App);

const routes = [
    { path: '/', component: Main },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

app.component('ColumnCategory', ColumnCategory);
app.component('ArticleDetail', ArticleDetail)
app.component('ArticleToolbar', ArticleToolbar);

app.use(router);
app.use(store);
app.mount('#app');
