<template>
<v-container>
  <div>
    <h1>Insurance > Health Insurance</h1>
    <p v-if="!paid">Pay your health insurance!</p>
    <p v-else>Health insurance Paid!</p>

    <v-btn class="mb-5" color="primary" @click="payUtilities" :disabled="paid">Pay health insurance</v-btn>

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
