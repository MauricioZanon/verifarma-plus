<template>
	<div class="form-container">
		<img class="logo" src="../assets/logo.png" alt="">
		<form role="log" @submit.prevent="loguear">
			<div class="form-floating mb-3">
				<input type="text" class="form-control" :class="claseValidez" id="usuario-input" placeholder="Username" v-model="usuarioIngresado" required>
				<label class="input-label" for="usuario-input">Username</label>
			</div>
			<div class="form-floating mb-3">
				<input type="password" class="form-control" id="password-input" placeholder="Password" v-model="passIngresada" required>
				<label class="input-label" for="password-input">Password</label>
			</div>
			<button class="btn btn-outline-primary" type="submit">Login</button>
		</form>
	</div>
</template>

<script lang="ts">
import { credencialesValidas } from '@/service/LoginService';
import router from '../router/router';
import { defineComponent } from 'vue';

type LoginData = {
	usuarioIngresado: string,
	passIngresada: string,
	claseValidez: string
}

export default defineComponent({
	name: "pantalla-login",
	data(): LoginData {
		return {
			usuarioIngresado: "",
			passIngresada: "",
			claseValidez: "",
		};
	},
	methods: {
		loguear() {
			if(credencialesValidas(this.usuarioIngresado, this.passIngresada)) {
				router.push("/home");
				this.claseValidez = "";
			} else {
				this.claseValidez = "is-invalid";
			}
		},
	},
});
</script>

<style scoped>
.logo {
	width: -webkit-fill-available;
	max-width: 500px;
}
.form-container {
	max-width: 500px;
	margin: auto;
}

.input-label {
	display: block;
}

button.btn-outline-primary {
	float:right;
	width: 50%;
}
</style>