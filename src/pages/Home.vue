<template>
	<input class="buscador" type="text" role="search" @change="buscarPelicula">
	<div class="contenedor-tarjetas">
		<div v-for="pelicula in peliculas" :key="pelicula.imdbID">
			<TarjetaPelicula :pelicula="pelicula"></TarjetaPelicula>
		</div>
	</div>
</template>

<script lang="ts">
import { buscarMasivo } from '../service/PeliculaService';
import { Pelicula } from '../types';
import TarjetaPelicula from '../components/TarjetaPelicula.vue';
import { Ref, defineComponent, ref } from 'vue';

type HomeData = {
	peliculas: Array<Pelicula>,
	modal: Ref<boolean>
}

export default defineComponent({
	name: "vista-principal",
	data(): HomeData {
		return {
			peliculas: [],
			modal: ref(false),
		};
	},
	async mounted() {
		this.peliculas = await buscarMasivo("harry potter");
	},
	methods: {
		async buscarPelicula(evento: Event): Promise<void> {
			const titulo = (evento.target as HTMLInputElement).value;
			this.peliculas = await buscarMasivo(titulo);
			console.log(this.peliculas);
		},
	},
	components: { TarjetaPelicula },
});
</script>

<style scoped>

.buscador {
	margin: 8px auto;
    display: block;
}

.contenedor-tarjetas {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
}

</style>