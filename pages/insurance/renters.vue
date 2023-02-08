<template>
<v-container>
  <div>
    <h1>Insurance > Renters Insurance</h1>
    <p>What does renter’s insurance cover? It may provide coverage to protect you, your possessions, and in the event of a covered loss, your living arrangements. It may cover your liability should someone become injured at your home or if you damage someone’s property. There may be a deductible amount you are responsible for and a dollar limit to your coverage. Though renter’s insurance may be optional, you may find that many landlords now require proof that you have a policy prior to allowing you to move in. </p>
    <div class="choice-boxes text-center">
    <p>Do you want renters insurance?</p>
    <v-btn-toggle v-model="selection" mandatory class="d-block" color="primary" @change="selectionChanged()">
      <div v-for="option in rentersOptions" :key="option.name" class="ma-4">
        <v-btn width="100%" left>{{option.name}}</v-btn>
      </div>

    </v-btn-toggle>
    </div>
    <nav>
      <ul class="nav-buttons">
        <li>
          <v-btn to="/insurance/health">&lt; Back</v-btn>
        </li>
        <li>
          <v-btn v-if="renterstype !== null" to="/insurance/life" color="secondary">Continue...</v-btn>
        </li>
      </ul>
    </nav>

    <v-dialog v-model="dialog" transition="dialog-top-transition" max-width="600">
      <v-card>
        <v-card-title color="primary" dark>Did You Know?</v-card-title>
        <v-card-text>
          <!-- If user gets renters insurance -->
          <p v-if="selection">
            Renters insurance costs an average of $19 a month.
          </p>

          <!-- If user is not getting renters insurance -->
          <p v-else>
            Renters insurance can cover theft, water backup damage, certain natural disasters, bodily injuries and more in a rented property.
          </p>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn text @click="dialog = false">Okay</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </div>
</v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
                  head: {
        title: 'Insurance: Renters',
    },
  name: 'RentersType',
  data(){
    return {
      selection: null,
      dialog: false,
      renterstype: 0,
      montlyRenters: 0,
      rentersOptions: [
        { name: 'No', value: 0},
        { name: 'Yes', value: 19}

      ],
    }
  },
  computed: {
    renters() {
      return this.$store.state.budget.renters
    }
  },
  methods: {
    selectionChanged(){
      this.renterstype = this.selection
      this.monthlyRenters = this.rentersOptions[this.selection].value
      this.update({
        prop: 'renters',
        value: this.monthlyRenters
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
