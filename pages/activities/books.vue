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
import { mapActions } from 'vuex'

export default {
        head: {
        title: 'Activities: Reading',
    },
  name: 'BookType',
  data(){
    return {
      selection: null,
      dialog: false,
      booktype: null,
      monthlyBook: 0,
      bookOptions: [
        { name: 'Books', value: 0},
        { name: 'Online Books', value: 5},
        { name: 'None', value:0}

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
      this.booktype = this.selection
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
