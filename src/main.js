import './assets/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'boxicons/css/boxicons.min.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import 'remixicon/fonts/remixicon.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'tinymce';
import {DataTable} from 'simple-datatables';
import './assets/js/main.js';

import {createApp} from 'vue';
import {createPinia} from 'pinia';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
