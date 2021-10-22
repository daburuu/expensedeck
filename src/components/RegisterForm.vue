<template>
  <div class="left-content">
      <div class="bg-img"></div>
      <img src="../assets/illustration.svg" />
  </div>
  <div class="form-container">
    <form @submit.prevent="onSubmit">
        <div class="form-title">
            <div class="above-title uppercase">Démarrez gratuitement</div>
            <div class="title">Inscrivez vous à ExpenseDeck.</div>
        </div>
        <!-- <div class="form-group center">
            <div class="input-container col-6">
                <input placeholder="Nom" type="text" v-model="form.name" class="form-control " required/>
                <div class="underline"></div>
            </div>
            <div class="input-container col-6">
                <input placeholder="Prenom" type="text" v-model="form.surname" class="form-control" required/>
            </div>
        </div> -->
        <div class="form-group">
            <div class="input-container col-12">
                <input placeholder="E-mail" type="email" v-model="form.email" class="form-control" required />
                <font-awesome-icon icon="at" />
            </div>
        </div>
        <div class="form-group">
            <div class="input-container col-12">
                <input placeholder="Mot de passe" type="password" v-model="form.password" class="form-control" @blur="checkPassword" required/>
                <font-awesome-icon icon="lock" />
            </div>
        </div>
        <div class="form-group">
            <div class="input-container col-12">
                <input placeholder="Confirmez votre mot de passe" type="password" v-model="form.passwordConfirm" class="form-control" @blur="checkPassword" required/>
                <font-awesome-icon icon="lock" />
            </div>
        </div>
        <div class="form-group center">
            <input type="submit" :disabled="disabled == 1" value="S'inscrire">
            <div class="already-member">Déjà membre ? <router-link to="/login">Connectez-vous !</router-link></div>
        </div>
    </form>
  </div>
</template>

<script>
import { createUser } from '@/firebase';
import { reactive } from 'vue';

export default {
    data(){
        return {
            disabled: 0,
            form: reactive({email: '', password: '', passwordConfirm: ''})
        }
    },
    methods: {
        checkPassword() {
            console.log("there");
            if((this.form.password != '' && this.form.passwordConfirm != '') && (this.form.password != this.form.passwordConfirm)){
                this.disabled = 1;
            } else {
                this.disabled = 0;
            }
        }
    },
    setup(){
        const onSubmit = async () => {
            await createUser({ ...this.form });
            // this.form.name = '';
            // this.form.surname = '';
            this.form.email = '';
            this.form.password = '';
            this.form.passwordConfirm = '';
        }
        return {onSubmit};
    }
}
</script>

<style>
.form-container{
    display: flex;
    flex-direction: row;
    float: left;
    width: 50%;
    height: 100%;
    justify-content: center;
    align-items: center;
}
form{
    margin: 0 auto;
    border-radius:20px;
    width: 90%;
}
.left-content{
    width: 50%;
    float: left;
    height: 100%;
    background-color: #ADB5BD;
    position: relative;
    background-repeat: no-repeat;
    background-position: bottom;
}
.bg-img{
    filter: blur(1px);
    background-image: url('../assets/bg.png');
    width: 100%;
    height: 477px;
    position: absolute;
    bottom: 0;
}
.left-content img{
    position: relative;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.form-title{
    width: 80%;
    margin: 0 auto;
    margin-bottom: 30px;
}
.form-title .above-title{
    font-size: 12px;
    color: #B5B5AC;
    font-weight: 900;
    margin-bottom: 5px;
}
.form-title .title{
    color: #4E65D6;
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 10px;
}
.form-group .already-member{
    font-size: 12px;
}
.form-group .already-member a{
    text-decoration: underline;
}
.form-group{
    width: 80%;
    margin: 0 auto 20px;
}
.form-group .input-container{
    position: relative;
}
.col-6{
    width: 50%;
    display: inline-block;
}
.form-group .col-6:first-child{
    width: calc(50% - 10px);
    margin-right: 10px;
}
.form-group .col-6:last-child{
    width: calc(50% - 10px);
    margin-left: 10px;
}
.form-group svg{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
    color: #ADB5BD;
}
.col-12{
    width: 100%;
    margin: 0 auto;
}
.col-12 input{
    width: 100%;
}
input{
    width: 100%;
    height: 40px;
    font-size: 18px;
    border: none;
    background-color: #FFFFFF;
    border: 1px solid #ADB5BD;
    border-radius: 5px;
    padding: 5px 50px 5px 15px;
    transition: all 0.2s ease-in-out;
}
input[type="submit"]{
    cursor: pointer;
    width: 50%;
    background-color: #4e65d6;
    color: #FFFFFF;
    padding: 7px;
    border-radius: 5px;
    transition: all 0.3;
    display: inline-block;
    margin-bottom: 10px;
}
input[type="submit"]:hover{
    background-color: #455ac7;
    transform: scale(1.02);
    -webkit-box-shadow: 0px 0px 2px 3px #ADB5BD; 
    box-shadow: 0px 0px 10px 3px #ADB5BD;
}
input:focus{
    outline: none;
    -webkit-box-shadow: 0px 0px 2px 3px #ADB5BD; 
    box-shadow: 0px 0px 10px 3px #ADB5BD;
}
</style>