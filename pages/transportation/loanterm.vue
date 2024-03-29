<template>
  <v-container>
    <h1>Transportation > Loan Term Length</h1>
    <p>If you choose the longer period, your monthly payment will be more affordable, but you will end up paying more for your car. If you choose the shorter time, you will have less money each month for other expenses and savings, but you will finish making payments sooner and spend less to purchase your car.</p>
    <div class="choice-boxes text-center">
    <p>How much time will you need to finance your vehicle?</p>
    <v-btn-toggle v-model="selection" mandatory class="d-block" color="primary" @change="selectionChanged()">
      <div v-for="option in loanOptions" :key="option.name" class="ma-4">
        <v-btn width="100%" left :value="option.value">{{option.name}}</v-btn>
      </div>

    </v-btn-toggle>
    </div>
    <nav>
      <ul class="nav-buttons">
        <li>
          <v-btn to="/transportation/downpayment">&lt; Back</v-btn>
        </li>
        <li>
          <v-btn v-if="loantype !== null" to="/insurance" color="secondary">Continue...</v-btn>
        </li>
      </ul>
    </nav>

    <v-dialog v-model="dialog" transition="dialog-top-transition" max-width="600">
      <v-card>
        <v-card-title color="primary" dark>Did You Know?</v-card-title>
        <v-card-text>
          <!-- If user selects 48 moths -->
          <p v-if="selection == 48">
            Choosing a shorter loan term length gives you less time to pay it back, but the total cost of the loan is less.
          </p>

          <!-- If user selects 60 months -->
          <p v-else>
            Choosing a longer loan term length gives you more time to pay it off, but the interest rates are higher.
          </p>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn text @click="dialog = false">Okay</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
import { Loan } from 'loanjs'

export default {
                        head: {
        title: 'Transportation: Type/Vehicle/Loan Term',
    },
  name: 'TransportationType',
  data(){
    return {
      selection: null,
      dialog: false,
      loantype: null,
      loanOptions: [
        { name: '60 months', value: 60},
        { name: '48 months', value: 48}
      ],
    }
  },
  mounted(){
    this.dialog = false
  },
  methods: {
    selectionChanged(){
      // calculate loan info
      const loan = new Loan(
        this.$store.state.budget.vehicle.price - this.$store.state.budget.downpayment, // amount
        this.$store.state.budget.installments || 60,   // installments number
        6,    // interest rate,
        false
      );
      this.update({
        prop: 'loan',
        value: loan
      })
      this.loantype = this.selection
      this.update({
        prop: 'installments',
        value: this.loantype
      })
      this.dialog = true
    },
    ...mapActions({
      update: 'budget/update'
    })
  },

}
</script>
