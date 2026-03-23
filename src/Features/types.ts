export interface Poster {
  url: string;
  previewUrl: string;
}

export interface Rating {
  kp: number;
  imdb: number;
  tmdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: number;
}

export interface Genre {
  name: string;
}

export interface Country {
  name: string;
}

export interface Person {
  id: number;
  name: string;
  photo: string;
  profession: string;
  enProfession: string;
}

export interface FilmShort {
  id: number;
  name?: string;
  poster?: Poster;
  rating: Rating;
  year?: number;
}

export interface FilmsResponse {
  docs: FilmShort[];
  limit: number;
  next: string | null;
  prev: string | null;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface FilmCompare {
  id: number;
  name?: string;
  poster?: Poster;
  rating: Rating;
  year?: number;
  movieLength?: number;
  ageRating?: number;
  genres?: Genre[];
  countries?: Country[];
  technology?: Technology;
}

export interface Technology {
  hasImax: boolean;
  has3D: boolean;
}

export interface WatchabilityItem {
  name: string;
  logo: { url: string };
  url: string;
}

export interface Watchability {
  items: WatchabilityItem[];
}

export interface FilmName {
  name: string;
  language?: string;
  type?: string;
}

export interface Film {
  id: number;
  name: string;
  alternativeName?: string;
  description?: string;
  shortDescription?: string;
  type: string;
  typeNumber: number;
  year?: number;
  movieLength?: number;
  ageRating?: number;
  isSeries: boolean;
  ticketsOnSale: boolean;
  hasOttFeatures?: boolean;
  hasSkippableFragments?: boolean;
  poster?: Poster;
  backdrop?: Poster;
  rating: Rating;
  votes: Rating;
  genres?: Genre[];
  countries?: Country[];
  persons?: Person[];
  technology?: Technology;
  watchability?: Watchability;
  externalId?: { kpHD?: string };
  names?: FilmName[];
  lists: string[];
  updatedAt: string;
}
