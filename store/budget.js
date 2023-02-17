// Initial State
function initialState(){
  return {
    location: null,
    roommate: null,
    apartment: null,
    utilities: 0,
    hasutilities: null,
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
    diet: 0,
    food: 0,
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

  housing({ state, commit }) {
    if (state?.apartment) {
      // Calculate rent
      const rent = state.roommate === true ? state.apartment.rent / 2 : state.apartment.rent;
      return rent
    } else {
      return 0
    }
  },
  transportation({ state, commit }) {

    let transportation = 0

    // Auto Insurance
    if (state?.auto) {
      transportation += state.auto
    }    
    // Transport
    if (state?.transport) {
      transportation += state.transport
    }
    console.log('Transportation Total', transportation)
    return transportation 
  },

  insurance({ state, commit }) {
    let insurance = 0
    
    // Health Insurance
    insurance += (state.health | 0)

    // Renters Insurance
    insurance += (state.renters | 0)

    // Life Insurance
    insurance += (state.life | 0)

    console.log('Insurance', insurance)

    return insurance

  },
  utilities({ state, commit }) {
    return state.utilities | 0
  }, 
  communications({ state, commit }) {

    let communications = 0

    // Landline
    communications += (state.landline | 0)

    // Data plan
    communications += (state.dataplan | 0)

    // TV
    communications += (state.tv | 0)

    // Internet
    communications += (state.internet | 0)

    console.log('Communications', communications)

    return communications
  },
  food({ state, commit }) {
    let groceries = 0

    // Calculate food
    if (state.diet === 0 && state.food === 0) {
      groceries = 206
    }
    if (state.diet === 0 && state.food === 1) {
      groceries = 262
    }
    if (state.diet === 0 && state.food === 2) {
      groceries = 319
    }
    if (state.diet === 0 && state.food === 3) {
      groceries = 410
    }
    if (state.diet === 1 && state.food === 0) {
      groceries = 237
    }
    if (state.diet === 1 && state.food === 1) {
      groceries = 301
    }
    if (state.diet === 1 && state.food === 2) {
      groceries = 367
    }
    if (state.diet === 1 && state.food === 3) {
      groceries = 472
    }
    if (state.diet === 2 && state.food === 0) {
      groceries = 377
    }
    if (state.diet === 2 && state.food === 1) {
      groceries = 479
    }
    if (state.diet === 2 && state.food === 2) {
      groceries = 584
    }
    if (state.diet === 2 && state.food === 3) {
      groceries = 750
    }

    console.log('Food', groceries)
    return groceries
  },
  clothing({ state, commit }) {
    return (state.clothing | 0)
  },

  lifestyle({ state, commit }) {
    return state.activity | 0
  },

  activities({ state, commit }) {
    let activities = 0
    
    // Pet
    activities +=  (state.pet | 0)

    // Streaming
    activities += (state.streaming | 0)

    // Gaming
    activities += (state.gaming | 0)

    // Reading
    activities += (state.reading | 0)

    // Haircut
    activities += (state.haircut | 0)

    // Nails
    activities += (state.nails | 0)

    console.log('Activities', activities)

    return activities

  },

  other({ state, commit }) {

  },


  /**
   * Calculates Remaining Budget and Updates State
   *
   * @param {*} {state, commit}
   */
  async total( {state, commit, dispatch} ){
    let balance = 0

      // Salary
    if(state?.occupation){
      balance = state.occupation.monthly_gross - state.occupation.monthly_taxes;
    }

    // Housing Category
    balance -= await dispatch('housing')

    // Utilities
    balance -= await dispatch('utilities')

    // Transportation Category
    balance -= await dispatch('transportation')

    // Grocery Category
    balance -= await dispatch('food')

    // Insurance Category
    balance -= await dispatch('insurance')

    // Communications Category
    balance -= await dispatch('communications')

    // Clothing Category
    balance -= await dispatch('clothing')

    // Lifestyle Category
    balance -= await dispatch('lifestyle')

    // Activities Category
    balance -= await dispatch('activities')

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

