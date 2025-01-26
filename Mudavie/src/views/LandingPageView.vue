<script>
import Footer from '../components/Footer.vue'
import { RouterLink } from 'vue-router'

export default {
  components: {
    Footer,
    RouterLink
  },
  mounted() {
    const section2 = document.querySelector('.section-2');

    function checkVisibility() {
      const rect = section2.getBoundingClientRect();
      const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
      const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

      if (
        rect.top <= windowHeight &&
        rect.left <= windowWidth &&
        rect.bottom >= 0 &&
        rect.right >= 0
      ) {
        section2.classList.add('visible');
        window.removeEventListener('scroll', checkVisibility);
      }
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
  }
}
</script>

<template>
  <main class="sections-container">
    <section class="section section-1">
      <header>
        <nav>
          <RouterLink to="/about"><h1>Sobre</h1></RouterLink>
          <RouterLink to="/submissions"><h1>Submissões</h1></RouterLink>
          <RouterLink to="/program"><h1>Programa</h1></RouterLink>
          <RouterLink to="/tickets/General"><h1>Bilhetes</h1></RouterLink>
        </nav>
        <img id="img" src="../assets/logo.png" alt="">
      </header>
      <h1 class="bottom-left">Festival Anual de Cinema Mudo</h1>
    </section>
    <section class="section section-2">
      <h1 class="main-title">CELEBRA A ARTE<br>QUE FALA<br>SEM PALAVRAS</h1>
      <h1 class="description">Uma experiência única onde os clássicos da sétima arte ganham vida, acompanhados por música ao vivo e uma atmosfera envolvente.</h1>
      <nav class="bottom-nav">
        <RouterLink to="/about"><h1>Sobre</h1></RouterLink>
      </nav>
    </section>
    <section class="section section-3">
      <div class="video-container">
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/COuQZ0gqAJw?si=Ds8K0gT8gIVMZmp6" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </div>
    </section>
    <Footer />
  </main>
</template>

<style scoped>
@font-face {
  font-family: 'Chopin';
  src: url('../assets/ChopinVariable-Trial-Roman.ttf') format('truetype');
  font-weight: 100;
}

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  font-family: 'Chopin', sans-serif; 
}

header {
  width: 100%;
  position: fixed;
  top: 0;
  padding: 10px 20px;
  box-sizing: border-box;
  z-index: 1000;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  color: white;
  padding: 10px 20px;
}

header #img {
  width: 150%;
  max-width: 1200px;
  height: auto;
  border-radius: 50%;
}

.sections-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  box-sizing: border-box;
  padding-top: 0px;
}

.section {
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 2rem;
  scroll-snap-align: start;
}

.section-1 {
  position: relative;
  background-image: url('../assets/backgroundLanding.gif');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  padding-top: 0;
  display: flex;
  flex-direction: column;
}

.section-1 .bottom-left {
  position: absolute; 
  bottom: 20px;
  left: 20px;
  font-size: 2rem;
  color: white;
  z-index: 1001; 
}

.section-1 header {
  position: relative;
  z-index: 10;
}

.section-2 {
  background-color: #CCC26E;
  color: black;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  opacity: 0; 
  transform: translateX(100%); 
  transition: opacity 1s ease-out, transform 1s ease-out; 
}

.section-2.visible {
  opacity: 1; 
  transform: translateX(0); 
}

.section-2 .main-title {
  font-size: 10rem;
  font-weight: bold;
  line-height: 1.2;
  margin: 0 0 20px 0;
}

.section-2 .description {
  font-size: 1.5rem;
  line-height: 1.5;
  max-width: 50%;
  margin: 0 0 40px 0;
  color: #000; 
  font-weight: bolder;
}

.section-2 .bottom-nav {
  display: flex;
  gap: 20px;
}

.section-2 .nav-link {
  font-size: 1.5rem;
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-style: italic;
  margin: 0 0 40px 0;
}

.section-3 {
  background-color: #282934;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.section-3 .video-container {
  width: 80vw;
  height: 45vw;
  max-width: 1200px;
  max-height: 450px;
  position: relative;
  padding-bottom: 40%; /* Adjusted aspect ratio */
  height: 0;
}

.section-3 .video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.section-4 {
  background-color: #EEEEFF;
  color: black;
}

* {
  box-sizing: border-box;
}

@media (max-width: 768px) {
  nav {
    flex-direction: column;
    align-items: flex-start;
  }

  header #img {
    width: 100%;
    max-width: 100%;
  }

  .section-3 .video-container {
    width: 90vw;
    height: 40vw; /* Adjusted height */
  }
}
</style>