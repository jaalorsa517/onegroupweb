import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import('../views/Product.vue'),
  },
];

const router = new VueRouter({
  history: 'history',
  routes,
});

//Navigation guards en caso de que no exista una ruta
router.beforeEach((to, from, next) => {
  to.matched.some(route => routes.find(element => element.name === route.name))
    ? next()
    : next({name: 'Home'});
});

export default router;
