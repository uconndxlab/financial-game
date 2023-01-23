<template>
  <v-container >
    <v-row class="mb-5">
      <v-col>
        <h1 class="text-center">Congratulations!</h1>
        <h2 class="text-center">Let's see how you did!</h2>
      </v-col>
    </v-row>

    <v-row class="space-between mb-5">
      <v-col>
        <figure>
            <div id="yellow" class="counter yellow-bg">
              <animated-number :value="balance" :format-value="$money" :duration="500" />
            </div>
            <figcaption>
              Remaining Budget
            </figcaption>
          </figure>

          </v-col>

          <!-- @todo Implement savings feature and reporting -->
          <v-col v-if="false">
          <figure>
            <div id="green" class="counter green-bg">
              <animated-number :value="2589" :format-value="$money" :duration="500" />
            </div>
            <figcaption>
              Remaining Savings
            </figcaption>
          </figure>

          </v-col>


          <v-col v-if="$store.state.budget.loan">
          <figure>
            <div id="red" class="counter red-bg">
              <animated-number :value="$store.state.budget.loan.interestSum" :format-value="$money" :duration="500" />

            </div> 
            <figcaption>
              Interest Costs
            </figcaption>
          </figure>
      </v-col>
    </v-row>

    <h2 class="text-center py-6 mt-6 ">Monthly Spending Breakdown</h2>
    <v-row class="center mb-5">

      <v-col>
        <Doughnut
:chart-options="chartOptions" :chart-data="chartData"
          :width="600"

        />
      </v-col>
    </v-row>


    <div class="d-flex justify-center mt-6 mb-6" style="gap:50px">

        <v-btn to="/">Play Again!<v-icon right>mdi-refresh</v-icon></v-btn>

        <!-- @todo implement sharing (saving and restoring state) -->
        <v-btn  @click="share()">Share w/ Friends!<v-icon right>mdi-share</v-icon></v-btn>

    </div>

    <div class="d-flex justify-center" style="gap:50px">

        <a href="https://s.uconn.edu/breadwinner-feedback" class="feedback-link">Please help us improve the game!</a>

      </div>


    </v-container>
</template>

<script>
import { mapActions } from 'vuex'
import AnimatedNumber from "animated-number-vue";

import { Doughnut } from 'vue-chartjs/legacy'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

ChartJS.defaults.plugins.legend.labels.color = '#999'


export default {
  
  name: 'ResultsPage',
    components: {
    AnimatedNumber,
    Doughnut
  },
  async asyncData({$supabase}) {
    // let result
    // try {
    //   result = await $supabase.from('occupations').select('*')
    // } catch (error) {
    //   console.log(error)
    // }
    // console.log(result)
    // return {
    //   occupations: result.data,
    // }
  },
  data(){
    return {
      balance: 0,
      chartData: {
        labels: [
          'Housing', 
          'Transportation', 
          'Insurance', 
          'Utilities',
          'Communications',
          'Food',
          'Clothing',
          'Lifestyle', 
          'Activities'
        ],
        datasets: [
          {
            label: 'Dataset 1',
            data: [],
            backgroundColor: [
              "#d8652b",
              "#d8872b",
              "#d8aa2b",
              "#d8cd2b",
              "#b6cbef",
              "#4582a5",
              "#d2d82b",
              "#7bd82b",
              "#1d51a5"
            ]
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'left'
          }
        }

      },
      plugins: [ 'legend' ],
      shareData: {
        title: 'Breadwinner',
        text: 'Are you ready to try out life as a young adult entering the Connecticut workforce fulltime? During this game, you\'ll have a chance to make financial decisions you are likely to face.',
        url: 'https://financial-game.netlify.app/'
      }
    }
  },
  head(){
    return {
      title: 'Results'
      // script: [
      //   {
      //     src: 'https://cdnjs.cloudflare.com/ajax/libs/countup.js/2.3.2/countUp.umd.js',
      //     integrity: 'sha512-sREwigVzUWFnDCo5Hh/fJcH6djoXRzygIKeuC5bPB9T3KUNrt0O7+F8RRuMUj7VIIhnZTIBoAe5cNz9PCoIFxQ==',
      //     crossorigin: 'anonymous',
      //     referrerpolicy: 'no-referrer'
      //   }
      // ]
    }
  },
  async mounted() {
    this.balance = await this.$store.dispatch('budget/total')
    this.chartData.datasets[0].data.push(
      await this.housing(), 
      await this.transportation(), 
      await this.insurance(), 
      await this.utilities(), 
      await this.communications(), 
      await this.food(), 
      await this.clothing(), 
      await this.lifestyle(), 
      await this.activities()
    )
  },
  methods: {


    ...mapActions({
      update: 'budget/update',
      reset: 'budget/reset',
      total: 'budget/total',
      housing: 'budget/housing',
      transportation: 'budget/transportation',
      insurance: 'budget/insurance',
      utilities: 'budget/utilities',
      communications: 'budget/communications',
      food: 'budget/food',
      clothing: 'budget/clothing',
      lifestyle: 'budget/lifestyle',
      activities: 'budget/activities',
      other: 'budget/other'
    }),

    async share() {
      try {
        await navigator.share(this.shareData);
      } catch (err) {
        console.error(`Error: ${err}`);
      }
    }

  }

}
</script>
<style>
:root{
  --circle-size: 150px;
  --yellow: #d5bc6b;
  --green: #6bd56f;
  --red: #d56b6b;
}

figure {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}


.counter {
  width: var(--circle-size);
  line-height: var(--circle-size) !important;
  background-color: gray;
  color: var(--color-bg);
  text-align: center;
  border-radius: 100%;
  font-weight: bold;
  font-size: 40px;
}

.yellow-bg {
  background-color: var(--yellow)
}
.green-bg {
  background-color: var(--green)
}
.red-bg {
  background-color: var(--red)
}

canvas {
max-height: 500px;
max-width: 800px;
margin: 0 auto;
}

.feedback-link {
  text-decoration: none;
}
.feedback-link:hover {
  color: white;
  text-decoration: underline;
}
</style>
