<script setup>
import { ref, onMounted } from 'vue';
import { loginStore } from '../stores/loginStore';
import router from '../router/index';

const store = loginStore();
let LoginInForm = ref(true);

onMounted(() => {
    document.getElementById("loginPopup").style.display = "none"
});


function handleLogin(submitEvent) {
    console.log("Login method called");
    const username = submitEvent.target.elements.username.value;
    const password = submitEvent.target.elements.password.value;
    const userInfo = JSON.parse(localStorage.getItem(username));

    console.log("Retrieved userInfo from localStorage:", userInfo);

    if (userInfo) {
        if (userInfo.password === password) {
            store.login(userInfo);
            router.push("/landingPage");
            console.log("Login bem-sucedido");
        } else {
            alert("Password incorreta");
        }
    } 
}

function handleRegister(submitEvent) {
    const username = submitEvent.target.elements.username.value;
    const email = submitEvent.target.elements.email.value;
    const password = submitEvent.target.elements.password.value;

    console.log("Attempting to register user:", username);

    if (localStorage.getItem(username)) {
        alert("Utilizador já existe.");
    } else {
        const userInfo = { username, email, password };
        localStorage.setItem(username, JSON.stringify(userInfo));
        console.log("Stored userInfo in localStorage:", userInfo);
        store.login(userInfo);
        alert("Registo bem-sucedido. Por favor, faça login.");
        LoginInForm.value = true;
    }
}
function closePopup() {
    try {
        console.log("1");
        document.getElementById("loginPopup").style.display = "none"
        
    } catch (error) {
        LoginInForm.value = true
        document.getElementById("signinPopup").style.display = "none"
        console.log("2");
    }
}
function toggleToRegister(event) {
    event.stopPropagation()
    LoginInForm.value = !LoginInForm.value
}
function toggleToLogin(event) {
    event.stopPropagation()
    LoginInForm.value = !LoginInForm.value
}
</script>

<template>
        <div class="popup" id="loginPopup" v-if="LoginInForm">
            <h1 id="botaofechar" @click="closePopup">X</h1>
            <h1>Bem-vindo de volta!</h1>
            <h3>Por favor insira os seus dados</h3>
            
            <form @submit.prevent="handleLogin" id="LoginForm">
                <input type="text" class="form-control" name="username" id="username" placeholder="Username" required/><br>
                <hr>
                <input type="password" class="form-control" name="password" id="password" placeholder="Password" required/><br>
                <hr>
                <button type="submit">Login</button>
            </form>

            <a @click="toggleToRegister($event)">{{ LoginInForm ? 'Ainda não tem conta?' : 'Já tem conta?' }}</a>
        </div>

        <div class="popup" id="signinPopup" v-else>
            <h1 id="botaofechar" @click="closePopup">X</h1>
            <h1>Bem-vindo!</h1>
            <h3>Por favor insira os seus dados</h3>
            <form @submit.prevent="handleRegister" id="signInForm">
                <input type="text" class="form-control" name="username" id="username" placeholder="Username" required/><br>
                <hr>
                <input type="email" class="form-control" name="email" id="email" placeholder="Email" required/><br>
                <hr>
                <input type="password" class="form-control" name="password" id="password" placeholder="Password" required/><br>
                <hr>
                <button type="submit">Registar</button>
            </form>

            <a @click="toggleToLogin($event)">{{ LoginInForm ? 'Ainda não tem conta?' : 'Já tem conta?' }}</a>
        </div>
</template>

<style>
a {
    cursor: pointer;
}

#botaofechar {
    align-self:flex-end;
    padding-right: 50px;
}
#loginPopup {
    display: flex;
}
#signinPopup {
    display: flex;
}
.box {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
}

.popup {
    border: 2px solid white;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 500px;
    width: 400px;
    background-color: #1E201E;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px
}

h1 {
    font-size: 25px;
}

h3 {
    font-size: 15px;
}

hr {
    width: 300px;
    margin-top: 0;
    margin-bottom: 10px;
}

input {
    width: 300px;
    background-color: #1E201E;
    border: none;
    color: white;
    height: 40px;
    margin-bottom: -20px;
    padding-top: 20px
}

input:active {
    width: 300px;
    border: 0px;
    color: white;
    background-color: #1E201E;
}

input:focus {
  outline: none;
}

input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px #1E201E inset; /* Define a cor de fundo */
    -webkit-text-fill-color: white; /* Define a cor do texto */
    transition: background-color 5000s ease-in-out 0s; /* Previne a mudança de cor padrão */
}

button {
    color: black;
    background-color: #CCC26E;
    border-radius: 10px;
    border: none;
    width: 120px;
    height: 40px;
    margin: 30px 0px 20px 0px;
}

button:hover {
    background-color: #a19a57;
    cursor: pointer;
}

a {
    color: white
}

a:hover {
    text-decoration: underline;
}
</style>