<template>
  <div>
    <h1>Housing > Utilities</h1>
    <p>Pay your utilities!</p>

    <button>Pay Utilities</button>

    <nav>
      <ul>
        <li><NuxtLink to="/housing/apartment" >&lt; Back</NuxtLink></li>
        <li><NuxtLink v-if="apartment !== null" to="/housing/utilities" >Continue...</NuxtLink></li>
      </ul>
    </nav>

  </div>
</template>

<script>
// import { mapMutations } from 'vuex'

export default {
  name: 'HousingApartment',
  data(){
    return {}
  },
  computed: {
    apartment() {
      return this.$store.state.budget.prefs.apartment
    }
  },
  methods: {
  }
}
</script>
