<template>
<v-container>
  <div>
    <h1>Insurance > Renters Insurance</h1>
    <div class="choice-boxes text-center">
    <p>Do you want renters insurance?</p>
    <v-btn-toggle v-model="selection" mandatory class="d-block" color="primary" @change="selectionChanged()">
      <div v-for="option in rentersOptions" :key="option.name" class="ma-4">
        <v-btn width="100%" left>{{option.name}}</v-btn>
      </div>

    </v-btn-toggle>
    </div>
    <nav>
      <ul class="nav-buttons">
        <li>
          <v-btn to="/insurance/auto">&lt; Back</v-btn>
        </li>
        <li>
          <v-btn v-if="renterstype !== null" to="/insurance/life" color="secondary">Continue...</v-btn>
        </li>
      </ul>
    </nav>

    <v-dialog v-model="dialog" transition="dialog-top-transition" max-width="600">
      <v-card>
        <v-card-title color="primary" dark>Did You Know?</v-card-title>
        <v-card-text>
          <!-- If user gets renters insurance -->
          <p v-if="selection">
            Renters insurance costs an average of $19 a month.
          </p>

          <!-- If user is not getting renters insurance -->
          <p v-else>
            Renters insurance can cover theft, water backup damage, certain natural disasters, bodily injuries and more in a rented property.
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
  name: 'RentersType',
  data(){
    return {
      selection: null,
      dialog: false,
      renterstype: null,
      rentersOptions: [
        { name: 'No', value: false},
        { name: 'Yes', value: true}

      ],
    }
  },
  methods: {
    selectionChanged(){
      this.renterstype = this.selection
      this.dialog = true
    }
  },
  mounted(){
    this.dialog = false
  }
}
</script>
