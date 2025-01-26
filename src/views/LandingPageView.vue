
<script>
  import Footer from '../components/Footer.vue'

  export default{
    components: {
        Footer,
    },
  }
</script>

<template>
  <main class="landing-page">
        <header class="hero-section">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/613d10c3d6b6c88ad799def7dd18cce029819de59c02e08eaa43b6358897f711?placeholderIfAbsent=true&apiKey=24c5612ec37d4fbcbfc9ca0edfc13a50"
            class="hero-background"
            alt="Festival background image"
          />
          <nav class="navigation">
            <a href="#about" class="nav-link">Sobre</a>
            <a href="#entries" class="nav-link">Call for Entries</a>
            <a href="#program" class="nav-link">Programa</a>
            <a href="#tickets" class="nav-link">Bilhetes</a>
          </nav>
          <div class="hero-content">
            <h1 class="festival-title">Festival Anual de Filmes<br />Mudos</h1>
            <a href="/" class="home-link" aria-current="page">Home</a>
          </div>
        </header>
    
        <section class="about-section" id="about">
          <div class="animation-container celebra-arte"></div>
          <div class="content-wrapper">
            <div class="content-grid">
              <div class="animation-container que-fala"></div>
              <p class="experience-description">
                Uma experiência única onde os clássicos da sétima arte ganham
                vida, acompanhados por música ao vivo e uma atmosfera envolvente.
              </p>
            </div>
          </div>
          <div class="animation-container sem-palavras"></div>
          <a href="#about" class="about-button">Sobre</a>
        </section>
    
        <section class="video-section">
          <div class="video-container">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/49e296258ceca7d96937713fb6d7268bba1544db845a2313d7228b7671b8b772?placeholderIfAbsent=true&apiKey=24c5612ec37d4fbcbfc9ca0edfc13a50"
              class="play-icon"
              alt="Play video button"
            />
          </div>
        </section>
    
        <section class="tickets-section" id="tickets">
          <div class="tickets-content">
            <div class="animation-container nao-fique"></div>
            <div class="animation-container reserve-ja"></div>
            <div class="animation-container garanta-lugar"></div>
            <a href="#tickets" class="ticket-button">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b468c9bcbc8da0ef12eaab79a1e10c19eeecd064c156ad9681e9483259cab39?placeholderIfAbsent=true&apiKey=24c5612ec37d4fbcbfc9ca0edfc13a50"
                alt="Ticket icon"
                class="ticket-icon"
              />
              Bilhetes
            </a>
          </div>
        </section>
    
        <Footer></Footer>
      </main>
    </template>
    
    <style scoped>
    .landing-page {
      background-color: #fff;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }
    
    .hero-section {
      position: relative;
      min-height: 1031px;
      width: 100%;
      font-family: Chopin-Trial, sans-serif;
      font-weight: 400;
      padding: 13px 36px 63px;
    }
    
    .hero-background {
      position: absolute;
      inset: 0;
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: center;
    }
    
    .navigation {
      position: relative;
      display: flex;
      gap: 100px;
      font-size: 32px;
      color: #eef;
    }
    
    .nav-link {
      color: inherit;
      text-decoration: none;
    }
    
    .hero-content {
      position: relative;
      display: flex;
      margin-top: 823px;
      align-items: start;
      gap: 20px;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    
    .festival-title {
      color: #eef;
      font-size: 24px;
      margin-top: 15px;
    }
    
    .home-link {
      color: #000;
      font-size: 36px;
      text-decoration: none;
    }
    
    .about-section {
      background-color: #ccc26e;
      display: flex;
      width: 100%;
      flex-direction: column;
      align-items: start;
      padding: 200px 80px 61px 35px;
    }
    
    .animation-container {
      background-color: transparent;
      display: flex;
      width: 100%;
      max-width: 1204px;
      height: 188px;
    }
    
    .content-wrapper {
      z-index: 10;
      margin-top: -28px;
      width: 100%;
      max-width: 1216px;
    }
    
    .content-grid {
      display: grid;
      grid-template-columns: 58% 42%;
      gap: 20px;
    }
    
    .experience-description {
      color: #000;
      font: 600 20px Chopin-Trial, sans-serif;
      align-self: center;
    }
    
    .about-button {
      border-radius: 10px;
      background-color: #ccc26e;
      margin-top: 186px;
      color: #000;
      padding: 14px 35px;
      font: 600 20px Chopin-Trial, sans-serif;
      text-decoration: none;
    }
    
    .video-section {
      background-color: #282934;
      display: flex;
      width: 100%;
      justify-content: center;
      padding: 287px 80px;
    }
    
    .video-container {
      background-color: #d9d9d9;
      display: flex;
      width: 750px;
      justify-content: center;
      padding: 157px 80px;
    }
    
    .play-icon {
      width: 110px;
      aspect-ratio: 1;
      object-fit: contain;
    }
    
    .tickets-section {
      background-color: #eef;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 321px 80px 188px;
    }
    
    .tickets-content {
      display: flex;
      width: 100%;
      max-width: 1058px;
      flex-direction: column;
      align-items: center;
    }
    
    .ticket-button {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-top: 74px;
      padding: 17px 43px;
      text-decoration: none;
      color: #000;
      font: 600 20px Chopin-Trial, sans-serif;
    }
    
    .site-footer {
      background-color: #1e201e;
      padding: 18px 41px 18px 17px;
      color: #fff;
    }
    
    .footer-content {
      display: flex;
      flex-direction: column;
      gap: 40px;
    }
    
    .footer-grid {
      display: grid;
      grid-template-columns: 22% 16% 36% 26%;
      gap: 20px;
    }
    
    .footer-nav {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 11px;
    }
    
    .footer-logo {
      width: 83px;
      aspect-ratio: 1.51;
      object-fit: contain;
    }
    
    .footer-links {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-top: 8px;
    }
    
    .footer-links a {
      color: #fff;
      text-decoration: none;
    }
    
    .festival-info,
    .contact-info,
    .sponsors {
      font-size: 11px;
    }
    
    .social-newsletter {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    
    .social-icons {
      display: flex;
      gap: 11px;
    }
    
    .newsletter-button {
      border: 1px solid #fff;
      background: transparent;
      color: #fff;
      padding: 8px 41px;
      font: 600 11px Chopin-Trial, sans-serif;
      cursor: pointer;
    }
    
    .copyright {
      margin-top: 49px;
      font-size: 11px;
    }
    
    .visually-hidden {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      border: 0;
    }
    
    @media (max-width: 991px) {
      .hero-section {
        max-width: 100%;
        padding: 0 20px;
      }
    
      .navigation {
        max-width: 100%;
        margin-right: 10px;
      }
    
      .hero-content {
        max-width: 100%;
        margin-top: 40px;
      }
    
      .about-section {
        max-width: 100%;
        padding: 100px 20px;
      }
    
      .content-grid {
        grid-template-columns: 1fr;
      }
    
      .about-button {
        margin-top: 40px;
      }
    
      .video-section {
        padding: 100px 20px;
      }
    
      .video-container {
        padding: 100px 20px;
      }
    
      .tickets-section {
        padding: 100px 20px;
      }
    
      .footer-grid {
        grid-template-columns: 1fr;
      }
    
      .footer-nav,
      .festival-info,
      .contact-info,
      .sponsors {
        margin-top: 40px;
      }
    }
    </style>