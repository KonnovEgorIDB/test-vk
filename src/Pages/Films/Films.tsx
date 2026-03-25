import type { FilmsFilters } from '../../Features/mockApi';
import type { FilmShort } from '../../Features/types';
import type { JSX } from 'react';

import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';

import { getData, getGenres } from '../../Features/mockApi';
import styles from './Films.module.css';

export const Films = (): JSX.Element => {
  const [films, setFilms] = useState<FilmShort[]>([]);
  const [nextCursor, setNextCursor] = useState<string | undefined>(undefined);
  const [hasNext, setHasNext] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [filters, setFilters] = useState<FilmsFilters>({});
  const [pendingFilters, setPendingFilters] = useState<FilmsFilters>({});
  const sentinelRef = useRef<HTMLDivElement>(null);
  const isFirstLoad = useRef<boolean>(true);

  const [genres, setGenres] = useState<string[]>([]);

  useEffect(() => {
    getGenres().then(setGenres).catch(console.error);
  }, []);

  const loadFilms = (
    cursor?: string,
    currentFilters: FilmsFilters = filters,
  ) => {
    if (isLoading) return;
    setIsLoading(true);

    getData(cursor, currentFilters)
      .then((result) => {
        setFilms((prev) => (cursor ? [...prev, ...result.docs] : result.docs));
        setNextCursor(result.next ?? undefined);
        setHasNext(result.hasNext);
      })
      .catch((err: Error) => console.error(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      loadFilms();
    }
  }, []);

  useEffect(() => {
    if (!sentinelRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNext && !isLoading && nextCursor) {
          loadFilms(nextCursor);
        }
      },
      { threshold: 0.1, rootMargin: '400px' },
    );

    observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [hasNext, isLoading, nextCursor]);

  const handleApplyFilters = () => {
    setFilters(pendingFilters);
    setFilms([]);
    setNextCursor(undefined);
    setHasNext(true);
    loadFilms(undefined, pendingFilters);
  };

  const handleResetFilters = () => {
    const empty = {};
    setPendingFilters(empty);
    setFilters(empty);
    setFilms([]);
    setNextCursor(undefined);
    setHasNext(true);
    loadFilms(undefined, empty);
  };

  return (
    <div className={styles.container}>
      <h1>Фильмы</h1>

      <div className={styles.filters}>
        <select
          className={styles.filterInput}
          value={pendingFilters.genre ?? ''}
          onChange={(e) =>
            setPendingFilters((prev) => ({
              ...prev,
              genre: e.target.value || undefined,
            }))
          }
        >
          <option value=''>Все жанры</option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
        <input
          className={styles.filterInput}
          type='text'
          placeholder='Год: 2020-2024'
          value={pendingFilters.year ?? ''}
          onChange={(e) =>
            setPendingFilters((prev) => ({
              ...prev,
              year: e.target.value || undefined,
            }))
          }
        />
        <input
          className={styles.filterInput}
          type='text'
          placeholder='Длительность: 90-120'
          value={pendingFilters.movieLength ?? ''}
          onChange={(e) =>
            setPendingFilters((prev) => ({
              ...prev,
              movieLength: e.target.value || undefined,
            }))
          }
        />
        <input
          className={styles.filterInput}
          type='text'
          placeholder='Рейтинг КП: 7-10'
          value={pendingFilters.ratingKp ?? ''}
          onChange={(e) =>
            setPendingFilters((prev) => ({
              ...prev,
              ratingKp: e.target.value || undefined,
            }))
          }
        />
        <button className={styles.filterBtn} onClick={handleApplyFilters}>
          Применить
        </button>
        <button
          className={styles.filterBtnSecondary}
          onClick={handleResetFilters}
        >
          Сбросить
        </button>
      </div>

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

      <div ref={sentinelRef} style={{ height: 40 }} />

      {isLoading && <p className={styles.status}>Загрузка...</p>}
      {!hasNext && !isLoading && (
        <p className={styles.status}>Все фильмы загружены</p>
      )}
    </div>
  );
};
