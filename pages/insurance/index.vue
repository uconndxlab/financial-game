<template>
<v-container>
  <div>
    <h1>Level 3: Insurance</h1>
    <p>*Make of CT goes here*</p>
    <v-btn color="primary" to="/insurance/health">Play</v-btn>
  </div>
</v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'InsuranceIndex',
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
