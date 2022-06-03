<template>
  <div>

    <Nuxt />
    <nav>
      <ul>
        <li><NuxtLink to="/housing">Housing</NuxtLink></li>
        <li><NuxtLink to="/transportation">Transportation</NuxtLink></li>
        <li><NuxtLink to="/insurance">Insurance</NuxtLink></li>
        <li><NuxtLink to="/communications">Communications</NuxtLink></li>
        <li><NuxtLink to="/food">Food</NuxtLink></li>
        <li><NuxtLink to="/clothing">Clothing</NuxtLink></li>
        <li><NuxtLink to="/lifestyle">Lifestyle</NuxtLink></li>
        <li><NuxtLink to="/activities">Activities</NuxtLink></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout'

}
</script>

<style>
@import url(https://unpkg.com/mvp.css);

body {
  padding:0;
  margin: 40px;
}

body > h1 {
  margin-top: 0;
  padding-top:0;
}
.nuxt-link-active {
  text-decoration: underline;
}

</style>
