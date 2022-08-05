<template>
<v-container>
  <div>
    <h1>Level 8: Misc. Activities</h1>
    <p>*Make of CT goes here*</p>
    <v-btn color="primary" to="/misc/activity">Play</v-btn>
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
