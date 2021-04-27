<template lang="pug">
  section.Home
    v-login(
      v-if="isLogin" 
      @toLink="onLink"
      @submit="onSubmitLogin"
      ref='login'
      v-animate-css="animated.zoomIn"
    )
    v-signin(
      v-else 
      @toLink="onLink"
      @submit="onSubmitSignin"
      ref='signin'
      v-animate-css="animated.zoomIn"
    )
    
</template>

<script>
  import vLogin from '@/components/VLogin';
  import vSignin from '@/components/VSignin';
  import axios from '@/services/api';

  export default {
    name: 'Homeview',
    components: {
      vLogin,
      vSignin,
    },
    data: function() {
      return {
        isLogin: true,
        animated: {
          zoomIn: {
            classes: 'zoomIn',
          },
        },
      };
    },
    methods: {
      onLink: function() {
        this.isLogin = !this.isLogin;
      },
      onSubmitLogin: async function(payloads) {
        this.$refs.login._loadingSw();
        try {
          const response = await axios.post('/login', payloads);
          this.$store.commit('setToken', response.data.token);
          this.$router.push({name: 'Dashboard', params: {isLogin: true}});
        } catch (err) {
          this.$refs.login.setMsg(err.response.data.message);
        }
        this.$refs.login._loadingSw();
      },
      onSubmitSignin: async function(payloads) {
        this.$refs.signin._loadingSw();
        try {
          const response = await axios.post('/signin', payloads);
          if (response) this.isLogin = true;
        } catch (err) {
          this.$refs.signin.setMsg(err.response.data.message);
        }
        this.$refs.signin._loadingSw();
      },
    },
  };
</script>

<style lang="sass"></style>
