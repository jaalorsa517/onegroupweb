<template lang="pug">
  form.form-container
    .form--msg(v-show="msgEmpty") {{msg}}
    h2.form--title Iniciar sesión
    input.form--input.input(
      v-model="email" 
      name="email" 
      type="email" 
      placeholder="Correo"
    )
    input.form--input.input(
      v-model="password" 
      name="password" 
      type="password" 
      placeholder="Contraseña"/* webpackChunkName: "about" */ 
    )
    button.form--button.button(v-if="!loading" @click.prevent="onClick") Aceptar
    bounce-loader(v-else color="black")
    a.form--link.link(href="#" @click.prevent="$emit('toLink')") Registrarse
</template>

<script>
  import {isFill, isEmail} from '@/utils/validators';
  import BounceLoader from 'vue-spinner/src/BounceLoader.vue';

  export default {
    components: {
      BounceLoader,
    },
    data: function() {
      return {
        msg: '',
        email: '',
        password: '',
        loading: false,
      };
    },
    computed: {
      msgEmpty: function() {
        return isFill(this.msg);
      },
    },
    methods: {
      onClick: function() {
        this._loadingSw();
        isFill(this.email) && isFill(this.password)
          ? isEmail(this.email)
            ? this.$emit('submit', {
                email: this.email,
                password: this.password,
              })
            : this.setMsg('El correo es inválido')
          : this.setMsg('No pueden existir datos vacíos');
        this._loadingSw();
      },
      setMsg: function(str) {
        this.msg = str;
        setTimeout(() => (this.msg = ''), 3000);
      },
      _loadingSw: function() {
        this.loading = !this.loading;
      },
    },
  };
</script>

<style lang="sass">
  .form-container
    max-width: 350px
    padding: 0px 20px 30px 20px
    margin: auto
    border-radius: 20px
    +displayColumn()
    +shadowBox()
  .form--msg
    padding: 20px
    width:100%
    font-weight: bold
    color: white
    border-top-left-radius: 20px
    border-top-right-radius: 20px
    background-color: $color-back
  .form--title
    margin: 35px 0
    text-align: center
  .form--button
    margin: 15px auto
    margin-bottom: 20px
    padding: 15px 30px
    outline: none
    border: none
    color: white
    font-weight: bold
    border-radius: 15px
    background-color: $color-back
    transition: $transition
    +shadowBox()
    &:hover
      background-color: #4b4b4b
      +hoverEl()
    &:active
      background-color: #fff
      color: $color-font
  .form--link
    &:hover
      color: #4b4b4b
</style>
