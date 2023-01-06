<template>
  <v-container>
    <h1>Transportation > Transportation Type</h1>
        <p>How will you get around? Will you need to buy a new or used car? Is public transportation an option for you or might
          you
          seek alternative transportation options such as bicycle, scooter, or ride sharing?</p>

        <p>
        <strong>Purchase a Vehicle:</strong><br>Having a car can be very costly, especially if you need to finance it. Then there are also other expenses such as gas, maintenance, insurance, and property taxes, and registration. 
        </p><p>
        <strong>Alternative Transportation:</strong><br>
        Would an alternate transportation option work for you? You may be able to reduce your transportation costs and save the environment. Is public transportation available where you need to go? How often will you need transportation and where? If you only need rides a few times per month, ride sharing might also be an option. 
        </p>
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
Great choice! By choosing this means, you can save money and the environment.           </p>

          <!-- If user is purchasing car -->
          <p v-else>
You will have the freedom to go where and when you want to go. However, owning, maintaining, and insuring a vehicle is very costly and a lot of responsibility.           </p>
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
                    head: {
        title: 'Transportation: Type',
    },
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
