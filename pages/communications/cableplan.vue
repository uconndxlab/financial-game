<template>
  <v-container>
    <h1>Communications > TV</h1>
    <div class="choice-boxes text-center">
    <p>Choose a cable plan:</p>
    <v-btn-toggle v-model="selection" mandatory class="d-block" color="primary" @change="selectionChanged()">
      <div v-for="option in tvOptions" :key="option.name" class="ma-4">
        <v-btn width="100%" left>{{option.name}}</v-btn>
      </div>

    </v-btn-toggle>
    </div>
    <nav>
      <ul class="nav-buttons">
        <li>
        <v-btn to="/communications/tv">&lt; Back</v-btn>
        </li>
        <li>
        <v-btn to="/communications/internet" color="secondary">Continue...</v-btn>
        </li>
      </ul>
    </nav>

  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
          head: {
        title: 'Communications: TV/Cable',
    },
  name: 'tvChoice',
  data(){
    return {
      selection: null,
      dialog: false,
      tv: 0,
      monthlyTV:0,
      tvOptions: [
        { name: 'Basic', value: 65},
        { name: 'Expanded', value: 105},
        { name: 'Premium', value:140}
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
