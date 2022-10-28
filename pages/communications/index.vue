<template>
<v-container>
    <LevelStarter 
      title="Level 5:" 
      subtitle="Communications" 
      to="/communications/mobile">
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
