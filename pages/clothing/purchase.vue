<template>
  <v-container>
    <h1>Clothing > Purchase</h1>
    <p>Now that you are working fulltime in your chosen occupation, what kinds of clothing will you be wearing for work? Some occupations may require specific clothing. Several  health care occupations require uniforms and specific types of shoes. People in fields of finance, law, and administrators often dress more conservatively. Is the clothing you currently have appropriate for you to wear at your new workplace?
</p>
    <div class="choice-boxes text-center">
    <p>Choose how to purchase clothing:</p>
    <v-btn-toggle v-model="selection" mandatory class="d-block" color="primary" @change="selectionChanged()">
      <div v-for="option in clothingOptions" :key="option.name" class="ma-4">
        <v-btn width="100%" left>{{option.name}}</v-btn>
      </div>

    </v-btn-toggle>
    </div>
    <nav>
      <ul class="nav-buttons">
        <li>
        </li>
        <li>
        <v-btn to="/lifestyle" color="secondary">Continue...</v-btn>
        </li>
      </ul>
    </nav>
<v-dialog v-model="dialog" transition="dialog-top-transition" max-width="600">
          <v-card>
            <v-card-title color="primary" dark>What does this mean?</v-card-title>
            <v-card-text>
              <!-- If user chose good quality -->
              <p v-if="clothing===0">
 This clothing tends to be a bit more expensive and is better made to last longer
              </p>

              <!-- If user chose less expensive -->
              <p v-if="clothing===1">
                  This clothing tends to be a bit less expensive, is currently in fashion, is made quickly,     
     and generally may not be as durable and less sustainable.
              </p>

               <!-- If user chose consignment -->
              <p v-if="clothing===2">
                 These stores sell clothing that has been worn previously. Sometimes, you 
     may also find clothing that has not been worn previously with the original tags 
     attached. 

     It is much less expensive, eco-friendly, and sustainable. The choices are more limited 
      and unique.
              </p>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn text @click="dialog = false">Okay</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ClothingOption',
  data(){
    return {
      selection: null,
      dialog: false,
      clothing: 0,
      monthlyClothing: 0,
      clothingOptions: [
        { name: 'Good quality, durable, classic styles', value: 50},
        { name: 'Less expensive, trendy, latest styles', value: 35},
        { name: 'Consignment, clothing resale, or thrift stores', value:20}
      ],
    }
  },
  computed: {
    clothingtype() {
      return this.$store.state.budget.clothing
    }
  },
  methods: {
    selectionChanged(){
      this.monthlyClothing = this.clothingOptions[this.selection].value
      this.update({
        prop: 'clothing',
        value: this.monthlyClothing
      })
      this.dialog = true
    },
    ...mapActions({
      update: 'budget/update'
    })
  },
  mounted(){
    this.dialog = false
  }
}





</script>
