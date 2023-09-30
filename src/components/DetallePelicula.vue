<template>
	<div class="detalle-pelicula">
		<img class="poster" :src="pelicula.Poster" alt="" srcset="">
		<div>
			<h2>{{ pelicula.Title }} - {{ pelicula.Year }}</h2>
			<div v-if="pelicula.Plot"></div>
			<h5>Sinopsis</h5>
			<p class="descripcion">{{ pelicula.Plot }}</p>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Pelicula } from '../types';
import { buscarPorTitulo } from '@/service/PeliculaService';

type DetallePeliculaData = {
	pelicula: Pelicula
}

export default defineComponent({
	name: "detalle-pelicula",
	data(): DetallePeliculaData {
		return {
			pelicula: {} as Pelicula,
		};
	},
	async mounted() {
		const titulo = this.$route.params.tituloPelicula as string;
		this.pelicula = await buscarPorTitulo(titulo);
	},

});

</script>

<style scoped>

.detalle-pelicula {
	display: flex;
}

.poster {
	margin: 8px;
	border-radius: 10px;
}
</style>