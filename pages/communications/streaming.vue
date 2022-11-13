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
        <v-btn to="/communications/tv">&lt; Back</v-btn>
        </li>
        <li>
        <v-btn to="/communications/internet" color="secondary">Continue...</v-btn>
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
      monthlyTV: null,
      streamingOptions: [
        { name: 'TV shows / Movie Streaming Services', value: 15},
        { name: 'Sports Streaming Services', value: 10},
        { name: 'Bundled Streaming Service (TV Shows/Movies/Sports)', value: 20}
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
      this.monthlyTV = this.streamingOptions[this.selection].value
      this.update({
        prop: 'tv',
        value: this.monthlyTV
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
