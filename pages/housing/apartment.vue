<template>
  <v-container>
    <h1>Housing > Apartment</h1>
    <p>Choose an apartment: (Hardcoded to Danbury for now)</p>

    <v-row>
      <v-col v-for="opt in apartmentOptions['Danbury']" :key="opt.id" cols="12" sm=6 lg="4" xl="3">
        <v-card class="ma-1">
          <!-- <v-img height="250" :src="`${opt.image}?optation=${opt.title}`"></v-img> -->
          <v-card-title>{{opt.type}}, ${{opt.rent}}</v-card-title>
          <v-card-subtitle>{{opt.reny}}</v-card-subtitle>
          <v-card-text>
            {{opt.features}}
          </v-card-text>
          <v-card-actions>
            <v-btn text @click="updateSelection(opt)">
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

    <v-row>
      <v-col>
        <v-btn to="/housing/roommate">&lt; Back</v-btn>
        <v-btn :disabled="apartment === null" to="/housing/utilities" color="secondary">Continue...</v-btn>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'HousingApartment',
  data(){
    return {
      apartmentSelection: null,
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
      return this.$store.state.budget.apartment
    },
    roommate(){
      return this.$store.state.budget.roommate
    }
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
  },
  mounted() {
    this.apartmentSelection = this.apartment
  },
}
</script>
