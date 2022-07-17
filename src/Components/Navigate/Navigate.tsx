import React from 'react';

import s from './navigate.module.scss';

const Navigate: React.FC = () => {
  return (
    <nav className={s.navigate}>
      <ul>
        <li className={s.navigate__item}>
          <button>About us</button>
        </li>

        <li className={s.navigate__item}>
          <button>Catalog</button>
        </li>

        <li className={s.navigate__item}>
          <a>
            Cart
            <span>15</span>
          </a>
        </li>

        <li className={s.navigate__item}>
          <button>Contacts</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigate;
