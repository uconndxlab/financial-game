<template>
  <v-container>
    <h1>Food > Diet</h1>
    <div class="choice-boxes text-center">
    <p>Choose a diet:</p>
    <v-btn-toggle v-model="selection" mandatory class="d-block" color="primary" @change="selectionChanged()">
      <div v-for="option in dietOptions" :key="option.name" class="ma-4">
        <v-btn width="100%" left>{{option.name}}</v-btn>
      </div>

    </v-btn-toggle>
    </div>
    <nav>
      <ul class="nav-buttons">
        <li>
        </li>
        <li>
        <v-btn to="/food/budget" color="secondary">Continue...</v-btn>
        </li>
      </ul>
    </nav>

  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'DietChoice',
  data(){
    return {
      selection: null,
      dialog: false,
      dietplan: null,
      monthlyDiet: 0,
      dietOptions: [
        { name: 'No Diet', value: 0},
        { name: 'Organic', value: 1},
        { name: 'Gluten Free', value:2}

      ],
    }
  },
  computed: {
    diet() {
      return this.$store.state.budget.diet
    }
  },
  methods: {
    selectionChanged(){
      this.dietplan = this.selection
      this.monthlyDiet = this.dietOptions[this.selection].value
      this.update({
        prop: 'diet',
        value: this.monthlyDiet
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
