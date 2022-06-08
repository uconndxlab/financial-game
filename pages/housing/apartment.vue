<template>
  <div>
    <h1>Housing > Apartment</h1>
    <p>Choose an apartment: (Hardcoded to Danbury for now)</p>
    <div v-for="option in apartmentOptions['Danbury']" :key="option.id">
      <label><input type="radio" name="apartment" :checked="apartment !== null && apartment.id == option.id" @change="updateSelection(option)"> {{option.type}} (${{option.rent}})</label>
    </div>
    <nav>
      <ul>
        <li><NuxtLink to="/housing/roommate" >&lt; Back</NuxtLink></li>
        <li><NuxtLink v-if="apartment !== null" to="/housing/utilities" >Continue...</NuxtLink></li>
      </ul>
    </nav>

  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'

export default {
  name: 'HousingApartment',
  data(){
    return {
      apartmentOptions: {
        'Danbury':[
          {
            id: 1,
            type: 'Studio 1 Bath',
            sqft: 530,
            location: 'Danbury (Near Metro North Train Station)',
            features: 'Dogs/ Cats Allowed, Max Weight: 25 pounds, Dog Fee $249, Dog rent: $40, Cat Fee $149, Cat Rent $25, Air Conditioning, Laundry Facility, Fitness Center, Cable Ready, Walking Distance to Downtown Dining and Entertainment, Assigned Parking',
            rent: 1210,
            appFee: 50,
            utilities: null
          },
          {
            id: 2,
            type: '1 Bed 1 Bath',
            sqft: 737,
            location: 'Danbury',
            features: 'Dogs/Cats Allowed, Air Conditioning, Oversized Closets, Balcony, Deck, Patio, Pet Park, Clubhouse, Cable Ready, Extra Storage, Laundry Facility, Swimming Pool, Disability Access, Public Transportation',
            rent: 1695,
            utilities: null
          },
          {
            id: 3,
            type: '2 Beds, 2 Baths',
            sqft: 1165,
            location: 'Danbury (Near Route 84)',
            features: 'Dogs/Cats Allowed, Air Conditioning, Oversized Closets, Washer and Dryer in Unit, High-Speed Internet Access, Clubhouse, Cable Ready, Extra Storage, Laundry Facility, Playground, Fitness Center, Pool, Surface Lot Parking',
            rent: 1852,
            utilities: null
          },
          {
            id: 4,
            type: 'Studio 1 Bath',
            sqft: 560,
            location: 'Danbury',
            features: 'Dogs Allowed, Max Weight: 25 Pounds, Dog Fee $249, Dog rent $40, Cat Fee $149, Cat Rent $25 Air Conditioning, Washer & Dryer in Unit, Cable Ready, Assigned Parking, Fitness Center, Trail',
            rent: 1275,
            appFee: 75,
            utilities: null
          },
          {
            id: 5,
            type: 'Studio 1 Bath',
            sqft: 530,
            location: 'Danbury (Near Metro North Train Station)',
            features: 'Dogs/ Cats Allowed, Max Weight: 25 pounds, Dog Fee $249, Dog rent: $40, Cat Fee $149, Cat Rent $25, Air Conditioning, Laundry Facility, Fitness Center, Cable Ready, Walking Distance to Downtown Dining and Entertainment, Assigned Parking',
            rent: 1210,
            utilities: null
          },
        ],
        'Hartford': [
          {
            id: 1,
            type: 'Studio 1 Bath',
            sqft: 530,
            location: 'Hartford',
            features: 'Dogs/ Cats Allowed, Max Weight: 25 pounds, Dog Fee $249, Dog rent: $40, Cat Fee $149, Cat Rent $25, Air Conditioning, Laundry Facility, Fitness Center, Cable Ready, Walking Distance to Downtown Dining and Entertainment, Assigned Parking',
            rent: 1210,
            appFee: 75,
            utilities: null
          },
          {
            id: 2,
            type: '1 Bed 1 Bath',
            sqft: 737,
            location: 'Hartford',
            features: 'Dogs/Cats Allowed, Air Conditioning, Oversized Closets, Balcony, Deck, Patio, Pet Park, Clubhouse, Cable Ready, Extra Storage, Laundry Facility, Swimming Pool, Disability Access, Public Transportation',
            rent: 1695,
            utilities: null
          },
          {
            id: 3,
            type: '2 Beds, 2 Baths',
            sqft: 1165,
            location: 'Hartford (Near Route 84)',
            features: 'Dogs/Cats Allowed, Air Conditioning, Oversized Closets, Washer and Dryer in Unit, High-Speed Internet Access, Clubhouse, Cable Ready, Extra Storage, Laundry Facility, Playground, Fitness Center, Pool, Surface Lot Parking',
            rent: 1852,
            utilities: null
          },
          {
            id: 4,
            type: 'Studio 1 Bath',
            sqft: 560,
            location: 'East Hartford',
            features: 'Dogs Allowed, Max Weight: 25 Pounds, Dog Fee $249, Dog rent $40, Cat Fee $149, Cat Rent $25 Air Conditioning, Washer & Dryer in Unit, Cable Ready, Assigned Parking, Fitness Center, Trail',
            rent: 1275,
            utilities: null
          },
          {
            id: 5,
            type: 'Studio 1 Bath',
            sqft: 530,
            location: 'Hartford',
            features: 'Dogs/ Cats Allowed, Max Weight: 25 pounds, Dog Fee $249, Dog rent: $40, Cat Fee $149, Cat Rent $25, Air Conditioning, Laundry Facility, Fitness Center, Cable Ready, Walking Distance to Downtown Dining and Entertainment, Assigned Parking',
            rent: 1210,
            utilities: null
          },
        ]
      },
    }
  },
  computed: {
    apartment() {
      return this.$store.state.budget.prefs.apartment
    },
    roommate(){
      return this.$store.state.budget.prefs.roommate
    }
  },
  methods: {
    updateSelection(option){
      this.setApartment(option)
      this.updateBudget({
        prop: 'apartment',
        value: this.apartment.rent
      })
    },
    ...mapMutations({
      setApartment: 'budget/setApartment'
    }),
    ...mapActions({
      updateBudget: 'budget/update'
    })
  }
}
</script>
