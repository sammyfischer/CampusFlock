import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'vuetify/styles';
import vuetify from './vuetify';

const app = createApp(App);
app.use(vuetify);
app.use(router);
app.mount('#app');

