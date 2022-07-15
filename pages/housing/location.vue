<template>
  <div>
    <h1>Housing > Location</h1>
    <p>Where would you like to live?</p>
    <v-slide-group v-model="selection" class="pa-4" center-active show-arrows @change="setLocation(selection)">
      <v-slide-item v-for="loc in locations" :key="loc.title" v-slot="{ active, toggle }" :value="loc.title">
        <v-card width="300" class="ma-4" :color="active ? 'grey lighten-2' : 'white'" @click="toggle">
          <v-img height="250" :src="`${loc.image}?location=${loc.title}`"></v-img>
          <v-card-title>{{loc.title}}</v-card-title>
          <v-card-subtitle>{{loc.priceRange}}</v-card-subtitle>
          <v-card-text>
            {{loc.description}}
          </v-card-text>
          <v-row class="fill-height" align="center" justify="center">
            <v-scale-transition>
              <v-icon v-if="active" color="white" size="48" v-text="'mdi-close-circle-outline'"></v-icon>
            </v-scale-transition>
          </v-row>
        </v-card>
      </v-slide-item>
    </v-slide-group>

    <v-btn :disabled="selection === null" to="/housing/roommate" color="primary">Continue...</v-btn>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'HousingLocation',
  data(){
    return {
      selection: null,
      locations: [
        {
          title: 'Danbury',
          image: 'https://placeimg.com/640/480/arch',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fames ac turpis egestas sed tempus urna et.',
          priceRange: '$1500 - 2500'
        },
        {
          title: 'Hartford',
          image: 'https://placeimg.com/640/480/arch',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fames ac turpis egestas sed tempus urna et.',
          priceRange: '$1500 - 2000'
        },
        {
          title: 'Meriden',
          image: 'https://placeimg.com/640/480/arch',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fames ac turpis egestas sed tempus urna et.',
          priceRange: '$1500 - 2000'
        },
        {
          title: 'New Britain/Newington',
          image: 'https://placeimg.com/640/480/arch',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fames ac turpis egestas sed tempus urna et.',
          priceRange: '$1500 - 2000'
        },
        {
          title: 'New Haven/West Haven/Hamden',
          image: 'https://placeimg.com/640/480/arch',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fames ac turpis egestas sed tempus urna et.',
          priceRange: '$1500 - 2000'
        },
        {
          title: 'Norwich/New London',
          image: 'https://placeimg.com/640/480/arch',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fames ac turpis egestas sed tempus urna et.',
          priceRange: '$1500 - 2000'
        },
        {
          title: 'Stamford/Norwalk',
          image: 'https://placeimg.com/640/480/arch',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fames ac turpis egestas sed tempus urna et.',
          priceRange: '$1500 - 2000'
        },
        {
          title: 'Waterbury/Naugatuck',
          image: 'https://placeimg.com/640/480/arch',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fames ac turpis egestas sed tempus urna et.',
          priceRange: '$1500 - 2000'
        },
        {
          title: 'Willimantic/Willington/Mansfield',
          image: 'https://placeimg.com/640/480/arch',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fames ac turpis egestas sed tempus urna et.',
          priceRange: '$1500 - 2000'
        }
      ]
    }
  },
  computed: {
    location() {
      return this.$store.state.budget.prefs.location
    }
  },
  mounted(){
    this.selection = this.location
  },

  methods: {
    ...mapMutations({
      setLocation: 'budget/setLocationPref'
    })
  }
}
</script>
