<template>
  <main class="profile-container">
    <Navbar></Navbar>
    <section class="profile-content">
      <h1 class="profile-title">O meu perfil</h1>
      <section class="user-info-section">
        <div class="user-details">
          <div class="avatar-container"></div>
          <div class="user-text">
            <h2 class="user-name">{{ username }}</h2>
          </div>
        </div>
        <button class="edit-button" tabindex="0" @click="editUsername = true">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b468c9bcbc8da0ef12eaab79a1e10c19eeecd064c156ad9681e9483259cab39?placeholderIfAbsent=true&apiKey=24c5612ec37d4fbcbfc9ca0edfc13a50"
            class="edit-icon"
            alt="Edit profile"
          />
          <span>Editar</span>
        </button>
      </section>
      <section v-if="editUsername" class="edit-username-section">
        <form @submit.prevent="updateUsername">
          <input type="text" v-model="newUsername" placeholder="Novo Username" required />
          <button type="submit">Update</button>
        </form>
      </section>
      <section class="ticket-section">
        <div class="tickets">
          <h2 class="section-title">Filmes Favoritos</h2>
          <div class="movie-poster-container">
            <img 
              v-for="(poster, index) in favorited"
              :key="index" 
              :src="poster" 
              class="moviePoster" 
            />
          </div> 
        </div>
      </section>
      <section class="ticket-section">
        <div class="tickets">
          <h2 class="section-title">Bilhetes</h2>
          <div v-for="(ticket, index) in store.user.ticketType" :key="index" class="ticket-info">
            <p>Quantidade: {{ ticket.quantity }}</p>
            <p>Tipo de Bilhete: {{ ticket.price > 20 ? 'VIP' : 'Normal' }}</p>
            <p>Duração: {{ ticket.date.includes('11/12/13') ? '3 Dias' : '1 Dia' }}</p>
          </div>
        </div>
      </section>
      <section class="personal-info-section">
        <div class="section-header">
          <h2 class="section-title">Informação pessoal</h2>
          <button class="edit-button" tabindex="0" @click="editPersonalInfo = true">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b468c9bcbc8da0ef12eaab79a1e10c19eeecd064c156ad9681e9483259cab39?placeholderIfAbsent=true&apiKey=24c5612ec37d4fbcbfc9ca0edfc13a50"
              class="edit-icon"
              alt="Edit information"
            />
            <span>Editar</span>
          </button>
        </div>
        <div v-if="editPersonalInfo" class="edit-personal-info-section">
          <form @submit.prevent="updatePersonalInfo">
            <div class="info-grid">
              <div class="info-column">
                <div class="info-group">
                  <h3 class="info-label">Nome</h3>
                  <input type="text" v-model="newFirstName" placeholder="First Name" required />
                  <h3 class="info-label">Endereço de email</h3>
                  <input type="email" v-model="newEmail" placeholder="Email" required />
                  <h3 class="info-label">Bio</h3>
                  <input type="text" v-model="newBio" placeholder="Bio" required />
                </div>
              </div>
              <div class="info-column-secondary">
                <div class="info-group">
                  <h3 class="info-label">Sobrenome</h3>
                  <input type="text" v-model="newLastName" placeholder="Last Name" required />
                  <h3 class="info-label">Telemóvel</h3>
                  <input type="text" v-model="newPhone" placeholder="Phone" required />
                </div>
              </div>
            </div>
            <button type="submit">Update</button>
          </form>
        </div>
        <div v-else class="info-grid">
          <div class="info-column">
            <div class="info-group">
              <h3 class="info-label">Nome</h3>
              <p class="info-value">{{ store.user.firstName }}</p>
              <h3 class="info-label">Endereço de email</h3>
              <p class="info-value">{{ store.user.email }}</p>
              <h3 class="info-label">Bio</h3>
              <p class="info-value">{{ store.user.bio }}</p>
            </div>
          </div>
          <div class="info-column-secondary">
            <div class="info-group">
              <h3 class="info-label">Sobrenome</h3>
              <p class="info-value">{{ store.user.lastName }}</p>
              <h3 class="info-label">Telemóvel</h3>
              <p class="info-value">{{ store.user.phone }}</p>
            </div>
          </div>
        </div>
      </section>
    </section>
    <Footer></Footer>
  </main>
</template>

<script>
import { ref } from 'vue';
import { loginStore } from '../stores/loginStore.js';
import { movieStore } from '../stores/movies.js';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Navbar,
    Footer
  },
  setup() {
    const store = loginStore();
    const movies = movieStore();
    const username = ref(store.getUserInfo.username);
    const newUsername = ref('');
    const editUsername = ref(false);
    const editPersonalInfo = ref(false);
    const newFirstName = ref(store.getUserInfo.firstName || '');
    const newLastName = ref(store.getUserInfo.lastName || '');
    const newEmail = ref(store.getUserInfo.email || '');
    const newPhone = ref(store.getUserInfo.phone || '');
    const newBio = ref(store.getUserInfo.bio || '');
    const posters = movies.posters;
    const favorited = [];

// Ensure movies.favorited and movies.posters are valid arrays
if (Array.isArray(movies.favorited) && Array.isArray(movies.posters)) {
  movies.favorited.forEach((isFavorited, index) => {
    if (isFavorited) {
      // Check if the corresponding poster exists
      const poster = movies.posters[index];
      if (poster) {
        favorited.push(poster);
      }
    }
  });
} else {
  console.error("movies.favorited or movies.posters is not an array");
}

    const updateUsername = () => {
      const userInfo = { ...store.getUserInfo, username: newUsername.value };
      store.user.username = newUsername.value;
      username.value = newUsername.value;
      localStorage.setItem(newUsername.value, JSON.stringify(userInfo));
      editUsername.value = false;
    };

    const updatePersonalInfo = () => {
      const userInfo = {
        ...store.getUserInfo,
        firstName: newFirstName.value,
        lastName: newLastName.value,
        email: newEmail.value,
        phone: newPhone.value,
        bio: newBio.value
      };
      store.user.firstName = newFirstName.value;
      store.user.lastName = newLastName.value;
      store.user.email = newEmail.value;
      store.user.phone = newPhone.value;
      store.user.bio = newBio.value;
      localStorage.setItem(store.user.username, JSON.stringify(userInfo));
      editPersonalInfo.value = false;
    };

    return {
      username,
      newUsername,
      editUsername,
      updateUsername,
      editPersonalInfo,
      newFirstName,
      newLastName,
      newEmail,
      newPhone,
      newBio,
      updatePersonalInfo,
      store,
      movies,
      posters,
      favorited
    };
  }
};
</script>

<style scoped>
.movie-poster-container {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.moviePoster {
  width: 120px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.profile-container {
  background: #fff;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.header-image {
  aspect-ratio: 14.29;
  object-fit: contain;
  width: 100%;
}

.profile-content {
  border-radius: 10px;
  background: #1E201E;
  display: flex;
  width: 100%;
  flex-direction: column;
  overflow: hidden;
  padding: 20px 21px 31px;
  border: 2px solid #EEEFFF;
}

.profile-title {
  color: #EEEFFF;
  font: 400 32px Chopin-Trial, sans-serif;
}

.user-info-section {
  display: flex;
  margin-top: 42px;
  width: 100%;
  gap: 20px;
  overflow: hidden;
  font-family: Chopin-Trial, sans-serif;
  font-weight: 400;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 45px 21px;
  border: 2px solid #EEEFFF;
}

.ticket-section {
  display: flex;
  margin-top: 42px;
  width: 100%;
  gap: 20px;
  overflow: hidden;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 45px 21px;
  border: 2px solid #EEEFFF;
  justify-content: space-between;
  font: 400 24px Chopin-Trial, sans-serif;
}

.personal-info-section {
  display: flex;
  margin-top: 29px;
  width: 100%;
  flex-direction: column;
  overflow: hidden;
  padding: 33px 17px 287px 40px;
  border: 2px solid #EEEFFF;
}

.user-details {
  display: flex;
  gap: 22px;
  color: #EEEFFF;
}

.avatar-container {
  border-radius: 39px;
  background: #D9D9D9;
  width: 76px;
  height: 76px;
}

.user-text {
  display: flex;
  flex-direction: column;
  margin: auto 0;
}

.user-name {
  font-size: 24px;
}

.edit-button {
  position: relative;
  font-size: 24px;
  color: #fff;
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
}

.edit-icon {
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.section-header {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
  font: 400 24px Chopin-Trial, sans-serif;
}

.section-title {
  color: #EEEFFF;
  margin-top: 11px;
}

.info-grid {
  width: 479px;
  max-width: 100%;
  margin: 11px 0 -57px;
  display: flex;
  gap: 20px;
}

.info-column {
  width: 71%;
}

.info-column-secondary {
  width: 29%;
}

.info-group {
  display: flex;
  flex-direction: column;
  align-items: start;
  color: #fff;
  font: 400 20px Chopin-Trial, sans-serif;
}

.info-label {
  color: #EEEFFF;
  font-size: 20px;
  margin-top: 34px;
}

.info-label:first-child {
  margin-top: 0;
}

.info-value {
  margin-top: 10px;
  color: #fff;
}

.edit-username-section {
  margin-top: 20px;
}

.edit-username-section form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.edit-username-section input {
  padding: 10px;
  font-size: 16px;
}

.edit-username-section button {
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
}

.edit-personal-info-section form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.edit-personal-info-section input {
  padding: 10px;
  font-size: 16px;
}

.edit-personal-info-section button {
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
}

@media (max-width: 991px) {
  .header-image {
    max-width: 100%;
  }

  .profile-content {
    max-width: 100%;
    padding: 0 20px;
  }

  .user-info-section {
    padding-left: 20px;
    margin-top: 40px;
  }

  .edit-button {
    white-space: initial;
    padding: 0 20px;
  }

  .personal-info-section {
    max-width: 100%;
    padding: 0 0 100px 20px;
    margin-bottom: 10px;
  }

  .section-header {
    max-width: 100%;
  }

  .info-grid {
    flex-direction: column;
  }

  .info-column,
  .info-column-secondary {
    width: 100%;
  }

  .info-group {
    margin-top: 40px;
  }
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>