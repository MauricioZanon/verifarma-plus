<template>
	<router-link class="tarjeta-pelicula" :to="'/detalle/' + pelicula.Title">
		<img v-if="tienePoster()" class="poster" :src="pelicula.Poster" alt="">
		<p v-else>{{ pelicula.Title }}</p>
	</router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: "tarjeta-pelicula",
	props: [
		"pelicula",
	],
	methods: {
		tienePoster(): boolean {
			return this.pelicula.Poster !== "N/A";
		},
	},
});

</script>

<style scoped>
.tarjeta-pelicula {
    margin-top: 15px;
    height: 300px;
    width: 200px;
    display: flex;
    align-items: center;
	cursor:pointer;
}

.poster {
    max-height: 300px;
    max-width: 200px;
    border-radius: 12px;
}
</style>