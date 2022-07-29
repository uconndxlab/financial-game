<template>
  <v-container>
    <h1>Transportation > Transportation Type</h1>
    <p>Choose a vehicle:</p>
    <v-slide-group v-model="selection" class="pa-4" center-active show-arrows>
      <v-slide-item v-for="vehicle in vehicles" :key="vehicle.title" v-slot="{ active, toggle }" :value="vehicle.title">
        <v-card width="300" class="ma-4" :color="active ? 'primary' : 'white'" @click="toggle">
          <v-img height="250" :src="`${vehicle.image}?vehicle=${vehicle.title}`"></v-img>
          <v-card-title>{{vehicle.title}}</v-card-title>
          <v-card-subtitle>{{vehicle.priceRange}}</v-card-subtitle>
          <v-card-text>
            {{vehicle.description}}
          </v-card-text>
          <v-row class="fill-height" align="center" justify="center">
            <v-scale-transition>
              <v-icon v-if="active" color="white" size="48" v-text="'mdi-close-circle-outline'"></v-icon>
            </v-scale-transition>
          </v-row>
        </v-card>
      </v-slide-item>
    </v-slide-group>
    <v-row>
      <v-col>
        <v-btn to="/transportation/transportationtype">&lt; Back</v-btn>
          <v-btn :disabled="selection === null" to="/transportation/downpayment" color="secondary">Continue...</v-btn>
  </v-col>
  </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'VehicleType',
  data(){
    return {
      selection: null,
      vehicles: [
        {
          title: 'NEW Honda Civic',
          image: 'https://images.hgmsites.net/hug/2022-honda-civic-sdn_100810827_h.jpg',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fames ac turpis egestas sed tempus urna et.',
          priceRange: '$1500 - 2500'
        },
        {
          title: 'NEW Kia Sportage',
          image: 'https://cdn.jdpower.com/JDP_2023%20Kia%20Sportage%20X-Pro%20Prestige%20Front%20Quarter%20View.JPG',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fames ac turpis egestas sed tempus urna et.',
          priceRange: '$1500 - 2000'
        },
        {
          title: 'NEW Jeep Wrangler Sport',
          image: 'https://media.ed.edmunds-media.com/jeep/wrangler/2020/oem/2020_jeep_wrangler_convertible-suv_willys_fq_oem_1_600.jpg',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fames ac turpis egestas sed tempus urna et.',
          priceRange: '$1500 - 2000'
        },
        {
          title: 'USED BMW 335i',
          image: 'https://www.tuningblog.eu/wp-content/uploads/2022/04/BMW-335i-E92-Singelturbo-Tuning-2.jpg',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fames ac turpis egestas sed tempus urna et.',
          priceRange: '$1500 - 2000'
        },
        {
          title: 'USED Ford Mustang',
          image: 'https://s1.cdn.autoevolution.com/images/news/gallery/here-are-the-reasons-why-the-mustang-outsold-the-camaro-two-to-one-last-year_6.jpg',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fames ac turpis egestas sed tempus urna et.',
          priceRange: '$1500 - 2000'
        },
        {
          title: 'USED Ford Focus SE',
          image: 'https://media.ed.edmunds-media.com/ford/focus/2013/oem/2013_ford_focus_sedan_titanium_fq_oem_1_1600.jpg',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fames ac turpis egestas sed tempus urna et.',
          priceRange: '$1500 - 2000'
        }
      ]
    }
  }
}
</script>
