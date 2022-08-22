<template>
<v-container>
  <div>
    <h1>Level 7: Lifestyle</h1>
    <p>*Make of CT goes here*</p>
    <v-btn color="primary" to="/lifestyle/activity">Play</v-btn>
  </div>
</v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'LifestyleIndex',
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
