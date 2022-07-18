<template>

  <v-app>
    <v-main fill-height fluid>
      <Nuxt />

      <div class="budget-display" v-if="$route.name !== 'index'">
        <animated-number :value="balance" :format-value="$money" :duration="500" />
      </div>

    </v-main>
    <v-footer app class="d-flex justify-center" >
      <v-breadcrumbs large :items="navItems" divider=""></v-breadcrumbs>
    </v-footer>
  </v-app>
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
        { text: 'Communications', to: '/communications', disabled: true},
        { text: 'Food', to: '/food', disabled: true},
        { text: 'Clothing', to: '/clothing', disabled: true},
        { text: 'Lifestyle', to: '/lifestyle', disabled: true},
        { text: 'Activities', to: '/activities', disabled: true}
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
    })
  },
  mounted(){
    this.$store.subscribe( async (mutation, state) => {
      if(mutation.type.includes('Pref')){

        this.balance = await this.calculateBudget()
        console.warn('Updating balance')

      }
    })

    console.log(this.$route)
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
