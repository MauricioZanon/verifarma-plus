import axios from 'axios';
import { Pelicula, PeliculaBasica, ResultadoBusqueda } from '../types';

const API_URL = "http://www.omdbapi.com/";
const API_KEY = "fa9f82e0";

async function buscarPorTitulo(titulo: string): Promise<Pelicula> {
	const response = await axios.get(`${API_URL}?apikey=${API_KEY}&t=${titulo}&plot=full&type=movie`);
	return response.data;
}

async function buscarMasivo(titulo: string, pagina = 1): Promise<ResultadoBusqueda> {
	const response = await axios.get(`${API_URL}?apikey=${API_KEY}&s=${titulo}&type=movie&page=${pagina}`);
	return {
		peliculas: response.data.Search?.sort(ordenarPorAño) ?? [],
		cantidadTotal: response.data.totalResults,
	};
}

function ordenarPorAño(p1: PeliculaBasica, p2: PeliculaBasica): number {
	return p1.Year < p2.Year ? -1 : 1;
}

export {
	buscarPorTitulo,
	buscarMasivo,
};