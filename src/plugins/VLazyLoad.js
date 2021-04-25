import Vue from 'vue';
import VueLazyLoad from 'vue-lazyload';

const loadImage = require('@/assets/spinner-5.gif');

Vue.use(VueLazyLoad, {
  loading: loadImage,
});
