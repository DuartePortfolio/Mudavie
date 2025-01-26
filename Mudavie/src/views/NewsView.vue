<script setup>
import Footer from '../components/Footer.vue'
  import Navbar from '../components/Navbar.vue'
</script>
<template>
	<div class="news-container">
		<Navbar></Navbar>
		<div class="hero-section">
			<img
				loading="lazy"
				src="https://cdn.builder.io/api/v1/image/assets/TEMP/2411831586997e82dbeca4d410acf0424efae3e70f92af21ab89ecf4ee92d52a?placeholderIfAbsent=true&apiKey=24c5612ec37d4fbcbfc9ca0edfc13a50"
				class="hero-background"
				alt="News section hero background"
			/>
			<h1 class="hero-title">Notícias</h1>
		</div>
		<div class="news-grid">
			<div class="grid-container">
				<div class="grid-left">
					<NewsCard
						image="https://cdn.builder.io/api/v1/image/assets/TEMP/39843cc6df0c5e95e689de986d7b8dce6cf7c50ba6e3564c95d08dd66dcda4b0?placeholderIfAbsent=true&apiKey=24c5612ec37d4fbcbfc9ca0edfc13a50"
						title="Academia Portuguesa de Cinema apela à protecção do Cinema Império em Lisboa"
						class="featured-card"
					/>
					<div class="news-column">
						<NewsCard
							image="https://cdn.builder.io/api/v1/image/assets/TEMP/47cfe0c2acf0ed17dfc440d06421d34e0b948324b1b76750c8e3ed08798f2e79?placeholderIfAbsent=true&apiKey=24c5612ec37d4fbcbfc9ca0edfc13a50"
							title="No segundo ano de vida, o público do Batalha Centro de Cinema cresceu 9%"
							class="standard-card"
						/>
						<NewsCard
							image="https://cdn.builder.io/api/v1/image/assets/TEMP/f5dbaa2c27a7a85fe34d6eade7289f6091a9875c6b8f062b33114632edb69b45?placeholderIfAbsent=true&apiKey=24c5612ec37d4fbcbfc9ca0edfc13a50"
							title="5 filmes a estrear em Portugal já esta semana no cinema"
							class="standard-card reverse"
						/>
					</div>
				</div>
				<div class="grid-middle">
					<div class="news-column">
						<NewsCard
							image="https://cdn.builder.io/api/v1/image/assets/TEMP/363e7976213e3f59d5bb2713eadf9e88ace4821bdea77dca7fe617a8f5c272d6?placeholderIfAbsent=true&apiKey=24c5612ec37d4fbcbfc9ca0edfc13a50"
							title="Os Prémios do Cinema Europeu escolheram 'Emilia Pérez'"
							class="standard-card"
						/>
						<NewsCard
							image="https://cdn.builder.io/api/v1/image/assets/TEMP/065c338ba3a72989e8e5f2b865b89239a1b9c2a26cc13d953eb20829892e2ab9?placeholderIfAbsent=true&apiKey=24c5612ec37d4fbcbfc9ca0edfc13a50"
							title="'Wicked': o musical que chega às salas de cinema"
							class="standard-card reverse"
						/>
					</div>
					<NewsCard
						image="https://cdn.builder.io/api/v1/image/assets/TEMP/2206adb185fd6f752904d335e80c6a508d74b32b4612636b154df57bed62dd3a?placeholderIfAbsent=true&apiKey=24c5612ec37d4fbcbfc9ca0edfc13a50"
						title="Há cinema! Na Biblioteca Municipal de Estremoz"
						class="featured-card"
					/>
				</div>
				<div class="grid-right">
					<NewsCard
						image="https://cdn.builder.io/api/v1/image/assets/TEMP/39843cc6df0c5e95e689de986d7b8dce6cf7c50ba6e3564c95d08dd66dcda4b0?placeholderIfAbsent=true&apiKey=24c5612ec37d4fbcbfc9ca0edfc13a50"
						title="Câmara de Braga avança para a compra do antigo cinema S. Geraldo"
						class="featured-card"
					/>
					<div class="news-column">
						<NewsCard
							image="https://cdn.builder.io/api/v1/image/assets/TEMP/47cfe0c2acf0ed17dfc440d06421d34e0b948324b1b76750c8e3ed08798f2e79?placeholderIfAbsent=true&apiKey=24c5612ec37d4fbcbfc9ca0edfc13a50"
							title="“Happy Holidays” vence Festival de Cinema de Marraquexe"
							class="standard-card"
						/>
						<NewsCard
							image="https://cdn.builder.io/api/v1/image/assets/TEMP/f5dbaa2c27a7a85fe34d6eade7289f6091a9875c6b8f062b33114632edb69b45?placeholderIfAbsent=true&apiKey=24c5612ec37d4fbcbfc9ca0edfc13a50"
							title="Festival de cinema Tribeca regressa a Lisboa em 2025"
							class="standard-card reverse"
						/>
					</div>
				</div>
			</div>
		</div>
		<Footer></Footer>
	</div>
</template>
  
  <script>
  import Footer from '../components/Footer.vue'
  import NewsCard from '../components/NewsCard.vue'

export default { 
    components: {
      NewsCard,
      Footer
    }
  }
  </script>
  
<style scoped>
.news-container {
	font-family: Chopin-Trial, sans-serif;
}

.grid-container {
	display: flex;
	flex-direction: row;
	gap: 20px;
	margin: 25px;
}

.grid-left, .grid-middle, .grid-right {
	display: flex;
  	flex-direction: column;
  	gap: 20px;
	width: 50%;
	margin: 0px;
}

.news-column {
	display: flex;
	flex-direction: column;
	gap: 20px;
	margin: 0px;
}

.standard-card, .featured-card {
	margin: 0px;
}

.standard-card {
	height: 250px;
}

.reverse {
	margin: 0;
}

.hero-section {
  display: flex;
  flex-direction: column;
  text-shadow: 1px 1px 7px rgba(254, 252, 252, 1);
  position: relative;
  min-height: 839px;
  color: rgba(255, 255, 255, 1);
  white-space: nowrap;
  padding: 349px 70px 279px;
  font: 500 96px Chopin-Trial, sans-serif;
}

.hero-background {
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

.hero-title {
  position: relative;
  align-self: center;
  font: 500 96px Chopin-Trial, sans-serif;
}

</style>