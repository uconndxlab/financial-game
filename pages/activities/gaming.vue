<template>
  <v-container>
    <h1>Activity > Gaming</h1>
    <div class="choice-boxes text-center">
    <p>Choose a gaming type:</p>
    <v-btn-toggle v-model="selection" mandatory class="d-block" color="primary" @change="selectionChanged()">
      <div v-for="option in gameOptions" :key="option.name" class="ma-4">
        <v-btn width="100%" left>{{option.name}}</v-btn>
      </div>

    </v-btn-toggle>
    </div>
    <nav>
      <ul class="nav-buttons">
        <li>
        <v-btn to="/activities/streaming">&lt; Back</v-btn>
        </li>
        <li>
        <v-btn to="/activities/books" color="secondary">Continue...</v-btn>
        </li>
      </ul>
    </nav>

  </v-container>
</template>

<script>

export default {
  name: 'GamingType',
  data(){
    return {
      selection: null,
      dialog: false,
      gamingtype: null,
      gameOptions: [
        { name: 'Pay to play', value: false},
        { name: 'Free to play', value: false},
        { name: 'No gaming', value:false}

      ],
    }
  },
  methods: {
    selectionChanged(){
      this.gamingtype = this.selection
    }
  }
}
</script>
