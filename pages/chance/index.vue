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
        <v-btn :disabled="selection === null" to="/results" color="secondary">Continue...</v-btn>
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
        head: {
        title: 'Chance Card',
    },
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
                    {"label":"Party",  "value":-200,  "chance":"You just held a going away party for your friend who has taken a new job in a city 5 hours away. You bought refreshments, balloons, cake, and a gift.", "amount": "Lose $200"}, 
                    {"label":"Laptop Down",  "value":-225,  "chance":"Your laptop needed to be repaired.","amount":"Lose $225"}, 
                    {"label":"Printer Fix",  "value":-45,  "chance":"Replace a cartridge in your printer.","amount":"Lose $45"}, 
                    {"label":"Dinner Date",  "value":-65,  "chance":"You take a friend out to dinner.","amount":"Lose $80"}, 
                    {"label":"Boston Trip",  "value":-145,  "chance":"You visit a friend in Boston for the weekend.","amount":"Lose $145"}, 
                    {"label":"Working Harder",  "value":250,  "chance":"You spend extra time at work completing a special project. Your boss expresses appreciation with a bonus.","amount":"Gain $250"}, 
                    {"label":"New Do",  "value":-85,  "chance":"You’ve decided it’s time to get a new look.","amount":"Lose $85"}, 
                    {"label":"Tax Refund",  "value":625,  "chance":"Your income tax refund check arrives.","amount":"Gain $625"}, 
                    {"label":"Dental", "value":-225, "chance":"You need a new filling.","amount":"Lose $225"},
                    {"label":"Stockup",  "value":-35,  "chance":"You’ve running out of shampoo, conditioner, toothpaste, etc. It’s time to stock up.", "amount": "Lose $35"}, 
                    {"label":"Speeding",  "value":-225,  "chance":"You were caught speeding on the interstate.","amount":"Lose $225"}, 
                    {"label":"Dog Sit",  "value":100,  "chance":"Your neighbor paid you to feed and walk his dog for the long weekend.","amount":"Gain $100"}, 
                    {"label":"Lost & Found",  "value":25,  "chance":"You found a lost wallet and receive a reward.","amount":"Gain $25"}, 
                    {"label":"Flowers",  "value":-20,  "chance":"You buy flowers for your home.","amount":"Lose $20"}, 
                    {"label":"Spilt Drink",  "value":-65,  "chance":"You spilled a drink on your leather jacket and need to pay to have it cleaned.","amount":"Lose $65"}, 
                    {"label":"Bounced Checks",  "value":-70,  "chance":"Last month you bounced 2 checks and must pay fees.","amount":"Lose $70"}, 
                    {"label":"Bedroom Redecoration",  "value":-110,  "chance":"You redecorated your bedroom and bought new supplies.","amount":"Lose $110"}, 
                    {"label":"Credit Delay", "value":-265, "chance":"You are late paying your credit bill and have to pay a late fee in addition to the bill.","amount":"Lose $265"},
                    {"label":"City Trip", "value":-36, "chance":"You take the train into the city.","amount":"Lose $36"},
                    {"label":"Credit Bill",  "value":-225,  "chance":"Your credit bill arrived.", "amount": "Lose $225"}, 
                    {"label":"Online Purchase",  "value":-85,  "chance":"You made a purchase online.","amount":"Lose $85"}, 
                    {"label":"Birthday Gift",  "value":-45,  "chance":"You attend a birthday party and bring a gift.","amount":"Lose $45"}, 
                    {"label":"Tag Sale",  "value":75,  "chance":"You sold unwanted items at a tag sale.","amount":"Gain $75"}, 
                    {"label":"Win Lottery",  "value":250,  "chance":"You got a winning lottery ticket!","amount":"Gain $250"}
                    // {"label":"Cat's Adventure",  "value":-100,  "chance":"While your cat stayed at your mom’s house while you were away, she went exploring and accidentally knocked over her cherished crystal bowl. You searched and bought a replacement.","amount":"Lose $100"}, 
                    // {"label":"Pet Illness",  "value":-325,  "chance":"Your dog was very sick and needed to visit the vet and get medicine.","amount":"Lose $325"}, 
                    // {"label":"Rocky Road",  "value":-20,  "chance":"You found a rocky road and had a flat tire, but the good news is it can be repaired!","amount":"Lose $20"},
                    // {"label":"Tire Trouble",  "value":-270,  "chance":"The right front tire on your car has an irreparable puncture. A new tire and mounting are needed. In addition, you need to replace the left tire as well.","amount":"Lose $270"},  

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
      const randnum = Math.floor(Math.random()*this.chanceOptions.length)
      console.log(randnum)
      this.selection = randnum
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
