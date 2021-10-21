<template>
    <Header />
    <HomePage />
    <SideBar />
</template>

<script>
import Header from '@/components/Header.vue';
import HomePage from '@/components/HomePage.vue';
import SideBar from '@/components/SideBar.vue';

    export default{
        name: 'Home',
        components: { HomePage, Header, SideBar }
    }
</script>
<style>

</style>