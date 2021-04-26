<template lang="pug">
  section.Home
    v-login(
      v-if="isLogin" 
      @toLink="onLink"
      @submit="onSubmit"
    )
    v-signin(
      v-else 
      @toLink="onLink"
      @submit="onSubmit"
    )
    
</template>

<script>
import vLogin from '@/components/VLogin';
import vSignin from '@/components/VSignin';

export default {
  name: 'Homeview',
  components: {
    vLogin,
    vSignin,
  },
  data: function() {
    return {
      isLogin: false,
    };
  },
  methods: {
    onLink: function() {
      this.isLogin = !this.isLogin;
    },
    onSubmit: function() {
      if (this.isLogin) {
        this.$router.push({name: 'Dashboard'});
      } else {
      }
    },
  },
};
</script>

<style lang="sass"></style>
