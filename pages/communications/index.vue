<template>
  <div>
    <h1>Level 4: Communications</h1>
    <p>*Make of CT goes here*</p>
    <v-btn color="primary" to="/communications/landline">Play</v-btn>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'CommunicationsIndex',
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
