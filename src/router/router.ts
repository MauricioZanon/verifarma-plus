import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import DetallePelicula from "../components/DetallePelicula.vue";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		component: () => import("../pages/Login.vue"),
	},
	{
		path: "/home",
		component: () => import("../pages/Home.vue"),
	},
	{
		path: "/detalle/:tituloPelicula",
		component: DetallePelicula,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
