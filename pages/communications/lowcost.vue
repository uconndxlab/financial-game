<template>
  <v-container>
    <h1>Communications > Mobile</h1>
    <div class="choice-boxes text-center">
    <p>Choose a data plan:</p>
    <v-btn-toggle v-model="selection" mandatory class="d-block" color="primary" @change="selectionChanged()">
      <div v-for="option in dataOptions" :key="option.name" class="ma-4">
        <v-btn width="100%" left>{{option.name}}</v-btn>
      </div>

    </v-btn-toggle>
    </div>
    <nav>
      <ul class="nav-buttons">
        <li>
        <v-btn to="/communications/mobile">&lt; Back</v-btn>
        </li>
        <li>
        <v-btn to="/communications/tv" color="secondary">Continue...</v-btn>
        </li>
      </ul>
    </nav>

  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'PhoneDataType',
  data(){
    return {
      selection: null,
      dialog: false,
      dataplan: 0,
      monthlyData:0,
      dataOptions: [
        { name: '3GB', value: 30},
        { name: '8GB', value: 35},
        { name: '12GB', value:40},
        { name: 'Unlimited', value:45}
      ],
    }
  },
  computed: {
    datatype() {
      return this.$store.state.budget.dataplan
    }
  },
  methods: {
    selectionChanged(){
      this.dataplan = this.selection
      this.monthlyData = this.dataOptions[this.selection].value
      this.update({
        prop: 'dataplan',
        value: this.monthlyData
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
