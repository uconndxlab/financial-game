<template>
  <v-container>
    <h1>Food > Diet</h1>
    <div class="choice-boxes text-center">
    <p>Choose a diet:</p>
    <v-btn-toggle v-model="selection" mandatory class="d-block" color="primary" @change="selectionChanged()">
      <div v-for="option in dietOptions" :key="option.name" class="ma-4">
        <v-btn width="100%" left>{{option.name}}</v-btn>
      </div>

    </v-btn-toggle>
    </div>
    <nav>
      <ul class="nav-buttons">
        <li>
        </li>
        <li>
        <v-btn to="/food/budget" color="secondary">Continue...</v-btn>
        </li>
      </ul>
    </nav>

  </v-container>
</template>

<script>

export default {
  name: 'DietChoice',
  data(){
    return {
      selection: null,
      dialog: false,
      dietplan: null,
      dietOptions: [
        { name: 'No Diet', value: false},
        { name: 'Organic', value: false},
        { name: 'Gluten Free', value:false}

      ],
    }
  },
  methods: {
    selectionChanged(){
      this.dietplan = this.selection
    }
  }
}
</script>
