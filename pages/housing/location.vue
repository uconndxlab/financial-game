<template>
  <div>
    <h1>Housing > Location</h1>
    <p>Where would you like to live?</p>
    <div v-for="loc in locations" :key="loc">
      <label><input type="radio" name="location" :checked="location == loc" @change="setLocation(loc)"> {{loc}}</label>
    </div>
    <NuxtLink v-if="location !== null" to="/housing/roommate" >Continue...</NuxtLink>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'HousingLocation',
  data(){
    return {
      locations: [
        'Danbury',
        'Hartford',
        'Meriden',
        'New Britain/Newington',
        'New Haven/West Haven/Hamden',
        'Norwich/New London',
        'Stamford/Norwalk',
        'Waterbury/Naugatuck',
        'Willimantic/Willington/Mansfield'
      ]
    }
  },
  computed: {
    location() {
      return this.$store.state.prefs.location
    }
  },
  methods: {
    ...mapMutations({
      setLocation: 'prefs/setLocation'
    })
  }
}
</script>
