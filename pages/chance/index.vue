<template>
  <v-container>
    <h1>Chance Card!</h1>
    
    <div class="choice-boxes text-center">
    <p>Click to get a random life event:</p>
    <v-btn-toggle  color="primary">
      <div class="ma-4">
        <v-btn :disabled="selection !== null" width="100%" left  @click="selectionChanged()">Random Life Event</v-btn>
        <v-card v-if="selection!==null"
    class="mx-auto mt-4"
    max-width="344"
  >
    <v-card-text>
      <p class="ma-0 pa-0 subtitle-2">~ Chance Card ~</p>
      <p class="text-h4" color="primary">
        {{label}}
      </p>
      <div>{{description}}</div>
      <p>{{amount}}</p>
      
    </v-card-text>
  </v-card>

      </div>

    </v-btn-toggle>
    </div>
    <nav>
      <ul class="nav-buttons">
        <li>
        </li>
        <li>
        <v-btn :disabled="selection === null" to="/end" color="secondary">Continue...</v-btn>
        </li>
      </ul>
    </nav>
  </v-container>
</template>

<style scoped>
</style>
<script>
import { mapActions } from 'vuex'

export default {
  // head() {
  //     return {
  //       script: [
  //         {
  //           src: 'https://d3js.org/d3.v3.min.js'
  //         }
  //       ],
  //     }
  //   },
  name: 'ChanceCard',
  data(){
    return {
      selection: null,
      monthlyChance: null,
      label: null,
      description: null,
      amount: null,
      chanceOptions: [
                    {"label":"Win Lottery",  "value":5000,  "chance":"You won the lottery!", "amount": "Gain $5000"}, 
                    {"label":"Inheritance",  "value":2500,  "chance":"You acquired an inheritance!","amount":"Gain $2500"}, 
                    {"label":"Injury",  "value":-500,  "chance":"Oh no! You had a hospital visit.","amount":"Lose $500"}, 
                    {"label":"Bingo Night",  "value":500,  "chance":"You won Bingo night!","amount":"Gain $500"}, 
                    {"label":"Legal Fees",  "value":-1000,  "chance":"You've been sued!","amount":"Lose $1000"}, 
                    {"label":"Legal Win",  "value":2000,  "chance":"You won a lawsuit!","amount":"Gain $2000"}, 
                    {"label":"Home Damage",  "value":-200,  "chance":"Water damage!","amount":"Lose $200"}, 
                    {"label":"Bet Paid Off",  "value":100,  "chance":"You won a bet!","amount":"Gain $100"}, 
                    {"label":"Lost Change",  "value":100,  "chance":"You found some loose change!","amount":"Gain $100"}, 
                    {"label":"Antique Item", "value":1000, "chance":"You sold a rare antique item!","amount":"Gain $1000"}
        ]
    }
  },
  computed: {
    chance() {
      return this.$store.state.budget.chance
    }
  },
  methods: {
    selectionChanged(){
      this.selection = Math.floor(Math.random()*10)
      this.monthlyChance = this.chanceOptions[this.selection].value
      this.label = this.chanceOptions[this.selection].label
      this.description = this.chanceOptions[this.selection].chance
      this.amount = this.chanceOptions[this.selection].amount

      this.update({
        prop: 'chance',
        value: this.monthlyChance
      })
    },
    
    ...mapActions({
      update: 'budget/update'
    })
  },
  mounted(){      

  }
}
</script>
