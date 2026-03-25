import type { Film, FilmsResponse } from './types';

const API_URL = import.meta.env.VITE_API_URL;
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

const headers = {
  'X-API-KEY': API_TOKEN,
};

export interface FilmsFilters {
  genre?: string;
  year?: string;
  movieLength?: string;
  ratingKp?: string;
}

export const getData = async (
  next?: string,
  filters: FilmsFilters = {},
): Promise<FilmsResponse> => {
  const params = new URLSearchParams();

  params.set('limit', '20');
  params.append('notNullFields', 'id');
  params.append('notNullFields', 'name');
  params.append('notNullFields', 'poster.url');

  if (next) params.set('next', next);
  if (filters.genre) params.set('genres.name', filters.genre);
  if (filters.year) params.set('year', filters.year);
  if (filters.movieLength) params.set('movieLength', filters.movieLength);
  if (filters.ratingKp) params.set('rating.kp', filters.ratingKp);

  const response = await fetch(`${API_URL}/v1.5/movie?${params.toString()}`, {
    headers,
  });

  if (!response.ok) throw new Error(`Ошибка запроса: ${response.status}`);

  return response.json();
};

export const getFilmById = async (id?: string): Promise<Film> => {
  const response = await fetch(`${API_URL}/v1.4/movie/${id}`, { headers });

  if (!response.ok) throw new Error(`Фильм не найден`);

  return response.json();
};

export const getGenres = async (): Promise<string[]> => {
  const response = await fetch(
    `${API_URL}/v1/movie/possible-values-by-field?field=genres.name`,
    { headers },
  );

  if (!response.ok) throw new Error(`Ошибка запроса: ${response.status}`);

  const data: { name: string; slug: string }[] = await response.json();
  return data.map((item) => item.name);
};
