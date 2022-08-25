<template>
  <v-container>

    <v-row>
      <v-col>
        <h1>Communications > Landline</h1>
        <div class="choice-boxes text-center">
        <p>Do you want a landline phone?</p>
        <v-btn-toggle v-model="selection" mandatory class="d-block" color="primary" @change="selectionChanged()">
          <div v-for="option in landlineOptions" :key="option.name" class="ma-4">
            <v-btn width="100%" left>{{option.name}}</v-btn>
          </div>

        </v-btn-toggle>
        </div>

      </v-col>

    </v-row>

    <nav>

      <ul class="nav-buttons">
        
        <li></li>
        <li><v-btn v-if="landline !== null" to="/communications/mobile" color="secondary">Continue...</v-btn></li>


      </ul>
    </nav>

  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'landlinePhone',
  data(){
    return {
      selection: null,
      dialog: false,
      landlinetype: 0,
      monthlyLandline: 0,
      landlineOptions: [
        { name: 'Yes landline phone', value: 40},
        { name: 'No landline phone', value: 0}
      ],
    }
  },
  computed: {
    landline() {
      return this.$store.state.budget.landlinetype
    }
  },
  methods: {
    selectionChanged(){
      this.landlinetype = this.selection
      this.monthlylandline = this.landlineOptions[this.selection].value
      this.update({
        prop: 'landline',
        value: this.monthlylandline
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
