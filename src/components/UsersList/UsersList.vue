<template>
  <section class="users-list">
    <User
      v-for="user in USERS"
      :key="user.id"
      :user="user"
    >
      <router-link
        :to="`/user/${user.id}`"
      >
        More information
      </router-link>
    </User>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { USERS } from '../../store/getters'
  import User from '../User/User'

  export default {
    computed: {
      ...mapGetters([USERS]),
    },
    components: {
      User,
    }
  }
</script>