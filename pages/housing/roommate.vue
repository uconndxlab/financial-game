<template>
  <div>
    <h1>Housing > Roommate</h1>
    <p>Do you want a roommate?</p>
    <v-btn-toggle v-model="selection" mandatory class="d-block" color="primary" @change="selectionChanged()">
      <div v-for="option in roommateOptions" :key="option.name" class="ma-4">
        <v-btn width="100%" left>{{option.name}}</v-btn>
      </div>

    </v-btn-toggle>
    <nav>
      <ul>
        <li>
          <v-btn to="/housing/location">&lt; Back</v-btn>
        </li>
        <li>
          <v-btn v-if="roommate !== null" to="/housing/apartment" color="secondary">Continue...</v-btn>
        </li>
      </ul>
    </nav>

    <v-dialog v-model="dialog" transition="dialog-top-transition" max-width="600">
      <v-card>
        <v-card-title color="primary" dark>Did You Know?</v-card-title>
        <v-card-text>
          <!-- If user chose a roommate: -->
          <p v-if="selection">
            Positive message goes here about only paying half the rent.
          </p>

          <!-- If user is living alone -->
          <p v-else>
            You have the place all to yourself, but that also means
            you're responsible for 100% of the rent and utilities
            costs.
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
import { mapMutations } from 'vuex'

export default {
  name: 'HousingRoommate',
  data(){
    return {
      selection: null,
      dialog: false,
      roommateOptions: [
        { name: 'Live Alone', value: false },
        { name: 'Live with a roommate', value: true}
      ],
    }
  },
  computed: {
    roommate() {
      return this.$store.state.budget.prefs.roommate
    }
  },
  methods: {
    selectionChanged(){
      this.setRoommate(this.selection)
      this.dialog = true
    },
    ...mapMutations({
      setRoommate: 'budget/setRoommate'
    })
  },
  mounted(){
    this.dialog = false
  }
}
</script>
