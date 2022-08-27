<template>
  <v-container>
    <h1>Food > Budget</h1>
    <div class="choice-boxes text-center">
    <p>Choose a budget:</p>
    <v-btn-toggle v-model="selection" mandatory class="d-block" color="primary" @change="selectionChanged()">
      <div v-for="option in budgetOptions" :key="option.name" class="ma-4">
        <v-btn width="100%" left>{{option.name}}</v-btn>
      </div>

    </v-btn-toggle>
    </div>
    <nav>
      <ul class="nav-buttons">
        <li>
        <v-btn to="/food/dietchoice">&lt; Back</v-btn>
        </li>
        <li>
        <v-btn to="/clothing" color="secondary">Continue...</v-btn>
        </li>
      </ul>
    </nav>

  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'FoodBudget',
  data(){
    return {
      selection: null,
      dialog: false,
      budgetplan: null,
      monthlyBudget: 0,
      budgetOptions: [
        { name: 'Thrifty', value: 0},
        { name: 'Low', value: 1},
        { name: 'Moderate', value:2},
        { name: 'Liberal', value:3}

      ],
    }
  },
  computed: {
    food() {
      return this.$store.state.budget.food
    }
  },
  methods: {
    selectionChanged(){
      this.budgetplan = this.selection
      this.monthlyBudget = this.budgetOptions[this.selection].value
      this.update({
        prop: 'food',
        value: this.monthlyBudget
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
