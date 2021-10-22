<template>
  <div class="body-container">
    <Header />
    <div class="main-content">
      <router-view></router-view>
    </div>
    <SideBar />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import SideBar from '@/components/SideBar.vue';

export default{
    name: 'App',
    components: { 
      Header, 
      SideBar }
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
html *{
  box-sizing: border-box;
  line-height: 1;
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
.main-content{
  width: 80%;
  height: 100%
}
.center{
    text-align: center;
}
.uppercase{
  text-transform: uppercase;
}
</style>
