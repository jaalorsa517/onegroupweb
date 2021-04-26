<template lang="pug">
  .product-card-container
    .product-card__img
      img(v-lazy="img")
    h4.product--title {{title}}
    p.product--price {{ price | priceFilter }}
    .product__rating
      img.product--rating(
        v-for="star,key in stars"
        :key="key"
        :src="star"
        )
</template>

<script>
export default {
  props: ['img', 'title', 'price', 'rating'],
  data: function() {
    return {};
  },
  computed: {
    stars: function() {
      let _stars = [];
      for (let i = 0; i < this.rating; i++) {
        _stars.push(require('@/assets/star-fill.png'));
      }
      for (let i = 0; i < 5 - this.rating; i++) {
        _stars.push(require('@/assets/star.png'));
      }
      return _stars;
    },
  },
  filters: {
    priceFilter: function(value) {
      if (!value) return '';
      value = parseInt(value);
      return value.toLocaleString('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0,
      });
    },
  },
};
</script>

<style lang="sass">
.product-card-container
  max-width: 300px
  max-height: 300px
  padding: 10px
  margin: 10px
  border-radius:10px
  +shadowBox()
.product-card__img
  margin: 5px
  img
    width: 150px
    height: 150px
    display: block
    margin: auto
.product--price
  color: #777
</style>
