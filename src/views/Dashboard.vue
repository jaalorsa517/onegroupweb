<template lang="pug">
  section.Dashboard
    .dashboard--button(@click="onAdd") +
    .dashboard__cards(v-if="products.length > 0")
      v-product-card(
        v-for="product in products"
        :key="product._id"
        :img="require('@/assets/logo.png')"
        :title="product.name"
        :price="product.value"
        :rating="product.score"
        @click.native="onClick(product)"
      )
    grid-loader.loader(
      v-else
      color="black"
    )
</template>

<script>
  import vProductCard from '@/components/VProductCard';
  import GridLoader from 'vue-spinner/src/GridLoader.vue';

  export default {
    components: {
      vProductCard,
      GridLoader,
    },
    computed: {
      products: function() {
        return this.$store.getters.getProducts;
      },
    },
    methods: {
      onAdd: function() {
        this.$router.push({name: 'Product'});
      },
      onClick: function(payload) {
        this.$store.commit('setProduct', payload);
        this.$router.push({name: 'Product'});
      },
    },
    created: function() {
      this.$store.dispatch('apiProducts');
    },
    destroyed: function() {
      this.$store.commit('rebootProducts');
    },
  };
</script>

<style lang="sass">
  .loader
    margin: auto
  .Dashboard
    position: relative
  .dashboard__cards
    display: flex
    flex-wrap: wrap
  .dashboard--button
    width: 70px
    height:70px
    display: flex
    justify-content: center
    align-items: center
    position: fixed
    right: 20px
    bottom: 20px
    z-index: 10
    font-size: 5rem
    text-align: center
    color: white
    border-radius:50%
    background-color: $color-back
    transition: $transition
    &:hover
      +hoverEl()
</style>
