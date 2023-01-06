<template>
  <v-container>
        <LevelStarter 
        title="Level 3:" 
        subtitle="Insurance" 
        to="/insurance/health">
      </LevelStarter>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
              head: {
        title: 'Insurance',
    },
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
