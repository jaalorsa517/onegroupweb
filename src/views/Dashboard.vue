<template lang="pug">
  section.Dashboard
    v-product-card(
      :img="require('@/assets/logo.png')"
      title="Product"
      price="15000"
      rating="3"
    )
    v-product-card(
      :img="require('@/assets/logo.png')"
      title="Product2"
      price="12000"
      rating="1"
    )
</template>

<script>
import vProductCard from '@/components/VProductCard';

export default {
  components: {
    vProductCard,
  },
};
</script>
