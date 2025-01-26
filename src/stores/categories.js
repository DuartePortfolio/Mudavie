import { defineStore } from 'pinia'

export const useCategories = defineStore('categories', {
  state: () => ({
    categories: ["Melhor Filme", "Melhor Filme Low Budget", "Melhor Ator/Atríz", "Prémio do Público"],
    description: [
      "O Prémio de Melhor Filme destaca a excelência na arte cinematográfica, premiando o filme que se sobressaia em todos os aspectos da produção. Os filmes são avaliados por um júri especializado, composto por profissionais de renome da indústria. A avaliação inclui critérios como qualidade narrativa, inovação, direção, desempenho artístico e impacto emocional. Este prémio reconhece obras que se destacam pela sua capacidade de cativar o público e transmitir mensagens poderosas, seja através da estética, da história ou da execução técnica, celebrando a arte do cinema de forma completa.",
      "O prémio de melhor filme low-budget celebra a criatividade de cineastas com orçamentos reduzidos, aceitando apenas filmes com custos inferiores a 5.000 euros. Os filmes são avaliados por um painel de juízes selecionados pela organização, composto por profissionais da indústria cinematográfica. A avaliação foca-se na qualidade narrativa, inovação, execução técnica e impacto social ou emocional, premiando projetos que superem as limitações financeiras com criatividade. Este prémio valoriza o potencial transformador do cinema independente e de baixo orçamento.",
      "O Prémio de Melhor Ator reconhece a performance excepcional de um ator na interpretação de um papel no contexto do cinema mudo. A avaliação foca-se na habilidade do ator em transmitir emoções e contar histórias através de gestos, expressões faciais e linguagem corporal, sem o auxílio de palavras. O júri, composto por profissionais da indústria cinematográfica, valoriza a intensidade, a autenticidade e a capacidade de criar uma conexão emocional com o público. Este prémio celebra a arte da atuação no seu estado mais puro e silencioso, destacando o talento que transcende as limitações do som.",
      "O Prémio do Público é atribuído ao filme que mais cativar os espectadores durante o festival. A escolha é feita através da votação do público, que avalia as obras com base no impacto emocional, originalidade e capacidade de envolver a audiência. Este prémio reflete o gosto e a reação direta dos cinéfilos, reconhecendo o filme que conseguiu estabelecer uma conexão única e inesquecível com o público. O Prémio do Público é uma celebração da diversidade de opiniões e da força do cinema em emocionar e inspirar a todos.",
    ],
    image: [
      "https://i.imgur.com/GcOiZ0p.png",
      "https://i.imgur.com/NHoBI1c.png",
      "https://i.imgur.com/Jt6WG3D.png",
      "https://i.imgur.com/UH6so2D.png",
    ],
  }),
  getters: {
    getCategoryInfo: (state) => {
      return(categoryNumber) => {
        state.categories[categoryNumber]
        state.description[categoryNumber]
        state.image[categoryNumber]
        document.getElementById("category-title").textContent = state.categories[categoryNumber]
        document.getElementById("description-text").textContent = state.description[categoryNumber]
        document.getElementById("category-image").src = state.image[categoryNumber]
      }
    }
  },
})
