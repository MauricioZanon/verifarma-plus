<template>
	<form class="form-floating mb-3" @submit.prevent="submitBusqueda">
		<input class="buscador form-control" id="busqueda-input" type="text" role="search" placeholder="Search" ref="inputBusqueda">
		<label class="input-label" for="busqueda-input">Search</label>
	</form>
	<section v-if="peliculas.length">
		<h2 v-if="ultimaBusqueda">Results for "{{ ultimaBusqueda }}".</h2>
		<div class="contenedor-tarjetas">
			<TarjetaPelicula v-for="pelicula in peliculas" :key="pelicula.imdbID" :pelicula="pelicula" />
		</div>
	</section>
	<div v-else class="alert alert-warning" role="alert">
		Nothing was found for "{{ ultimaBusqueda }}".
	</div>
	<Paginado @cambiarPagina="cambiarPagina" :cantidad-peliculas="cantidadTotal"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TarjetaPelicula from '../components/TarjetaPelicula.vue';
import { buscarMasivo } from '../service/PeliculaService';
import { PeliculaBasica } from '../types';
import Paginado from "../components/Paginado.vue";

type HomeData = {
	peliculas: Array<PeliculaBasica>,
	cantidadTotal: number;
	ultimaBusqueda: string;
}

export default defineComponent({
	name: "vista-principal",
	data(): HomeData {
		return {
			peliculas: [],
			cantidadTotal: 0,
			
			ultimaBusqueda: "Harry Potter",
		};
	},
	mounted() {
		this.buscar(this.ultimaBusqueda);
	},
	methods: {
		async submitBusqueda(): Promise<void> {
			const busqueda = (this.$refs.inputBusqueda as HTMLInputElement).value;
			await this.buscar(busqueda);
			this.ultimaBusqueda = busqueda;
		},
		async buscar(titulo: string, pagina?: number): Promise<void> {
			const resultadoBusqueda = await buscarMasivo(titulo, pagina);
			this.peliculas = resultadoBusqueda.peliculas;
			this.cantidadTotal = Number(resultadoBusqueda.cantidadTotal);
		},
		cambiarPagina(pagina: number): void {
			this.buscar(this.ultimaBusqueda, pagina);
		},
	},
	components: { TarjetaPelicula, Paginado },
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
	width: 90%;
	margin: auto;
}

</style>