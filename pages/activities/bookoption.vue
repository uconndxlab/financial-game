<template>
  <v-container>
    <h1>Activity > Reading</h1>
    <div class="choice-boxes text-center">
    <p>Choose a book type:</p>
    <v-btn-toggle v-model="selection" mandatory class="d-block" color="primary" @change="selectionChanged()">
      <div v-for="option in bookOptions" :key="option.name" class="ma-4">
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
        <v-btn to="/activities/hair" color="secondary">Continue...</v-btn>
        </li>
      </ul>
    </nav>

  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'BookType',
  data(){
    return {
      selection: null,
      dialog: false,
      monthlyBook: 0,
      bookOptions: [
        { name: 'New', value: 25},
        { name: 'Used', value: 5},
        { name: 'Library', value:0}
      ],
    }
  },
  computed: {
    book() {
      return this.$store.state.budget.book
    }
  },
  methods: {
    selectionChanged(){
      this.monthlyBook = this.bookOptions[this.selection].value
      this.update({
        prop: 'reading',
        value: this.monthlyBook
      })
      this.dialog = true
    },
    ...mapActions({
      update: 'budget/update'
    })
  },
  mounted(){
    this.dialog = false
  }
}
</script>
