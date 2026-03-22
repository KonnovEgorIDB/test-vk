import type { JSX } from 'react';

import { NavLink } from 'react-router';

import styles from './Navbar.module.css';

export default function Navbar(): JSX.Element {
  return (
    <nav className={styles.nav}>
      <NavLink
        to='/films'
        className={({ isActive }) =>
          `${styles.link} ${isActive ? styles.active : ''}`
        }
      >
        Главная
      </NavLink>
      <NavLink
        to='/compare'
        className={({ isActive }) =>
          `${styles.link} ${isActive ? styles.active : ''}`
        }
      >
        Сравнить фильмы
      </NavLink>
      <NavLink
        to='/favorite'
        className={({ isActive }) =>
          `${styles.link} ${isActive ? styles.active : ''}`
        }
      >
        Избранное
      </NavLink>
    </nav>
  );
}
