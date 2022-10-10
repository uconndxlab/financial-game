<template>
  <v-container>
    <h1>Transportation > Transportation Type</h1>
        <p>How will you get around? Will you need to buy a new or used car? Is public transportation an option for you or might
          you
          seek alternative transportation options such as bicycle, scooter, or ride sharing?</p>

    <div class="choice-boxes text-center">
    <v-btn-toggle v-model="selection" mandatory class="d-block" color="primary" @change="selectionChanged()">
      <div v-for="option in transportationOptions" :key="option.name" class="ma-4">
        <v-btn width="100%" left>{{option.name}}</v-btn>
      </div>

    </v-btn-toggle>
    </div>
    <nav>
      <ul class="nav-buttons">
        <li>
        </li>
        <li>
          <v-btn v-if="transportationtype !== null && selection" to="/transportation/alternative" color="secondary">Continue...</v-btn>
          <v-btn v-if="transportationtype !== null && (!selection === true)" to="/transportation/vehicles" color="secondary">Continue...</v-btn>
        </li>
      </ul>
    </nav>

    <v-dialog v-model="dialog" transition="dialog-top-transition" max-width="600">
      <v-card>
        <v-card-title color="primary" dark>Did You Know?</v-card-title>
        <v-card-text>
          <!-- If user chose alternative transport: -->
          <p v-if="selection">
            Positive message goes here about saving money and the environment
          </p>

          <!-- If user is purchasing car -->
          <p v-else>
            You have more freedom and privacy, but owning a vehicle and maintaining it can be costly. 
          </p>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn text @click="dialog = false">Okay</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-container>
</template>

<script>

export default {
  name: 'TransportationType',
  data(){
    return {
      selection: null,
      dialog: false,
      transportationtype: null,
      transportationOptions: [
        { name: 'Purchase a vehicle', value: false},
        { name: 'Alternative transportation', value: true}

      ],
    }
  },
  methods: {
    selectionChanged(){
      this.transportationtype = this.selection
      this.dialog = true
    }
  },
  mounted(){
    this.dialog = false
  }
}
</script>
