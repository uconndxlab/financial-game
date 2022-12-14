<template>
  <v-container>
    <h1>Housing > Utilities</h1>
    <p>When you choose your apartment, did you notice whether it mentioned including your utilities such as heat, hot water, and/or gas? If it wasn’t mentioned in the ad as being included with your rent, you will need to pay for it now. </p>
  <div class="text-center">
        <p v-if="!paid">Pay your utilities!</p>
        <p v-else>Utilities Paid!</p>
        <v-btn class="mb-5" color="primary" @click="payUtilities" :disabled="paid">Pay Utilities</v-btn>
  </div>
    <nav>
      <ul class="nav-buttons">
        <li>
        </li>
        <li>
        <v-btn :disabled="!paid" to="/communications" color="secondary">Continue...</v-btn>
        </li>
      </ul>
    </nav>


  </v-container>
</template>

<script>
import {  mapActions } from 'vuex'

export default {
                          head: {
        title: 'Utilities: Pay',
    },
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
