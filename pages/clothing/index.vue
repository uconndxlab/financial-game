<template>
<v-container>
  <div>
    <h1>Level 6: Clothing</h1>
    <p>*Make of CT goes here*</p>
    <v-btn color="primary" to="/clothing/purchase">Play</v-btn>
  </div>
</v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ClothingIndex',
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
