<template>
  <div class="user">
    <div class="user-info">
      <span class="user-firstName"> {{ user.first_name}}</span>
      <span class="user-lastName"> {{ user.last_name}}</span>
    </div>
    <img :src="user.avatar" alt="avatar" />
    <slot />
  </div>
</template>

<script>
  export default {
    props: {
      user: Object,
    }
  }
</script>