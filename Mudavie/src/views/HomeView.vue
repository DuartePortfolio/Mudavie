<script setup>
  import  Navbar  from '../components/Navbar.vue'
</script>


<template>
    <main id="welcome-page">
      <Navbar></Navbar>
      <!-- <header class="hero-section">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/68e046e775ab54677834a2622639a646c2162e2e66c0d9fa159f431ec1bf8a0f?placeholderIfAbsent=true&apiKey=24c5612ec37d4fbcbfc9ca0edfc13a50"
          class="hero-background"
          alt=""
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/76728ea78d231b9b010a8b3ee474f3561037aeb22d19fff5f866d4d1ac5dbfec?placeholderIfAbsent=true&apiKey=24c5612ec37d4fbcbfc9ca0edfc13a50"
          class="hero-overlay"
          alt=""
        />
        <h1 class="hero-title">Bem-vindo</h1>
      </header> -->
  
      <section class="content-section">
        <section class="submissions-section">
            <div class="submissions-content">
            <div class="submissions-left">
                <h2 class="section-title">Submissões</h2>
                <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a5ac295bd5030520abd7c7171bca053426d6a55961f78d530ccd38a7b605a93?placeholderIfAbsent=true&apiKey=24c5612ec37d4fbcbfc9ca0edfc13a50"
                class="submissions-image"
                alt="Film submissions illustration"
                />
            </div>
            
            <div class="submissions-right">
                <p class="submissions-text">
                Chegou o momento de dar voz ao silêncio! O MUDAVIE convida cineastas
                visionários de todo o mundo a submeterem as suas obras para uma
                celebração única da arte cinematográfica.
                <br /><br />
                Aqui, cada fotograma conta uma história, cada gesto fala mais alto do
                que palavras, e cada silêncio ressoa como um grito de criatividade.
                <br /><br />
                Se tem um filme mudo que desafia convenções, emociona e deixa a sua
                marca no imaginário coletivo, esta é a sua oportunidade de brilhar.
                </p>
                <RouterLink class="action-button" to="/Submissions" tabindex="0">Ir</RouterLink>
            </div>
            </div>
        </section>
        <section class="tickets-section">
            <h2 class="section-title">Bilhetes</h2>
            
            <div class="ticket-card" v-for="ticket in tickets" :key="ticket.id">
            <div class="ticket-header">
                <span class="ticket-toggle">{{ ticket.expanded ? '-' : '+' }}</span>
                <h3 class="ticket-title">{{ ticket.title }}</h3>
            </div>
            
            <div class="ticket-details">
                <span class="ticket-price">{{ ticket.price }}€</span>
                <RouterLink :to="`/Tickets/General`" class="buy-button" tabindex="0">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b468c9bcbc8da0ef12eaab79a1e10c19eeecd064c156ad9681e9483259cab39?placeholderIfAbsent=true&apiKey=24c5612ec37d4fbcbfc9ca0edfc13a50"
                    class="cart-icon"
                    alt=""
                />
                Comprar
                </RouterLink>
            </div>
            
            <p v-if="ticket.description" class="ticket-description">
                {{ ticket.description }}
            </p>
            </div>
        </section>
        <section class="news-section">
            <h2 class="section-title">Notícias</h2>
            
            <div class="news-grid">
            <article v-for="article in newsArticles" :key="article.id" class="news-card">
                <img
                :src="article.image"
                :alt="article.title"
                class="news-image"
                loading="lazy"
                />
                <h3 class="news-title">{{ article.title }}</h3>
                <!-- <button class="read-more" v-if="article.showButton" tabindex="0">
                <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b468c9bcbc8da0ef12eaab79a1e10c19eeecd064c156ad9681e9483259cab39?placeholderIfAbsent=true&apiKey=24c5612ec37d4fbcbfc9ca0edfc13a50"
                    class="arrow-icon"
                    alt=""
                /> 
                Ver Mais
                </button> -->
            </article>
            </div>
        </section>
      </section>
  
      <Footer></Footer>
    </main>
  </template>
  
<script>
  import Footer from '../components/Footer.vue'
  export default {
    components: {
        Footer
    },
    data() {
        return {
            newsArticles: [
        {
          id: 1,
          title: 'Academia Portuguesa de Cinema apela à protecção do Cinema Império em Lisboa',
          image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ca6494980e40299bfab328a29e248e68bb548db60d4b132900f0cfb89ece0838?placeholderIfAbsent=true&apiKey=24c5612ec37d4fbcbfc9ca0edfc13a50',
          showButton: true
        },
        {
          id: 2,
          title: 'Os Prémios do Cinema Europeu escolheram "Emilia Pérez"',
          image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8463ae46528797dc1222fbae591b2085cf4affa6033ad028b777325d3ec2a057?placeholderIfAbsent=true&apiKey=24c5612ec37d4fbcbfc9ca0edfc13a50',
          showButton: false
        },
        {
          id: 3,
          title: '"Wicked": o musical que chega às salas de cinema',
          image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fd9ada887bf3c0d1c2dedb990dbc8fa6eadb3c04f7cba1b6ea44556025f92dee?placeholderIfAbsent=true&apiKey=24c5612ec37d4fbcbfc9ca0edfc13a50',
          showButton: false
        }
      ],
        tickets: [
            {
            id: 1,
            title: 'Bilhete Normal (1 dia)',
            price: '20',
            expanded: true,
            description: 'Este bilhete dá-lhe acesso ao conteúdo geral de 1 dos dias do festival (11, 12 ou 13). Com ele, poderá assistir às sessões de filmes programadas para esse dia, incluindo curtas e longas-metragens em competição e fora de competição.'
            },
            {
            id: 2,
            title: 'Bilhete Normal (3 dias)',
            price: '40',
            expanded: false
            },
            {
            id: 3,
            title: 'Bilhete VIP (1 dia)',
            price: '35',
            expanded: false
            },
            {
            id: 4,
            title: 'Bilhete VIP (3 dias)',
            price: '80',
            expanded: false
            }
        ]
        }
    }
    }

  </script>
  
  <style scoped>
.news-section {
  margin-top: 35px;
}

.section-title {
  color: #fff;
  font: 500 48px Chopin-Trial, sans-serif;
  margin: 0 0 18px;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.news-card {
  display: flex;
  flex-direction: column;
}

.news-image {
  aspect-ratio: 1.42;
  object-fit: contain;
  object-position: center;
  width: 100%;
}

.news-title {
  color: #fff;
  font: 400 24px Inter, sans-serif;
  margin: 10px 0;
}

.read-more {
  display: flex;
  align-items: center;
  gap: 5px;
  background: none;
  border: none;
  color: #fff;
  font: 500 20px Chopin-Trial, sans-serif;
  cursor: pointer;
  padding: 17px 44px;
}

.arrow-icon {
  width: 24px;
  height: 24px;
}

@media (max-width: 991px) {
  .news-grid {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 40px;
  }

  .news-card {
    margin-top: 24px;
  }

  .news-image {
    max-width: 100%;
  }

  .read-more {
    padding: 0 20px;
  }
}

.tickets-section {
  margin: 97px 0 0 10px;
}

.section-title {
  color: #fff;
  font: 500 48px Chopin-Trial, sans-serif;
  margin: 0 0 33px;
}

.ticket-card {
  background-color: #EEEFFF;
  padding: 25px;
  margin-bottom: 25px;
  width: 100%;
  max-width: 1368px;
}

.ticket-header {
  display: flex;
  gap: 16px;
  align-items: center;
}

.ticket-toggle {
  color: #1E201E;
  font: 500 48px Chopin-Trial, sans-serif;
}

.ticket-title {
  color: #000;
  font: 400 30px Chopin-Trial, sans-serif;
  margin: 0;
}

.ticket-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.ticket-price {
  color: #000;
  font: 500 24px Chopin-Trial, sans-serif;
}

.buy-button {
  display: flex;
  align-items: center;
  gap: 5px;
  background: none;
  border: none;
  color: #000;
  font: 500 24px Chopin-Trial, sans-serif;
  cursor: pointer;
}

.cart-icon {
  width: 24px;
  height: 24px;
}

.ticket-description {
  background-color: #F6F6FF;
  color: #000;
  font: 500 20px Chopin-Trial, sans-serif;
  padding: 35px 14px;
  margin: 20px 0 0;
}

@media (max-width: 991px) {
  .tickets-section {
    margin-top: 40px;
  }

  .section-title {
    font-size: 40px;
  }

  .ticket-card {
    padding: 20px;
  }
}

  #welcome-page {
    background-color: #121211;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  
  .hero-section {
    display: flex;
    flex-direction: column;
    position: relative;
    min-height: 662px;
    width: 100%;
    color: #fff;
    font: 600 128px Chopin-Trial, sans-serif;
  }
  
  .hero-background {
    position: absolute;
    inset: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
  
  .hero-overlay {
    aspect-ratio: 14.08;
    object-fit: contain;
    object-position: center;
    width: 100%;
  }
  
  .hero-title {
    position: relative;
    background-color: #000;
    width: 100%;
    padding: 372px 36px 0;
    margin: 0;
  }
  
  .content-section {
    display: flex;
    margin-top: 81px;
    width: 100%;
    flex-direction: column;
    padding: 0 26px;
  }
  
  @media (max-width: 991px) {
    .hero-section {
      max-width: 100%;
      font-size: 40px;
    }
  
    .hero-overlay {
      max-width: 100%;
    }
  
    .hero-title {
      max-width: 100%;
      font-size: 40px;
      padding: 100px 20px 0;
    }
  
    .content-section {
      max-width: 100%;
      margin-top: 40px;
      padding: 0 20px;
    }
  }
  .submissions-section {
  margin-left: 10px;
}

.submissions-content {
  gap: 20px;
  display: flex;
}

.submissions-left {
  display: flex;
  flex-direction: column;
  width: 50%;
  color: #fff;
  font: 500 48px Chopin-Trial, sans-serif;
}

.section-title {
  margin: 0;
}

.submissions-image {
  aspect-ratio: 1.34;
  object-fit: contain;
  object-position: center;
  width: 100%;
}

.submissions-right {
  display: flex;
  margin-top: 62px;
  flex-direction: column;
  width: 50%;
  color: #fff;
  font: 500 24px Chopin-Trial, sans-serif;
}

.submissions-text {
  margin: 0;
}

.action-button {
  align-self: end;
  margin-right: 61px;
  background: none;
  border: none;
  color: #fff;
  font: inherit;
  cursor: pointer;
}

@media (max-width: 991px) {
  .submissions-content {
    flex-direction: column;
  }

  .submissions-left,
  .submissions-right {
    width: 100%;
    margin-top: 40px;
  }

  .section-title {
    font-size: 40px;
  }

  .submissions-image {
    max-width: 100%;
  }

  .action-button {
    margin-right: 10px;
  }
}
  </style>