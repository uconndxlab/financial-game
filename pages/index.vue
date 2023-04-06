<template>
  <v-container fill-height id="intro-container">
        <v-img id="city-outline" :src="require('../images/city-outline.svg')" style="position: absolute;bottom: 0;left:0;z-index:0"></v-img>
    <v-row id="intro-content">
      <v-col cols="10" md="4">
        <h1 id="intro-h1">bread<br>winner</h1>
      </v-col>
      <v-col cols="10" md="7">
        <h2>About the game...</h2>
        <p>Are you ready to try out life as a young adult entering the Connecticut workforce fulltime? During this game, you’ll have a chance to make financial decisions you are likely to face. In this game, you are a young, single adult and have completed the entry level educational requirements for your chosen occupation. You will live financially independently and be responsible for all your own expenses. Once you are done, play again! Make different choices and see how they affect your finances and your lifestyle.</p>
        <v-btn to="/occupation-selection" x-large rounded color="secondary">PLAY</v-btn>
      </v-col>
      <v-col cols="10" md="1">
      </v-col>
    </v-row >
    </v-container>
</template>




<script>

export default {
   head: {
    title: 'Breadwinner',
    meta: [
      {
        hid: 'financial game',
        name: 'Breadwinner Home',
        content: 'During this game, you’ll have a chance to make financial decisions you are likely to face.'
      }
    ],
  },
  name: 'IndexPage',
  mounted(){
    document.getElementById("bottom-nav").style.display = "none";
    document.getElementById("v-main-body").style.backgroundImage = "linear-gradient(#5ED1C7, #173349)";
    }
}
</script>


<style>
#intro-h1{
  text-align:left;
  font-size:60px;
  line-height:60px;
  font-weight:800;
}

#intro-content{
  position: relative;
  z-index:1;
}

@media only screen and (min-width: 960px) {
#intro-h1{
  font-size:6vw;
  line-height:5.5vw;
  text-align:right;
}

}


</style>
