<template>
  <div>
    <h1>Insurance > Auto Insurance</h1>
    <p v-if="!paid">Pay your auto insurance!</p>
    <p v-else>Auto insurance Paid!</p>

    <v-btn color="primary" @click="payUtilities" :disabled="paid">Pay auto insurance</v-btn>

    <nav>
      <ul>
        <li>
          <v-btn to="/insurance/health">&lt; Back</v-btn>
        </li>
        <li>
          <v-btn :disabled="!paid" to="/insurance/renters" color="secondary">Continue...</v-btn>
        </li>
      </ul>
    </nav>

  </div>
</template>

<script>

export default {
  name: 'AutoInsurance',
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
