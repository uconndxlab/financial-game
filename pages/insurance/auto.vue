<template>
<v-container>
  <div>
    <h1>Insurance > Auto Insurance</h1>
    <p>If you have a car, you are required by Connecticut law to have auto insurance. Your actual cost for insurance will vary by insurer. Other factors that will impact your premium cost will be the type of vehicle, where you live, where you park, your driving record, claims history, and credit history, as well as the deductible amount you choose, and if your auto has safety and anti-theft devices. </p>
        <div class="text-center">
    <p v-if="!paid">Pay your auto insurance!</p>
    <p v-else>Auto insurance Paid!</p>

    <v-btn class="mb-5" color="primary" @click="payAuto" :disabled="paid">Pay auto insurance</v-btn>
  </div>
    <nav>
      <ul class="nav-buttons">
        <li>
          <v-btn to="/insurance/health">&lt; Back</v-btn>
        </li>
        <li>
          <v-btn :disabled="!paid" to="/insurance/renters" color="secondary">Continue...</v-btn>
        </li>
      </ul>
    </nav>

  </div>
</v-container>
</template>

<script>
import {  mapActions } from 'vuex'

export default {
                  head: {
        title: 'Insurance: Auto',
    },
  name: 'AutoInsurance',
  data(){
    return {
      monthlyAutoCost: 100,
      paid: true
    }
  },
  computed: {
      auto() {
        return this.$store.state.budget.auto
      }
    },
    methods: {
      payAuto() {
      
        this.updateBudget({
          prop: 'auto',
          value: this.monthlyAutoCost
        })
        this.paid = true
      },
      ...mapActions({
        updateBudget: 'budget/update'
      })
    },
    mounted(){
      this.paid = this.auto !== 0
    }
  
}

</script>
