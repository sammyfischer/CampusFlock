import { createApp } from 'vue';
import App from './App.vue';
import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import router from './router'; // Import the router
import '@mdi/font/css/materialdesignicons.css';


// Create Vuetify instance
const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);
app.use(vuetify);  // Use Vuetify
app.use(router);    // Use the router
app.mount('#app');  // Mount the app
