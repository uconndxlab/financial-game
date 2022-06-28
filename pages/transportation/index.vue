<template>
  <div>
    <h1>Level 2: Tranportation</h1>
    <p>*Make of CT goes here*</p>
    <v-btn color="primary" to="#">Play</v-btn>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'TransportationIndex',
  mounted() {
    // Reset the store
    // this.reset()
  },
  methods: {
    ...mapActions({
      reset: 'budget/reset'
    })
  }

}
</script>
