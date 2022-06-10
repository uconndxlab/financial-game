<template>

  <v-app>
    <v-main>
      <Nuxt />

      <v-breadcrumbs large :items="navItems"></v-breadcrumbs>
      <div class="budget-display">
        <animated-number
          :value="monthlyBudget"
          :format-value="formatNumber"
          :duration="500"
        />
      </div>

    </v-main>
    <v-footer app>&nbsp;</v-footer>
  </v-app>
</template>

<script>
import AnimatedNumber from "animated-number-vue";

// https://currency.js.org/
import currency from 'currency.js'

// Formmating options for Currency lib
const currencyOptions = {
  separator: ',',
  precision: 0
}

export default {
  name: 'DefaultLayout',
  components: {
    AnimatedNumber
  },
  data() {
    return {
      navItems: [
        { text: 'Housing', to: '/housing', disabled: false, exact: true},
        { text: 'Tranportation', to: '/transportation', disabled: true},
        { text: 'Insurance', to: '/insurance', disabled: true},
        { text: 'Communications', to: '/communications', disabled: true},
        { text: 'Food', to: '/food', disabled: true},
        { text: 'Clothing', to: '/clothing', disabled: true},
        { text: 'Lifestyle', to: '/lifestyle', disabled: true},
        { text: 'Activities', to: '/activities', disabled: true}
      ]
    }
  },
  computed: {
    balance(){
      return this.$store.state.budget.balance
    },
    monthlyBudget() {
      return this.balance
    }
  },
  methods: {
    formatNumber(val){
      return currency(val, currencyOptions).format()
    }
  }
}
</script>

<style>

.budget-display {
  position: absolute;
  top: 0px;
  right: 0px;
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
