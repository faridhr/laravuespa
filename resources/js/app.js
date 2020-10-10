import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import BootstrapVue from 'bootstrap-vue';
import VueFlashMessage from 'vue-flash-message';

Vue.use(BootstrapVue);
Vue.use(VueFlashMessage);
// import './sbadmin';

new Vue ({
  el : '#app',
  router,
  render : h => h(App)
});
