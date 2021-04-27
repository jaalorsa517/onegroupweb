<template lang="pug">
  #app.app
    v-header
    router-view
</template>

<script>
  import vHeader from '@/components/VHeader';

  export default {
    name: 'appOnegroup',
    components: {
      vHeader,
    },
  };
</script>

<style lang="sass">
  *
    margin: 0
    padding: 0
  h1
    font-size: 3rem
  h2
    font-size: 2.44rem
  h3
    font-size: 1.95rem
  h4
    font-size: 1.56rem

  p, a
    font-size: 1rem
    color: $color-font

  input
    padding: 10px
    margin-bottom: 15px
    border-radius: 10px
    font-size: 1rem
    color: $color-font
    border: none
    transition: $transition
    +shadowBox
    &:focus
      outline: none
      +hoverEl()

  .app
    font-family: Avenir, Helvetica, Arial, sans-serif
    color: $color-font
</style>
