<template>
  <v-container>

    <v-row>
      <v-col>
        <h1>Housing > Roommate</h1>
        <div class="choice-boxes text-center">
        <p>Will you live alone? Will you have a roommate and split some expenses? What are the benefits and disadvantages of having
        a roommate? Do you know someone who would share an apartment with you? Do you know each other well enough to know that
        that you will be able to get along with one another? Will this person be able to pay their portion of the rent? If they
        leave or are unable to pay, you may need to be prepared to pay their portion of the rent as well as your own. Pick a
        roommate who is trustworthy and able to meet this obligation.</p>
        <v-btn-toggle v-model="selection" mandatory class="d-block" color="primary" @change="selectionChanged()">
          <div v-for="option in roommateOptions" :key="option.name" class="ma-4">
            <v-btn width="100%" left>{{option.name}}</v-btn>
          </div>

        </v-btn-toggle>
        </div>

      </v-col>

    </v-row>

    <nav>

      <ul class="nav-buttons">
        
        <li><v-btn to="/housing/location">&lt; Back</v-btn></li>
        <li><v-btn v-if="roommate !== null" to="/housing/apartment" color="secondary">Continue...</v-btn></li>


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

  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

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
      return this.$store.state.budget.roommate
    }
  },
  methods: {
    selectionChanged(){
      this.update({
        prop: 'roommate',
        value: this.selection === 1
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
