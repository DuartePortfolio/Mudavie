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
      firstName: "Nome",
      lastName: "Sobrenome",
      phone: "912345678",
      bio: "Born to dilli-dally, forced to lock in"
    },
    logged_in: true
  }),
  actions: {
    login(userData) {
        this.user = { ...userData, ticketType: userData.ticketType || [] }; 
        this.logged_in = true; 
    },
    logout() { 
        this.user = {
          username: "user",
          password: "password",
          email: "email",
          admin: false,
          ticketType: [],
          firstName: "Nome", 
          lastName: "Sobrenome",
          phone: "912345678",
          bio: "Born to dilli-dally, forced to lock in"
        };
        this.logged_in = false;
    },
    buyTicket(ticketData) {
        if (!this.user.ticketType) {
          this.user.ticketType = [];
        }
        this.user.ticketType.push(ticketData);
    },
  },
  getters: {
    isAuthenticated: (state) => state.logged_in,
    getUserInfo: (state) => state.user
  },
});