<template>
  <header>
      <nav>
        <router-link to="/">ExpenseDeck</router-link>
        <ul>
            <li><router-link to="/">Accueil</router-link></li>
            <li>Contact</li>
            <li></li>
        </ul>
      </nav>
  </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style>
header{
    width: 80%;
    height: 75px;
    position: absolute;
    z-index: 999;
}
header ul{
    display: inline-block;
}
header ul li{
    list-style-type: none;
    display: inline-block;
}
</style>