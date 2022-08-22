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

export default {
  name: 'FoodBudget',
  data(){
    return {
      selection: null,
      dialog: false,
      budgetplan: null,
      budgetOptions: [
        { name: 'Thrifty', value: false},
        { name: 'Low', value: false},
        { name: 'Moderate', value:false},
        { name: 'Liberal', value:false}

      ],
    }
  },
  methods: {
    selectionChanged(){
      this.budgetplan = this.selection
    }
  }
}
</script>
