<template>
  <v-container>
    <h1>Communications > TV</h1>
    <div class="choice-boxes text-center">
    <p>Choose a cable plan:</p>
    <v-btn-toggle v-model="selection" mandatory class="d-block" color="primary" @change="selectionChanged()">
      <div v-for="option in cableOptions" :key="option.name" class="ma-4">
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

export default {
  name: 'CableType',
  data(){
    return {
      selection: null,
      dialog: false,
      cableplan: null,
      cableOptions: [
        { name: 'Basic', value: false},
        { name: 'Expanded', value: false},
        { name: 'Premium', value:false}

      ],
    }
  },
  methods: {
    selectionChanged(){
      this.cableplan = this.selection
    }
  }
}
</script>
