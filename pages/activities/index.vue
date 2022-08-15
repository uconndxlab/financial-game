<template>
<v-container>
  <div>
    <h1>Level 8: Activities</h1>
    <p>*Make of CT goes here*</p>
    <v-btn color="primary" to="/activities/pet">Play</v-btn>
  </div>
</v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'MiscIndex',
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
