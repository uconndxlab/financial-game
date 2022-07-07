<template>
  <div>
    <h1>Transportation > Loan Term Length</h1>
    <p>Choose downpayment amount:</p>
    <v-btn-toggle v-model="selection" mandatory class="d-block" color="primary" @change="selectionChanged()">
      <div v-for="option in loanOptions" :key="option.name" class="ma-4">
        <v-btn width="100%" left>{{option.name}}</v-btn>
      </div>

    </v-btn-toggle>
    <nav>
      <ul>
        <li>
          <v-btn to="/transportation/downpayment">&lt; Back</v-btn>
        </li>
        <li>
          <v-btn v-if="downpaymenttype !== null" to="/insurance" color="secondary">Continue...</v-btn>
        </li>
      </ul>
    </nav>

    <v-dialog v-model="dialog" transition="dialog-top-transition" max-width="600">
      <v-card>
        <v-card-title color="primary" dark>Did You Know?</v-card-title>
        <v-card-text>
          <!-- If user selects 48 moths -->
          <p v-if="selection">
            Choosing a shorter loan term length gives you less time to pay it back, but the the total cost of the loan is less.
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

  </div>
</template>

<script>

export default {
  name: 'TransportationType',
  data(){
    return {
      selection: null,
      dialog: false,
      loantype: null,
      loanOptions: [
        { name: '60 months', value: true},
        { name: '48 months', value: false}
      ],
    }
  },
  methods: {
    selectionChanged(){
      this.loantype = this.selection
      this.dialog = true
    }
  },
  mounted(){
    this.dialog = false
  }
}
</script>
