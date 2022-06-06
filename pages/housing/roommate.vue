<template>
  <div>
    <h1>Housing > Roommate</h1>
    <p>Do you want a roommate?</p>
    <div v-for="option in roommateOptions" :key="option.name">
      <label><input type="radio" name="roommate" :checked="roommate == option.value" @change="setRoommate(option.value)"> {{option.name}}</label>
    </div>
    <nav>
      <ul>
        <li><NuxtLink to="/housing/location" >&lt; Back</NuxtLink></li>
        <li><NuxtLink v-if="roommate !== null" to="/housing/apartment" >Continue...</NuxtLink></li>
      </ul>
    </nav>

  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'HousingRoommate',
  data(){
    return {
      roommateOptions: [
        { name: 'Live Alone', value: false },
        { name: 'Live with a roommate', value: true}
      ],
    }
  },
  computed: {
    roommate() {
      return this.$store.state.prefs.roommate
    }
  },
  methods: {
    ...mapMutations({
      setRoommate: 'prefs/setRoommate'
    })
  }
}
</script>
