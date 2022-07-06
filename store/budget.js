// Initial State
function initialState(){
  return {
    prefs: {
      location: null,
      roommate: null,
      apartment: null
    },
    initial: 0,
    utilities: 0,
    balance: 0
  }
}

// These are the only props that can be modified
// directly thru mutations. Rest are protected. (sort of)
const publicProps = [
  'apartment',
  'utilities',
  'initial'
]

export const state = () => initialState()

export const mutations = {
  reset(state){

    // Reset public props
    publicProps.forEach(val => delete state[val])

    // Reset other values to initial state
    const s = initialState()
    Object.keys(s).forEach(key => {
        state[key] = s[key]
    })
  },
  property(state, {prop, value}){
    state[prop] = Number(value)
  },
  setLocationPref(state, location){
    state.prefs.location = String(location)
  },
  setRoommatePref(state, roommate){
    state.prefs.roommate = Boolean(roommate)
  },
  setApartmentPref(state, apartment) {
    state.prefs.apartment = apartment
  },
  setOccupationPref(state, obj) {
    state.prefs.occupation = obj
  },
}

export const actions = {
  update({ commit, state, getters, dispatch }, payload) {
    const { prop } = payload
    if(publicProps.includes(prop)){
      commit('property', payload)
    }
    // dispatch('total')
  },

  /**
   * Calculates Remaining Budget and Updates State
   *
   * @param {*} {state, commit}
   */
  total( {state, commit} ){
    let balance = 0

      // Salary
    if(state.prefs?.occupation){
      balance = state.prefs.occupation.monthly_gross - state.prefs.occupation.monthly_taxes;
    }
    // Apartment
    if(state.prefs?.apartment){
      balance = balance - state.prefs.apartment.rent
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

