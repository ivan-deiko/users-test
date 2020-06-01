<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
 import './assets/styles/sass/_main.sass'
 import { GET_USERS } from './store/actions'
 
  export default {
    mounted() {
      this.$store.dispatch(GET_USERS);
    },
  }
</script>