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
        <li><v-btn v-if="tv === 0" to="/communications/cableplan" color="secondary">Continue...</v-btn>
            <v-btn v-if="tv === 1" to="/communications/internet" color="secondary">Continue...</v-btn>
            <v-btn v-if="tv === 2" to="/communications/streaming" color="secondary">Continue...</v-btn>
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
      tv: 0,
      monthlyTV:0,
      tvOptions: [
        { name: 'Cable', value: 0 },
        { name: 'Satellite', value: 55},
        { name: 'Streaming', value: 0}
      ],
    }
  },
  computed: {
    tvtype() {
      return this.$store.state.budget.tv
    }
  },
  methods: {
    selectionChanged(){
      this.tv = this.selection
      this.monthlyTV = this.tvOptions[this.selection].value
      this.update({
        prop: 'tv',
        value: this.monthlyTV
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
