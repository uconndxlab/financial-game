<template>
  <v-container>
    <h1>Activity > Pet</h1>
    <div class="choice-boxes text-center">
    <p>Choose a dog size:</p>
    <v-btn-toggle v-model="selection" mandatory class="d-block" color="primary" @change="selectionChanged()">
      <div v-for="option in dogOptions" :key="option.name" class="ma-4">
        <v-btn width="100%" left>{{option.name}}</v-btn>
      </div>

    </v-btn-toggle>
    </div>
    <nav>
      <ul class="nav-buttons">
        <li>
        <v-btn to="/activities/pet">&lt; Back</v-btn>
        </li>
        <li>
        <v-btn to="/activities/gaming" color="secondary">Continue...</v-btn>
        </li>
      </ul>
    </nav>

  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
        head: {
        title: 'Activities: Pet/Dog',
    },
  name: 'DogSize',
  data(){
    return {
      selection: null,
      dialog: false,
      monthlyPet: null,
      dogOptions: [
        { name: 'Small', value: 115},
        { name: 'Medium', value: 137},
        { name: 'Large', value:160}

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
      this.monthlyPet = this.dogOptions[this.selection].value
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
