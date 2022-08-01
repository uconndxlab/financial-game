<template>
  <v-container>
    <h1>Transportation > Transportation Type</h1>
    <div class="choice-boxes text-center">
    <p>Choose private transportation:</p>
    <v-btn-toggle v-model="selection" mandatory class="d-block" color="primary" @change="selectionChanged()">
      <div v-for="option in transportOptions" :key="option.name" class="ma-4">
        <v-btn width="100%" left>{{option.name}}</v-btn>
      </div>

    </v-btn-toggle>
    </div>
    <nav>
      <ul class="nav-buttons">
        <li>
          <v-btn to="/transportation/alternative">&lt; Back</v-btn>
        </li>
        <li>
          <v-btn v-if="transporttype !== null" to="/insurance" color="secondary">Continue...</v-btn>          
        </li>
      </ul>
    </nav>

  </v-container>
</template>

<script>

export default {
  name: 'TransportationType',
  data(){
    return {
      selection: null,
      dialog: false,
      transporttype: null,
      transportOptions: [
        { name: 'Uber', value: false},
        { name: 'Lyft', value: false}
      ],
    }
  },
  methods: {
    selectionChanged(){
      this.transporttype = this.selection
    }
  }
}
</script>
