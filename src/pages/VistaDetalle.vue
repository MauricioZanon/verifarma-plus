<template>
	<div class="detalle-pelicula">
		<div class="poster-container">
			<img :src="pelicula.Poster" alt="No image found">
		</div>
		<section>
			<h2 tabindex="1">{{ pelicula.Title }}</h2>
			<hr>
			<p tabindex="2">{{ pelicula.Year }} · {{ pelicula.Rated }} · {{ pelicula.Runtime }}</p>
			<p tabindex="3" v-if="pelicula.Plot !== 'N/A'" class="trama">{{ pelicula.Plot }}</p>
			<ul class="lista-detalles">
				<li tabindex="4">
					<h5>Actors</h5>
					<p>{{ pelicula.Actors }}</p>
				</li>
				<li tabindex="4">
					<h5>Awards</h5>
					<p>{{ pelicula.Awards }}</p>
				</li>
				<li tabindex="4">
					<h5>Ratings</h5>
					<span v-if="pelicula.Ratings?.length > 0">
						<Rating v-for="({Source, Value}, index) in pelicula.Ratings" :source="Source" :value="Value" :key="index" />
					</span>
					<p v-else>N/A</p>
				</li>
				<li tabindex="4">
					<h5>Director</h5>
					<p>{{ pelicula.Director }}</p>
				</li>
			</ul>
		</section>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Pelicula } from '../types';
import { buscarPorTitulo } from '@/service/PeliculaService';
import Rating from "../components/Rating.vue";

type VistaDetalleData = {
	pelicula: Pelicula
}

export default defineComponent({
	name: "vista-detalle",
	data(): VistaDetalleData {
		return {
			pelicula: {} as Pelicula,
		};
	},
	async created() {
		const titulo = this.$route.params.tituloPelicula as string;
		this.pelicula = await buscarPorTitulo(titulo);
	},
	components: {Rating},
});

</script>

<style scoped>

.detalle-pelicula {
	display: flex;
}

@media (max-width: 820px){
	.detalle-pelicula{
		flex-wrap: wrap;
		justify-content: center
    }

	.poster-container>img {
		margin: auto;
	}

}

.poster-container {
	height: 450px;
	width: 300px;
	margin: 8px;
}

.poster-container>img {
	border-radius: 10px;
}

.trama {
	text-wrap: balance;
}

.trama::first-letter {
	font-size: 2em;
	line-height: 1em;
	font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

.lista-detalles {
	list-style: none;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	padding: 0;
}

.lista-detalles>li {
	padding-right: 0.5em;
	width: 50%;
}
</style>