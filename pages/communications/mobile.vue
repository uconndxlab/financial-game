<template>
  <v-container>

    <v-row>
      <v-col>
        <h1>Communications > Mobile</h1>
        <div class="choice-boxes text-center">
        <p>Choose a cell phone plan:</p>
        <v-btn-toggle v-model="selection" mandatory class="d-block" color="primary" @change="selectionChanged()">
          <div v-for="option in mobileOptions" :key="option.name" class="ma-4">
            <v-btn width="100%" left>{{option.name}}</v-btn>
          </div>

        </v-btn-toggle>
        </div>

      </v-col>

    </v-row>

    <nav>

      <ul class="nav-buttons">
        
        <li></li>
        <li><v-btn v-if="mobilephone !== null && selection" to="/communications/lowcost" color="secondary">Continue...</v-btn>
            <v-btn v-if="mobilephone !== null && (!selection === true)" to="/communications/namebrand" color="secondary">Continue...</v-btn>
        </li>


      </ul>
    </nav>

  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'mobilePhone',
  data(){
    return {
      selection: null,
      dialog: false,
      mobilephone: null,
      mobileOptions: [
        { name: 'Name brand', value: false },
        { name: 'Low cost provider', value: true}
      ],
    }
  },
  methods: {
    selectionChanged(){
      this.dialog = true
    },
    ...mapActions({
      update: 'budget/update'
    })
  },
  mounted(){
    this.mobilephone = this.selection
    this.dialog = false
  }
}
</script>
