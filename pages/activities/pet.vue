<template>
  <v-container>
    <h1>Activities > Pet</h1>
    <div class="choice-boxes text-center">
    <p>Choose a pet:</p>
    <v-btn-toggle v-model="selection" mandatory class="d-block" color="primary" @change="selectionChanged()">
      <div v-for="option in petOptions" :key="option.name" class="ma-4">
        <v-btn width="100%" left>{{option.name}}</v-btn>
      </div>

    </v-btn-toggle>
    </div>
    <nav>
      <ul class="nav-buttons">
        <li>
        </li><li>
        <v-btn v-if="pettype === 0" to="/activities/dog" color="secondary">Continue...</v-btn>
        <v-btn v-else to="/activities/streaming" color="secondary">Continue...</v-btn>
        </li>
      </ul>
    </nav>

  </v-container>
</template>

<script>

export default {
  name: 'PetType',
  data(){
    return {
      selection: null,
      dialog: false,
      pettype: null,
      petOptions: [
        { name: 'Dog', value: false},
        { name: 'Cat', value: false},
        { name: 'Rabbit', value: false},
        { name: 'Fish', value:false},
        { name: 'No pet', value:false}

      ],
    }
  },
  methods: {
    selectionChanged(){
      this.pettype = this.selection
    }
  }
}
</script>
