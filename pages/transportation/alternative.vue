<template>
  <v-container>
    <h1>Transportation > Transportation Type</h1>
    <div class="choice-boxes text-center">
    <p>Choose alternative transportation:</p>
    <v-btn-toggle v-model="selection" mandatory class="d-block" color="primary" @change="selectionChanged()">
      <div v-for="option in transportOptions" :key="option.name" class="ma-4">
        <v-btn width="100%" left>{{option.name}}</v-btn>
      </div>

    </v-btn-toggle>
    </div>
    <nav>
      <ul class="nav-buttons">
        <li>
        <v-btn to="/transportation/transportationtype">&lt; Back</v-btn>
        </li><li>
        <v-btn v-if="transporttype === 0" to="/transportation/public" color="secondary">Continue...</v-btn>
        <v-btn v-if="transporttype === 1" to="/transportation/private" color="secondary">Continue...</v-btn>
        <v-btn v-if="transporttype === 2 || transporttype === 3" to="/insurance" color="secondary">Continue...</v-btn>
        </li>
      </ul>
    </nav>

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
      transporttype: 0,
      monthlyTransportCost: 0,
      transportOptions: [
        { name: 'Public', value: 0},
        { name: 'Private', value: 0},
        { name: 'Scooter & Helmet', value:100},
        { name: 'Commuter bike with helmet & lock', value:10}

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
      this.monthlyTransportCost = this.transportOptions[this.selection].value
      this.update({
        prop: 'transport',
        value: this.monthlyTransportCost
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
