<template>
	<img src="../assets/logo.png" alt="">
	<form @submit.prevent="loguear">
		<div class="form-floating mb-3">
			<input type="text" class="form-control" :class="validez" id="usuario-input" placeholder="Usuario" v-model="usuarioIngresado" required>
			<label class="input-label" for="usuario-input">Usuario</label>
		</div>
		<div class="form-floating mb-3">
			<input type="password" class="form-control" id="password-input" placeholder="Password" v-model="passIngresada" required>
			<label class="input-label" for="password-input">Password</label>
		</div>
		<button type="submit">Ingresar</button>
	</form>
</template>

<script lang="ts">
import router from '../router/router';
import { defineComponent } from 'vue';

const usuarioEsperado = "verifarma";
const passEsperada = "verifarma";

type LoginData = {
	usuarioIngresado: string,
	passIngresada: string,
	validez: string
}

export default defineComponent({
	name: "pantalla-login",

	data(): LoginData {
		return {
			usuarioIngresado: "",
			passIngresada: "",
			validez: "",
		};
	},

	methods: {
		loguear() {
			if(this.usuarioIngresado === usuarioEsperado && this.passIngresada === passEsperada) {
				router.push("/home");
				this.validez = "";
			} else {
				this.validez = "is-invalid";
			}
		},
	},
});
</script>

<style scoped>
.input-label {
	display: block;
}
</style>