import './assets/main.css';
import 'bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';

import TheLogo from './components/TheLogo.vue';
import ViewDescription from './components/ViewDescription.vue';

import { initializeApp } from 'firebase/app';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

// Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyB2dxqvgFHPfHDjK2lOkGdzSNW9ezMJDnw',
    authDomain: 'jules-art.firebaseapp.com',
    databaseURL:
        'https://jules-art-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'jules-art',
    storageBucket: 'jules-art.appspot.com',
    messagingSenderId: '959626176169',
    appId: '1:959626176169:web:3dabef89acf28624216bb8',
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App);

app.component('TheLogo', TheLogo);
app.component('ViewDescription', ViewDescription);
app.use(createPinia());
app.use(router);

app.mount('#app');
