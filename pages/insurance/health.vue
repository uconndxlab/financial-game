<template>
<v-container>
  <div>
    <h1>Insurance > Health Insurance</h1>
    <p>Health insurance can help cover certain types of expenses such as appointments with doctors, hospital stays, and medications. Covering these costs without insurance can be very costly. If you are young and healthy, you may wonder if you need health insurance. Be aware that accidents do happen and medical expenses can add up very quickly. New health conditions also can appear suddenly and may require specific care and/or equipment, supplies, or medications.  
    </p>
    <p>As a separate note 

(Though your parents may keep you on a family plan until age 26, today, you are learning what it would cost to be financially independent and take care of all of your expenses.)</p>
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
          <v-btn v-if=hasCar to="/insurance/auto" color="secondary">Continue...</v-btn>
          <v-btn v-else to="/insurance/renters" color="secondary">Continue...</v-btn>
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
        title: 'Insurance: Health',
    },
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
      },
      hasCar(){
        if (this.$store.state.budget.vehicle != null){
          return true
        }
        else{
          return false
        }
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
