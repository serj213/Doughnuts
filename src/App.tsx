import React from 'react';

import Header from './Components/Header/Header';
import BannerBlock from './Components/BannerBlock/BannerBlock';

import s from './app.module.scss';

const App: React.FC = () => {
  return (
    <div className={s.wrapper}>
      <Header />
      <main className={s.main}>
        <BannerBlock />
      </main>
    </div>
  );
};

export default App;
