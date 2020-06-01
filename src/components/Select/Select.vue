<template>
  <select class="select" @input="select($event)">
    <option value="5" selected>5</option>
    <option value="10">10</option>
    <option value="15">15</option>
  </select>
</template>

<script>
  import { SELECT_COUNT_USERS } from '../../store/actions'
  export default {
    methods: {
      select({ target }) {
        this.$store.dispatch(SELECT_COUNT_USERS, +target.value)
      }
    }
  }
</script>