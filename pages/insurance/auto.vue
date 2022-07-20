<template>
<v-container>
  <div>
    <h1>Insurance > Auto Insurance</h1>
    <p v-if="!paid">Pay your auto insurance!</p>
    <p v-else>Auto insurance Paid!</p>

    <v-btn class="mb-5" color="primary" @click="payUtilities" :disabled="paid">Pay auto insurance</v-btn>

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
