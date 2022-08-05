<template>
  <v-container>
    <h1>Communications > Mobile</h1>
    <div class="choice-boxes text-center">
    <p>Choose a data plan:</p>
    <v-btn-toggle v-model="selection" mandatory class="d-block" color="primary" @change="selectionChanged()">
      <div v-for="option in dataOptions" :key="option.name" class="ma-4">
        <v-btn width="100%" left>{{option.name}}</v-btn>
      </div>

    </v-btn-toggle>
    </div>
    <nav>
      <ul class="nav-buttons">
        <li>
        <v-btn to="/communications/mobile">&lt; Back</v-btn>
        </li>
        <li>
        <v-btn to="/communications/tv" color="secondary">Continue...</v-btn>
        </li>
      </ul>
    </nav>

  </v-container>
</template>

<script>

export default {
  name: 'PhoneDataType',
  data(){
    return {
      selection: null,
      dialog: false,
      dataplan: null,
      dataOptions: [
        { name: '10GB', value: false},
        { name: '20GB', value: false},
        { name: '30GB', value:false},
        { name: '40GB', value:false}

      ],
    }
  },
  methods: {
    selectionChanged(){
      this.dataplan = this.selection
    }
  }
}
</script>
