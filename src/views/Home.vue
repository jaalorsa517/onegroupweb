<template lang="pug">
  section.Home
    v-login(
      v-if="isLogin" 
      @toLink="onLink"
      @submit="onSubmit"
      ref='login'
    )
    v-signin(
      v-else 
      @toLink="onLink"
      @submit="onSubmit"
      ref='signin'
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
      };
    },
    methods: {
      onLink: function() {
        this.isLogin = !this.isLogin;
      },
      onSubmit: async function(payloads) {
        try {
          if (this.isLogin) {
            this.$refs.login._loadingSw();

            const response = await axios.post('/login', payloads);
            this.$store.commit('setToken', response.data.token);
            this.$router.push({name: 'Dashboard', params: {isLogin: true}});

            this.$refs.login._loadingSw();
          } else {
            this.$refs.signin._loadingSw();

            const response = await axios.post('/signin', payloads);
            if (response) this.isLogin = true;
            this.$refs.signin._loadingSw();
          }
        } catch (err) {
          if (this.isLogin) {
            this.$refs.login._loadingSw();
            this.$refs.login.setMsg(err.response.data.message);
          } else {
            this.$refs.signin._loadingSw();
            this.$refs.signin.setMsg(err.response.data.message);
          }
        }
      },
    },
  };
</script>

<style lang="sass"></style>
