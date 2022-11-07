<template>
  <v-container>
    <h1>Transportation > Transportation Type</h1>
    <p>Choose a vehicle:</p>
    <v-row class="mb-5">
      <v-col v-for="option in vehicles" :key="option.id" cols="12" sm=6 lg="4" xl="3">
        <v-card @click="updateSelection(option)" class="ma-1 d-flex flex-column" fill-height height="100%" :color="active === option.id ? 'primary':'white'">
          <!-- <v-img height="250" :src="`${opt.image}?optation=${opt.title}`"></v-img> -->
          <v-row>
            <v-col>
              <v-card-title>{{ option.make}} {{ option.model }}</v-card-title>
            </v-col>
            <v-col>
              <v-card-title class="justify-end">{{ $money(option.price) }}</v-card-title>
            </v-col>
          </v-row>
          <v-card-text>
            <div class=subtitle-2>{{ option.year }}</div>
            <p><strong>MPG Highway</strong>: {{ option.mpg_highway }}</p>
            <p><strong>MPG City</strong>: {{ option.mpg_city}}</p>


            <!-- <v-divider class="my-5"></v-divider>
            <template v-if="option.utilities">
              <div><strong>Utilities</strong>:</div>
              <v-chip v-for="utility in option.utilities" :key="utility" class="ma-1">
                {{utility}}
              </v-chip>
            </template> -->
          </v-card-text>
        </v-card>

      </v-col>


    </v-row>

    <nav>
      <ul class="nav-buttons-extended">
        <li>
          <v-btn to="/transportation/transportationtype">&lt; Back</v-btn>
        </li>
        <li>
          <v-btn :disabled="selection === null" to="/transportation/downpayment" color="secondary">Continue...</v-btn>
        </li>
      </ul>
    </nav>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'VehicleType',
  data(){
    return {
      active:-1,
      selection: null,
      vehicles: []
    }
  },
  computed:{
    vehicle() {
      return this.$store.state.budget.transport
    },
  },
  methods: {
    updateSelection(option) {
      this.active = option.id
      this.selection = this.vehicle
      this.update({
        prop: 'transport',
        value: 0
      })
    },
    ...mapActions({
      update: 'budget/update'
    })
  },
  async mounted() {
    let result
    try {
      result = await this.$supabase.from('vehicles').select('*').order('price')
    } catch (error) {
      console.log(error)
    }
    this.vehicles = result.data
  },
}
</script>
