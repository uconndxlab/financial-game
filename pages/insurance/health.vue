<template>
  <div>
    <h1>Insurance > Health Insurance</h1>
    <p v-if="!paid">Pay your health insurance!</p>
    <p v-else>Health insurance Paid!</p>

    <v-btn color="primary" @click="payUtilities" :disabled="paid">Pay health insurance</v-btn>

    <nav>
      <ul>
        <li>
          <v-btn to="/insurance">&lt; Back</v-btn>
        </li>
        <li>
          <v-btn :disabled="!paid" to="/insurance/auto" color="secondary">Continue...</v-btn>
        </li>
      </ul>
    </nav>

  </div>
</template>

<script>

export default {
  name: 'HealthInsurance',
  data(){
    return {
      paid: false
    }
  },
  methods: {
    payUtilities() {
      this.paid = true
    }
  }
}
</script>
