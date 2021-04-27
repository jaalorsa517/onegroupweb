<template lang="pug">
  .product-card-container
    .product-card__img
      img(v-lazy="img")
    h4.product-card--title {{title}}
    p.product-card--price {{ price | priceFilter }}
    .product-card__rating
      img.product-card--rating(
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
  $padding: 10px

  .product-card-container
    width: 300px
    height: 250px
    padding: $padding
    margin: $padding
    border-radius:10px
    transition: $transition
    +shadowBox()
    &:hover
      +hoverEl()
  .product-card__img
    margin: 5px
    img
      width: 150px
      height: 150px
      display: block
      margin: auto
  .product-card--title
    margin-left: $padding
  .product-card--price
    margin-left: $padding+5px
    color: #777
</style>
