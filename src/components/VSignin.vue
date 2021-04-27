<template lang="pug">
  form.form-container
    .form--msg(v-show="msgEmpty") {{msg}}
    h2.form--title Registrarse
    input.form--input.input(
        v-model="name" 
        placeholder="Nombre"
    )
    input.form--input.input(
        v-model="lastName" 
        placeholder="Apellidos"
    )
    input.form--input.input(
        v-model="email" 
        type="email" 
        placeholder="Correo"
    )
    input.form--input.input(
        v-model="password" 
        type="password" 
        placeholder="Contraseña"
    )
    input.form--input.input(
        v-model="password2" 
        type="password" 
        placeholder="Repetir contraseña"
    )
    button.form--button.button(v-if="!loading" @click.prevent="onClick") Aceptar
    bounce-loader(v-else color="black")
    a.form--link.link(href="#" @click.prevent="$emit('toLink')") Iniciar sesión
</template>

<script>
  import {isFill, isEmail, isLarge, isEquals} from '@/utils/validators';
  import {toCapitalize} from '@/utils';
  import BounceLoader from 'vue-spinner/src/BounceLoader.vue';

  export default {
    components: {
      BounceLoader,
    },
    data: function() {
      return {
        msg: '',
        name: '',
        lastName: '',
        email: '',
        password: '',
        password2: '',
        loading: false,
      };
    },
    computed: {
      msgEmpty: function() {
        return isFill(this.msg);
      },
    },
    watch: {
      name: function(newValue) {
        this.name = toCapitalize(newValue);
      },
      lastName: function(newValue) {
        this.lastName = toCapitalize(newValue);
      },
    },
    methods: {
      onClick: function() {
        isFill(this.email) &&
        isFill(this.password) &&
        isFill(this.name) &&
        isFill(this.lastName)
          ? isEmail(this.email)
            ? isLarge(this.password)
              ? isEquals(this.password, this.password2)
                ? this.$emit('submit', {
                    name: this.name,
                    lastName: this.lastName,
                    email: this.email,
                    password: this.password,
                  })
                : this.setMsg('Las contraseñas no coinciden')
              : this.setMsg('La contraseña debe ser de 8 caracteres o más')
            : this.setMsg('El correo es inválido')
          : this.setMsg('No pueden existir datos vacíos');
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
