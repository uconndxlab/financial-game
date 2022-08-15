<template>
  <v-container>
    <h1>Activity > Reading</h1>
    <div class="choice-boxes text-center">
    <p>Choose a reading type:</p>
    <v-btn-toggle v-model="selection" mandatory class="d-block" color="primary" @change="selectionChanged()">
      <div v-for="option in bookOptions" :key="option.name" class="ma-4">
        <v-btn width="100%" left>{{option.name}}</v-btn>
      </div>

    </v-btn-toggle>
    </div>
    <nav>
      <ul class="nav-buttons">
        <li>
        <v-btn to="/activities/gaming">&lt; Back</v-btn>
        </li>
        <li>
        <v-btn v-if="booktype === 0" to="/activities/bookoption" color="secondary">Continue...</v-btn>
        <v-btn v-else to="/activities/hair" color="secondary">Continue...</v-btn>
        </li>
      </ul>
    </nav>

  </v-container>
</template>

<script>

export default {
  name: 'BookType',
  data(){
    return {
      selection: null,
      dialog: false,
      booktype: null,
      bookOptions: [
        { name: 'Books', value: false},
        { name: 'Online Books', value: false},
        { name: 'None', value:false}

      ],
    }
  },
  methods: {
    selectionChanged(){
      this.booktype = this.selection
    }
  }
}
</script>
