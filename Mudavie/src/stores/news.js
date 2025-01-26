import { defineStore } from 'pinia'

export const useNews = defineStore('news', {
  state: () => ({
    news: {
        news1: {
            title: "Academia Portuguesa de Cinema apela à protecção do Cinema Império em Lisboa",
            content: "Conteúdo",
            image: "image url",
        },
        news2: {
            title: "Os Prémios do Cinema Europeu escolheram 'Emilia Pérez'",
            content: "Conteúdo",
            image: "image url",
        },
        news3: {
            title: "'Wicked': o musical que chega às salas de cinema",
            content: "Conteúdo",
            image: "image url",
        },
    }
  }),
})
