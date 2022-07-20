<template>
<v-container>
  <div>
    <h1>Insurance > Life Insurance</h1>
    <div class="choice-boxes text-center">
    <p>Do you want life insurance?</p>
    <v-btn-toggle v-model="selection" mandatory class="d-block" color="primary" @change="selectionChanged()">
      <div v-for="option in lifeOptions" :key="option.name" class="ma-4">
        <v-btn width="100%" left>{{option.name}}</v-btn>
      </div>

    </v-btn-toggle>
    </div>
    <nav>
      <ul class="nav-buttons">
        <li>
          <v-btn to="/insurance/renters">&lt; Back</v-btn>
        </li>
        <li>
          <v-btn v-if="lifetype !== null" to="/communications" color="secondary">Continue...</v-btn>
        </li>
      </ul>
    </nav>

    <v-dialog v-model="dialog" transition="dialog-top-transition" max-width="600">
      <v-card>
        <v-card-title color="primary" dark>Did You Know?</v-card-title>
        <v-card-text>
          <!-- If user chose either insurance: -->
          <p v-if="selection">
            Choosing a higher life insurance provides more for your dependents if you die, but costs more monthly.
          </p>

          <!-- If user chose 0 insurance -->
          <p v-else>
            No life insurance can result in financial loss for dependents in case of your death.
          </p>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn text @click="dialog = false">Okay</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </div>
</v-container>
</template>

<script>

export default {
  name: 'TransportationType',
  data(){
    return {
      selection: null,
      dialog: false,
      lifetype: null,
      lifeOptions: [
        { name: 'No', value: true},
        { name: '$100,000 Term Life', value: false},
        { name: '$250,000 Term Life', value:false}

      ],
    }
  },
  methods: {
    selectionChanged(){
      this.lifetype = this.selection
      this.dialog = true
    }
  },
  mounted(){
    this.dialog = false
  }
}
</script>
