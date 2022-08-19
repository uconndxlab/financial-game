<template>
<v-container>
    <LevelStarter 
      title="Level 4:" 
      subtitle="Communications" 
      to="/communications/landline">
    </LevelStarter>
</v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'CommunicationsIndex',
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
