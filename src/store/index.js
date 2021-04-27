import Vue from 'vue';
import Vuex from 'vuex';
import axios from '@/services/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: '',
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
    rebootProducts(state) {
      state.products = [];
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
