<script setup>
    import { useStore } from '../stores/login';
    import router from '../router/index'
</script>
<template>
  <div>
    <h1>Login</h1>
    <!-- login form -->
     <form @submit.prevent="login" id="LoginForm">
         <input type="text" class="form-control" name="username" id="username" placeholder="Username" required/><br>
         <input type="password" class="form-control" name="password" id="password" placeholder="Password" required/><br>
         <button type="submit">Login</button>
     </form>
    
  </div>
</template>

<script>

  export default {
    name: 'LoginPage',
    methods:{
        login(submitEvent) {
            let username = this.username = submitEvent.target.elements.username.value
            let password = this.password = submitEvent.target.elements.password.value
            let userInfo = JSON.parse(localStorage.getItem(username))
            

            if(userInfo !== null){
              if(userInfo.password === password){
                  let store = useStore()
                  
                  store.login(userInfo)
                  router.push("/landingPage")
                  
              }
            }
        }
    }
  };
</script>

<style>
</style>