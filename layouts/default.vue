<template>
  <div>

    <Nuxt />
    <nav id="primary">
      <ul>
        <li><NuxtLink to="/housing">Housing</NuxtLink></li>
        <li><NuxtLink to="/transportation">Transportation</NuxtLink></li>
        <li><NuxtLink to="/insurance">Insurance</NuxtLink></li>
        <li><NuxtLink to="/communications">Communications</NuxtLink></li>
        <li><NuxtLink to="/food">Food</NuxtLink></li>
        <li><NuxtLink to="/clothing">Clothing</NuxtLink></li>
        <li><NuxtLink to="/lifestyle">Lifestyle</NuxtLink></li>
        <li><NuxtLink to="/activities">Activities</NuxtLink></li>
        <li> {{ monthlyBudget }}</li>
      </ul>
    </nav>
  </div>
</template>

<script>
// https://currency.js.org/
import currency from 'currency.js'

// Formmating options for Currency lib
const currencyOptions = {
  separator: ',',
  precision: 0
}

export default {
  name: 'DefaultLayout',
  computed: {
    balance(){
      return this.$store.state.budget.balance
    },
    monthlyBudget() {

      return currency(this.balance, currencyOptions).format()
    }
  },
}
</script>

<style>
@import url(https://unpkg.com/mvp.css);

nav#primary > ul {
  width: 100%;
  display: flex;
  align-items: center;
}

nav#primary > ul li:last-child {
  text-align: right;
  flex-grow: 1;
  font-size: 3em;
}


body {
  padding:0;
  margin: 40px;
}

body > h1 {
  margin-top: 0;
  padding-top:0;
}
.nuxt-link-active {
  text-decoration: underline;
}

</style>
