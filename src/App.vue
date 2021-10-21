<template>
  <div class="body-container">
    <router-view></router-view>
  </div>
</template>

<style>
html {
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
  text-align: center;
  color: #2c3e50;
  height: 100%;
  background-color: #F2F3F8;
  max-width: 90%;
  margin: 0 auto;
  height: calc(100vh - 8rem);
  border-radius: 40px;
}
.body-container{
  height: 100%;
  border-radius: 40px;
}
</style>
