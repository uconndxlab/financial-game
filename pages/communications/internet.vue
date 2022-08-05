<template>
<v-container>
  <div>
    <h1>Communications > Internet</h1>
        <div class="text-center">
    <p v-if="!paid">Pay your internet!</p>
    <p v-else>Internet Paid!</p>

    <v-btn class="mb-5" color="primary" @click="payInternet" :disabled="paid">Pay internet</v-btn>
  </div>
    <nav>
      <ul class="nav-buttons">
        <li>
          <v-btn to="/communications/tv">&lt; Back</v-btn>
        </li>
        <li>
          <v-btn :disabled="!paid" to="/food" color="secondary">Continue...</v-btn>
        </li>
      </ul>
    </nav>

  </div>
</v-container>
</template>

<script>

export default {
  name: 'InternetCost',
  data(){
    return {
      paid: false
    }
  },
  methods: {
    payInternet() {
      this.paid = true
    }
  }
}
</script>
