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
            const response = await axios.post('/login', payloads);
            console.log(response.data.token);
            this.$store.commit('setToken', response.data.token);
            this.$router.push({name: 'Dashboard', params: {isLogin: true}});
          } else {
            const response = await axios.post('/signin', payloads);
            if (response) this.isLogin = true;
          }
        } catch (err) {
          this.isLogin
            ? this.$refs.login.setMsg(err.response.data.message)
            : this.$refs.signin.setMsg(err.response.data.message);
        }
      },
    },
  };
</script>

<style lang="sass"></style>
