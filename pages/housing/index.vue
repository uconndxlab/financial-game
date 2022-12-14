<template>
  <v-container>
    <LevelStarter 
      title="Level 1:" 
      subtitle="Housing" 
      to="/housing/location">
    </LevelStarter>
  </v-container>
</template>

<script>

export default {
            head: {
        title: 'Housing',
    },
  name: 'HousingIndex',

}
</script>

<style>
img {
  max-width: 100%;
  display:block
}
</style>