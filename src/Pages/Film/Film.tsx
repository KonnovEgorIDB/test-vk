import type { FilmShort, Film as FilmType } from '../../Features/types';
import type { JSX } from 'react';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { getFilmById } from '../../Features/mockApi';
import { useCompare } from '../../Features/useCompare';
import { useFavorite } from '../../Features/useFavorite';
import styles from './Film.module.css';

export const Film = (): JSX.Element => {
  const { id } = useParams<string>();
  const { isFavorite, addToFavorite, removeFromFavorite } = useFavorite();
  const { isInCompare, addToCompare, removeFromCompare, compare } =
    useCompare();

  const [film, setFilm] = useState<FilmType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    if (!cancelled) setIsLoading(true);

    if (id)
      getFilmById(id)
        .then((res) => {
          if (!cancelled) setFilm(res);
        })
        .catch((err: Error) => {
          if (!cancelled) setError(err.message);
        })
        .finally(() => {
          if (!cancelled) setIsLoading(false);
        });

    return () => {
      cancelled = true;
    };
  }, [id]);

  if (isLoading) return <h1>Загрузка фильма</h1>;
  if (error) return <h1>{error}</h1>;
  if (!film) return <h1>Фильм не найден</h1>;

  const filmShort: FilmShort = {
    id: film.id,
    name: film.name,
    poster: film.poster,
    rating: film.rating,
    year: film.year,
  };

  const handleFavorite = () => {
    if (isFavorite(film.id)) {
      removeFromFavorite(film.id);
    } else {
      addToFavorite(filmShort);
    }
  };

  const handleCompare = () => {
    if (isInCompare(film.id)) {
      removeFromCompare(film.id);
    } else {
      addToCompare(filmShort);
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <h1 className={styles.title}>
          {film.name ? `${film.name} ${id}` : 'Название отсутствует'}
        </h1>

        <p className={styles.description}>
          {film.description
            ? `${film.description}`
            : 'Описание фильма отсутствует'}{' '}
        </p>

        {film.poster?.url ? (
          <img
            className={styles.poster}
            src={film.poster.url}
            alt='Постер фильма'
          />
        ) : (
          <p className={styles.meta}>Постер отсутствует</p>
        )}

        <p className={styles.subtitle}>Год выпуска</p>
        <p className={styles.meta}>{film.year}</p>

        <p className={styles.subtitle}>Рейтинг</p>

        <p className={styles.meta}>
          {film.rating?.kp !== undefined
            ? `${film.rating.kp}/10`
            : 'Рейтинг отсутствует'}
        </p>

        <p className={styles.subtitle}>Жанр</p>
        <ul className={styles.genresList}>
          {film.genres?.map((genre) => (
            <li key={genre.name}>{genre.name}</li>
          ))}
        </ul>

        <div className={styles.actions}>
          <button
            className={`${styles.btn} ${styles.btnPrimary}`}
            onClick={handleCompare}
            disabled={!isInCompare(film.id) && compare.length >= 2}
          >
            {isInCompare(film.id)
              ? 'Убрать из сравнения'
              : 'Добавить в сравнение'}
          </button>
          <button
            className={`${styles.btn} ${styles.btnSecondary}`}
            onClick={handleFavorite}
          >
            {isFavorite(film.id)
              ? 'Убрать из избранного'
              : 'Добавить в избранное'}
          </button>
        </div>
      </div>
    </section>
  );
};
