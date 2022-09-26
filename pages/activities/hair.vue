<template>
  <v-container>
    <h1>Activity > Personal Care</h1>
    <div class="choice-boxes text-center">
    <p>Choose a hair cut type:</p>
    <v-btn-toggle v-model="selection" mandatory class="d-block" color="primary" @change="selectionChanged()">
      <div v-for="option in hairOptions" :key="option.name" class="ma-4">
        <v-btn width="100%" left>{{option.name}}</v-btn>
      </div>

    </v-btn-toggle>
    </div>
    <nav>
      <ul class="nav-buttons">
        <li>
        <v-btn to="/activities/books">&lt; Back</v-btn>
        </li>
        <li>
        <v-btn to="/activities/nails" color="secondary">Continue...</v-btn>
        </li>
      </ul>
    </nav>

  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'HairType',
  data(){
    return {
      selection: null,
      dialog: false,
      monthlyHair: null,
      hairOptions: [
        { name: 'Hair Salon/Barber', value: 30},
        { name: 'Self Cut', value: 0}

      ],
    }
  },
  computed: {
    hair() {
      return this.$store.state.budget.hair
    }
  },
  methods: {
    selectionChanged(){
      this.monthlyHair = this.hairOptions[this.selection].value
      this.update({
        prop: 'haircut',
        value: this.monthlyHair
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
