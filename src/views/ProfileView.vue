<script setup>
  import Navbar from '../components/Navbar.vue'
</script>
<template>
  <main class="profile-container">
    <Navbar></Navbar>
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/0df680344f3015562d49e5ca5a355b27d4f40948dc1a2d6dc89ea6a8d5fb9354?placeholderIfAbsent=true&apiKey=24c5612ec37d4fbcbfc9ca0edfc13a50"
      class="header-image"
      alt=""
    />
    <section class="profile-content">
      <h1 class="profile-title">O meu perfil</h1>
      <section class="user-info-section">
        <div class="user-details">
          <div class="avatar-container"></div>
          <div class="user-text">
            <h2 class="user-name">{{ username }}</h2>
            <p class="ticket-type">Tipo de bilhete</p>
          </div>
        </div>
        <button class="edit-button" tabindex="0">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b468c9bcbc8da0ef12eaab79a1e10c19eeecd064c156ad9681e9483259cab39?placeholderIfAbsent=true&apiKey=24c5612ec37d4fbcbfc9ca0edfc13a50"
            class="edit-icon"
            alt="Edit profile"
          />
          <span>Editar</span>
        </button>
      </section>
      <section class="ticket-section">
        <div class="tickets">
          <h2 class="section-title">Bilhetes</h2>

        </div>
        <button class="edit-button" tabindex="0">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b468c9bcbc8da0ef12eaab79a1e10c19eeecd064c156ad9681e9483259cab39?placeholderIfAbsent=true&apiKey=24c5612ec37d4fbcbfc9ca0edfc13a50"
            class="edit-icon"
            alt="Edit profile"
          />
          <span>Editar</span>
        </button>
      </section>
      <section class="personal-info-section">
        <div class="section-header">
          <h2 class="section-title">Informação pessoal</h2>
          <button class="edit-button" tabindex="0">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b468c9bcbc8da0ef12eaab79a1e10c19eeecd064c156ad9681e9483259cab39?placeholderIfAbsent=true&apiKey=24c5612ec37d4fbcbfc9ca0edfc13a50"
              class="edit-icon"
              alt="Edit information"
            />
            <span>Editar</span>
          </button>
        </div>
        <div class="info-grid">
          <div class="info-column">
            <div class="info-group">
              <h3 class="info-label">Nome</h3>
              <p class="info-value">Lorem ipsum</p>
              <h3 class="info-label">Endereço de email</h3>
              <p class="info-value">NomeSobrenome@email.com</p>
              <h3 class="info-label">Bio</h3>
              <p class="info-value">Born to dilli-dally, forced to lock in</p>
            </div>
          </div>
          <div class="info-column-secondary">
            <div class="info-group">
              <h3 class="info-label">Sobrenome</h3>
              <p class="info-value">Dolor sit amet</p>
              <h3 class="info-label">Telemóvel</h3>
              <p class="info-value">912345678</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  </main>
</template>

<script>
import { loginStore } from '../stores/loginStore.js';

export default {
  data(){
    let loginInfo = loginStore()
    return{
      username: loginInfo.getUserInfo.username
    }
  }
}
</script>

<style scoped>
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

.ticket-type {
  font-size: 16px;
  margin-top: 14px;
}

.edit-button {
  position: relative;
  font-size: 24px;
  color: #fff;
  padding: 14px 49px;
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