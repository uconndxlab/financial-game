<template>
  <v-container>
    <h1>Housing > Apartment</h1>
    <p><strong>What type of apartment will you choose? </strong>
    <br>

A studio or efficiency apartment is smaller with less square footage. Typically, there is an area for a bedroom, living room, and kitchen in one open space. The bathroom is a separate room with a door. Usually, the rent is more affordable. 
Other apartments have one or two bedrooms and one or two bathrooms. What will work best for your situation? 
 </p><p>
Do you want laundry facilities on site? What about parking? Do you want to have a pet? How about other amenities such as a fitness center, swimming pool, deck, or patio?</p>
    <p>Choose an apartment in {{location.city}}:</p>

    <v-row class="mb-5">
      <v-col v-for="apt in apartments" :key="apt.id" cols="12" sm=6 lg="4" xl="3">
        <v-card class="ma-1 d-flex flex-column" fill-height height="100%">
                <!-- <v-img height="250" :src="`${opt.image}?optation=${opt.title}`"></v-img> -->
                <v-row>
                  <v-col>
                    <v-card-title>{{ apt.type}}</v-card-title>
                  </v-col>
                  <v-col>
                    <v-card-title class="justify-end">{{ $money(apt.rent) }}</v-card-title>
                  </v-col>
                </v-row>
                <!--<v-card-subtitle></v-card-subtitle>-->
                <v-card-text>
                  <div class=subtitle-2>{{ apt.location.city }}</div>
                  {{ apt.features}}


                  <v-divider class="my-5"></v-divider>
                  <template v-if="apt.utilities">
                    <div><strong>Utilities</strong>:</div>
                    <v-chip v-for="utility in apt.utilities" :key="utility" class="ma-1">
                      {{utility}}
                    </v-chip>
                  </template>
                </v-card-text>
                <v-card-actions>
                  <v-btn text @click="updateSelection(apt)">
                    Select
                  </v-btn>
                </v-card-actions>
              </v-card>

            </v-col>


          </v-row>
          <!-- <v-slide-group v-model="apartmentSelection" class="pa-4" center-active show-arrows
      @change="updateSelection(apartmentSelection)">
      <v-slide-item v-for="opt in apartmentOptions['Danbury']" :key="opt.id" v-slot="{ active, toggle }" :value="opt">
        <v-card width="300" class="ma-4" :color="active ? 'grey lighten-2' : 'white'" @click="toggle">
          <v-card-title>{{opt.type}}</v-card-title>
          <v-card-subtitle>{{opt.reny}}</v-card-subtitle>
          <v-card-text>
            {{opt.features}}
          </v-card-text>
          <v-row class="fill-height" align="center" justify="center">
            <v-scale-transition>
              <v-icon v-if="active" color="white" size="48" v-text="'mdi-close-circle-outline'"></v-icon>
            </v-scale-transition>
          </v-row>
        </v-card>
      </v-slide-item>
    </v-slide-group> -->

          <nav>
            <ul class="nav-buttons-extended">
              <li>
                <v-btn to="/housing/roommate">&lt; Back</v-btn>
              </li>
              <li>
                <v-btn :disabled="apartment === null" to="/transportation" color="secondary">Continue...</v-btn>
              </li>
            </ul>
          </nav>

  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'HousingApartment',
  data() {
    return {
      apartments: [],
      apartmentSelection: null,
    }
  },
  computed: {
    apartment() {
      return this.$store.state.budget.apartment
    },
    roommate(){
      return this.$store.state.budget.roommate
    }, 
    location() {
      return this.$store.state.budget.location
    }
  },
  async mounted() {
    let result
    try {
      // result = await $supabase.from('apartments').select('*, location(city)').order('rent')
      result = await this.$supabase.from('apartments').select('*, location(city)').eq('location', this.$store.state.budget.location.id).order('rent')
    } catch (error) {
      console.log(error)
    }
    console.log(result)
    this.apartments = result.data
    // return {
    //   apartments: result.data,
    // }
    this.apartmentSelection = this.apartment
  },
  methods: {
    updateSelection(option){
      this.update({
        prop: 'apartment',
        value: option
      })
    },
    ...mapActions({
      update: 'budget/update'
    })
  }
}
</script>
