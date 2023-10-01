<template>
	<div>
		<span>{{ source }}: </span>
		<span>{{ value }}</span>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: "rating-pelicula",
	props: [
		"source",
		"value",
	],
});

</script>

<style scoped>

</style>