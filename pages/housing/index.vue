<template>
  <div>
    <h1>Level 1: Housing</h1>
    <p>*Make of CT goes here*</p>
    <NuxtLink to="/housing/location">Play</NuxtLink>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'

export default {
  name: 'HousingIndex',
  mounted() {
    // Reset the store
    this.reset()
  },
  methods: {
    ...mapMutations({
      setApartment: 'prefs/setApartment'
    }),
    ...mapActions({
      reset: 'budget/reset'
    })
  }

}
</script>
