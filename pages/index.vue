<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Welcome to $APPNAME</h1>
        <p>About the game...</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi saepe nesciunt sapiente, culpa ex ratione, quo eius in blanditiis dolorum voluptates quam illo eum praesentium reprehenderit sit, ipsum atque? Sed?</p>
        <h2>Begin by Choosing an Occupation</h2>
        <v-autocomplete 
          v-model="query" 
          :items="entries" 
          :loading="isLoading" 
          :search-input.sync="search" 
          color="white"
          hide-no-data 
          hide-selected 
          item-text="name" 
          item-value="id" 
          label="Occupations"
          placeholder="Start typing to Search" 
          prepend-icon="mdi-magnify" 
          solo
          chips
          clearable
          ></v-autocomplete>

      </v-col>
    </v-row>

  </v-container>
</template>

<script>
export default {
  name: 'IndexPage',
  data(){
    return {
      query: null,
      count: null,
      entries: [],
      items: [],
      isLoading: null,
      search: null
    }
  },
  watch: {
    search(q) {
      if (this.items.length > 0 || q.length <= 3) return

      if (this.isLoading) return

      this.isLoading = true


      this.$supabase
        .from('occupations')
        .select('*')
        .ilike('name', `*${q}*`)
        .then(result => {
          const { data } = result
          this.count = data.length
          this.entries = data
        })
        .catch(error => {
          console.log(error)
        })
        .finally(() => {
          this.isLoading = false
        })

    },
  },
  methods: {

  },

}
</script>
