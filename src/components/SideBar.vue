<template>
    <aside>
        <router-link to="/register">S'inscrire</router-link>
    </aside>
</template>

<script>
export default {
    name: "SideBar"
}
</script>

<style>
aside{
    width: 20%;
    height: 100%;
    background-color: #FFFFFF;
    border-radius: 0 40px 40px 0;
    position: absolute;
    right: 0;
    top: 0;

}
aside::before{
    content: '';
    width: 1px;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    -webkit-box-shadow: -4px 0px 3px 0px #e2e2e2;
    box-shadow: -4px 0px 3px 0px #e2e2e2;
}
</style>