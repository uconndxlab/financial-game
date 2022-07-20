<template>
<v-container>
  <div>
    <h1>Level 2: Tranportation</h1>
    <p>*Make of CT goes here*</p>
    <v-btn color="primary" to="/transportation/transportationtype">Play</v-btn>
  </div>
</v-container>
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
