export type PeliculaBasica = {
	Poster: string;
	Title: string;
	Year: string;
	imdbID: string;
}

export type Pelicula = PeliculaBasica & {
	Actors: string;
	Awards: string;
	Country: string;
	Director: string;
	Genre: string;
	Plot: string;
	Rated: string;
	Released: string;
	Runtime: string;
	Ratings: Array<Rating>
}

export type Rating = {
	Source: string;
	Value: string;
}

export type ResultadoBusqueda = {
	peliculas: Array<PeliculaBasica>;
	cantidadTotal: string;
}