<template>
  <input type="text" placeholder="search" @input="search($event)" class="search"/>
</template>

<script>
  import { SEARCH_USER } from '../../store/actions';

  export default {
    methods: {
      search({ target }) {
        this.$store.dispatch(SEARCH_USER, target.value.toLowerCase())
      }
    }
  }
</script>