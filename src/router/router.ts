import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import VistaDetalle from "../pages/VistaDetalle.vue";

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
		component: VistaDetalle,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
