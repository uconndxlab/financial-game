<template>
  <v-container>
    <h1>Transportation > Transportation Type</h1>
    <div class="choice-boxes text-center">
    <p>Choose public transportation:</p>
    <v-btn-toggle v-model="selection" mandatory class="d-block" color="primary" @change="selectionChanged()">
      <div v-for="option in transportOptions" :key="option.name" class="ma-4">
        <v-btn width="100%" left>{{option.name}}</v-btn>
      </div>

    </v-btn-toggle>
    </div>
    <nav>
      <ul class="nav-buttons">
        <li>
          <v-btn to="/transportation/alternative">&lt; Back</v-btn>
        </li>
        <li>
          <v-btn to="/insurance" color="secondary">Continue...</v-btn>          
        </li>
      </ul>
    </nav>

  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
                        head: {
        title: 'Transportation: Type/Public',
    },
  name: 'TransportationType',
  data(){
    return {
      selection: null,
      dialog: false,
      monthlyTransportCost: 108,
      transportOptions: [
        { name: 'Monthly bus pass Zone 2', value: 108},
        { name: 'Monthly bus pass Zone 3', value: 140}
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
