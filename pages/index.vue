<template>
  <v-container >
    <v-row>
      <v-col>
        <h1>Welcome to Breadwinner</h1>
        <p>About the game...</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi saepe nesciunt sapiente, culpa ex
          ratione, quo eius in blanditiis dolorum voluptates quam illo eum praesentium reprehenderit sit, ipsum atque?
          Sed?</p>
        <h2>Begin by Choosing an Occupation</h2>

        <v-data-table v-model="occupation" :items="occupations" :headers="table.headers" single-select
          @item-selected="changed" show-select class="elevation-1" :search="search">
          <template v-slot:top>

            <v-text-field v-model="search" append-icon="mdi-magnify" label="Filter by Occupation" single-line
              hide-details class="pa-5">
            </v-text-field>


          </template>

        </v-data-table>


        <!-- UX Note: This might work better as a search box and results instead of autocomplete -->
        <!-- <v-autocomplete v-model=" chosenOccupation" :items="entries" :loading="isLoading"
              :search-input.sync="search" hide-no-data hide-selected item-text="name" label="Occupations"
              placeholder="Start typing to Search" prepend-icon="mdi-magnify" chips clearable return-object
              @change="changed">
              </v-autocomplete> -->

      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-btn :disabled="occupation.length < 1" to="/occupation" color="secondary">Continue...</v-btn>
      </v-col>
    </v-row>
    </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'IndexPage',
  async asyncData({$supabase}) {
    let result
    try {
      result = await $supabase.from('occupations').select('*')
    } catch (error) {
      console.log(error)
    }
    console.log(result)
    return {
      occupations: result.data,
    }
  },
  data(){
    return {
      count: null,
      search: null,
      occupation: [],
      table: {
        headers: [
          {
            text: 'Areas of Employment',
            sortable: true,
            value: 'name'

          }

        ]
      }
    }
  },
  watch: {
    search(q) {

    },
  },
  methods: {
    changed({ item: occupation}){

      // Set the new starting amount (zero $ if null)
      this.update({
        prop: 'occupation',
        value: occupation
      })
    },
    ...mapActions({
      update: 'budget/update',
      reset: 'budget/reset'
    }),

  },
  mounted() {
    this.reset()
  }

}
</script>
