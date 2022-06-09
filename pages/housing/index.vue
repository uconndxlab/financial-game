<template>
  <div>
    <h1>Level 1: Housing</h1>
    <p>*Make of CT goes here*</p>
    <v-btn color="primary" to="/housing/location">Play</v-btn>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'HousingIndex',
  mounted() {
    // Reset the store
    this.reset()
  },
  methods: {
    ...mapActions({
      reset: 'budget/reset'
    })
  }

}
</script>
