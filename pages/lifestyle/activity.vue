<template>
  <v-container>
    <h1>Lifestyle > Activity</h1>
    <p>Choose an activity:</p>
    <v-row class="mb-5">
      <v-col v-for="option in activity" :key="option.id" cols="12" sm=6 lg="4" xl="3">
        <v-card @click="selectionChanged(option)" class="ma-1 d-flex flex-column" fill-height height="100%" :color="active === option.id ? 'primary':'white'">
          <!-- <v-img height="250" :src="`${opt.image}?optation=${opt.title}`"></v-img> -->
          <v-row>
            <v-col>
              <v-card-title>{{ option.name}}</v-card-title>
            
          <v-card-text>
            <div class=subtitle-2>{{ option.description }}</div>


            <!-- <v-divider class="my-5"></v-divider>
            <template v-if="option.utilities">
              <div><strong>Utilities</strong>:</div>
              <v-chip v-for="utility in option.utilities" :key="utility" class="ma-1">
                {{utility}}
              </v-chip>
            </template> -->
          </v-card-text>
          </v-col>
          </v-row>
        </v-card>

      </v-col>


    </v-row>

    <nav>
      <ul class="nav-buttons-extended">
        <li>
        </li>
        <li>
          <v-btn :disabled="active === -1" to="/activities" color="secondary">Continue...</v-btn>
        </li>
      </ul>
    </nav>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ActivityType',
  data(){
    return {
      selection: null,
      active:-1,
      activitychoice: null,
      monthlyActivity: 0,
      activity: [{id:1,name:'Movie',description:'The smell of popcorn, the excitement of seeing something new, the movies are the place to be!', value: 23},
      {id:2,name:'Concert',description:'Whether it is jamming out at a rock concert or screaming for your favorite pop star, concerts are a great place to go with friends and make new ones.', value: 95},
      {id:3,name:'Sports Event',description:'Batter up! Watch your favorite sports stars play as you root for your team.', value: 30},
      {id:4,name:'Fitness Club Membership',description:'By yourself or with friends, the gym is a great place for personal development.', value: 58},
      {id:5,name:'Sports Participation',description:'Why just watch? Join a local sports team to keep active and have some fun.', value: 20},
      {id:6,name:'Coffee Date',description:'But first, coffee.', value: 4},
      {id:7,name:'Ice Cream Treat',description:'Hot days, cold days, rainy days, any day is great for ice cream!', value: 6},
      {id:8,name:'Breakfast Out',description:'Eggs, bacon, and toast!', value: 12},
      {id:9,name:'Lunch Out',description:'Grab a quick bite!', value: 11},
      {id:10,name:'Dinner Out',description:'Try something new or go to your favorite resturant, treat yourself!', value: 13},
      {id:11,name:'Night Out with Friends',description:'Hit the streets with your friends, catch up on old times and make new memories.', value: 80},
      {id:12,name:'Host a Party',description:'Did someone say buffalo dip? Get your hosting shoes on and send out some invites!', value: 197},
      {id:13,name:'Weekend Getaway',description:'Relax and enjoy some time away.', value: 395}]
    }
  },
  computed: {
    activityChoice() {
      return this.$store.state.budget.activity
    }
  },
  methods: {
    selectionChanged(option){
      this.active = option.id
      this.update({
        prop: 'activity',
        value: option.value
      })
    },
    ...mapActions({
      update: 'budget/update'
    })
  },
  mounted(){
    this.selection = false
  }
}

</script>
