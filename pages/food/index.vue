<template>
<v-container>
    <LevelStarter 
      title="Level 6:" 
      subtitle="Food" 
      to="/food/dietchoice">
    </LevelStarter>
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
