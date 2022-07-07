<template>
  <div>
    <h1>Transportation > Downpayment</h1>
    <p>Choose downpayment amount:</p>
    <v-btn-toggle v-model="selection" mandatory class="d-block" color="primary" @change="selectionChanged()">
      <div v-for="option in downpaymentOptions" :key="option.name" class="ma-4">
        <v-btn width="100%" left>{{option.name}}</v-btn>
      </div>

    </v-btn-toggle>
    <nav>
      <ul>
        <li>
          <v-btn to="/transportation/vehicles">&lt; Back</v-btn>
        </li>
        <li>
          <v-btn v-if="downpaymenttype !== null" to="/transportation/loanterm" color="secondary">Continue...</v-btn>
        </li>
      </ul>
    </nav>

    <v-dialog v-model="dialog" transition="dialog-top-transition" max-width="600">
      <v-card>
        <v-card-title color="primary" dark>Did You Know?</v-card-title>
        <v-card-text>
          <!-- If user chose 0 downpayment: -->
          <p v-if="selection">
            Choosing a higher downpayment can save money from loan interest later on.
          </p>

          <!-- If user chose either downpayment -->
          <p v-else>
            No down payment can result in a higher total cost due to loan interest rates.
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
      downpaymenttype: null,
      downpaymentOptions: [
        { name: '$0', value: true},
        { name: '$2500', value: false},
        { name: '$4000', value:false}

      ],
    }
  },
  methods: {
    selectionChanged(){
      this.downpaymenttype = this.selection
      this.dialog = true
    }
  },
  mounted(){
    this.dialog = false
  }
}
</script>
