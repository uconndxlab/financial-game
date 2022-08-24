<template>
<v-container>
  <div>
    <h1>Insurance > Health Insurance</h1>
    <div class="text-center">
    <p v-if="!paid">Pay your health insurance!</p>
    <p v-else>Health insurance Paid!</p>

    <v-btn class="mb-5" color="primary" @click="payHealth" :disabled="paid">Pay health insurance</v-btn>
    </div>
    <nav>
      <ul class="nav-buttons">
        <li>
        </li>
        <li>
          <v-btn :disabled="!paid" to="/insurance/auto" color="secondary">Continue...</v-btn>
        </li>
      </ul>
    </nav>

  </div>
</v-container>
</template>

<script>
import {  mapActions } from 'vuex'

export default {
  name: 'HealthInsurance',
  data(){
    return {
      monthlyHealthCost: 100,
      paid: true
    }
  },
  computed: {
      health() {
        return this.$store.state.budget.health
      }
    },
    methods: {
      payHealth() {
      
        this.updateBudget({
          prop: 'health',
          value: this.monthlyHealthCost
        })
        this.paid = true
      },
      ...mapActions({
        updateBudget: 'budget/update'
      })
    },
    mounted(){
      this.paid = this.health !== 0
    }
}


</script>
