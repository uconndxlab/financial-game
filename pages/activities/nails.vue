<template>
  <v-container>
    <h1>Activity > Personal Care</h1>
    <div class="choice-boxes text-center">
    <p>Choose a nail care type:</p>
    <v-btn-toggle v-model="selection" mandatory class="d-block" color="primary" @change="selectionChanged()">
      <div v-for="option in nailOptions" :key="option.name" class="ma-4">
        <v-btn width="100%" left>{{option.name}}</v-btn>
      </div>

    </v-btn-toggle>
    </div>
    <nav>
      <ul class="nav-buttons">
        <li>
        <v-btn to="/activities/hair">&lt; Back</v-btn>
        </li>
        <li>
        <v-btn to="/end" color="secondary">Continue...</v-btn>
        </li>
      </ul>
    </nav>

  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'NailType',
  data(){
    return {
      selection: null,
      dialog: false,
      monthlyNails: null,
      nailOptions: [
        { name: 'Nail Salon', value: 35},
        { name: 'Self nail care', value: 0}

      ],
    }
  },
  computed: {
    nails() {
      return this.$store.state.budget.nails
    }
  },
  methods: {
    selectionChanged(){
      this.monthlyNails = this.nailOptions[this.selection].value
      this.update({
        prop: 'nails',
        value: this.monthlyNails
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
