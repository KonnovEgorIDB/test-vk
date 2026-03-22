import type { JSX } from 'react';

import { useNavigate } from 'react-router';

import styles from './NotFound.module.css';

export const NotFound = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1 className={styles.code}>404</h1>
      <p className={styles.title}>Страница не найдена</p>
      <button className={styles.btn} onClick={() => navigate('/films')}>
        Вернуться на главную
      </button>
    </div>
  );
};
