<template>
    <aside>
        <div class="top-part logged-out" :class="{ hidden: isLoggedIn }">
            <div class="notifications-icon">
                <font-awesome-icon :icon="['far', 'bell']" :class="{ hidden: !isLoggedIn }"/>
            </div>
            <router-link to="/register">S'inscrire</router-link>
        </div>
        <div class="top-part logged-in" :class="{ hidden: !isLoggedIn }">
            <router-link to="/register">Déconnexion</router-link>
        </div>
        <div class="middle-part">
        </div>
        <div class="bottom-part">
        </div>
    </aside>

</template>

<script>
export default {
    name: "SideBar",
    data() {
        let datas = {
            isLoggedIn: false
        };
        return datas;
    },
}
</script>

<style>
aside{
    width: 25%;
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
.top-part{
    text-align: right;
    margin-top: 2em;
    padding-right: 30px;
    width: 100%;
    height: 10%;
    padding-bottom: 2em;
}
.top-part a{
    background-color: #4e65d6;
    color: #FFFFFF;
    padding: 7px;
    border-radius: 5px;
    transition: all 0.3s;
    display: inline-block;
}
.top-part a:hover{
    background-color: #455ac7;
    transform: scale(1.02);
    -webkit-box-shadow: 0px 0px 2px 3px #ADB5BD; 
    box-shadow: 0px 0px 10px 3px #ADB5BD;
}
.middle-part{
    height: 60%;
    width: 100%;
}
.top-part,
.middle-part{
    border-bottom: 1px solid #F2F3F8;
}
.notifications-icon{
    display: inline-block;
    margin-right: 40px;
    height: 50px;
    width: 50px;
    text-align: center;
    vertical-align: middle;
    position: relative;
}
.notifications-icon svg{
    position: absolute;
    top: 50%;
    transform: translateY(-51%);
    width: 20px!important;
    height: 20px;
}
</style>