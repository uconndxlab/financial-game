<template>
  <v-container>
    <LevelStarter 
      title="Level 7:" 
      subtitle="Lifestyle" 
      to="/lifestyle/activity">
    </LevelStarter>  
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
                  head: {
        title: 'Lifestyle',
    },
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
