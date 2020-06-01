<template>
  <div class="main-page">
    <Search />
    <UsersList />
    <Select />
    <div class="controllers">
      <button 
        class="controllers-prev" 
        @click="minus"
        :disabled="PREV"
      >
        prev
      </button>
      <button
        class="controllers-next" 
        @click="plus"
        :disabled="NEXT"
      >
        next
      </button>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import UsersList from '../components/UsersList/UsersList'
  import Search from '../components/Search/Search'
  import Select from '../components/Select/Select'
  import { NEXT_PAGE, PREV_PAGE } from '../store/actions'
  import { PREV, NEXT } from '../store/getters'

  export default {
    computed: {
      ...mapGetters([PREV, NEXT]),
    },
    methods: {
      plus() {
        this.$store.dispatch(NEXT_PAGE)
      },
      minus() {
        this.$store.dispatch(PREV_PAGE)
      },
    },
    components: {
      UsersList,
      Search,
      Select
    }
  }
</script>