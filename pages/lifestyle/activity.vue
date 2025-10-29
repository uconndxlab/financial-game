<template>
  <v-container>
    <h1>Lifestyle > Activity</h1>
    <p>Choose an activity:</p>
    <v-row class="mb-5">
      <v-col v-for="option in activity" :key="option.id" cols="12" sm=6 lg="4" xl="3">
        <v-card class="ma-1 d-flex flex-column" fill-height height="100%" :color="isActive(option) ? 'primary':'white'" @click="selectionChanged(option)">
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
          <v-btn :disabled="active.length === 0" to="/activities" color="secondary">Continue...</v-btn>
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
      active:[],
      activitychoice: null,
      totalCost:0,
      duplicate:null,
      monthlyActivity: 0,
      activity: [{id:0,name:'Movie',description:'The smell of popcorn, the excitement of seeing something new, the movies are the place to be!', value: 23},
      {id:1,name:'Concert',description:'Whether it is jamming out at a rock concert or screaming for your favorite pop star, concerts are a great place to go with friends and make new ones.', value: 95},
      {id:2,name:'Sports Event',description:'Batter up! Watch your favorite sports stars play as you root for your team.', value: 30},
      {id:3,name:'Fitness Club Membership',description:'By yourself or with friends, the gym is a great place for personal development.', value: 58},
      {id:4,name:'Sports Participation',description:'Why just watch? Join a local sports team to keep active and have some fun.', value: 20},
      {id:5,name:'Coffee Date',description:'But first, coffee.', value: 4},
      {id:6,name:'Ice Cream Treat',description:'Hot days, cold days, rainy days, any day is great for ice cream!', value: 6},
      {id:7,name:'Breakfast Out',description:'Eggs, bacon, and toast!', value: 12},
      {id:8,name:'Lunch Out',description:'Grab a quick bite!', value: 11},
      {id:9,name:'Dinner Out',description:'Try something new or go to your favorite restaurant, treat yourself!', value: 13},
      {id:10,name:'Night Out with Friends',description:'Hit the streets with your friends, catch up on old times and make new memories.', value: 80},
      {id:11,name:'Host a Party',description:'Did someone say buffalo dip? Get your hosting shoes on and send out some invites!', value: 197},
      {id:12,name:'Weekend Getaway',description:'Relax and enjoy some time away.', value: 395}]
    }
  },
  head: {
    title: 'Lifestyle: Activity',
  },
  computed: {
    activityChoice() {
      return this.$store.state.budget.activity
    }
  },
  mounted(){
    this.selection = false
  },
  methods: {
    isActive(option){
      for (let i=0;i<this.active.length;i++){
        if (this.active[i] === option.id){
          this.duplicate = i
          return true
        }
      }
    },
    selectionChanged(option){
      if (this.isActive(option)){
        this.active.splice(this.duplicate,1)
        this.totalCost -= option.value
      }
      else{
        this.active.push(option.id)
        this.totalCost += option.value
      }

      // console.log(this.totalCost)
      this.update({
        prop: 'activity',
        value: this.totalCost
      })
     
    },
    ...mapActions({
      update: 'budget/update'
    })
  },
}

</script>
