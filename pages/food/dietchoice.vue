<template>
  <v-container>
    <h1>Food > Diet</h1>
    <p>How important is the food that you eat to you? Think about the food that you prepare and eat at home. </p>
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
<v-dialog v-model="dialog" transition="dialog-top-transition" max-width="600">
          <v-card>
            <v-card-title color="primary" dark>What does this mean?</v-card-title>
            <v-card-text>
              <!-- If user chose no diet -->
              <p v-if="monthlyDiet===0">
                You eat meat, seafood, eggs, and milk and many other foods.
              </p>

              <!-- If user chose organic -->
              <p v-if="monthlyDiet===1">
                You eat food that is USDA certified organic. The farmers and  
     businesses follow strict standards for growing, processing and handling their products.
              </p>

               <!-- If user chose gf -->
              <p v-if="monthlyDiet===2">
               On this diet, you avoid wheat and some other grains.  
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
        title: 'Food: Diet',
    },
  name: 'DietChoice',
  data(){
    return {
      selection: null,
      dialog: false,
      dietplan: null,
      monthlyDiet: 0,
      dietOptions: [
        { name: 'No dietary restrictions', value: 0},
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
