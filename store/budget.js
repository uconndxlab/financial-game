// Initial State
function initialState(){
  return {
    prefs: {
      location: null,
      roommate: null,
      apartment: null
    },
    initial: 3000,
    utilities: 0,
    balance: 0
  }
}

// These are the only props that can be modified
// directly thru mutations. Rest are protected. (sort of)
const publicProps = [
  'apartment',
  'utilities'
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
  update(state, {prop, value}){
    state[prop] = Number(value)
  },
  setLocation(state, location){
    state.prefs.location = String(location)
  },
  setRoommate(state, roommate){
    state.prefs.roommate = Boolean(roommate)
  },
  setApartment(state, apartment) {
    state.prefs.apartment = apartment
  },
  setUtilities(state, cost) {
    state.prefs.utilities = cost
  },
}

export const actions = {
  update({ commit, state, getters, dispatch }, payload) {
    const { prop } = payload
    if(publicProps.includes(prop)){
      commit('update', payload)
    }
    dispatch('total')
  },

  /**
   * Calculates Remaining Budget and Updates State
   *
   * @param {*} {state, commit}
   */
  total( {state, commit} ){
    let runningTotal = 0;
    for(const prop of publicProps){
      if(typeof state[prop] !== 'undefined'){
        runningTotal += state[prop]
      }
    }
    commit('update', {prop: 'balance', value: state.initial - runningTotal })
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
