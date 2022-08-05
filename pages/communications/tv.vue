<template>
  <v-container>

    <v-row>
      <v-col>
        <h1>Communications > TV</h1>
        <div class="choice-boxes text-center">
        <p>Choose a TV plan:</p>
        <v-btn-toggle v-model="selection" mandatory class="d-block" color="primary" @change="selectionChanged()">
          <div v-for="option in tvOptions" :key="option.name" class="ma-4">
            <v-btn width="100%" left>{{option.name}}</v-btn>
          </div>

        </v-btn-toggle>
        </div>

      </v-col>

    </v-row>

    <nav>

      <ul class="nav-buttons">
        
        <li><v-btn to="/communications/mobile">&lt; Back</v-btn></li>
        <li><v-btn v-if="mobilephone !== null && (!selection === false)" to="/communications/internet" color="secondary">Continue...</v-btn>
            <v-btn v-if="mobilephone !== null && (!selection === true)" to="/communications/cableplan" color="secondary">Continue...</v-btn>
        </li>


      </ul>
    </nav>

  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'tvChoice',
  data(){
    return {
      selection: null,
      dialog: false,
      tv: null,
      tvOptions: [
        { name: 'Cable', value: false },
        { name: 'Satelitte', value: true}
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
    this.tv = this.selection
    this.dialog = false
  }
}
</script>
