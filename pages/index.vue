<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Welcome to Breadwinner</h1>
        <p>About the game...</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi saepe nesciunt sapiente, culpa ex
          ratione, quo eius in blanditiis dolorum voluptates quam illo eum praesentium reprehenderit sit, ipsum atque?
          Sed?</p>
        <h2>Begin by Choosing an Occupation</h2>

        <!-- UX Note: This might work better as a search box and results instead of autocomplete -->
        <v-autocomplete v-model="chosenOccupation" :items="entries" :loading="isLoading" :search-input.sync="search"
          hide-no-data hide-selected item-text="name" label="Occupation" placeholder="Start typing to Search"
          prepend-icon="mdi-magnify" chips clearable return-object @change="changed"></v-autocomplete>

      </v-col>
    </v-row>
    <v-row v-if="chosenOccupation !== null">
      <v-col>
        <!-- This table is ugly. Need something better -->
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <th>
              <td>{{chosenOccupation.name}}</td>
              </th>
            </thead>
            <tbody>
              <tr>
                <td>Starting Rate</td>
                <td>
                    {{ $money(chosenOccupation.hourly_rate_entry) }}/hr
                </td>
              </tr>
              <tr>
                <td>Monthly Gross Income</td>
                <td>{{ $money(chosenOccupation.monthly_gross) }}</td>
              </tr>
              <tr>
                <td>Monthly Taxes</td>
                <td>{{ $money(chosenOccupation.monthly_taxes)}}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>

      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn :disabled="chosenOccupation === null" to="/housing" color="primary">Continue...</v-btn>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'

export default {
  name: 'IndexPage',
  data(){
    return {
      chosenOccupation: null,
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
          console.log(this.chosenOccupation)
        })

    },
  },
  methods: {
    changed(occupation){
      console.log('changed',occupation)
      this.set(occupation)

      // Set the new starting amount (zero $ if null)
      this.update({
        prop: 'initial',
        value: (occupation?.monthly_gross - occupation?.monthly_taxes) || 0
      })
    }, 
    ...mapMutations({
      set: 'budget/setOccupationPref',
    }),
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
