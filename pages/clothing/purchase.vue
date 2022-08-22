<template>
  <v-container>
    <h1>Clothing > Purchase</h1>
    <div class="choice-boxes text-center">
    <p>Choose how to purchase clothing:</p>
    <v-btn-toggle v-model="selection" mandatory class="d-block" color="primary" @change="selectionChanged()">
      <div v-for="option in clothingOptions" :key="option.name" class="ma-4">
        <v-btn width="100%" left>{{option.name}}</v-btn>
      </div>

    </v-btn-toggle>
    </div>
    <nav>
      <ul class="nav-buttons">
        <li>
        </li>
        <li>
        <v-btn to="/lifestyle" color="secondary">Continue...</v-btn>
        </li>
      </ul>
    </nav>

  </v-container>
</template>

<script>

export default {
  name: 'ClothingOption',
  data(){
    return {
      selection: null,
      dialog: false,
      clothing: null,
      clothingOptions: [
        { name: 'Buy New', value: false},
        { name: 'Buy Consignment', value: false}

      ],
    }
  },
  methods: {
    selectionChanged(){
      this.clothing = this.selection
    }
  }
}
</script>
