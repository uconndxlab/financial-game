<template>
  <v-container>
    <h1>Transportation > Transportation Type</h1>
    <p>Choose alternative transportation:</p>
    <v-btn-toggle v-model="selection" mandatory class="d-block" color="primary" @change="selectionChanged()">
      <div v-for="option in transportOptions" :key="option.name" class="ma-4">
        <v-btn width="100%" left>{{option.name}}</v-btn>
      </div>

    </v-btn-toggle>
    <v-row>
      <v-col>
        <v-btn to="/transportation/transportationtype">&lt; Back</v-btn>
        <v-btn v-if="transporttype === 0" to="/transportation/public" color="secondary">Continue...</v-btn>
        <v-btn v-if="transporttype === 1" to="/transportation/private" color="secondary">Continue...</v-btn>
        <v-btn v-if="transporttype === 2 || transporttype === 3" to="/insurance" color="secondary">Continue...</v-btn>
      </v-col>
    </v-row>

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
        { name: 'Public', value: false},
        { name: 'Private', value: false},
        { name: 'Scooter & Helmet', value:false},
        { name: 'Commuter bike with helmet & lock', value:false}

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
