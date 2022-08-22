<template>
<v-container>
  <div>
    <h1>Level 5: Food</h1>
    <p>*Make of CT goes here*</p>
    <v-btn color="primary" to="/food/dietchoice">Play</v-btn>
  </div>
</v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'FoodIndex',
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
