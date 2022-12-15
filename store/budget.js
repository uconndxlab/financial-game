// Initial State
function initialState(){
  return {
    location: null,
    roommate: null,
    apartment: null,
    utilities: 0,
    transport: null,
    vehicle: null,
    health: 0,
    life: 0,
    auto: 0,
    renters: 0,
    landline: null,
    dataplan: null,
    tv: null,
    internet: 0,
    diet: null,
    food: null,
    consignment: null,
    clothing: null,
    activity: null,
    pet: null,
    streaming: null,
    gaming: null,
    reading: null,
    haircut: null,
    nails: null,
    chance: null,
    loan: null
  }
}

export const state = () => initialState()

export const mutations = {
  reset(state){

    // Reset other values to initial state
    const s = initialState()
    Object.keys(s).forEach(key => {
        state[key] = s[key]
    })
  },
  // Property mutations
  property(state, {prop, value}){
    state[prop] = value
  },
}

export const actions = {
  update({ commit, state, getters, dispatch }, payload) {
    commit('property', payload)
  },

  /**
   * Calculates Remaining Budget and Updates State
   *
   * @param {*} {state, commit}
   */
  total( {state, commit} ){
    let balance = 0

      // Salary
    if(state?.occupation){
      balance = state.occupation.monthly_gross - state.occupation.monthly_taxes;
    }
    // Apartment
    if(state?.apartment){
      // Calculate rent
      const rent = state.roommate === true ? state.apartment.rent / 2 : state.apartment.rent;
      balance = balance - rent
    }

    // Utilities
    if(state?.utilities){
      balance = balance - state.utilities
    }

    // Transportation
    if(state?.transport){
      balance = balance - state.transport
    }    

    // Vehicle
    // if(state?.vehicle){
      // balance = balance - state.vehicle
    // }    

    // Health Insurance
    if(state?.health){
      balance = balance - state.health
    }

    // Auto Insurance
    if(state?.auto){
      balance = balance - state.auto
    }

    // Renters Insurance
    if(state?.renters){
      balance = balance - state.renters
    }

    // Life Insurance
    if(state?.life){
      balance = balance - state.life
    }

    // Landline
    if(state?.landline){
      balance = balance - state.landline
    }

    // Data plan
    if(state?.dataplan){
      balance = balance - state.dataplan
    }

    // TV
    if(state?.tv){
      balance = balance - state.tv
    }

    // Internet
    if(state?.internet){
      balance = balance - state.internet
    }

    // Food
    if(state?.food){
      // Calculate food
      if (state.diet === 0 && state.food === 0){
        const food = 206
        balance = balance - food
      }
      if (state.diet === 0 && state.food === 1){
        const food = 262
        balance = balance - food
      }
      if (state.diet === 0 && state.food === 2){
        const food = 319
        balance = balance - food
      }
      if (state.diet === 0 && state.food === 3){
        const food = 410
        balance = balance - food
      }
      if (state.diet === 1 && state.food === 0){
        const food = 237
        balance = balance - food
      }
      if (state.diet === 1 && state.food === 1){
        const food = 301
        balance = balance - food
      }
      if (state.diet === 1 && state.food === 2){
        const food = 367
        balance = balance - food
      }
      if (state.diet === 1 && state.food === 3){
        const food = 472
        balance = balance - food
      }
      if (state.diet === 2 && state.food === 0){
        const food = 377
        balance = balance - food
      }
      if (state.diet === 2 && state.food === 1){
        const food = 479
        balance = balance - food
      }
      if (state.diet === 2 && state.food === 2){
        const food = 584
        balance = balance - food
      }
      if (state.diet === 2 && state.food === 3){
        const food = 750
        balance = balance - food
      }
    }

    // Clothing
    if(state?.clothing){
      balance = balance - state.clothing
      // if (state.clothing === 2){
      //   state.consignment = true
      // }
      // else{
      //   state.consignment = false
      // }

      // if (state.occupation.monthly_gross > 5800){
      //   state.clothing = 250;
      // }
      // else if (state.occupation.monthly_gross > 4000){
      //   state.clothing = 200;
      // }
      // else if (state.occupation.monthly_gross > 3500){
      //   state.clothing = 160;
      // }
      // else if (state.occupation.monthly_gross > 2500){
      //   state.clothing = 140;
      // }
      // else if (state.occupation.monthly_gross > 1700){
      //   state.clothing = 100;
      // }
      // else if (state.occupation.monthly_gross > 1200){
      //   state.clothing = 70;
      // }
      // else{
      //   state.clothing = 50;
      // }

      // balance = state.consignment === true? (balance - (state.clothing * .33)) : (balance - state.clothing)
    }

     // Activity
     if(state?.activity){
      balance = balance - state.activity
    }

     // Pet
     if(state?.pet){
      balance = balance - state.pet
    }

     // Streaming
     if(state?.streaming){
      balance = balance - state.streaming
    }

    // Gaming
    if(state?.gaming){
      balance = balance - state.gaming
    }

    // Reading
    if(state?.reading){
      balance = balance - state.reading
    }

    // Haircut
    if(state?.haircut){
      balance = balance - state.haircut
    }

    // Nails
    if(state?.nails){
      balance = balance - state.nails
    }

    
    // Chance
    if(state?.chance){
      balance = balance + state.chance
    }

    // commit('property', {prop: 'balance', value: state.initial - runningTotal })
    return balance
  },

  /**
   * Resets to the initial state
   * @param {*} {state, commit}
   */
  reset( {state, dispatch, commit} ){
    commit('reset')
    dispatch('total')
  }
}

