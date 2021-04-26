<template lang="pug">
header.header-container
  header.header-container__logo
    img.header--logo(v-lazy="require('@/assets/logo-one-group.png')")

    
</template>

<script>
export default {
  data: function() {
    return {
      // srcImg:require('@/assets/logo-one-group.png')
    };
  },
};
</script>

<style lang="sass">
.header-container
  display: flex
  align-items: center
  height: 90px
  margin-bottom: 30px
  background-color: $color-back
.header--logo
  max-width: 100px
  max-height: 100px
</style>
