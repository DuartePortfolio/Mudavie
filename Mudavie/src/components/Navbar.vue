<script>
import { ref, onMounted } from "vue";
import { RouterLink, useRouter } from 'vue-router';
import { loginStore } from '../stores/loginStore';
import LoginPopup from "./LoginPopup.vue";


export default {
    components: {
        LoginPopup,
        RouterLink
    },
    setup() {
        const showPopup = ref(true);
        const store = loginStore();
        const router = useRouter();

        const handleLogout = () => {
            store.logout();
            router.push('/');
            alert('Terminou a sessão com sucesso.');
        };

        onMounted(() => {

            console.log(store.isAuthenticated);
            const loginButton = document.getElementById("login");

            if (loginButton) {
                loginButton.addEventListener("click", () => {
                    if (store.isAuthenticated) {
                        router.push(`/profile/${store.getUserInfo.username}`);
                    } else {
                        try {
                            document.getElementById("loginPopup").style.display = "flex"
                        } catch (error) {}
                        // showPopup.value = true;
                    }
                });
            } else {
                console.warn("Login button not found in the DOM.");
            }
        });

        return {
            showPopup,
            handleLogout
        };
    }
};
</script>

<template>
    <div class="navbar">
        <div class="left">
            <RouterLink to="/"><img class="logo" src="../assets/mudavie.png" alt="Logo" height="40px"></RouterLink>
        </div>
        <div class="right">
            <div id="login" class="account-icon">
                <img src="../assets/navbar/account.png" alt="Conta" height="25px" width="20px">
                <!-- <span>Account</span> -->
            </div>
            <a href="#"><img src="../assets/navbar/lang.png" alt="Lang" height="25px" style="padding-left: 25px;"></a>
            <div class="dropdown">
                <button class="dropbtn"><img src="../assets/navbar/menu.png" alt="Menu"></button>
                <div class="dropdown-content">
                    <div class="links">
                        <div class="nav-links">
                            <RouterLink to="/about" class="navlink">Sobre o Festival</RouterLink>
                            <hr class="linha">
                            <RouterLink to="/Submissions" class="navlink">Submissões</RouterLink>
                            <hr class="linha">
                            <RouterLink to="/Program" class="navlink">Programa</RouterLink>
                            <hr class="linha">
                            <RouterLink :to="`/Tickets/General`" class="navlink">Bilhetes</RouterLink>
                        </div>
                        <div class="bot-links">
                            <hr class="divider">
                            <div class="botlinks">
                                <RouterLink to="/Submission" class="botlink">Contactos</RouterLink>
                                <RouterLink to="/Program" class="botlink">Prémios</RouterLink>
                                <RouterLink to="/news" class="botlink">Noticias</RouterLink>
                                <RouterLink to="/profile/:id" class="botlink">Conta</RouterLink>
                                <a @click="handleLogout" class="botlink">Logout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <LoginPopup v-if="showPopup" />
</template>

<style>
.navbar {
  overflow:auto;
  background-color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.navbar a {
  float: left;
  font-size: 16px;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.dropdown {
    z-index: 10;
  overflow: hidden;
}

.right {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.account-icon {
    display: flex;
    align-items: center;
    cursor: pointer;
}

.account-icon span {
    color: white;
    margin-left: 5px;
}

.dropdown .dropbtn {
  font-size: 16px;  
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}

.linha {
    color: black;
    margin-left: 15px;
    width: 98%;
    border-color: black;
}

.divider {
    color: black;
    width: 100vw;
    border-color: black;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #CCC26E;
  width: 100%;
  left: 0;
  height: 325px
}

.dropdown-content * {
    display: flex;
    flex-direction: column;
}

.dropdown-content .navlink, .dropdown-content .botlink{
  float: none;
  text-decoration: none;
  display: block;
  text-align: left;
  color: #FFFFFF;
}

.links {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.navlink {
    margin: 0;
}

.botlinks {
    display: flex;
    flex-direction: row;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>