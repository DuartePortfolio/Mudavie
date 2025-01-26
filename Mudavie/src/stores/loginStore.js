import { defineStore } from 'pinia';

export const loginStore = defineStore('user', {
  state: () => ({
    user: {
      username: "user",
      email: "email",
      password: "password",
      admin: false,
      ticketType: [],
      favorited: [false, false, false, false, false, false, false, false, false],
      voted: [false, false, false, false, false, false, false, false, false],
    },
    logged_in: true
  }),
  actions: {
    login(userData) {
        this.user = userData; 
        this.logged_in = true; 
    },
    logout() {
        this.user = {
          username: "user",
          password: "password",
          email: "email",
          admin: false,
          ticketType: []
        };
        this.logged_in = false;
    },
    buyTicket(ticketData) {
        this.user.ticketType.push(ticketData)
    },
  },
  getters: {
    isAuthenticated: (state) => state.logged_in,
    getUserInfo: (state) => state.user
  },
});
