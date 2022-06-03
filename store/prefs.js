export const state = () => ({
  location: null,
  roommate: null
})

export const mutations = {
  setLocation(state, val) {
    state.location = val
  },
  setRoommate(state, val) {
    state.roommate = Boolean(val)
  },
}
