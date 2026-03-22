import type { Film as FilmType } from '../../Features/types';
import type { JSX } from 'react';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { getFilmById } from '../../Features/mockApi';
import styles from './Film.module.css';

export const Film = (): JSX.Element => {
  const { id } = useParams();
  const [film, setFilm] = useState<FilmType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    if (!cancelled) setIsLoading(true);

    getFilmById()
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

  if (isLoading) return <h1>Загрузка фильмов</h1>;
  if (error) return <h1>{error}</h1>;
  if (!film) return <h1>Фильм не найден</h1>;

  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <h1 className={styles.title}>
          {film.name} {id}
        </h1>
        {film.description ? (
          <p className={styles.description}>{film.description}</p>
        ) : (
          <p className={styles.description}>Описание фильма отсутствует</p>
        )}

        {film.poster?.url ? (
          <img
            className={styles.poster}
            src={film.poster.url}
            alt='Постер фильма'
          />
        ) : (
          <p className={styles.meta}>Постер отсутствует</p>
        )}

        <p className={styles.genresTitle}>Год выпуска</p>
        <p className={styles.meta}>{film.year}</p>

        <p className={styles.genresTitle}>Рейтинг</p>

        {film.rating?.kp !== undefined ? (
          <p className={styles.meta}>{film.rating.kp}/10</p>
        ) : (
          <p className={styles.meta}>Рейтинг отсутствует</p>
        )}

        <p className={styles.genresTitle}>Жанр</p>
        <ul className={styles.genresList}>
          {film.genres?.map((genre) => (
            <li key={genre.name}>{genre.name}</li>
          ))}
        </ul>

        <div className={styles.actions}>
          <button className={`${styles.btn} ${styles.btnPrimary}`}>
            Добавить в сравнение
          </button>
          <button className={`${styles.btn} ${styles.btnSecondary}`}>
            Добавить в избранное
          </button>
        </div>
      </div>
    </section>
  );
};
