<script setup>
  import { onMounted } from "vue";
  import Footer from '../components/Footer.vue'
  import MoviePopup from "../components/MoviePopup.vue";
  import { movieStore } from '../stores/movies';
  import Navbar from '../components/Navbar.vue'

  onMounted(() => {
    const popup = document.getElementById("moviePopup");

    if (popup) {
      document.getElementById("programa").addEventListener("click", (event) => {
        const posters = ["poster1", "poster2", "poster3", "poster4", "poster5", "poster6", "poster7", "poster8", "poster9"].map((id) =>
          document.getElementById(id)
        )

        if (!popup.contains(event.target) && !posters.includes(event.target)) {
          popup.style.display = "none";
          document.getElementById("purchase-button").style.display = "block"
          document.getElementById("voteTally").style.display = "block"
          document.getElementById("heart").style.display = "block"
          document.getElementById("star").style.display = "block"
        }
      });
    } else {
      console.warn("Popup element not found in the DOM.");
    }
  });


// const popup = document.getElementById("moviePopup");
//   console.log(popup);
//   
//   const poster1 = document.getElementById("poster1");
//   const poster2 = document.getElementById("poster2");
//   const poster3 = document.getElementById("poster3");
//   const poster4 = document.getElementById("poster4");
//   const poster5 = document.getElementById("poster5");
// popup.addEventListener("click", (event) => {
// 
//   if (
//     !popup.contains(event.target)
//     && event.target !== poster1
//     && event.target !== poster2
//     && event.target !== poster3
//     && event.target !== poster4
//     && event.target !== poster5
//   ){
//     popup.style.display = "none";
//   }
// });


</script>

<template>
  <Navbar></Navbar>
  <section id="programa">
    <div class="hero-section">
      <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/2411831586997e82dbeca4d410acf0424efae3e70f92af21ab89ecf4ee92d52a?placeholderIfAbsent=true&apiKey=24c5612ec37d4fbcbfc9ca0edfc13a50"
      class="hero-background"
      alt="Festival hero background"
      />
        <h1 class="hero-title">Programa</h1>
      </div>
      <div class="date-section">
        <time datetime="2025-01-11" class="date">Dia 11/01/2025</time>

        <div class="schedule-block">
          <img class="poster" id="poster1" :src="moviePoster1" @click="openMoviePopup(0)">
          <img class="poster" id="poster2" :src="moviePoster2" @click="openMoviePopup(1)">
          <img class="poster" id="poster3" :src="moviePoster3" @click="openMoviePopup(2)">
        </div>

        <MoviePopup id="moviePopup"></MoviePopup>

        <div class="date-divider">
          <hr class="divider-line" />
          <time datetime="2025-01-12" class="date">Dia 12/01/2025</time>
        </div>
        <div class="schedule-block">
          <img class="poster" id="poster4" :src="moviePoster4" @click="openMoviePopup(3)">
          <img class="poster" id="poster5" :src="moviePoster5" @click="openMoviePopup(4)">
          <img class="poster" id="poster6" :src="moviePoster6" @click="openMoviePopup(5)">
        </div>
        <div class="date-divider">
          <hr class="divider-line" />
          <time datetime="2025-01-13" class="date">Dia 13/01/2025</time>
        </div>
        <div class="schedule-block">
          <img class="poster" id="poster7" :src="moviePoster7" @click="openMoviePopup(5)">
          <img class="poster" id="poster8" :src="moviePoster8" @click="openMoviePopup(5)">
          <img class="poster" id="poster9" :src="moviePoster9" @click="openMoviePopup(5)">
        </div>
        <hr class="divider-line" />
      </div>
      
      <section id="premios">
        <h2 class="awards-title">Prémios MUDAVIE - A Celebração do Brilho do Cinema Mudo Moderno!</h2>
      </section>
      
      <div class="content-wrapper">
        <div class="content-grid">
          <div class="description-column">
            <p class="awards-description">
              Os Prémios MUDAVIE destacam a essência do cinema mudo, homenageando
              a criatividade, a arte e o poder da narrativa visual. Com quatro
              categorias emocionantes, o festival consagra tanto talentos
              emergentes como obras consagradas.<br /><br />O Prémio de Melhor
              Filme celebra a obra-prima definitiva, capaz de emocionar e inspirar
              sem a necessidade de palavras. O Prémio de Melhor Filme Low Budget
              prova que grandes histórias não precisam de grandes orçamentos,
              apenas de uma grande visão criativa. O Prémio de Melhor Ator
              reconhece as performances mais marcantes, onde cada olhar e gesto
              conta uma história inteira. Por fim, o Prémio da Comunidade é o
              troféu do público — o momento em que os fãs fazem ouvir a sua voz,
              consagrando o filme que mais os tocou.<br /><br />Participe, apoie e
              descubra as novas lendas do cinema mudo no MUDAVIE!
            </p>
          </div>
          <div class="award-column">
            <section class="carousel" aria-label="Gallery">
                <ol class="carousel__viewport">
                    <li id="carousel__slide1" tabindex="0" class="carousel__slide">
                        <img src="..\assets\carousel\image1.png" class="carousel-img" alt="Melhor Filme">
                        <h3>Melhor Filme</h3>
                    </li>
                    <li id="carousel__slide2" tabindex="0" class="carousel__slide">
                        <img src="..\assets\carousel\image2.png" class="carousel-img" alt="Melhor Filme Low Budget">
                        <h3>Melhor Filme Low Budget</h3>
                    </li>
                    <li id="carousel__slide3" tabindex="0" class="carousel__slide">
                        <img src="..\assets\carousel\image3.png" class="carousel-img" alt="Melhor Ator / Atriz">
                        <h3>Melhor Ator / Atriz</h3>
                    </li>
                    <li id="carousel__slide4" tabindex="0" class="carousel__slide">
                        <img src="..\assets\carousel\image4.png" class="carousel-img" alt="Prémio do Público">
                        <h3>Prémio do Público</h3>
                    </li>
                </ol>
                <section class="carousel__navigation">
                    <li class="carousel__navigation-item">
                        <a href="#carousel__slide1"
                        class="carousel__navigation-button">Go to slide 1</a>
                    </li>
                    <li class="carousel__navigation-item">
                        <a href="#carousel__slide2"
                        class="carousel__navigation-button">Go to slide 2</a>
                    </li>
                    <li class="carousel__navigation-item">
                        <a href="#carousel__slide3"
                        class="carousel__navigation-button">Go to slide 3</a>
                    </li>
                    <li class="carousel__navigation-item">
                        <a href="#carousel__slide4"
                        class="carousel__navigation-button">Go to slide 4</a>
                    </li>
                </section>
            </section>
        </div>
        </div>
      </div>
  
      <Footer></Footer>
    </section>
</template>
  
<script>


  // https://img.omdbapi.com/?t=Interstellar&y=2014&apikey=6bc669ce

export default {
  data() {
    let movies = movieStore()
    return {
      moviePoster1: movies.getMoviePoster(movies.selectedMovies[0], movies.movieYears[0], "poster1", false),
      moviePoster2: movies.getMoviePoster(movies.selectedMovies[1], movies.movieYears[1], "poster2", false),
      moviePoster3: movies.getMoviePoster(movies.selectedMovies[2], movies.movieYears[2], "poster3", false),
      moviePoster4: movies.getMoviePoster(movies.selectedMovies[3], movies.movieYears[3], "poster4", false),
      moviePoster5: movies.getMoviePoster(movies.selectedMovies[4], movies.movieYears[4], "poster5", false),
      moviePoster6: movies.getMoviePoster(movies.selectedMovies[5], movies.movieYears[5], "poster6", true),
      moviePoster7: movies.getMoviePoster(movies.selectedMovies[5], movies.movieYears[5], "poster7", true),
      moviePoster8: movies.getMoviePoster(movies.selectedMovies[5], movies.movieYears[5], "poster8", true),
      moviePoster9: movies.getMoviePoster(movies.selectedMovies[5], movies.movieYears[5], "poster9", true),
    }
  },
  methods: {
    openMoviePopup: (movieNumber) => {
      let requestedMovieTitle = movieStore().selectedMovies[movieNumber]
      let requestedMovieYear = movieStore().movieYears[movieNumber]
      movieStore().changeFocusedMovie(movieNumber)
      movieStore().getMovieInfo(requestedMovieTitle, requestedMovieYear, movieNumber)
    }
  },
  components: {
    Footer,
    MoviePopup
  },
}
</script>

  <style scoped>
@keyframes tonext {
  75% {
    left: 0;
  }
  95% {
    left: 100%;
  }
  98% {
    left: 100%;
  }
  99% {
    left: 0;
  }
}

@keyframes tostart {
  75% {
    left: 0;
  }
  95% {
    left: -300%;
  }
  98% {
    left: -300%;
  }
  99% {
    left: 0;
  }
}

@keyframes snap {
  96% {
    scroll-snap-align: center;
  }
  97% {
    scroll-snap-align: none;
  }
  99% {
    scroll-snap-align: none;
  }
  100% {
    scroll-snap-align: center;
  }
}


* {
  box-sizing: border-box;
  scrollbar-width: 0px;
}

*::-webkit-scrollbar {
  width: 0;
}

*::-webkit-scrollbar-track {
  background: transparent;
}

*::-webkit-scrollbar-thumb {
  background: transparent;
  border: none;
}

* {
  -ms-overflow-style: none;
}

ol, li {
  list-style: none;
  margin: 0;
  padding: 0;
}

.carousel {
  position: relative;
  padding-top: 75%;
  perspective: 100px;
}

.carousel__viewport {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
}

.carousel-img {
    width:500px;
    height: auto;
}

h3 {
    margin-top: 10px;
    font-size: 25px;
}

.carousel__slide {
  position: relative;
  flex: 0 0 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.carousel__snapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  scroll-snap-align: center;
}

@media (hover: hover) {
    .carousel__snapper {
        animation-name: tonext, snap;
        animation-timing-function: ease;
        animation-duration: 4s;
        animation-iteration-count: infinite;
    }   

    .carousel__slide:last-child .carousel__snapper {
        animation-name: tostart, snap;
    }
}

@media (prefers-reduced-motion: reduce) {
    .carousel__snapper {
        animation-name: none;
    }
}

.carousel:hover .carousel__snapper,
.carousel:focus-within .carousel__snapper {
    animation-name: none;
}

.carousel__navigation {
    position: absolute;
    right: 0;
    left: 0;
    text-align: center;
    bottom: 60px;
    margin-top: -20px;
}



.carousel__navigation-list,
.carousel__navigation-item {
    display: inline-block;
}

.carousel__navigation-button {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    background-color: #333;
    background-clip: content-box;
    border: 0.25rem solid transparent;
    border-radius: 50%;
    font-size: 0;
    transition: transform 0.1s;
}

.carousel__navigation-button:active {
    background-color: white;
}

.poster {
    cursor: pointer;
    width: 50%;
  }
  #programa {
    background-color: #121211;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  
  .header-image {
    aspect-ratio: 14.08;
    object-fit: contain;
    width: 100%;
    z-index: 10;
  }
  
  .hero-section {
    position: relative;
    min-height: 839px;
    color: #fff;
    padding: 348px 70px 278px;
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
    font: 500 96px Chopin-Trial, sans-serif;
    text-shadow: 1px 1px 7px #fefcfc;
  }
  
  .date-section {
    display: flex;
    flex-direction: column;
    padding: 0 43px;
  }
  
  .date {
    color: #fff;
    font: 500 32px Chopin-Trial, sans-serif;
    margin: 70px 0 73px;
  }
  
  .schedule-block {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    justify-items: center;
    align-items: center;
    gap: 20px;
    list-style: none;
    padding-left: 0;
    background-color: transparent;
    width: 100%;
  }
  
  .date-divider {
    display: flex;
    flex-direction: column;
    margin: 15px 0;
    padding: 0 32px;
  }
  
  .divider-line {
    border: 1px solid #fff;
    margin: 0;
  }
  
  .awards-title {
    color: #fff;
    font: 500 40px Chopin-Trial, sans-serif;
    text-align: center;
    margin: 51px 0;
  }
  
  .content-wrapper {
    max-width: 1372px;
    margin: 55px auto;
    padding: 0 20px;
  }
  
  .content-grid {
    display: flex;
    gap: 20px;
  }
  
  .description-column {
    flex: 0 0 56%;
  }
  
  .awards-description {
    color: #fff;
    font: 500 24px Chopin-Trial, sans-serif;
  }
  
  .award-column {
    flex: 0 0 44%;
  }
  
  .award-card {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .award-image {
    aspect-ratio: 1.66;
    width: 100%;
    object-fit: contain;
  }
  
  .award-title {
    color: #fff;
    font: 500 48px Chopin-Trial, sans-serif;
    margin: 41px 0;
  }
  
  .navigation-controls {
    display: flex;
    gap: 20px;
    align-items: center;
  }
  
  .nav-button {
    color: #fff;
    font: 500 36px Chopin-Trial, sans-serif;
    background: none;
    border: none;
    cursor: pointer;
  }
  
  .nav-indicator {
    border-radius: 3px;
    background-color: #fff;
    padding: 3px;
  }
  
  .nav-dot {
    border-radius: 3px;
    background-color: #ccc26e;
    width: 19px;
    height: 21px;
  }
  
  .site-footer {
    background-color: #1e201e;
    display: flex;
    padding: 20px 34px;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
  .footer-nav {
    display: flex;
    flex-direction: column;
    color: #fff;
    font: 400 11px Chopin-Trial, sans-serif;
  }
  
  .nav-links {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
  
  .footer-logo {
    width: 53px;
    aspect-ratio: 0.96;
  }
  
  .nav-link {
    color: #fff;
    text-decoration: none;
  }
  
  .copyright {
    margin-top: 80px;
    text-align: center;
  }
  
  .contact-info {
    color: #fff;
    font: 400 11px Chopin-Trial, sans-serif;
    font-style: normal;
  }
  
  .contact-title {
    margin-bottom: 28px;
  }
  
  .address-text,
  .phone-text,
  .email-text {
    margin: 10px 0;
  }
  
  .sponsors-section {
    display: flex;
    flex-direction: column;
    color: #fff;
    text-align: center;
    font: 400 11px Chopin-Trial, sans-serif;
  }
  
  .sponsor-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  
  .sponsor-logo {
    width: 71px;
    aspect-ratio: 4.44;
  }
  
  .financial-support-logo {
    width: 101px;
    aspect-ratio: 2.73;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    margin-top: 10px;
  }
  
  .social-section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .social-title {
    color: #fff;
    font: 400 11px Chopin-Trial, sans-serif;
    margin-bottom: 10px;
  }
  
  .social-grid {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  .social-row {
    display: flex;
    gap: 20px;
  }
  
  .social-icon {
    width: 32px;
    aspect-ratio: 1;
  }
  
  @media (max-width: 991px) {
    .header-image,
    .hero-background {
      max-width: 100%;
    }
  
    .hero-section {
      max-width: 100%;
      font-size: 40px;
      padding: 100px 20px 110px;
    }
  
    .date {
      margin: 40px 0 40px 10px;
    }
  
    .schedule-block {
      max-width: 100%;
      margin-top: 40px;
    }
  
    .date-divider {
      padding: 0 20px;
    }
  
    .awards-title {
      max-width: 100%;
      margin: 40px 0;
    }
  
    .content-grid {
      flex-direction: column;
    }
  
    .description-column,
    .award-column {
      width: 100%;
    }
  
    .award-title {
      margin: 40px 0;
      font-size: 40px;
    }
  
    .copyright {
      margin-top: 40px;
    }
  
    .site-footer {
      padding: 20px;
    }
  }
  </style>