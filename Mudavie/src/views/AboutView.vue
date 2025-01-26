<template>
  <Navbar></Navbar>
  <main class="about-page">
    <header class="hero-section">
        <div class="hero-content">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e9ad2ed83e31c2f959f4550294da8b498858741c46443ae77cc4af00618e035?placeholderIfAbsent=true&apiKey=24c5612ec37d4fbcbfc9ca0edfc13a50"
            alt="Background texture"
            class="hero-background"
          />
          <h1 class="hero-title">Sobre</h1>
        </div>
      </header>
  
      <section class="content-section">
        <h2 class="section-title">Sobre o Cinema Mudo</h2>
        <div class="content-grid">
          <div class="content-column">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/697451d9e9b403b672c3ef9f0276f1b6686f18467d87a7c82b977c22d923ac8c?placeholderIfAbsent=true&apiKey=24c5612ec37d4fbcbfc9ca0edfc13a50"
              alt="Historic silent film scene"
              class="content-image"
            />
          </div>
          <div class="content-column">
            <p class="content-text">
              Um filme mudo caracteriza-se pela priorização da expressão visual
              e musical, além da ausência de uma trilha sonora correspondente
              diretamente às imagens exibidas, sendo esta substituída por
              músicas ou efeitos sonoros executados no momento da exibição.
              <br /><br />
              O diálogo é transmitido através de gestos suaves, mímica e letreiros
              explicativos.
              <br /><br />
              Eventos e festivais de cinema mudo são vitais para preservar a história 
              do cinema, e o seu público vem crescendo à medida que o interesse pela 
              herança cultural e estética do cinema mudo se renova ao longo dos anos.
            </p>
          </div>
        </div>
  
        <h2 class="section-title">Sobre o Festival</h2>
        <div class="content-grid">
          <div class="content-column">
            <p class="content-text">
              O MUDAVIE nasce em 2024 como uma celebração contemporânea da arte
              cinematográfica silenciosa. Inspirado nas origens do cinema, o
              festival propõe um olhar renovado sobre a expressividade visual e
              a narrativa sem palavras.
              <br /><br />
              Com o objetivo de valorizar o poder do gesto, da imagem e da música,
              o MUDAVIE oferece um palco para cineastas de todo o mundo apresentarem
              obras que ultrapassam fronteiras linguísticas e culturais. Para além das
              sessões de exibição, o festival conta com palestras, debates e eventos
              especiais que promovem o diálogo sobre a relevância do cinema mudo no
              contexto artístico atual.
            </p>
          </div>
          <div class="content-column">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/896abe88d01426b4763a9a26ad264ee74212536665a0bcfb395390ac80b50437?placeholderIfAbsent=true&apiKey=24c5612ec37d4fbcbfc9ca0edfc13a50"
              alt="Festival highlight moment"
              class="content-image"
            />
          </div>
        </div>
  
        <h2 class="section-title">Como Chegar</h2>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c3e7c78d878cca8e8256a13fc1a84ec8d23bb0772b77abe9a7c3d8d5fefcc2d?placeholderIfAbsent=true&apiKey=24c5612ec37d4fbcbfc9ca0edfc13a50"
          alt="Map showing theater location"
          class="location-map"
        />
        <p class="location-text">
          Teatro Nacional São João, Praça da Batalha, 4000-102 Porto
        </p>
      </section>
  
      <Footer></Footer>
    </main>
  </template>
  
<script setup>
import Footer from '../components/Footer.vue'
import Navbar from '../components/Navbar.vue'
</script>

<style scoped>
.content-column {
  display: flex;
  gap: 20px;
}

.about-page {
  background: #121211;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.hero-section {
  position: relative;
}

.hero-banner {
  aspect-ratio: 14.08;
  object-fit: contain;
  width: 100%;
  z-index: 10;
}

.hero-content {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 839px;
  color: #fff;
  padding: 348px 70px 278px;
  text-shadow: 1px 1px 7px #fefcfc;
}

.hero-background {
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.hero-title {
  position: relative;
  align-self: center;
  font: 500 96px Chopin-Trial, sans-serif;
}

.content-section {
  margin-top: 89px;
  padding: 0 36px;
}

.section-title {
  color: #fff;
  font-size: 30px;
  font-weight: 600;
  font-family: Chopin-Trial, sans-serif;
  margin: 20px 0 20px;
}

.content-grid {
  display: flex;
  gap: 50px;
  margin-bottom: 40px;
}

.content-image {
  width: 300px;
}

.content-text {
  color: #fff;
  font: 500 20px Chopin-Trial, sans-serif;
}

.location-map {
  aspect-ratio: 2.68;
  width: 100%;
  object-fit: contain;
}

.location-text {
  color: #fff;
  font: 400 20px Chopin-Trial, sans-serif;
  margin-bottom: 50px;
}

.site-footer {
  background: #1e201e;
  margin-top: 162px;
  padding: 18px 80px 18px 32px;
}

.footer-nav {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.footer-logo {
  width: 53px;
  aspect-ratio: 0.96;
}

.nav-links {
  list-style: none;
  padding: 0;
  margin: 8px 0;
}

.nav-link {
  color: #fff;
  font: 400 11px Chopin-Trial, sans-serif;
  text-decoration: none;
  display: block;
  margin: 10px 0;
}

.copyright {
  color: #fff;
  font: 400 11px Chopin-Trial, sans-serif;
  margin-top: 83px;
}

.footer-content {
  display: flex;
  gap: 100px;
  margin-top: 18px;
}

.contact-info {
  color: #fff;
  font: 400 11px Chopin-Trial, sans-serif;
}

.footer-heading {
  margin-bottom: 28px;
}

.address-text,
.phone-text,
.email-text {
  margin: 10px 0;
}

.sponsors {
  text-align: center;
}

.sponsor-logo {
  width: 71px;
  aspect-ratio: 4.44;
  margin: 10px 0;
}

.sponsor-type {
  margin: 32px 0 10px;
}

.support-logo {
  width: 101px;
  aspect-ratio: 2.73;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}

.social-media {
  color: #fff;
  font: 400 11px Chopin-Trial, sans-serif;
}

.social-grid {
  display: grid;
  grid-template-columns: repeat(3, 32px);
  gap: 20px;
  margin-top: 10px;
}

.social-icon {
  width: 32px;
  aspect-ratio: 1;
  object-fit: contain;
}
  
</style>