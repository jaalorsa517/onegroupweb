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
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = new VueRouter({
  history: 'hash',
  routes,
});

//Navigation guards en caso de que no exista una ruta
router.beforeEach((to, from, next) => {
  to.matched.some(route => routes.find(element => element.name === route.name))
    ? next()
    : next({name: 'Home'});
});

export default router;
