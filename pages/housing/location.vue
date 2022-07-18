<template>
  <div>
    <h1>Housing > Location</h1>
    <p>Where would you like to live?</p>
    <!-- <v-slide-group v-model="selection" class="pa-4" center-active show-arrows @change="setLocation(selection)">
      <v-slide-item v-for="loc in locations" :key="loc.id" v-slot="{ active, toggle }" :value="loc">
        <v-card width="300" class="ma-4" :color="active ? 'grey lighten-2' : 'white'" @click="toggle">
          <v-img height="250" :src="`${loc.image}?location=${loc.title}`"></v-img>
          <v-card-title>{{loc.city}}</v-card-title>
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
    </v-slide-group> -->

    <l-map 
      class="mb-5"
      style="height: 600px" 
      :zoom="9" 
      :center="centerOfConnecticut"
      :attribution="attribution">
      <l-tile-layer :url="tileUrl" :attribution="attribution"></l-tile-layer>
      <l-marker v-for="loc in locations" :key="loc.id" :lat-lng="[loc.latitude, loc.longitude]" @click="setLocation(loc)">
        <l-popup>
          <v-btn color=primary>Choose {{loc.city}}</v-btn>
        </l-popup>
      </l-marker>
    </l-map>


    <v-btn :disabled="location == null" to="/housing/roommate" color="secondary">Continue...</v-btn>
  </div>
</template>

<script>
import 'leaflet/dist/leaflet.css';
import { mapActions } from 'vuex'
export default {
  name: 'HousingLocation', 
  components: {
  },
  async asyncData({ $supabase }) {
    let result
    try {
      result = await $supabase.from('locations').select('*').not('latitude', 'is', null)
    } catch (error) {
      console.log(error)
    }
    console.log(result)
    return {
      locations: result.data,
    }
  },
  data(){
    return {
      // Approx Lat/Long to center the CT map
      centerOfConnecticut: [41.628041, -72.630817],
      tileUrl:'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:'&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      locations: []
    }
  },
  computed: {
    location() {
      return this.$store.state.budget.location
    }
  },
  mounted(){
    this.selection = this.location
  },

  methods: {
    ...mapActions({
      update: 'budget/update'
    }),
    setLocation(location){
      this.update({
        prop: 'location',
        value: location
      })
    }
  }
}
</script>
