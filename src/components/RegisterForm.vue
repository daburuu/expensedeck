<template>
  <form @submit.prevent="onSubmit">
      <div class="form-name">S'inscrire</div>
      <div class="form-group center">
          <div class="input-container col-6">
            <input placeholder="Nom" type="text" v-model="form.name" class="form-control " required/>
            <div class="underline"></div>
          </div>
          <div class="input-container col-6">
            <input placeholder="Prenom" type="text" v-model="form.surname" class="form-control" required/>
          </div>
      </div>
      <div class="form-group">
          <div class="input-container col-12">
            <input placeholder="E-mail" type="email" v-model="form.email" class="form-control" required />
          </div>
      </div>
      <div class="form-group">
          <div class="input-container col-12">
            <input placeholder="Mot de passe" type="password" v-model="form.password" class="form-control" @blur="checkPassword" required/>
          </div>
      </div>
      <div class="form-group">
          <div class="input-container col-12">
            <input placeholder="Confirmez votre mot de passe" type="password" v-model="form.passwordConfirm" class="form-control" @blur="checkPassword" required/>
          </div>
      </div>
      <div class="form-group center">
        <input type="submit" :disabled="disabled == 1" value="S'inscrire">
      </div>
  </form>
</template>

<script>
import { createUser } from '@/firebase';
import { reactive } from 'vue';

export default {
    data(){
        return {
            disabled: 0,
            form: reactive({name: '', surname: '', email: '', password: '', passwordConfirm: ''})
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
            this.form.name = '';
            this.form.email = '';
            this.form.surname = '';
            this.form.password = '';
            this.form.passwordConfirm = '';
        }
        return {onSubmit};
    }
}
</script>

<style>
form{
    width: 50%;
    float: right;
}
.form-group{
    margin-bottom: 20px;
}
.col-6{
    width: 40%;
    display: inline-block;
}
.col-12{
    width: 80%;
    margin: 0 auto;
}
.col-12 input{
    width: 90%;
}
input{
    width: 80%;
    height: 30px;
    font-size: 18px;
    border: none;
    background-color: #FFFFFF;
    border-radius: 5px;
    padding: 5px 15px;
}
input[type="submit"]{
    cursor: pointer;
    width: 50%;
}
.center{
    text-align: center;
}
</style>