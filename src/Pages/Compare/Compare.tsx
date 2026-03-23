import type { FilmCompare } from '../../Features/types';
import type { JSX } from 'react';

import { useState } from 'react';

import { useCompare } from '../../Features/useCompare';
import styles from './Compare.module.css';

interface Row {
  label: string;
  getValue: (film: FilmCompare) => string | number | undefined;
}

const rows: Row[] = [
  { label: 'Год', getValue: (f) => f.year ?? '—' },
  {
    label: 'Рейтинг КП',
    getValue: (f) => (f.rating?.kp ? `${f.rating.kp}/10` : '—'),
  },
  {
    label: 'Рейтинг IMDb',
    getValue: (f) => (f.rating?.imdb ? `${f.rating.imdb}/10` : '—'),
  },
  {
    label: 'Длительность',
    getValue: (f) => (f.movieLength ? `${f.movieLength} мин` : '—'),
  },
  {
    label: 'Возраст',
    getValue: (f) => (f.ageRating ? `${f.ageRating}+` : '—'),
  },
  {
    label: 'Жанры',
    getValue: (f) => f.genres?.map((g) => g.name).join(', ') ?? '—',
  },
  {
    label: 'Страны',
    getValue: (f) => f.countries?.map((c) => c.name).join(', ') ?? '—',
  },
  { label: 'IMAX', getValue: (f) => (f.technology?.hasImax ? 'Да' : 'Нет') },
];

export const Compare = (): JSX.Element => {
  const { compare, removeFromCompare } = useCompare();
  const [onlyDiff, setOnlyDiff] = useState<boolean>(false);

  const visibleRows = onlyDiff
    ? rows.filter((row) => {
        if (compare.length < 2) return true;
        return (
          String(row.getValue(compare[0])) !== String(row.getValue(compare[1]))
        );
      })
    : rows;

  if (compare.length === 0) {
    return (
      <div className={styles.empty}>
        <p>Добавьте фильмы для сравнения</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <label className={styles.toggle}>
        <input
          type='checkbox'
          checked={onlyDiff}
          onChange={(e) => setOnlyDiff(e.target.checked)}
        />
        Показывать только отличия
      </label>

      <div className={styles.table}>
        <div className={styles.row}>
          <div className={styles.label} />
          {compare.map((film) => (
            <div key={film.id} className={`${styles.cell} ${styles.header}`}>
              {film.poster?.url ? (
                <img
                  className={styles.poster}
                  src={film.poster.url}
                  alt={film.name}
                />
              ) : (
                <div className={styles.posterPlaceholder}>Нет постера</div>
              )}
              <p className={styles.name}>{film.name ?? '—'}</p>
              <button
                className={styles.removeBtn}
                onClick={() => removeFromCompare(film.id)}
              >
                Удалить
              </button>
            </div>
          ))}
        </div>

        {visibleRows.map((row) => (
          <div key={row.label} className={styles.row}>
            <div className={styles.label}>{row.label}</div>
            {compare.map((film) => (
              <div key={film.id} className={styles.cell}>
                {row.getValue(film) ?? '—'}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
