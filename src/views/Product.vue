<template lang="pug">
  section.Producto
    v-product-form(v-if="isAdd")
    v-product-form(v-else="isAdd" ref="updateDelete")
      template(v-slot:title)
        h2.form--title Modificar Producto
      template(v-slot:footer)
        .producto__buttons-container(v-if="!loading")
          button.form--button.producto--button(@click.prevent="onUpdate") Modificar
          button.form--button.producto--button(@click.prevent="onDelete") Eliminar
        bounce-loader(v-else color="black")
</template>

<script>
  import vProductForm from '@/components/VProductForm';
  import axios from '@/services/api';
  import {isFill} from '@/utils/validators';
  import BounceLoader from 'vue-spinner/src/BounceLoader.vue';

  export default {
    components: {
      vProductForm,
      BounceLoader,
    },
    data: function() {
      return {
        isAdd: true,
        loading: false,
      };
    },
    methods: {
      onUpdate: async function() {
        this._loadingSw();
        if (this.$refs.updateDelete.hashValues) {
          try {
            const response = await axios.put(
              `/products/${this.$store.getters.getProduct._id}`,
              this.$refs.updateDelete.getDatas,
              this.$store.getters.getHeaderToken
            );
            if (response) {
              this.$store.commit('rebootProduct');
              this.$router.push({name: 'Dashboard'});
            }
          } catch (err) {
            this.$refs.updateDelete.setMsg(err.response.data);
          }
        } else {
          this.$refs.updateDelete.setMsg(
            'El nombre, el precio y el puntaje son requeridos'
          );
        }
        this._loadingSw();
      },
      onDelete: async function() {
        this._loadingSw();
        try {
          const response = await axios.delete(
            `/products/${this.$store.getters.getProduct._id}`,
            this.$store.getters.getHeaderToken
          );
          if (response) {
            this.$store.commit('rebootProduct');
            this.$router.push({name: 'Dashboard'});
          }
        } catch (err) {
          this.$refs.updateDelete.setMsg(err.response.data);
        }
        this._loadingSw();
      },
      _loadingSw: function() {
        this.loading = !this.loading;
      },
    },
    beforeMount: function() {
      if (isFill(this.$store.getters.getProduct._id)) this.isAdd = false;
    },
  };
</script>
<style lang="sass">
  .producto__buttons-container
    display: flex
    justify-content: space-between
    .producto--button
      margin:15px
</style>
