<template>
  <v-container>
    <h1>Activities > Pet</h1>
    <div class="choice-boxes text-center">
    <p>Choose a pet:</p>
    <v-btn-toggle v-model="selection" mandatory class="d-block" color="primary" @change="selectionChanged()">
      <div v-for="option in petOptions" :key="option.name" class="ma-4">
        <v-btn width="100%" left>{{option.name}}</v-btn>
      </div>

    </v-btn-toggle>
    </div>
    <nav>
      <ul class="nav-buttons">
        <li>
        </li><li>
        <v-btn v-if="pettype === 0" to="/activities/dog" color="secondary">Continue...</v-btn>
        <v-btn v-else to="/activities/gaming" color="secondary">Continue...</v-btn>
        </li>
      </ul>
    </nav>

  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
        head: {
        title: 'Activities: Pet',
    },
  name: 'PetType',
  data(){
    return {
      selection: null,
      dialog: false,
      pettype: 0,
      monthlyPet: 0,
      petOptions: [
        { name: 'Dog', value: 0},
        { name: 'Cat', value: 90},
        { name: 'Rabbit', value: 92},
        { name: 'Fish', value:23},
        { name: 'No pet', value:0}

      ],
    }
  },
  computed: {
    pet() {
      return this.$store.state.budget.pet
    }
  },
  methods: {
    selectionChanged(){
      this.pettype = this.selection
      this.monthlyPet = this.petOptions[this.selection].value
      this.update({
        prop: 'pet',
        value: this.monthlyPet
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
