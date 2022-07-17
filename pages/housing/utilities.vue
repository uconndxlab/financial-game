<template>
  <v-container>
    <h1>Housing > Utilities</h1>

    <v-row>
      <v-col>
        <p v-if="!paid">Pay your utilities!</p>
        <p v-else>Utilities Paid!</p>
        <v-btn color="primary" @click="payUtilities" :disabled="paid">Pay Utilities</v-btn>
      </v-col>

    </v-row>

    <v-row>
      <v-col>
        <v-btn to="/housing/apartment">&lt; Back</v-btn>
        <v-btn :disabled="!paid" to="/transportation" color="secondary">Continue...</v-btn>
      </v-col>
    </v-row>


  </v-container>
</template>

<script>
import {  mapActions } from 'vuex'

export default {
  name: 'HousingUtilities',
  data(){
    return {
      monthlyUtilityCost: 100,
      paid: true
    }
  },
  computed: {
    utilities() {
      return this.$store.state.budget.utilities
    }
  },
  methods: {
    payUtilities() {
    
      this.updateBudget({
        prop: 'utilities',
        value: this.monthlyUtilityCost
      })
      this.paid = true
    },
    ...mapActions({
      updateBudget: 'budget/update'
    })
  },
  mounted(){
    this.paid = this.utilities !== 0
  }
}
</script>
