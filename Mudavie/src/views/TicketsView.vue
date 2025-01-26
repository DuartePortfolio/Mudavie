<script setup>
  import { movieStore } from '../stores/movies';
  import { loginStore } from '../stores/loginStore';
  import Footer from '../components/Footer.vue'
  import Navbar from '../components/Navbar.vue'
    
</script>

<template>
  <Navbar></Navbar>
  <div class="ticket-page">
    <header class="header">
      <div class="hero-section">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2411831586997e82dbeca4d410acf0424efae3e70f92af21ab89ecf4ee92d52a?placeholderIfAbsent=true&apiKey=24c5612ec37d4fbcbfc9ca0edfc13a50"
          class="hero-background"
          alt=""
        />
        <h1 class="hero-title">Bilhetes</h1>
      </div>
    </header> 

    <main class="main-content">
      <div id="selectedMovie" v-if="movieStore().focusedPoster !== ''">
        <img id="poster" :src="movieStore().focusedPoster" alt="">
        <label>{{ movieStore().timeInfo[movieStore().focusedMovie].split("/")[1] }} dia {{ movieStore().timeInfo[movieStore().focusedMovie].split("/")[0] }} às {{ movieStore().timeInfo[movieStore().focusedMovie].split("/")[2] }}</label>
      </div>
      <div class="content-wrapper">
        <div class="content-grid">
          <section class="info-section">
            <h2 class="section-title">Bilhetes</h2>
            <p class="event-description">
              <strong class="highlight">MUDAVIE 2025</strong>
              acontece de 11 a 13 de janeiro, com uma programação imperdível.
              Garanta já o seu bilhete e prepare-se para uma experiência 
              inesquecível. Esperamos por si!
            </p>
            <h3 class="info-title">Informações</h3>
            <p class="info-text">
              Data: de 11 a 13 de janeiro de 2025 Local: Idade: Aberto a todas
              as idades. 🛡️ Os seus bilhetes não são reembolsáveis.
            </p>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/754b5361b6a7f843c6444f35d0abea47a2f7079d8d31e8ca8565fb5166bdd991?placeholderIfAbsent=true&apiKey=24c5612ec37d4fbcbfc9ca0edfc13a50"
              class="info-image"
              alt="Event information graphic"
            />
          </section>

          <section class="ticket-section">
            <div class="bilhetes1">
              <div class="fundo" />
              <div class="botoComprar" />
              <div class="comprar" @click="purchaseTickets">Comprar</div>
              <div class="dia3" v-if="!isAllDays">
                <div class="bilhete1" />
                <div @click="increment(!isVIP ? 2 : 6)" class="div">+</div>
                <div class="div1">{{!isVIP ? tickets[2].quantity : tickets[6].quantity}}</div>
                <div @click="decrement(!isVIP ? 2 : 6)" class="div2">-</div>
                <div class="dia3Child" />
                <div class="preo">{{!isVIP ? "20€" : "35€"}}</div>
                <div class="data">13 de janeiro</div>
              </div>
              <div class="dia2" v-if="!isAllDays">
                <div class="bilhete1" />
                <div @click="increment(!isVIP ? 1 : 5)" class="div">+</div>
                <div class="div1">{{!isVIP ? tickets[1].quantity : tickets[5].quantity}}</div>
                <div @click="decrement(!isVIP ? 1 : 5)" class="div2">-</div>
                <div class="dia3Child" />
                <div class="preo1">{{!isVIP ? "20€" : "35€"}}</div>
                <div class="data1">12 de janeiro</div>
              </div>
              <div class="dia1">
                <div class="bilhete1" />
                <div @click="increment(!isVIP ? (!isAllDays ? 0 : 3) : (!isAllDays ? 4 : 7))" class="div">+</div>
                <div class="div1">{{!isVIP ? (!isAllDays ? tickets[0].quantity : tickets[3].quantity) : (!isAllDays ? tickets[4].quantity : tickets[7].quantity)}}</div>
                <div @click="decrement(!isVIP ? (!isAllDays ? 0 : 3) : (!isAllDays ? 4 : 7))" class="div2">-</div>
                <div class="dia3Child" />
                <div class="preo1">{{!isVIP ? (!isAllDays ? "20€" : "40€") : (!isAllDays ? "35€" : "80€")}}</div>
                <div class="data2">{{!isAllDays ? "11 de janeiro" : "Todos os dias"}}</div>
              </div>
              <div class="tipos">
                <div id="changeVIP" class="tipo2" @click="changeVIP">
                  <div class="tipo21">VIP</div>
                </div>
                <div id="changeNormal" class="tipo1" @click="changeNormal">
                  <div class="tipo11">Normal</div>
                </div>
              </div>
              <div class="dias">
                <div id="changeAllDays" class="tipo2" @click="changeAllDays">
                  <div class="dias21">3 Dias</div>
                </div>
                <div id="changeSingleDay" class="tipo1" @click="changeSingleDay">
                  <div class="dias11">Diário</div>
                </div>
              </div>
              <div class="titulo">Bilhetes</div>
            </div>
          </section>
        </div>
      </div>
    </main>

    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: "Bilhetes",
  data() {
    let store = loginStore()
    return {
      store: loginStore(),
      username: store.user[0],
      isRegistarOpen: false,
      isVIP: false,
      isAllDays: false,

      tickets: [
        { date: "11 de janeiro", price: 20, quantity: 0 },
        { date: "12 de janeiro", price: 20, quantity: 0 },
        { date: "13 de janeiro", price: 20, quantity: 0 },
        { date: "11/12/13 de janeiro", price: 40, quantity: 0 },
        { date: "11 de janeiro", price: 35, quantity: 0 },
        { date: "12 de janeiro", price: 35, quantity: 0 },
        { date: "13 de janeiro", price: 35, quantity: 0 },
        { date: "11/12/13 de janeiro", price: 80, quantity: 0 },
      ],
    }
  },
  methods: {
    increment(index) {
      this.tickets[index].quantity++
    },

    decrement(index) {
      if (this.tickets[index].quantity > 0) {
        this.tickets[index].quantity--
      }
    },
    purchaseTickets() {
      let userStore = loginStore()
      this.tickets.forEach(ticket => {
        if (ticket.quantity > 0) {
          console.log(ticket);
          userStore.buyTicket(ticket)
        }
      })
      this.tickets = [
        { date: "11 de janeiro", price: 20, quantity: 0 },
        { date: "12 de janeiro", price: 20, quantity: 0 },
        { date: "13 de janeiro", price: 20, quantity: 0 },
        { date: "11/12/13 de janeiro", price: 40, quantity: 0 },
        { date: "11 de janeiro", price: 35, quantity: 0 },
        { date: "12 de janeiro", price: 35, quantity: 0 },
        { date: "13 de janeiro", price: 35, quantity: 0 },
        { date: "11/12/13 de janeiro", price: 80, quantity: 0 },
      ]
    },
    changeAllDays() {
      this.isAllDays = true;
      document.getElementById("changeSingleDay").style.backgroundColor = "#7f8585"
      document.getElementById("changeAllDays").style.backgroundColor = "#ccc26e"
    },
    changeSingleDay() {
      this.isAllDays = false;
      document.getElementById("changeSingleDay").style.backgroundColor = "#ccc26e"
      document.getElementById("changeAllDays").style.backgroundColor = "#7f8585"
    },
    changeVIP() {
      this.isVIP = true;
      document.getElementById("changeNormal").style.backgroundColor = "#7f8585"
      document.getElementById("changeVIP").style.backgroundColor = "#ccc26e"
    },
    changeNormal() {
      this.isVIP = false;
      document.getElementById("changeNormal").style.backgroundColor = "#ccc26e"
      document.getElementById("changeVIP").style.backgroundColor = "#7f8585"
    },
    openRegistar() {
      this.isRegistarOpen = true;
    },
    closeRegistar() {
      this.isRegistarOpen = false;
    },
    onFestivalTextClick() {
      // Add your code here
    },
    onBilhetesTextClick() {
      this.$router.push("/");
    }
  }
}
</script>

<style scoped>
      .local {
          margin: 0;
      }
      .informaesTxt {
          width: 100%;
      }
      .informaes {
          position: absolute;
          top: 228px;
          left: 0px;
          line-height: 150%;
          font-weight: 500;
          display: flex;
          align-items: center;
          width: 904px;
          height: 187px;
      }
      .informaesTitulo {
          position: absolute;
          top: 160px;
          left: 0px;
          font-size: 32px;
          line-height: 150%;
      }
      .aconteceDe11 {
          font-weight: 500;
      }
      .descrio {
          position: absolute;
          top: 0px;
          left: 0px;
          line-height: 150%;
          text-align: justify;
          display: flex;
          align-items: center;
          width: 904px;
      }
      .texto {
          position: absolute;
          top: 513px;
          left: 36px;
          width: 904px;
          height: 415px;
      }
      .fundo {
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0%;
          right: 0%;
          bottom: 0%;
          left: 0%;
          border-radius: 10px;
          background-color: #282934;
      }
      .botoComprar {
          position: absolute;
          height: 7.01%;
          width: 92.8%;
          top: 91.15%;
          right: 3.72%;
          bottom: 1.84%;
          left: 3.47%;
          border-radius: 121px;
          background-color: #7f8585;
      }
      .comprar {
          position: absolute;
          width: 82.63%;
          top: 92.64%;
          left: 8.44%;
          font-weight: 600;
          display: flex; 
          align-items: center;
          justify-content: center;
      }
      .bilhete1 {
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0%;
          right: 0%;
          bottom: 0%;
          left: 0%;
          border-radius: 10px;
          background-color: #eeeeff;
          border: 3px solid #929292;
          box-sizing: border-box;
      }
      .div {
          position: absolute;
          height: 25.19%;
          width: 5.61%;
          top: 39.26%;
          left: 88.77%;
          font-weight: 500;
          display: flex;
          align-items: center;
          justify-content: center;
      }
      .div1 {
          position: absolute;
          height: 28.89%;
          width: 6.68%;
          top: 36.3%;
          left: 78.34%;
          font-size: 30px;
          font-weight: 500;
          display: flex;
          align-items: center;
          justify-content: center;
      }
      .div2 {
          position: absolute;
          height: 28.89%;
          width: 5.61%;
          top: 34.81%;
          left: 68.98%;
          font-weight: 500;
          display: flex;
          align-items: center;
          justify-content: center;
      }
      .dia3Child {
          position: absolute;
          height: 101.48%;
          width: 0.53%;
          top: -0.74%;
          right: 37.7%;
          bottom: -0.74%;
          left: 61.76%;
          border-right: 2px dashed #929292;
          box-sizing: border-box;
      }
      .preo {
          position: absolute;
          height: 25.93%;
          width: 32.09%;
          top: 51.85%;
          left: 5.35%;
          font-size: 24px;
          font-weight: 600;
          text-align: left;
          display: inline-block;
      }
      .data {
          position: absolute;
          height: 28.15%;
          width: 41.18%;
          top: 25.93%;
          left: 5.35%;
          font-size: 20px;
          font-weight: 500;
          text-align: left;
          display: inline-block;
      }
      .dia3 {
          position: absolute;
          height: 15.52%;
          width: 92.8%;
          top: 73.91%;
          right: 3.72%;
          bottom: 10.57%;
          left: 3.47%;
          font-size: 40px;
          color: #000;
      }
      .preo1 {
          position: absolute;
          height: 25.93%;
          width: 32.09%;
          top: 50.37%;
          left: 5.35%;
          font-size: 24px;
          font-weight: 600;
          text-align: left;
          display: inline-block;
      }
      .data1 {
          position: absolute;
          height: 28.15%;
          width: 41.18%;
          top: 28.15%;
          left: 5.35%;
          font-size: 20px;
          font-weight: 500;
          text-align: left;
          display: inline-block;
      }
      .dia2 {
          position: absolute;
          height: 15.52%;
          width: 92.8%;
          top: 56.67%;
          right: 3.72%;
          bottom: 27.82%;
          left: 3.47%;
          font-size: 40px;
          color: #000;
      }
      .data2 {
          position: absolute;
          height: 28.15%;
          width: 41.44%;
          top: 28.15%;
          left: 5.35%;
          font-size: 20px;
          font-weight: 500;
          text-align: left;
          display: inline-block;
      }
      .dia1 {
          position: absolute;
          height: 15.52%;
          width: 92.8%;
          top: 39.43%;
          right: 3.72%;
          bottom: 45.06%;
          left: 3.47%;
          font-size: 40px;
          color: #000;
      }
      .linha2Icon {
          position: absolute;
          height: 0.11%;
          width: 92.8%;
          top: 37.59%;
          right: 3.72%;
          bottom: 62.3%;
          left: 3.47%;
          max-width: 100%;
          overflow: hidden;
          max-height: 100%;
          object-fit: contain;
      }
      .tipo2 {
          position: absolute;
          height: 100%;
          width: 46.79%;
          top: 0%;
          right: 0%;
          bottom: 0%;
          left: 53.21%;
          border-radius: 5px;
          background-color: #7f8585;
          cursor: pointer;
      }
      .tipo21 {
          text-align: center;
          align-items: center;
          font-weight: 600;
          cursor: pointer;
          width: 100%;
          height: 100%;
      }
      .tipo1 {
          position: absolute;
          height: 100%;
          width: 46.79%;
          top: 0%;
          right: 53.21%;
          bottom: 0%;
          left: 0%;
          border-radius: 5px;
          background-color: #ccc26e;
          cursor: pointer;
      }
      .tipo11 {
          text-align: center;
          justify-items: center;
          font-weight: 600;
          cursor: pointer;
          width: 100%;
          height: 100%;
      }
      .tipos {
          position: absolute;
          height: 11.15%;
          width: 92.8%;
          top: 24.71%;
          right: 3.72%;
          bottom: 64.14%;
          left: 3.47%;
      }
      .linha1Icon {
          position: absolute;
          height: 0.11%;
          width: 92.8%;
          top: 22.87%;
          right: 3.72%;
          bottom: 77.01%;
          left: 3.47%;
          max-width: 100%;
          overflow: hidden;
          max-height: 100%;
          object-fit: contain;
      }
      .dias21 {
          position: absolute;
          text-align: center;
          justify-items: center;
          font-weight: 600;
          width: 100%;
          height: 100%;
      }
      .dias11 {
          position: absolute;
          text-align: center;
          justify-items: center;
          font-weight: 600;
          width: 100%;
          height: 100%;
      }
      .dias {
          position: absolute;
          height: 11.15%;
          width: 92.8%;
          top: 10%;
          right: 3.72%;
          bottom: 78.85%;
          left: 3.47%;
      }
      .titulo {
          position: absolute;
          height: 4.02%;
          width: 84.86%;
          top: 2.76%;
          left: 5.46%;
          font-size: 32px;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
      }
      .bilhetes1 {
          position: absolute;
          top: 950px;
          left: 70%;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
          width: 403px;
          height: 700px;
          text-align: center;
      }
      .festival {
          position: absolute;
          top: 36px;
          left: 247px;
          cursor: pointer;
      }
      .landingPage {
          position: absolute;
          top: 80px;
          left: 246px;
          cursor: pointer;
      }
      .contactos {
          position: absolute;
          top: 36px;
          left: 457px;
      }
      .sobre {
          position: absolute;
          top: 80px;
          left: 35px;
          cursor: pointer;
      }
      .callForEntries {
          position: absolute;
          top: 106px;
          left: 35px;
          cursor: pointer;
      }
      .programa {
          position: absolute;
          top: 132px;
          left: 34px;
          cursor: pointer;
      }
      .bilhetes2 {
          position: absolute;
          top: 158px;
          left: 34px;
          cursor: pointer;
      }
      .festivalMudavie {
          position: absolute;
          top: 283px;
          left: 32px;
      }
      .t35125Container {
          position: absolute;
          top: 164px;
          left: 456px;
          text-align: left;
      }
      .mudaviefestivalpt {
          text-decoration: underline;
      }
      .eMailMudaviefestivalpt {
          position: absolute;
          top: 196px;
          left: 458px;
      }
      .patrocinadoPor {
          position: absolute;
          top: 35px;
          left: 739px;
      }
      .image8Icon {
          position: absolute;
          top: 68px;
          left: 736px;
          width: 71px;
          height: 16px;
          object-fit: cover;
      }
      .image7 {
          position: absolute;
          top: 59px;
          left: 841px;
          width: 52px;
          height: 63px;
      }
      .apoioFinanceiro {
          position: absolute;
          top: 128px;
          left: 740px;
      }
      .hubRemovebgPreview1Icon {
          position: absolute;
          top: 126px;
          left: 727px;
          width: 108px;
          height: 108px;
          object-fit: cover;
      }
      .sigaNosNasRedes {
          position: absolute;
          top: 35px;
          left: 1213px;
      }
      .layer1Icon {
          position: absolute;
          top: 70px;
          left: 1202px;
          width: 17px;
          height: 17px;
          overflow: hidden;
      }
      .frameIcon {
          position: absolute;
          top: 72px;
          left: 1230px;
          width: 15px;
          height: 15px;
          overflow: hidden;
      }
      .frameIcon1 {
          position: absolute;
          top: 70px;
          left: 1260px;
          width: 17px;
          height: 17px;
          overflow: hidden;
      }
      .frameIcon2 {
          position: absolute;
          top: 70px;
          left: 1290px;
          width: 17px;
          height: 17px;
          overflow: hidden;
      }
      .frameIcon3 {
          position: absolute;
          top: 67px;
          left: 1317px;
          width: 24px;
          height: 24px;
          overflow: hidden;
      }
      .frameIcon4 {
          position: absolute;
          height: 6.29%;
          width: 1.39%;
          top: 21.7%;
          right: 4.79%;
          bottom: 72.01%;
          left: 93.82%;
          max-width: 100%;
          overflow: hidden;
          max-height: 100%;
      }
      .newsletter {
          position: absolute;
          top: 121px;
          left: 1302px;
          font-weight: 600;
      }
      .image11 {
          position: absolute;
          top: 17px;
          left: 17px;
          width: 83px;
          height: 55px;
          object-fit: cover;
      }
      .festivalMudavieOpenMindContainer {
          position: absolute;
          top: 80px;
          left: 457px;
          text-align: left;
      }
      .pt {
          position: absolute;
          top: 21.57%;
          left: 80%;
          font-weight: 600;
      }
      .frameIcon5 {
          position: absolute;
          height: 55.88%;
          width: 3.96%;
          top: 22.55%;
          right: 5.76%;
          bottom: 21.57%;
          left: 90.28%;
          max-width: 100%;
          overflow: hidden;
          max-height: 100%;
      }
      .frameIcon6 {
          position: absolute;
          height: 32.35%;
          width: 2.22%;
          top: 34.31%;
          right: 28.13%;
          bottom: 33.33%;
          left: 69.65%;
          max-width: 100%;
          overflow: hidden;
          max-height: 100%;
          cursor: pointer;
      }
      .image21 {
          position: absolute;
          height: 169.61%;
          width: 55%;
          top: -35.29%;
          right: 55.35%;
          bottom: -34.31%;
          left: -10.35%;
          max-width: 100%;
          overflow: hidden;
          max-height: 100%;
          object-fit: cover;
      }
      .image22 {
          position: absolute;
          height: 169.61%;
          width: 55%;
          top: -35.29%;
          right: 1.74%;
          bottom: -34.31%;
          left: 43.26%;
          max-width: 100%;
          overflow: hidden;
          max-height: 100%;
          object-fit: cover;
      }
      .image111 {
          position: absolute;
          height: 121.57%;
          width: 12.99%;
          top: -11.76%;
          right: 87.15%;
          bottom: -9.8%;
          left: -0.14%;
          max-width: 100%;
          overflow: hidden;
          max-height: 100%;
          object-fit: cover;
          cursor: pointer;
      }
      .image23 {
          position: absolute;
          height: 169.61%;
          width: 55%;
          top: -35.29%;
          right: -52.08%;
          bottom: -34.31%;
          left: 97.08%;
          max-width: 100%;
          overflow: hidden;
          max-height: 100%;
          object-fit: cover;
      }
      .bilhetes {
          width: 100%;
          position: relative;
          background-color: #121211;
          height: 100%;
          text-align: left;
          font-size: 24px;
          color: #fff;
          font-family: Chopin-Trial;
      }
#selectedMovie {
  display: flex;
  margin: 30px 0px;
}
#poster {
  height: fit-content;
  width: fit-content;
}
.ticket-page {
  background-color: rgba(18, 18, 17, 1);
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
  padding: 349px 70px 279px;
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
  color: #fff;
  font: 500 96px Chopin-Trial, sans-serif;
  text-shadow: 1px 1px 7px #fefcfc;
}

.main-content {
  margin: 43px auto;
  width: 100%;
  max-width: 1364px;
}

.content-grid {
  display: flex;
  gap: 20px;
}

.info-section {
  width: 69%;
  color: #fff;
  font: 700 24px Chopin-Trial, sans-serif;
}

.section-title {
  font-size: 32px;
}

.event-description {
  font-weight: 500;
  line-height: 36px;
  margin-top: 4px;
}

.highlight {
  color: #fff;
}

.info-title {
  margin-top: 38px;
}

.info-text {
  font-weight: 500;
  line-height: 36px;
  margin-top: 7px;
}

.info-image {
  aspect-ratio: 2.62;
  object-fit: contain;
  width: 100%;
  margin-top: 52px;
}

.ticket-section {
  width: 31%;
}

.ticket-container {
  border-radius: 10px;
  background-color: #282934;
  padding: 29px 14px 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
}

.ticket-title {
  font-size: 32px;
  font-weight: 600;
  color: #fff;
  text-align: center;
}

.ticket-type-selector,
.ticket-class-selector {
  display: flex;
  justify-content: space-between;
  margin-top: 34px;
  gap: 20px;
}

.type-btn,
.class-btn {
  border-radius: 5px;
  padding: 31px 54px;
  font-size: 24px;
  font-weight: 600;
  color: #fff;
  background-color: #7a7d7d;
  border: none;
  cursor: pointer;
}

.type-btn.active,
.class-btn.active {
  background-color: #ccc26e;
}

.divider {
  height: 4px;
  border: 3px solid #eeefff;
  margin: 12px 0;
}

.ticket-item {
  background-color: #eeefff;
  border-radius: 10px;
  border: 3px solid #929292;
  margin-top: 15px;
  padding: 0 21px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.ticket-details {
  color: #000;
}

.ticket-date {
  font-size: 20px;
  font-weight: 500;
  display: block;
}

.ticket-price {
  font-size: 24px;
  font-weight: 600;
  display: block;
  margin-top: 11px;
}

.quantity-selector {
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 40px;
  font-weight: 500;
}

.separator {
  width: 2px;
  height: 135px;
  border: 2px dashed #929292;
}

.quantity-btn {
  background: none;
  border: none;
  font-size: 40px;
  cursor: pointer;
  color: #000;
}

.quantity-display {
  font-size: 30px;
}

.purchase-btn {
  width: 100%;
  border-radius: 121px;
  background-color: #7a7d7d;
  color: #fff;
  font-size: 24px;
  font-weight: 600;
  padding: 13px;
  margin-top: 15px;
  border: none;
  cursor: pointer;
}

.site-footer {
  background-color: #1e201e;
  padding: 18px 40px;
  color: #fff;
  font: 400 11px Chopin-Trial, sans-serif;
}

.footer-grid {
  display: flex;
  gap: 20px;
}

.footer-logo {
  width: 83px;
  aspect-ratio: 1.51;
  object-fit: contain;
}

.footer-nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 8px;
}

.footer-link {
  color: #fff;
  text-decoration: none;
}

.contact-details,
.phone-number,
.email {
  margin-top: 28px;
  font-style: normal;
}

.sponsor-section {
  margin-top: 18px;
}

.sponsor-logo {
  width: 71px;
  aspect-ratio: 4.44;
  object-fit: contain;
  margin-top: 17px;
}

.sponsor-logo-large {
  width: 108px;
  aspect-ratio: 1;
  object-fit: contain;
  margin-top: 42px;
}

.social-section {
  margin-top: 18px;
}

.social-links {
  display: flex;
  gap: 11px;
  margin-top: 16px;
}

.social-icon {
  width: 17px;
  aspect-ratio: 1;
  object-fit: contain;
}

.newsletter-btn {
  border-radius: 3px;
  background-color: #1e201e;
  color: #fff;
  padding: 8px 41px;
  font-weight: 600;
  border: 1px solid #fff;
  cursor: pointer;
  margin-top: 23px;
}

.copyright {
  margin-top: 49px;
  text-align: center;
}

@media (max-width: 991px) {
  .hero-section {
    font-size: 40px;
    padding: 100px 20px 110px;
  }
  
  .main-content {
    margin-top: 40px;
  }
  
  .content-grid {
    flex-direction: column;
  }
  
  .info-section,
  .ticket-section {
    width: 100%;
  }
  
  .info-section {
    margin-top: 40px;
  }
  
  .type-btn,
  .class-btn {
    padding: 20px;
  }
  
  .newsletter-btn {
    padding: 8px 20px;
  }
  
  .footer-grid {
    flex-direction: column;
  }
  
  .copyright {
    margin: 40px 0 0 10px;
  }
}
</style>
