import './assets/main.css';
import 'bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';

import TheLogo from './components/TheLogo.vue';
import ViewDescription from './components/ViewDescription.vue';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.component('TheLogo', TheLogo);
app.component('ViewDescription', ViewDescription);
app.use(createPinia());
app.use(router);

app.mount('#app');
