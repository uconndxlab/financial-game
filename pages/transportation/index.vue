<template>
  <v-container>
    <LevelStarter title="Level 2:" subtitle="Transportation" to="/transportation/transportationtype"></LevelStarter>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
                  head: {
        title: 'Transportation',
    },
    name: "TransportationIndex",

    mounted() {
        // Reset the store
        // this.reset()
    },
    methods: {
        ...mapActions({
            reset: "budget/reset"
        })
    },
}
</script>
