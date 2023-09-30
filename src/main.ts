import { createApp } from "vue";
import router from "./router/router";
import App from "./App.vue";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';

createApp(App)
	.use(router)
	.mount("#app");

