import { defineStore } from 'pinia'
import { searchMovie } from '@/API/OMDb_API';

export const movieStore = defineStore('movies', {
  state: () => ({
    API_key: "6bc669ce",
    selectedMovies: ["The Lodger","Nosferatu", "Metropolis", "General", "The Kid", "Por anunciar"],
    movieYears: ["1927", "1922", "1927", "1926", "1921", ""],
    movieSynopsis: [
      "The Lodger (1997), dirigido por David Lean, é um emocionante thriller psicológico. Ambientado em Londres, o filme acompanha um misterioso hóspede que chega a uma pensão no meio de uma série de assassinatos brutais, inspirados no famoso caso de Jack, o Estripador. À medida que a tensão cresce, o hóspede torna-se o principal suspeito, mas será ele realmente o assassino?",
      "Nosferatu (1922), de F.W. Murnau, é um clássico do terror e ícone do expressionismo alemão. Inspirado em Drácula, apresenta o sinistro Conde Orlok, cuja aparência arrepiante se tornou símbolo do horror. A história segue Hutter, um agente imobiliário que descobre a verdadeira natureza do conde: um vampiro sedento de sangue. Com sombras fantasmagóricas e uma atmosfera de medo constante, Nosferatu é uma experiência visual inesquecível e essencial para os fãs do terror clássico.",
      "Metropolis (1927), de Fritz Lang, é uma obra-prima do cinema mudo e da ficção científica. Numa cidade futurista dividida entre a elite e os operários, Freder, filho do líder, junta-se à luta dos trabalhadores após se apaixonar por Maria, uma figura de esperança. Com cenários grandiosos, efeitos visuais inovadores e uma forte crítica social, Metropolis continua a ser um marco do cinema, inspirando filmes até hoje.",
      "General (1926), de Buster Keaton, é uma das comédias mais aclamadas de todos os tempos. Situado durante a Guerra Civil Americana, o filme segue Johnnie, um maquinista cuja locomotiva é roubada pelos inimigos, e ele parte numa missão para recuperá-la. Com acrobacias espetaculares e um humor inteligente, Keaton brilha em cenas cheias de ação e engenhosidade, tornando General uma mistura única de comédia e aventura.",
      "O Garoto (1921), de Charlie Chaplin, é uma comédia emocionante que mistura humor e drama de forma magistral. Chaplin interpreta o Vagabundo, que encontra e adota um menino órfão, formando uma ligação afetuosa com ele. Juntos enfrentam dificuldades e desafios, mas a relação deles é marcada por momentos de ternura e riso.",
      "Este filme ainda está por anunciar. Será a exibição de um dos filmes a concurso",
    ],
    timeInfo: ["11/Sábado/19:00", "11/Sábado/21:00", "11/Sábado/22:00", "12/Domingo/15:00", "12/Domingo/18:00", " / / "],
    favorited: [false, false, false, false, false, false, false, false, false],
    voted: [false, false, false, false, false, false, false, false, false],
    votedMovie: null,
    votes: [10, 20, 30, 40, 50, 0, 0, 0, 0],
    placeHolderPoster: "https://m.media-amazon.com/images/M/MV5BZGFmY2ZiMTUtMjUwMy00YmU4LTkzMjAtZjU2MzNlYzc5ZTE3XkEyXkFqcGc@._V1_.jpg",
    focusedMovie: 0,
    focusedPoster: "",
    popupVisible: false,
    
  }),
  getters: {

    getMovieInfo: (state) => {
      
      return (title, year, movieNumber) => {
        
        searchMovie(title, year).then((movieData)=>{
          if(movieNumber === 5){
            state.focusedPoster = state.placeHolderPoster
            document.getElementById("moviePoster").src = state.placeHolderPoster
          } else{
            state.focusedPoster = movieData.movieData.Poster
            document.getElementById("moviePoster").src = movieData.movieData.Poster
          }
          let popup = document.getElementById("moviePopup")
          let timeSpecifics = state.timeInfo[movieNumber].split("/")
          document.getElementById("date-number").textContent = timeSpecifics[0]
          document.getElementById("day").textContent = timeSpecifics[1]
          document.getElementById("time-range").textContent = timeSpecifics[2]
          document.getElementById("movie-title").textContent = state.selectedMovies[movieNumber]
          document.getElementById("synopsis-text").textContent = state.movieSynopsis[movieNumber]
          
          if (popup.style.display == "flex") {
            popup.style.display = "none"
            state.popupVisible = false
            document.getElementById("purchase-button").style.display = "block"
            document.getElementById("voteTally").style.display = "block"
            document.getElementById("heart").style.display = "block"
            document.getElementById("star").style.display = "block"
          } else {
            popup.style.display = "flex"
            state.popupVisible = true
            if(movieNumber === 5){
              document.getElementById("purchase-button").style.display = "none"
            document.getElementById("voteTally").style.display = "none"
              document.getElementById("heart").style.display = "none"
              document.getElementById("star").style.display = "none"
            }
          }
        })
      }
    },
    getMoviePoster: (state) => {
      
      return (title, year, elementID, placeHolder) => {
        searchMovie(title, year).then((movieData)=>{
          if (placeHolder){
            document.getElementById(elementID).src = state.placeHolderPoster
          }else{
            document.getElementById(elementID).src = movieData.movieData.Poster
          }
        })
      }
    },
  },
  actions: {
    changeFocusedMovie(movie){
      this.focusedMovie = movie
    },

  }
})
