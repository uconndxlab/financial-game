<template>
  <v-container >
    <v-row>
      <v-col>
        <h1>Let's get started!</h1>
        <h2>Begin by Choosing an Occupation</h2>
        <p>

Pick an occupation that you are interested in pursuing—work that interests you and that you can see yourself doing in
the future. This way you will gain the most from participating. You can always go back and try it again with a different
occupation later.

        </p>

        <v-data-table v-model="occupation" :items="occupations" :headers="table.headers" single-select
          @item-selected="changed" show-select :search="search">
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
   head: {
    title: 'Breadwinner',
    meta: [
      {
        hid: 'financial game',
        name: 'Breadwinner Home',
        content: 'During this game, you’ll have a chance to make financial decisions you are likely to face.'
      }
    ],
  },
  name: 'OccupationSelectionPage',
  async asyncData({$supabase}) {
    let result
    try {
      // get all occupations ordered by name  (ascending)   
      result = await $supabase.from('occupations').select('*').order('name', { ascending: true }) 
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
    document.getElementById("bottom-nav").style.display = "block";
    document.getElementById("v-main-body").style.backgroundImage = "none"
    this.reset()
  }

}
</script>
