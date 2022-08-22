<template>
  <v-container>
    <h1>Activity > Personal Care</h1>
    <div class="choice-boxes text-center">
    <p>Choose a nail care type:</p>
    <v-btn-toggle v-model="selection" mandatory class="d-block" color="primary" @change="selectionChanged()">
      <div v-for="option in nailOptions" :key="option.name" class="ma-4">
        <v-btn width="100%" left>{{option.name}}</v-btn>
      </div>

    </v-btn-toggle>
    </div>
    <nav>
      <ul class="nav-buttons">
        <li>
        <v-btn to="/activities/hair">&lt; Back</v-btn>
        </li>
        <li>
        <v-btn to="/activities/crafts" color="secondary">Continue...</v-btn>
        </li>
      </ul>
    </nav>

  </v-container>
</template>

<script>

export default {
  name: 'NailType',
  data(){
    return {
      selection: null,
      dialog: false,
      nailtype: null,
      nailOptions: [
        { name: 'Nail Salon', value: false},
        { name: 'Self nail care', value: false}

      ],
    }
  },
  methods: {
    selectionChanged(){
      this.nailtype = this.selection
    }
  }
}
</script>
