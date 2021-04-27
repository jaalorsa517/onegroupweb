import Vue from 'vue';
import Vuex from 'vuex';
import axios from '@/services/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphYWxvcnNhNTE5QGdtYWlsLmNvbSIsIm5hbWUiOiJKYWltZSIsImxhc3ROYW1lIjoiT3J0aXoiLCJpYXQiOjE2MTk0ODgxMzh9.DtnZJUtDJYWBlh5AarYCUm73VIsEd6P4fdhhvrVZUvg',
    products: [],
    product: {
      _id: '',
      name: '',
      description: '',
      value: '',
      img: '',
      score: '',
    },
  },
  getters: {
    getToken: state => state.token,
    getProducts: state => state.products,
    getProduct: state => state.product,
    getHeaderToken: state => ({
      headers: {Authorization: 'Bearer ' + state.token},
    }),
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload;
    },
    setProducts(state, payload) {
      state.products = payload;
    },
    setProduct(state, payload) {
      state.product = payload;
    },
    rebootProduct(state) {
      state.product = {
        _id: '',
        name: '',
        description: '',
        value: '',
        img: '',
        score: '',
      };
    },
  },
  actions: {
    async apiProducts(context) {
      try {
        const response = await axios.get(
          '/products',
          context.getters.getHeaderToken
        );
        if (response) context.commit('setProducts', response.data.products);
      } catch (err) {
        console.log(err.response);
      }
    },
  },
});
