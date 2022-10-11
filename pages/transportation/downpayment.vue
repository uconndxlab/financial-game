<template>
  <v-container>
    <h1>Transportation > Downpayment</h1>
    <p>A down payment is money you pay at the time you purchase the vehicle. It is a portion of the total cost of the vehicle. Any remaining money owed will need to be financed. The more money you can put toward a down payment will reduce the amount of your monthly payment and total cost of your vehicle.  </p>
    <div class="choice-boxes text-center">
    <p>Will you be making a downpayment?</p>
    <v-btn-toggle v-model="selection" mandatory class="d-block" color="primary" @change="selectionChanged()">
      <div v-for="option in downpaymentOptions" :key="option.name" class="ma-4">
        <v-btn width="100%" left>{{option.name}}</v-btn>
      </div>

    </v-btn-toggle>
    </div>
    <nav>
      <ul class="nav-buttons">
        <li>
        <v-btn to="/transportation/vehicles">&lt; Back</v-btn>
        </li><li>
        <v-btn v-if="downpaymenttype !== null" to="/transportation/loanterm" color="secondary">Continue...</v-btn>
        </li>
      </ul>
      </nav>
        <v-dialog v-model="dialog" transition="dialog-top-transition" max-width="600">
          <v-card>
            <v-card-title color="primary" dark>Did You Know?</v-card-title>
            <v-card-text>
              <!-- If user chose either downpayment: -->
              <p v-if="selection">
                Choosing a higher downpayment can save money from loan interest later on.
              </p>

              <!-- If user chose 0 downpayment -->
              <p v-else>
                No down payment can result in a higher total cost due to loan interest rates.
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

export default {
  name: 'TransportationType',
  data(){
    return {
      selection: null,
      dialog: false,
      downpaymenttype: 0,
      downpaymentAmount:0,
      downpaymentOptions: [
        { name: '$0', value: 0},
        { name: '$2500', value: 2500},
        { name: '$4000', value:4000}

      ],
    }
  },
  computed: {
    transport() {
      return this.$store.state.budget.transport
    }
  },
  methods: {
    selectionChanged(){
      this.transporttype = this.selection
      this.downpaymentAmount = this.downpaymentOptions[this.selection].value
      this.update({
        prop: 'transport',
        value: this.downpaymentAmount
      })
      this.dialog = true
    },
    ...mapActions({
      update: 'budget/update'
    })
  },
  mounted(){
    this.dialog = false
  }

}
</script>
