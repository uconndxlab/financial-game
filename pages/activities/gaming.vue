<template>
  <v-container>
    <h1>Activity > Gaming</h1>
    <div class="choice-boxes text-center">
    <p>Choose a gaming type:</p>
    <v-btn-toggle v-model="selection" mandatory class="d-block" color="primary" @change="selectionChanged()">
      <div v-for="option in gameOptions" :key="option.name" class="ma-4">
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
        <v-btn to="/activities/books" color="secondary">Continue...</v-btn>
        </li>
      </ul>
    </nav>

  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'GamingType',
  data(){
    return {
      selection: null,
      dialog: false,
      monthlyGaming: null,
      gameOptions: [
        { name: 'Pay to play', value: 15},
        { name: 'Free to play', value: 0},
        { name: 'No gaming', value:0}
      ],
    }
  },
  computed: {
    gaming() {
      return this.$store.state.budget.gaming
    }
  },
  methods: {
    selectionChanged(){
      this.monthlyGaming = this.gameOptions[this.selection].value
      this.update({
        prop: 'gaming',
        value: this.monthlyGaming
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
