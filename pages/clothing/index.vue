<template>
  <v-container>
      <LevelStarter 
        title="Level 6:" 
        subtitle="Clothing" 
        to="/clothing/purchase">
      </LevelStarter>  
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
