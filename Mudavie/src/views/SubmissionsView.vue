<script setup>
import { ref } from 'vue';
import Footer from '../components/Footer.vue';
import Navbar from '../components/Navbar.vue';

const expandedSections = ref({
  direitosAutorais: false,
  inscricao: false,
  criteriosAvaliacao: false,
  elegibilidade: false,
});

const toggleSection = (section) => {
  expandedSections.value[section] = !expandedSections.value[section];
};
</script>

<template>
  <main class="submissions-page">
    <Navbar></Navbar>
    <header class="hero-section">
      <div class="hero-content">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2411831586997e82dbeca4d410acf0424efae3e70f92af21ab89ecf4ee92d52a?placeholderIfAbsent=true&apiKey=24c5612ec37d4fbcbfc9ca0edfc13a50"
          class="hero-overlay"
          alt=""
        />
        <h1 class="hero-title">Submissões</h1>
      </div>
    </header>

    <section class="requirements-section">
      <h2 class="section-title">Requisitos de Inscrição</h2>
      <p class="requirements-text">
        Todos os participantes aceitam ceder os direitos de exibição das suas
        obras durante o festival.<br />Taxa de inscrição: 5€
      </p>

      <div class="eligibility-section">
        <div class="eligibility-content">
          <div class="eligibility-details">
            <button class="accordion-button" @click="toggleSection('elegibilidade')" tabindex="0">
              <span>Elegibilidade</span>
              <span class="accordion-icon">⌄</span>
            </button>
            <div v-if="expandedSections.elegibilidade" class="accordion-content">
              <hr class="divider" />
              <hr class="divider" />
              <p class="eligibility-text">
                A participação está aberta a realizadores de todas as idades e
                nacionalidades.<br />Os filmes submetidos devem ser
                exclusivamente mudos, podendo incluir ou não acompanhamento
                musical.
              </p>
            </div>

            <button class="accordion-button" @click="toggleSection('direitosAutorais')" tabindex="0">
              <span>Direitos Autorais</span>
              <span class="accordion-icon">⌄</span>
            </button>
            <div v-if="expandedSections.direitosAutorais" class="accordion-content">
              <hr class="divider" />
              <hr class="divider" />
              <p class="eligibility-text">
                Os participantes devem assegurar que detêm todos os direitos relacionados ao material enviado, incluindo imagens, música e quaisquer outros elementos incorporados à obra.
              </p>
            </div>

            <button class="accordion-button" @click="toggleSection('inscricao')" tabindex="0">
              <span>Inscrição</span>
              <span class="accordion-icon">⌄</span>
            </button>
            <div v-if="expandedSections.inscricao" class="accordion-content">
              <hr class="divider" />
              <hr class="divider" />
              <p class="eligibility-text">
                Envio das candidaturas: até 31 de agosto de 2025.

                Divulgação dos filmes selecionados: outubro de 2025
              </p>
            </div>

            <button class="accordion-button" @click="toggleSection('criteriosAvaliacao')" tabindex="0">
              <span>Critérios de Avaliação</span>
              <span class="accordion-icon">⌄</span>
            </button>
            <div v-if="expandedSections.criteriosAvaliacao" class="accordion-content">
              <hr class="divider" />
              <hr class="divider" />
              <p class="eligibility-text">
                Originalidade e criatividade da obra.

                Qualidade técnica, incluindo cinematografia, edição e trilha sonora.

                Adesão rigorosa ao formato mudo.
              </p>
            </div>
          </div>
        </div>
  
          <div class="image-container">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/dfe4058fd881874211f266156b967bb1985280ea6b075dcfb0cd73bebb3a7993?placeholderIfAbsent=true&apiKey=24c5612ec37d4fbcbfc9ca0edfc13a50"
              class="content-image"
              alt="Festival submission guidelines illustration"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/dfe4058fd881874211f266156b967bb1985280ea6b075dcfb0cd73bebb3a7993?placeholderIfAbsent=true&apiKey=24c5612ec37d4fbcbfc9ca0edfc13a50"
              class="content-overlay"
              alt=""
            />
          </div>
        </div>
  
        <section class="categories-section">
          <h2 class="section-title">Categorias</h2>
          
          <div class="categories-grid">
            <div class="category-card" id="category-card1" @click="getBestMovie(0)">
              <h3>Melhor Filme</h3>
            </div>
            <div class="category-card" id="category-card2" @click="getBestLowBudget(1)">
              <h3>Melhor Filme<br />Low-Budget</h3>
            </div>
            <div class="category-card" id="category-card3" @click="getBestActor(2)">
              <h3>Melhor Ator</h3>
            </div>
            <div class="category-card" id="category-card4" @click="getBestPublicVote(3)">
              <h3>Prémio do Público</h3>
            </div>
          </div>
  
          <div class="category-details">
            <div class="category-description">
              <h3 id="category-title">Melhor Filme</h3>
              <p id="description-text">
                O Prémio de Melhor Filme destaca a excelência na arte
                cinematográfica, premiando o filme que se sobressaia em todos os
                aspectos da produção. Os filmes são avaliados por um júri
                especializado, composto por profissionais de renome da
                indústria. A avaliação inclui critérios como qualidade
                narrativa, inovação, direção, desempenho artístico e impacto
                emocional. Este prémio reconhece obras que se destacam pela sua
                capacidade de cativar o público e transmitir mensagens
                poderosas, seja através da estética, da história ou da execução
                técnica, celebrando a arte do cinema de forma completa.
              </p>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a0ad6b38d49d5bff097650d044bd8f8b4ef925e1e05d5303842d93a50426ab8a?placeholderIfAbsent=true&apiKey=24c5612ec37d4fbcbfc9ca0edfc13a50"
              id="category-image"
              alt="Best Film category illustration"
            />
          </div>
        </section>
  
        <hr class="section-divider" />
  
        <section class="contact-grid">
          <div class="contact-card">
            <div class="icon-circle"></div>
            <h3>Submeter Trabalho</h3>
            <p>Fale connosco</p>
            <p class="contact-info">email@mail.com</p>
          </div>
  
          <div class="contact-card">
            <div class="icon-circle"></div>
            <h3>Tem algum Problema?</h3>
            <p>Fale connosco</p>
            <p class="contact-info">email@mail.com</p>
          </div>
  
          <div class="contact-card">
            <div class="icon-circle"></div>
            <h3>Visite-nos</h3>
            <p>Fale na nossa sede</p>
            <p class="contact-info">Praça José Régio 67, Morada</p>
          </div>
  
          <div class="contact-card">
            <div class="icon-circle"></div>
            <h3>Ligue-nos</h3>
            <p>Horário</p>
            <p class="contact-info">912345678</p>
          </div>
        </section>
      </section>
  
      <Footer></Footer>
    </main>
  </template>
  
  <script>
  import Footer from '../components/Footer.vue'
  import { useCategories } from '../stores/categories'
  
  export default {
    components: {
          Footer
      },
    methods: {
      getBestMovie: (categoryNumber) => {
        useCategories().getCategoryInfo(categoryNumber)
        document.getElementById("category-card1").style.background = "#ccc26e"
        document.getElementById("category-card2").style.background = "#282934"
        document.getElementById("category-card3").style.background = "#282934"
        document.getElementById("category-card4").style.background = "#282934"
      },
      getBestLowBudget: (categoryNumber) => {
        useCategories().getCategoryInfo(categoryNumber)
        document.getElementById("category-card1").style.background = "#282934"
        document.getElementById("category-card2").style.background = "#ccc26e"
        document.getElementById("category-card3").style.background = "#282934"
        document.getElementById("category-card4").style.background = "#282934"
      },
      getBestActor: (categoryNumber) => {
        useCategories().getCategoryInfo(categoryNumber)
        document.getElementById("category-card1").style.background = "#282934"
        document.getElementById("category-card2").style.background = "#282934"
        document.getElementById("category-card3").style.background = "#ccc26e"
        document.getElementById("category-card4").style.background = "#282934"
      },
      getBestPublicVote: (categoryNumber) => {
        useCategories().getCategoryInfo(categoryNumber)
        document.getElementById("category-card1").style.background = "#282934"
        document.getElementById("category-card2").style.background = "#282934"
        document.getElementById("category-card3").style.background = "#282934"
        document.getElementById("category-card4").style.background = "#ccc26e"
      },
    }
  }
  </script>

  <style scoped>
  .submissions-page {
    background: #121211;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    font-family: Chopin-Trial, sans-serif;
  }
  
  .hero-section {
    position: relative;
    
  }

  .hero-title {
    font-size: 96px;
    font-weight: 500;
    text-shadow: 1px 1px 7px #fefcfc;
    z-index: 50;
  }
  
  .hero-image {
    aspect-ratio: 14.08;
    object-fit: contain;
    width: 100%;
    z-index: 10;
  }
  
  .hero-content {
    position: relative;
    min-height: 839px;
    color: #fff;
    text-align: center;
    padding: 348px 70px 278px;
    font: 500 96px Chopin-Trial, sans-serif;
    text-shadow: 1px 1px 7px #fefcfc;
  }
  
  .hero-overlay {
    position: absolute;
    inset: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  
  .requirements-section {
    display: flex;
    margin-top: 49px;
    width: 100%;
    flex-direction: column;
    padding: 0 25px;
  }
  
  .section-title {
    color: #fff;
    font: 700 32px Chopin-Trial, sans-serif;
    margin: 0 0 5px 11px;
  }
  
  .requirements-text {
    color: #fff;
    font: 500 24px Chopin-Trial, sans-serif;
    margin: 5px 0 0 11px;
  }
  
  .eligibility-section {
    margin: 20px 0 0 11px;
    display: flex;
    gap: 20px;
  }
  
  .eligibility-content {
    width: 59%;
  }
  
  .eligibility-details {
    margin-top: 8px;
    color: #fff;
    font-family: Chopin-Trial, sans-serif;
  }
  
  .subsection-title {
    font-size: 24px;
    font-weight: 600;
  }
  #category-title {
    font-size: 24px;
    font-weight: 600;
  }
  
  .divider {
    background: #fff;
    height: 1px;
    border: 1px solid #fff;
    margin: 4px 0;
    width: 100%;
  }
  
  .eligibility-text {
    font-size: 20px;
    font-weight: 500;
    line-height: 30px;
    margin-top: 10px;
  }
  
  .accordion-button {
    display: flex;
    justify-content: space-between;
    width: 100%;
    color: #fff;
    font-size: 24px;
    font-weight: 600;
    margin-top: 19px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 10px 0;
  }
  
  .accordion-icon {
    font-size: 32px;
    font-weight: 500;
  }
  
  .image-container {
    width: 41%;
    position: relative;
    min-height: 329px;
  }
  
  .content-image,
  .content-overlay {
    position: absolute;
    inset: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  
  .categories-section {
    margin-top: 80px;
  }
  
  .categories-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-top: 30px;
  }
  
  .category-card {
    border-radius: 10px;
    background: #282934;
    color: #fff;
    text-align: center;
    padding: 50px;
    cursor: pointer;
    font: 600 24px Chopin-Trial, sans-serif;
  }
  
  #category-card1 {
    background: #ccc26e;
  }
  
  .category-details {
    display: flex;
    gap: 20px;
    margin-top: 55px;
  }
  
  .category-description {
    width: 62%;
  }
  
  #description-text {
    font: 500 24px Chopin-Trial, sans-serif;
    color: #fff;
  }
  
  #category-image {
    width: 38%;
    aspect-ratio: 1.66;
    object-fit: contain;
  }
  
  .section-divider {
    width: 100%;
    height: 1px;
    margin: 61px 0;
    border: 1px solid #fff;
  }
  
  .contact-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin: 65px 0;
  }
  
  .contact-card {
    border-radius: 15px;
    background: #ccc26e;
    color: #fff;
    padding: 19px 17px;
    text-align: center;
    font: 600 20px Chopin-Trial, sans-serif;
  }
  
  .icon-circle {
    width: 65px;
    height: 65px;
    border-radius: 8px;
    border: 3px solid #fff;
    margin: 0 auto 7px;
  }
  
  .contact-info {
    margin-top: 41px;
  }
  
  .site-footer {
    background: #1e201e;
    padding: 20px 34px;
    color: #fff;
    font: 400 11px Chopin-Trial, sans-serif;
  }
  
  .footer-content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
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
  
  .nav-links li {
    margin: 10px 0;
  }
  
  .nav-links a {
    color: #fff;
    text-decoration: none;
  }
  
  .social-grid {
    display: flex;
    gap: 20px;
    margin-top: 10px;
  }
  
  .social-grid img {
    width: 32px;
    aspect-ratio: 1;
  }
  
  @media (max-width: 991px) {
    .hero-content {
      min-height: auto;
      font-size: 40px;
      padding: 100px 20px 110px;
    }
  
    .requirements-section {
      padding: 0 20px;
    }
  
    .eligibility-section {
      flex-direction: column;
    }
  
    .eligibility-content,
    .image-container {
      width: 100%;
    }
  
    .categories-grid {
      grid-template-columns: 1fr;
    }
  
    .category-details {
      flex-direction: column;
    }
  
    .category-description,
    .category-image {
      width: 100%;
    }
  
    .contact-grid {
      grid-template-columns: 1fr;
    }
  
    .footer-content {
      grid-template-columns: 1fr;
    }
  }
  </style>