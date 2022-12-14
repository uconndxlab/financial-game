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
<v-dialog v-model="dialog" transition="dialog-top-transition" max-width="600">
          <v-card>
            <v-card-title color="primary" dark>What does this mean?</v-card-title>
            <v-card-text>
              <!-- If user chose thrifty -->
              <p v-if="monthlyBudget===0">
                This plan meets the basic nutritional needs of the average person eating healthy food at home with a focus on keeping costs down.
              </p>

               <!-- Else -->
              <p v-else>
               Lower cost food plans might include more canned and frozen foods, lower cost protein such as beans, and more pasta, rice, and other grains. Higher food cost plans would include more fresh foods and a greater variety of options.

              </p>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn text @click="dialog = false">Okay</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
            head: {
        title: 'Food: Budget',
    },
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
