<template>
  <v-container>
    <h1>Clothing > Purchase</h1>
    <div class="choice-boxes text-center">
    <p>Choose how to purchase clothing:</p>
    <v-btn-toggle v-model="selection" mandatory class="d-block" color="primary" @change="selectionChanged()">
      <div v-for="option in clothingOptions" :key="option.name" class="ma-4">
        <v-btn width="100%" left>{{option.name}}</v-btn>
      </div>

    </v-btn-toggle>
    </div>
    <nav>
      <ul class="nav-buttons">
        <li>
        </li>
        <li>
        <v-btn to="/lifestyle" color="secondary">Continue...</v-btn>
        </li>
      </ul>
    </nav>

  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ClothingOption',
  data(){
    return {
      selection: null,
      dialog: false,
      clothing: 0,
      monthlyClothing: 0,
      clothingOptions: [
        { name: 'Buy New', value: 1},
        { name: 'Buy Consignment', value: 2}

      ],
    }
  },
  computed: {
    clothingtype() {
      return this.$store.state.budget.clothing
    }
  },
  methods: {
    selectionChanged(){
      this.clothing = this.selection
      this.monthlyClothing = this.clothingOptions[this.selection].value
      this.update({
        prop: 'clothing',
        value: this.monthlyClothing
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
