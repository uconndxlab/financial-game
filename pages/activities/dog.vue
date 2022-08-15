<template>
  <v-container>
    <h1>Activity > Pet</h1>
    <div class="choice-boxes text-center">
    <p>Choose a dog size:</p>
    <v-btn-toggle v-model="selection" mandatory class="d-block" color="primary" @change="selectionChanged()">
      <div v-for="option in dogOptions" :key="option.name" class="ma-4">
        <v-btn width="100%" left>{{option.name}}</v-btn>
      </div>

    </v-btn-toggle>
    </div>
    <nav>
      <ul class="nav-buttons">
        <li>
        <v-btn to="/activities/pet">&lt; Back</v-btn>
        </li>
        <li>
        <v-btn to="/activities/streaming" color="secondary">Continue...</v-btn>
        </li>
      </ul>
    </nav>

  </v-container>
</template>

<script>

export default {
  name: 'DogSize',
  data(){
    return {
      selection: null,
      dialog: false,
      dogplan: null,
      dogOptions: [
        { name: 'Small', value: false},
        { name: 'Medium', value: false},
        { name: 'Large', value:false}

      ],
    }
  },
  methods: {
    selectionChanged(){
      this.dogplan = this.selection
    }
  }
}
</script>
