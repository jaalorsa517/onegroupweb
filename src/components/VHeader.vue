<template lang="pug">
header.header-container
  router-link(to="/" v-animate-css="animated.tada").header__logo
    img.header--logo(v-lazy="require('@/assets/logo-one-group.png')")
  .header__user(v-if="$store.getters.getToken !== ''")
    a.header--close(
      href="#" 
      @click.prevent="onClick"
      v-animate-css="animated.rubberBand"
      ) Cerrar sesión

    
</template>

<script>
  export default {
    data: function() {
      return {
        animated: {
          rubberBand: {
            classes: 'rubberBand',
          },
          tada: {
            classes: 'tada',
          },
        },
      };
    },
    methods: {
      onClick: function() {
        this.$store.commit('setToken', '');
        this.$router.push({name: 'Home'});
      },
    },
  };
</script>

<style lang="sass">
  .header-container
    display: flex
    align-items: center
    justify-content: space-between
    height: 90px
    margin-bottom: 30px
    background-color: $color-back
  .header--logo
    max-width: 100px
    max-height: 100px
    margin-left: 20px
  .header--close
    margin-right: 20px
    font
      -size: 1rem
      -weight: bold
    color: white
</style>
