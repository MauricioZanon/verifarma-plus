import axios from 'axios';
import { Pelicula } from '../types';

const API_URL = "http://www.omdbapi.com/";
const API_KEY = "fa9f82e0";

async function buscarPorTitulo(titulo: string): Promise<Pelicula> {
	const response = await axios.get(`${API_URL}?apikey=${API_KEY}&t=${titulo}&plot=full&type=movie`);
	return response.data;
}

// FIXME La búsqueda masiva devuelve películas que no tienen todas las properties del tipo Pelicula
async function buscarMasivo(titulo: string): Promise<Pelicula[]> {
	const response = await axios.get(`${API_URL}?apikey=${API_KEY}&s=${titulo}&type=movie`);
	const resultado: Pelicula[] = response.data.Search;
	return resultado.sort(ordenarPorAño);
}

function ordenarPorAño(p1: Pelicula, p2: Pelicula): number {
	return p1.Year < p2.Year ? -1 : 1;
}

export {
	buscarPorTitulo,
	buscarMasivo,
};