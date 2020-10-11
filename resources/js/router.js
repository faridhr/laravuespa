import Vue from 'vue';
import Router from 'vue-router';
import Welcome from './content/Welcome.vue';
import Category from './content/Category.vue';

Vue.use(Router);

const routes = [
  {
    path : '/',
    name : 'welcome',
    component : Welcome
  },
  {
    path : '/category',
    name : 'category',
    component : Category
  }
];

const router = new Router({
  routes : routes,
  linkActiveClass : 'active'
});

export default router;
