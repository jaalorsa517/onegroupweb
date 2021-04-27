<template lang="pug">
  section.Producto
    v-product-form
</template>

<script>
  import vProductForm from '@/components/VProductForm';

  export default {
    components: {
      vProductForm,
    },
  };
</script>
