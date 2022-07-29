// Initial State
function initialState(){
  return {
    location: null,
    roommate: null,
    apartment: null,
    utilities: 0,
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

