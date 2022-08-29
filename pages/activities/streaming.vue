<template>
  <v-container>
    <h1>Activity > Streaming</h1>
    <div class="choice-boxes text-center">
    <p>Choose a streaming option:</p>
    <v-btn-toggle v-model="selection" mandatory class="d-block" color="primary" @change="selectionChanged()">
      <div v-for="option in streamingOptions" :key="option.name" class="ma-4">
        <v-btn width="100%" left>{{option.name}}</v-btn>
      </div>

    </v-btn-toggle>
    </div>
    <nav>
      <ul class="nav-buttons">
        <li>
        <v-btn to="/activities/pet">&lt; Back</v-btn>
        </li>
        <li>
        <v-btn to="/activities/gaming" color="secondary">Continue...</v-btn>
        </li>
      </ul>
    </nav>

  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'StreamingOption',
  data(){
    return {
      selection: null,
      dialog: false,
      monthlyStreaming: null,
      streamingOptions: [
        { name: 'Paid Online Streaming Service', value: 11},
        { name: 'No streaming service', value: 0}
      ],
    }
  },
  computed: {
    streaming() {
      return this.$store.state.budget.streaming
    }
  },
  methods: {
    selectionChanged(){
      this.monthlyStreaming = this.streamingOptions[this.selection].value
      this.update({
        prop: 'streaming',
        value: this.monthlyStreaming
      })
      this.dialog = true
    },
    ...mapActions({
      update: 'budget/update'
    })
  },
  mounted(){
    this.dialog = false
  }
}

</script>
