<template lang="pug">
  form.product-form-container.form-container
    .form--msg(v-show="msgEmpty") {{msg}}
    slot(name="title")
      h2.form--title Crear Producto
    input.form--input(
      placeholder="Nombre"
      v-model="name"
      )
    input.form--input(
      placeholder="Precio"
      v-model="value"
      )
    input.form--input(
      placeholder="Dirección de la imagen"
      v-model="img"
      )
    input.form--input(
      placeholder="Puntaje de 1 al 5"
      v-model="score"
      type="number"
      max="5"
      min="0"
      )
    textarea.form--input.text-area(
      placeholder="Descripción del producto"
      v-model="description"
      )
    slot(name="footer")
      button.form--button(@click.prevent="onClick") Crear
    
</template>

<script>
  import {isFill} from '@/utils/validators';
  import axios from '@/services/api';

  export default {
    data: function() {
      return {
        name: '',
        description: '',
        value: '',
        img: '',
        score: '0',
        msg: '',
      };
    },
    computed: {
      msgEmpty: function() {
        return isFill(this.msg);
      },
    },
    methods: {
      onClick: async function() {
        if (isFill(this.name) && isFill(this.value) && isFill(this.score)) {
          try {
            const response = await axios.post(
              '/products',
              {
                name: this.name,
                description: this.description,
                value: this.value,
                img: this.img,
                score: this.score,
              },
              this.$store.getters.getHeaderToken
            );
            if (response) this.$router.push({name: 'Dashboard'});
          } catch (err) {
            this.setMsg(err.response.data);
          }
        } else {
          this.setMsg('El nombre, el precio y el puntaje son requeridos');
        }
      },
      setValues: function(values) {
        this.name = values.name;
        this.description = values.description;
        this.value = values.value;
        this.img = values.img;
        this.score = values.score;
      },
      setMsg: function(str) {
        this.msg = str;
        setTimeout(() => (this.msg = ''), 3000);
      },
    },
  };
</script>

<style lang="sass">
  .product-form__form
    +displayColumn()

  .text-area
    height: 150px
    padding: 10px
    margin: 15px 0
    font-size: 1rem
</style>
