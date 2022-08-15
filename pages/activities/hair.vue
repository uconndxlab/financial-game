<template>
  <v-container>
    <h1>Activity > Personal Care</h1>
    <div class="choice-boxes text-center">
    <p>Choose a hair cut type:</p>
    <v-btn-toggle v-model="selection" mandatory class="d-block" color="primary" @change="selectionChanged()">
      <div v-for="option in hairOptions" :key="option.name" class="ma-4">
        <v-btn width="100%" left>{{option.name}}</v-btn>
      </div>

    </v-btn-toggle>
    </div>
    <nav>
      <ul class="nav-buttons">
        <li>
        <v-btn to="/activities/books">&lt; Back</v-btn>
        </li>
        <li>
        <v-btn to="/activities/nails" color="secondary">Continue...</v-btn>
        </li>
      </ul>
    </nav>

  </v-container>
</template>

<script>

export default {
  name: 'HairType',
  data(){
    return {
      selection: null,
      dialog: false,
      hairtype: null,
      hairOptions: [
        { name: 'Hair Salon/Barber', value: false},
        { name: 'Self Cut', value: false}

      ],
    }
  },
  methods: {
    selectionChanged(){
      this.hairtype = this.selection
    }
  }
}
</script>
