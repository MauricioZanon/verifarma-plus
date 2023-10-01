<template>
	<nav class="paginador" role="navigation" v-if="cantidadPaginas > 1">
		<ul class="pagination">
			<li @click="emitCambioDePagina(i)" v-for="i in cantidadPaginas" class="page-item" :key="i"><a class="page-link" href="#">{{ i }}</a></li>
		</ul>
	</nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

/** Es la cantidad máxima de películas que devuelve la API */
const peliculasPorPagina = 10;

export default defineComponent({
	name: "paginado-peliculas",
	props: {
		"cantidadPeliculas": {
			type: Number,
			required: true,
		},
	},
	methods: {
		emitCambioDePagina(indice: number): void {
			this.$emit("cambiarPagina", indice);
		},
	},
	computed: {
		cantidadPaginas(): number {
			return Math.ceil(this.cantidadPeliculas / peliculasPorPagina);
		},
	},
});
</script>

<style scoped>
.paginador {
	display: flex;
	margin-top: 3em;
}

.pagination {
	margin: auto;
}

</style>