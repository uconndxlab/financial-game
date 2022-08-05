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
      landline: null,
      landlineOptions: [
        { name: 'Yes landline phone', value: false },
        { name: 'No landline phone', value: true}
      ],
    }
  },
  methods: {
    selectionChanged(){
      this.dialog = true
    },
    ...mapActions({
      update: 'budget/update'
    })
  },
  mounted(){
    this.landline = this.selection
    this.dialog = false
  }
}
</script>
