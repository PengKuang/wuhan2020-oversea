<template>
  <b-container fluid>
    <!-- <div> -->
    <b-row id="fixedHeader" class="header text-center">
      <b-col>
        <Navbar />
      </b-col>
    </b-row>
    <hr/>
    <b-row>
      <b-col>
        <router-view></router-view>
      </b-col>
    </b-row>
    <!-- <div id="app"> -->
      
      <!-- <SubmitInfo /> -->
      <!-- <Infoprovider /> -->
      <!-- <PassengerSearch /> -->
    <!-- </div> -->
    <!-- </div> -->
  </b-container>
</template>

<script>
// import SubmitInfo from './components/SubmitInfo.vue'
// import PassengerSearch from './components/PassengerSearch.vue'
// import InfoProvider from './components/InfoProvider.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'app',
  components: {
    Navbar
    // SubmitInfo,
    // PassengerSearch
    // InfoProvider
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
