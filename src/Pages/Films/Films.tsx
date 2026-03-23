import type { FilmShort } from '../../Features/types';
import type { JSX } from 'react';

import { useEffect, useState } from 'react';
import { Link } from 'react-router';

import { getData } from '../../Features/mockApi';
import styles from './Films.module.css';

export const Films = (): JSX.Element => {
  const [films, setFilms] = useState<FilmShort[]>([]);

  useEffect(() => {
    getData().then((result) => {
      console.log(result.docs);
      setFilms(result.docs);
    });
  }, []);

  return (
    <>
      <h1>Сайт находится на стадии разработки</h1>
      <h1>Фильмы</h1>
      <ul className={styles.list}>
        {films.map((film) => (
          <li key={film.id}>
            <Link to={`/films/${film.id}`}>
              <article className={styles.card}>
                {film.poster?.url ? (
                  <img
                    className={styles.card__img}
                    src={film.poster.url}
                    alt='Постер фильма'
                  />
                ) : (
                  <div className={styles.card__placeholder}>
                    Постер отсутствует
                  </div>
                )}
                <div className={styles.card__body}>
                  {film.name ? (
                    <h2 className={styles.card__title}>{film.name}</h2>
                  ) : (
                    <h2 className={styles.card__title}>Нет названия</h2>
                  )}
                  <p className={styles.card__meta}>{film.year}</p>
                  {film.rating?.kp !== undefined ? (
                    <p className={styles.card__meta}>{film.rating.kp}/10</p>
                  ) : (
                    <p className={styles.card__meta}>Рейтинг отсутствует</p>
                  )}
                </div>
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
