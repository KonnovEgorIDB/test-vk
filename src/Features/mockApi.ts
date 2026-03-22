import type { Film, FilmsResponse } from './types';

const initialState: FilmsResponse = {
  docs: [
    {
      id: 11612045,
      name: 'Театр в кино: Шурале',
      poster: {
        url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4486362/8e024ba3-444c-4d31-bb88-72f06b6b1818/600x900',
        previewUrl:
          'https://avatars.mds.yandex.net/get-kinopoisk-image/4486362/8e024ba3-444c-4d31-bb88-72f06b6b1818/300x450',
      },
      rating: {
        kp: 0,
        imdb: 0,
        tmdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      year: 2025,
    },
    {
      id: 11643251,
      name: 'Хоровод',
      poster: {
        url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4483445/4804d115-392e-4536-88a4-5076b1ae6ffe/600x900',
        previewUrl:
          'https://avatars.mds.yandex.net/get-kinopoisk-image/4483445/4804d115-392e-4536-88a4-5076b1ae6ffe/300x450',
      },
      rating: {
        kp: 0,
        imdb: 0,
        tmdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      year: 2026,
    },
    {
      id: 11634195,
      name: 'В погоне за нефритом',
      poster: {
        url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4716873/3e79771c-5b21-446a-8cc9-77defd20a80f/600x900',
        previewUrl:
          'https://avatars.mds.yandex.net/get-kinopoisk-image/4716873/3e79771c-5b21-446a-8cc9-77defd20a80f/300x450',
      },
      rating: {
        kp: 0,
        imdb: 7.8,
        tmdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      year: 2026,
    },
    {
      id: 11613695,
      name: 'Мульт в кино. Выпуск №193. Навстречу приключениям',
      poster: {
        url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4486362/1bc576df-db3a-4e7b-b1d9-9c28b0d6ac1f/600x900',
        previewUrl:
          'https://avatars.mds.yandex.net/get-kinopoisk-image/4486362/1bc576df-db3a-4e7b-b1d9-9c28b0d6ac1f/300x450',
      },
      rating: {
        kp: 0,
        imdb: 0,
        tmdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      year: 2026,
    },
    {
      id: 11642360,
      name: 'БАСТА. Начало игры',
      rating: {
        kp: 0,
        imdb: 0,
        tmdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
    },
    {
      id: 4383970,
      rating: {
        kp: 0,
        imdb: 3.1,
        tmdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      year: 2004,
    },
    {
      id: 4383316,
      rating: {
        kp: 0,
        imdb: 5.6,
        tmdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      year: 2021,
    },
    {
      id: 11534496,
      rating: {
        kp: 0,
        imdb: 6.4,
        tmdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      year: 2025,
    },
    {
      id: 756378,
      rating: {
        kp: 0,
        imdb: 7,
        tmdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      year: 2012,
    },
    {
      id: 4908915,
      rating: {
        kp: 0,
        imdb: 6.8,
        tmdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      year: 2021,
    },
    {
      id: 4924203,
      rating: {
        kp: 0,
        imdb: 7.5,
        tmdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      year: 2020,
    },
    {
      id: 5185398,
      rating: {
        kp: 0,
        imdb: 7.5,
        tmdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      year: 2021,
    },
    {
      id: 11534012,
      rating: {
        kp: 0,
        imdb: 0,
        tmdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      year: 2026,
    },
    {
      id: 11538151,
      rating: {
        kp: 0,
        imdb: 7.5,
        tmdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      year: 2019,
    },
    {
      id: 11535475,
      name: 'Тихий шум',
      poster: {
        url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/10592371/adcbd967-b6a9-47ab-ac5c-f2511793de05/600x900',
        previewUrl:
          'https://avatars.mds.yandex.net/get-kinopoisk-image/10592371/adcbd967-b6a9-47ab-ac5c-f2511793de05/300x450',
      },
      rating: {
        kp: 0,
        imdb: 0,
        tmdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      year: 2026,
    },
    {
      id: 11534510,
      rating: {
        kp: 0,
        imdb: 0,
        tmdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      year: 2025,
    },
    {
      id: 11534523,
      rating: {
        kp: 0,
        imdb: 0,
        tmdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
    },
    {
      id: 11534509,
      rating: {
        kp: 0,
        imdb: 8.4,
        tmdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      year: 2022,
    },
    {
      id: 11534508,
      rating: {
        kp: 0,
        imdb: 0,
        tmdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      year: 2016,
    },
    {
      id: 11534281,
      rating: {
        kp: 0,
        imdb: 3.9,
        tmdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      year: 2026,
    },
    {
      id: 11534201,
      rating: {
        kp: 0,
        imdb: 0,
        tmdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      year: 2026,
    },
    {
      id: 11534319,
      name: 'Золотое сердце',
      rating: {
        kp: 0,
        imdb: 3.1,
        tmdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      year: 2026,
    },
    {
      id: 11534238,
      name: 'Привилегии',
      rating: {
        kp: 0,
        imdb: 0,
        tmdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
    },
    {
      id: 11534259,
      rating: {
        kp: 0,
        imdb: 7.1,
        tmdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      year: 2026,
    },
    {
      id: 11551127,
      name: 'Полицейский по обмену',
      rating: {
        kp: 0,
        imdb: 0,
        tmdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
    },
    {
      id: 11551151,
      name: 'Високосный день',
      poster: {
        url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/9784475/a3035612-8a1c-4ba9-8de0-069b92f23ce1/600x900',
        previewUrl:
          'https://avatars.mds.yandex.net/get-kinopoisk-image/9784475/a3035612-8a1c-4ba9-8de0-069b92f23ce1/300x450',
      },
      rating: {
        kp: 0,
        imdb: 8.4,
        tmdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      year: 2025,
    },
    {
      id: 11534513,
      rating: {
        kp: 0,
        imdb: 0,
        tmdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
    },
    {
      id: 11550480,
      name: 'Крошки',
      rating: {
        kp: 0,
        imdb: 0,
        tmdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      year: 2026,
    },
    {
      id: 11550508,
      name: 'Ледовая братва',
      rating: {
        kp: 0,
        imdb: 0,
        tmdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      year: 2026,
    },
    {
      id: 11548187,
      rating: {
        kp: 0,
        imdb: 7.1,
        tmdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      year: 1958,
    },
    {
      id: 11548176,
      rating: {
        kp: 0,
        imdb: 5.9,
        tmdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      year: 2017,
    },
    {
      id: 11550536,
      name: 'Маугли и Акира. Новые приключения',
      rating: {
        kp: 0,
        imdb: 0,
        tmdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      year: 2026,
    },
    {
      id: 11549319,
      rating: {
        kp: 0,
        imdb: 6.7,
        tmdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      year: 1991,
    },
    {
      id: 11540753,
      name: 'Сегодня снова всё распродано',
      rating: {
        kp: 0,
        imdb: 0,
        tmdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      year: 2026,
    },
    {
      id: 11556591,
      name: 'Роковой мужчина',
      rating: {
        kp: 0,
        imdb: 0,
        tmdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      year: 2025,
    },
    {
      id: 11556597,
      name: 'Брошенная невеста',
      rating: {
        kp: 0,
        imdb: 0,
        tmdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      year: 2025,
    },
    {
      id: 11556585,
      name: 'Одиночки с прицепом',
      poster: {
        url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/10835644/cd0733f5-73da-4ac9-b2dc-613b609f7a10/600x900',
        previewUrl:
          'https://avatars.mds.yandex.net/get-kinopoisk-image/10835644/cd0733f5-73da-4ac9-b2dc-613b609f7a10/300x450',
      },
      rating: {
        kp: 0,
        imdb: 0,
        tmdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      year: 2025,
    },
    {
      id: 11556598,
      name: 'Стеклянный дом',
      rating: {
        kp: 0,
        imdb: 0,
        tmdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      year: 2025,
    },
    {
      id: 11556700,
      name: 'Дочь короля демонов слишком добрая!',
      poster: {
        url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/10809116/6ceec172-f1f2-487c-a40f-3b7953f6afd7/600x900',
        previewUrl:
          'https://avatars.mds.yandex.net/get-kinopoisk-image/10809116/6ceec172-f1f2-487c-a40f-3b7953f6afd7/300x450',
      },
      rating: {
        kp: 0,
        imdb: 6.4,
        tmdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      year: 2026,
    },
    {
      id: 11556654,
      name: 'Кис-Мяу',
      poster: {
        url: 'https://avatars.mds.yandex.net/get-ott/18164279/2a0000019ce1b845db2e7e26f48de6356533/600x900',
        previewUrl:
          'https://avatars.mds.yandex.net/get-ott/18164279/2a0000019ce1b845db2e7e26f48de6356533/300x450',
      },
      rating: {
        kp: 0,
        imdb: 0,
        tmdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      year: 2024,
    },
    {
      id: 11557034,
      rating: {
        kp: 0,
        imdb: 7.9,
        tmdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      year: 2024,
    },
    {
      id: 11556701,
      rating: {
        kp: 0,
        imdb: 0,
        tmdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
    },
    {
      id: 11557011,
      rating: {
        kp: 0,
        imdb: 6.6,
        tmdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      year: 2018,
    },
    {
      id: 11557235,
      name: 'Пункт назначения: джунгли',
      poster: {
        url: 'https://avatars.mds.yandex.net/get-ott/17735790/2a0000019ce636967f673df885467ae8c865/600x900',
        previewUrl:
          'https://avatars.mds.yandex.net/get-ott/17735790/2a0000019ce636967f673df885467ae8c865/300x450',
      },
      rating: {
        kp: 0,
        imdb: 8.8,
        tmdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      year: 2021,
    },
    {
      id: 11557224,
      name: 'Мамины сказки',
      rating: {
        kp: 0,
        imdb: 0,
        tmdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
    },
    {
      id: 11558415,
      rating: {
        kp: 0,
        imdb: 0,
        tmdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      year: 2026,
    },
    {
      id: 11557557,
      name: 'Казаки на СВО',
      poster: {
        url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/9784475/ec0b2564-2f58-4cd7-8c13-fd39f3fb04d2/600x900',
        previewUrl:
          'https://avatars.mds.yandex.net/get-kinopoisk-image/9784475/ec0b2564-2f58-4cd7-8c13-fd39f3fb04d2/300x450',
      },
      rating: {
        kp: 0,
        imdb: 0,
        tmdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      year: 2024,
    },
    {
      id: 11557169,
      rating: {
        kp: 0,
        imdb: 0,
        tmdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
    },
    {
      id: 11572513,
      name: 'Пешка под королевой',
      poster: {
        url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/9784475/2a43564a-eaf6-4304-b06d-69309a6e2835/600x900',
        previewUrl:
          'https://avatars.mds.yandex.net/get-kinopoisk-image/9784475/2a43564a-eaf6-4304-b06d-69309a6e2835/300x450',
      },
      rating: {
        kp: 0,
        imdb: 0,
        tmdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      year: 2026,
    },
    {
      id: 11592752,
      rating: {
        kp: 0,
        imdb: 0,
        tmdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      year: 2026,
    },
  ],
  limit: 50,
  next: 'eyJ2IjpbbnVsbF0sImlkIjoiNjliNWRjMzcyNjRmYWU0MWNhYjBjZWM5In0=',
  prev: null,
  hasNext: true,
  hasPrev: false,
};
const currentFilm: Film = {
  lists: [],
  id: 11643251,
  ageRating: 12,
  alternativeName: 'Хоровод',
  backdrop: {
    url: 'https://avatars.mds.yandex.net/get-ott/17636663/2a0000019d059c8d488814d2cde81ba17af6/1344x756',
    previewUrl:
      'https://avatars.mds.yandex.net/get-ott/17636663/2a0000019d059c8d488814d2cde81ba17af6/678x380',
  },
  countries: [
    {
      name: 'Россия',
    },
  ],
  description:
    'Режиссер Ульяна Анохина на протяжении трёх лет снимает группу «Бонд с кнопкой» в самых разных ситуациях и обстоятельствах: в быту, на репетициях, в туре и на фестивалях. В объективе камеры: рождение одной из песен в студии, хроника первого исполнения другой, воплощение с детским хором третьей. А затем наступает время концерта: свыше шести тысяч зрителей, группа «Бонд с кнопкой», хор Florium, детский хор из города Выкса и струнный квартет. Больше сорока человек на сцене в пиковые моменты выступления.',
  genres: [
    {
      name: 'концерт',
    },
    {
      name: 'музыка',
    },
  ],
  hasOttFeatures: true,
  hasSkippableFragments: false,
  isSeries: false,
  movieLength: 49,
  name: 'Хоровод',
  persons: [
    {
      id: 10340272,
      name: 'Ульяна Анохина',
      photo:
        'https://st.kp.yandex.net/images/actor_iphone/iphone360_10340272.jpg',
      profession: 'режиссеры',
      enProfession: 'director',
    },
    {
      id: 10416471,
      name: 'Илья Золотухин',
      photo:
        'https://st.kp.yandex.net/images/actor_iphone/iphone360_10416471.jpg',
      profession: 'сценаристы',
      enProfession: 'writer',
    },
  ],
  poster: {
    url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4483445/4804d115-392e-4536-88a4-5076b1ae6ffe/600x900',
    previewUrl:
      'https://avatars.mds.yandex.net/get-kinopoisk-image/4483445/4804d115-392e-4536-88a4-5076b1ae6ffe/300x450',
  },
  rating: {
    kp: 0,
    imdb: 0,
    tmdb: 0,
    filmCritics: 0,
    russianFilmCritics: 0,
    await: 0,
  },
  technology: {
    hasImax: false,
    has3D: false,
  },
  ticketsOnSale: false,
  type: 'movie',
  typeNumber: 1,
  updatedAt: '2026-03-20T18:43:42.461Z',
  votes: {
    kp: 0,
    imdb: 0,
    tmdb: 0,
    filmCritics: 0,
    russianFilmCritics: 0,
    await: 0,
  },
  watchability: {
    items: [
      {
        name: 'Kinopoisk HD',
        logo: {
          url: 'https://yastatic.net/s3/kinopoisk-frontend/hd-www/release/apple-touch-icon-180x180.png',
        },
        url: 'https://hd.kinopoisk.ru/?rt=ea4a9f4efb9240efae4f6de1dd635dd3',
      },
    ],
  },
  year: 2026,
  externalId: {
    kpHD: 'ea4a9f4efb9240efae4f6de1dd635dd3',
  },
  names: [
    {
      name: 'Хоровод',
      language: 'RU',
      type: 'Russian title on kinopoisk',
    },
  ],
  shortDescription:
    '«Мало было», «Камушки», «Сквозняки» и «Маяки». Фильм-концерт одной из главных новых российских групп',
};
export const getData = async (): Promise<FilmsResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(initialState);
    }, 1000);
  });
};

export const getFilmById = async (): Promise<Film> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(currentFilm);
    }, 1000);
  });
};
