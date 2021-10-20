<template>
  <form @submit.prevent="onSubmit">
      <div>
          <input v-model="form.name" class="form-control" required />
      </div>
      <div>
          <input v-model="form.email" class="form-control" required />
      </div>
      <button type="submit">S'inscrire</button>
  </form>
</template>

<script>
import { createUser } from '@/firebase';
import { reactive } from 'vue';

export default {
    setup(){
        const form = reactive({name: '', email: ''});
        
        const onSubmit = async () => {
            await createUser({ ...form });
            form.name = '';
            form.email = '';
        }

        return {form, onSubmit};
    }
}
</script>

<style>

</style>