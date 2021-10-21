<template>
  <div class="body-container">
    <Header />
    <router-view></router-view>
    <SideBar />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import SideBar from '@/components/SideBar.vue';

export default{
    name: 'App',
    components: { Header, SideBar }
}
</script>

<style>
html {
  font-family: 'Roboto', sans-serif;
  margin: auto;
  line-height: 1.75;
  font-size: 1.25em;
  height: 100vh;
  width: 100%;
  background-color: #bdb2ff;
  overflow-y: hidden;
}
body{
  margin: 4rem;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  background-color: #F2F3F8;
  max-width: 90%;
  margin: 0 auto;
  height: calc(100vh - 8rem);
  border-radius: 40px;
  -webkit-box-shadow: 0px 0px 11px 9px #A097D8; 
  box-shadow: 0px 0px 11px 9px #A097D8;
  background-image: url('./assets/wallet.svg');
  background-repeat: no-repeat;
  background-position: 55% 80%;
  background-size: 700px 600px;
}
.body-container{
  height: 100%;
  border-radius: 40px;
  position: relative;
}
a{
  text-decoration: none;
  color: #A4AFC3;
}
</style>
