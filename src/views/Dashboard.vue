<template lang="pug">
  section.Dashboard
    .dashboard--button(@click="onAdd") +
    .dashboard__cards(v-show="products.length > 0")
      v-product-card(
        v-for="product in products"
        :key="product._id"
        :img="require('@/assets/logo.png')"
        :title="product.name"
        :price="product.value"
        :rating="product.score"
      )
</template>

<script>
  import vProductCard from '@/components/VProductCard';

  export default {
    components: {
      vProductCard,
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
    },
    created: function() {
      this.$store.dispatch('apiProducts');
    },
  };
</script>

<style lang="sass">
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
