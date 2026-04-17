import type { Genre } from './genres.ts';

export interface Movie {
  id: number;
  title: string;
  year: number;
  director: string;
  duration: number; // en minutos
  poster: string; // url movie poster
  rate: number; // moving rating 0 a 10
  genres?: Genre[]; // Array of genres associated with the movies
}

export interface RelationMovieGenre {
  movie_id: number;
  genre_id: number;
}
