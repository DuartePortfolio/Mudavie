<script setup>
    import { RouterLink } from 'vue-router'
    import { movieStore } from '../stores/movies';  
    import { loginStore } from '../stores/loginStore';

</script>

<template>
    <article id="moviePopup">
      <div class="movie-container">
        <div class="content-wrapper">
          <div class="poster-column">
            <img id="moviePoster" />
          </div>
          <div class="info-column">
            <div class="movie-info">
              <div class="header-section">
                <div class="title-section">
                  <h1 id="movie-title">The Lodger</h1>
                  <p class="venue-name">Teatro Nacional São João</p>
                </div>
                <div class="rating-section">
                  <p id="voteTally">{{ movies.votes[movies.focusedMovie] }}</p>

                  <div id="favoriteContainer" @click="toggleFavorite($event)">
                      <svg v-if="movies.favorited[movies.focusedMovie]" height="50px" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" id="heart" x="0" y="0" version="1.1" viewBox="0 0 512 512">
                          <path d="M256 448l-30.164-27.211C118.718 322.442 48 258.61 48 179.095 48 114.221 97.918 64 162.4 64c36.399 0 70.717 16.742 93.6 43.947C278.882 80.742 313.199 64 349.6 64 414.082 64 464 114.221 464 179.095c0 79.516-70.719 143.348-177.836 241.694L256 448z" fill="#ccc26e" class="color000000 svgShape"></path>
                      </svg>
                      <svg v-else height="50px" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" id="heart" x="0" y="0" version="1.1" viewBox="0 0 512 512">
                          <path d="M349.6 64c-36.4 0-70.718 16.742-93.6 43.947C233.117 80.742 198.8 64 162.4 64 97.918 64 48 114.221 48 179.095c0 79.516 70.718 143.348 177.836 241.694L256 448l30.164-27.211C393.281 322.442 464 258.61 464 179.095 464 114.221 414.082 64 349.6 64zm-80.764 329.257l-4.219 3.873-8.617 7.773-8.616-7.772-4.214-3.869c-50.418-46.282-93.961-86.254-122.746-121.994C92.467 236.555 80 208.128 80 179.095c0-22.865 8.422-43.931 23.715-59.316C118.957 104.445 139.798 96 162.4 96c26.134 0 51.97 12.167 69.11 32.545L256 157.661l24.489-29.116C297.63 108.167 323.465 96 349.6 96c22.603 0 43.443 8.445 58.686 23.778C423.578 135.164 432 156.229 432 179.095c0 29.033-12.467 57.459-40.422 92.171-28.784 35.74-72.325 75.709-122.742 121.991z" fill="#ccc26e" class="color000000 svgShape"></path>
                      </svg>
                  </div>

                  <div id="voteContainer" @click="toggleVote($event)">
                    <svg v-if="movies.voted[movies.focusedMovie]" height="50px" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" id="star" viewBox="0 0 512 512" >
                        <path d="M256 372.686 380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z" fill="#ccc26e" class="color000000 svgShape"></path>
                    </svg>
                      <svg v-else height="50px" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" id="star" x="0" y="0" version="1.1" viewBox="0 0 512 512">
                          <path d="M458 210.409l-145.267-12.476L256 64l-56.743 133.934L54 210.409l110.192 95.524L131.161 448 256 372.686 380.83 448l-33.021-142.066L458 210.409zM272.531 345.286L256 335.312l-16.53 9.973-59.988 36.191 15.879-68.296 4.369-18.79-14.577-12.637-52.994-45.939 69.836-5.998 19.206-1.65 7.521-17.75 27.276-64.381 27.27 64.379 7.52 17.751 19.208 1.65 69.846 5.998-52.993 45.939-14.576 12.636 4.367 18.788 15.875 68.299-59.984-36.189z" fill="#ccc26e" class="color000000 svgShape"></path>
                      </svg>
                  </div>
                </div>
              </div>
              <div class="schedule-info">
                <div class="date-info">
                  <span id="date-number">11</span>
                  <span class="month">janeiro</span>
                </div>
                <div class="time-info">
                  <span id="day">sábado</span>
                  <span id="time-range">19:15 - 20:30</span>
                </div>
              </div>
              <h2 class="synopsis-title">Sinopse</h2>
              <p id="synopsis-text">
                The Lodger (1997), dirigido por David Lean, é um emocionante
                thriller psicológico. Ambientado em Londres, o filme acompanha um
                misterioso hóspede que chega a uma pensão no meio de uma série de
                assassinatos brutais, inspirados no famoso caso de Jack, o
                Estripador. À medida que a tensão cresce, o hóspede torna-se o
                principal suspeito, mas será ele realmente o assassino?
              </p>
              <button class="purchase-button" id="purchase-button">
                <router-link :to="{ path: `/Tickets/${movieStore().selectedMovies[movieStore().focusedMovie]}`}">
                  Comprar Bilhetes
                </router-link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  </template>
  
  <script>
  export default {
      data() {
          return{
              movies: movieStore(),
          }
      },

      methods: {
          toggleFavorite(event) {
            event.stopPropagation()
              if (this.movies.favorited[this.movies.focusedMovie]) {
                // alert("Removido aos favoritos")
                movieStore().favorited[movieStore().focusedMovie] = false
              } else {
                // alert("Adicionado aos favoritos")
                movieStore().favorited[movieStore().focusedMovie] = true
              } 
          },

          toggleVote(event) {
            event.stopPropagation()
              if (this.movies.voted[this.movies.focusedMovie]) {
                // alert("Voto Retirado")
                movieStore().voted[movieStore().focusedMovie] = false
                movieStore().votes[movieStore().votedMovie] -= 1
                movieStore().votedMovie = null
              } else {
                // alert("Voto Computado")
                movieStore().voted = [false, false, false, false, false, false, false, false, false]
                movieStore().voted[movieStore().focusedMovie] = true
                if (movieStore().votedMovie !== null){
                  movieStore().votes[movieStore().votedMovie] -= 1
                }
                movieStore().votedMovie = movieStore().focusedMovie
                movieStore().votes[movieStore().votedMovie] += 1
              }
          },
      },
  };
</script>
  
  <style scoped>
  #moviePopup {
    background: #eef;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
    width: fit-content;
    height: fit-content;
    min-width: 70%;
    flex-direction: column;
    overflow: hidden;
  }
  
  .movie-container {
    background: #eef;
    width: 100%;
    padding-left: 80px;
    overflow: hidden;
  }
  
  .content-wrapper {
    gap: 20px;
    display: flex;
  }
  
  .poster-column {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 21%;
  }
  
  #moviePoster {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  
  .info-column {
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: 79%;
    margin-left: 20px;
  }
  
  .movie-info {
    background: #eef;
    display: flex;
    width: 100%;
    flex-direction: column;
    margin: 0 auto;
    padding: 20px 18px 50px;
  }
  
  .header-section {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  
  .title-section {
    width: 74%;
  }
  
  #movie-title {
    color: #3f3f3f;
    font: 600 64px Chopin-Trial, sans-serif;
    margin: 0;
  }
  
  .venue-name {
    color: #1e201e;
    font: 400 16px Chopin-Trial, sans-serif;
    margin-top: 13px;
  }
  #voteTally {
    color: #1e201e;
    font: 400 16px Chopin-Trial, sans-serif;
    margin-top: 13px;
  }
  
  .rating-section {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 23px;
    align-items: start;
    gap: 24px;
  }
  
  .rating-icon {
    width: 50px;
    height: auto;
  }
  
  .schedule-info {
    display: flex;
    margin-top: 13px;
    width: 276px;
    max-width: 100%;
    gap: 20px;
    justify-content: space-between;
    font: 400 20px Chopin-Trial, sans-serif;
  }
  
  .date-info, .time-info {
    display: flex;
    flex-direction: column;
  }
  
  #date-number {
    color: #1e201e;
  }
  
  .month, #time-range {
    color: #7a7d7d;
  }
  
  #day {
    color: #1e201e;
  }
  
  .synopsis-title {
    color: #1e201e;
    margin-top: 10px;
    font: 400 20px Chopin-Trial, sans-serif;
  }
  
  #synopsis-text {
    color: #7a7d7d;
    margin-top: 10px;
    font: 400 20px Chopin-Trial, sans-serif;
  }
  
  .purchase-button {
    color: #fff;
    background: #1e201e;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    align-self: center;
    margin-top: 20px;
    font: 400 16px Chopin-Trial, sans-serif;
    cursor: pointer;
  }
  
  .purchase-button:hover {
    background: #2a2c2a;
  }
  
  .purchase-button:focus {
    outline: 2px solid #4a4c4a;
    outline-offset: 2px;
  }
  
  @media (max-width: 991px) {
    .movie-container {
      max-width: 100%;
      padding-left: 20px;
    }
  
    .content-wrapper {
      flex-direction: column;
      align-items: stretch;
      gap: 0;
    }
  
    .poster-column, .info-column {
      width: 100%;
      margin-left: 0;
    }
  
    .movie-poster {
      margin-top: 40px;
    }
  
    .movie-info {
      margin-top: 40px;
    }
  
    .movie-title {
      font-size: 40px;
    }
  
    .rating-section {
      margin-top: 40px;
    }
  
    .purchase-button {
      margin-top: 40px;
    }
  }
  </style>