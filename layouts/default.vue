<template>

<div>
  <uconn-banner></uconn-banner>
  <v-app>

    <v-main fill-height fluid id="v-main-body">
      <Nuxt />
      <v-container class="bottom-display" id="bottom-nav">
      <v-row>
        <v-col v-if="showNavigation()" cols="auto" class="breadcrumbs">
          <v-breadcrumbs large :items="navItems"></v-breadcrumbs>
        </v-col>
        <v-col>
          <div v-if="showBalance()" class="budget-display">
            <animated-number :value="balance" :format-value="$money" :duration="500" />
          </div>
        </v-col>
      </v-row>
      </v-container>
    </v-main>
    <breadwinner-footer/>
  </v-app>



</div>


</template>

<script>
import AnimatedNumber from "animated-number-vue";
import {  mapActions } from 'vuex'

export default {
  name: 'DefaultLayout',
  components: {
    AnimatedNumber
  },
  data() {
    return {
      balance: 0,
      navItems: [
        { text: 'Home', to: '/', disabled: false},
        { text: 'Housing', to: '/housing', disabled: false, exact: true},
        { text: 'Transportation', to: '/transportation', disabled: false, exact: true},
        { text: 'Insurance', to: '/insurance', disabled: false, exact: true},
        { text: 'Utilities', to: '/utilities', disabled: false, exact: true},
        { text: 'Communications', to: '/communications', disabled: false, exact: true},
        { text: 'Food', to: '/food', disabled: false, exact: true},
        { text: 'Clothing', to: '/clothing', disabled: false, exact: true},
        { text: 'Lifestyle', to: '/lifestyle', disabled: false, exact: true},
        { text: 'Activities', to: '/activities', disabled: false, exact: true}
      ]
    }
  },
  computed: {
    // balance(){
    //   return this.$store.state.budget.balance
    // },
    // monthlyBudget() {
    //   return this.balance
    // }
  },
  methods: {
    // formatNumber(val){
    //   return currency(val, currencyOptions).format()
    // }
    ...mapActions({
      calculateBudget: 'budget/total'
    }),
    showBalance(){
      const routeNames = ['index', 'results', 'occupation-selection']
      return !routeNames.includes(this.$route.name)
    },
    showNavigation(){
      const routeNames = ['results']
      return !routeNames.includes(this.$route.name)
    }
  },
  mounted(){
    this.$store.subscribe( async (mutation, state) => {
      this.balance = await this.calculateBudget()

      console.warn('Updating balance', this.balance)
    })
  }
}
</script>

<style>

.budget-display {
  text-align: right;
  flex-grow: 1;
  font-size: 3em;
}

body {
  padding:0;
  /* margin: 40px; */
  /* background-color: var(--primary) */

}

body > h1 {
  margin-top: 0;
  padding-top:0;
}
.nuxt-link-active {
  text-decoration: underline;
}
.v-main__wrap {
  padding-top: 2em;
  padding-bottom: 2em;
}
</style>
