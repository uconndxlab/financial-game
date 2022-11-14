<template>
  <v-container >
    <v-row>
      <v-col>
        <h1>Congratulations!</h1>
        <h2>Let's see how you did!</h2>
      </v-col>
    </v-row>

    <v-row class="space-between">

      <v-col>

        <figure>
            <div id="yellow" class="counter yellow-bg">
              0
            </div>
            <figcaption>
              Remaining Budget
            </figcaption>
          </figure>

          </v-col>

          <v-col>
          <figure>
            <div id="green" class="counter green-bg">
              <animated-number :value="1000" :format-value="$money" :duration="500" />
            </div>
            <figcaption>
              Remaining Savings
            </figcaption>
          </figure>

          </v-col>


          <v-col>
          <figure>
            <div id="red" class="counter red-bg">
              0
            </div>
            <figcaption>
              Interest Costs
            </figcaption>
          </figure>
      </v-col>
    </v-row>

    <h2>Spending Breakdown</h2>
    <Doughnut
      :chart-options="chartOptions"
      :chart-data="chartData"
      :chart-id="chartId"
      :dataset-id-key="datasetIdKey"
      :plugins="plugins"
      :css-classes="cssClasses"
      :styles="styles"
      :width="width"
      :height="height"
    />

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
       chartData: {
        labels: ['Transportation', 'Groceries', 'Utilities', 'Activities', 'Insurance', 'Housting', 'Other'],
        datasets: [
          {
            label: 'Dataset 1',
            data: [15, 9, 8, 7, 4, 55, 2],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
              'purple',
              'pink',
              'orange',
              'blue'
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
      plugins: [ 'legend' ]
    }
  },
  head(){
    return {
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
  methods: {
    balance(){
      this.total()
    },

    ...mapActions({
      update: 'budget/update',
      reset: 'budget/reset',
      total: 'budget/total'
    }),

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
}
</style>
