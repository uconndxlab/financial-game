<template>
  <v-container>
    <LevelStarter 
      title="Level 8:" 
      subtitle="Activities" 
      to="/activities/pet">
    </LevelStarter>  
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
