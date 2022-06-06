export const state = () => ({
  location: null,
  roommate: null,
  apartment: null
})

export const mutations = {
  setLocation(state, val) {
    state.location = val
  },
  setRoommate(state, val) {
    state.roommate = Boolean(val)
  },
  setApartment(state, obj) {
    state.apartment = obj
  },
}
