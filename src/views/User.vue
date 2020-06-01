<template>
  <div class="user-page">
    <div class="btn-container">
      <button class="btn-back" @click="$router.back()"> back </button>
    </div>
    <div class="user-page-content" v-if="USERS">
      <User :user="user">
        <div class="contacts">
          <span class="contacts-email">email: {{user.email}}</span>
          <span class="contacts-id">id: {{user.id}}</span>
        </div>
      </User>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { USERS } from '../store/getters'
  import User from '../components/User/User'

  export default {
    computed: {
      ...mapGetters([USERS]),
      user() {
        return this.USERS.find(user => user.id === +this.$route.params.id);
      }
    },
    components: {
      User,
    },
  }
</script>