<template>
  <div>
    <h1>Level 1: Housing</h1>
    <NuxtLink to="/housing/location" class="d-block pa-5">
      <img src="~/static/images/level-1.png" />
      </NuxtLink>
      <!-- <v-btn color="primary" to="/housing/location">Play</v-btn> -->
  </div>
</template>

<script>

export default {
  name: 'HousingIndex',

}
</script>

<style>
img {
  max-width: 100%;
}
</style>