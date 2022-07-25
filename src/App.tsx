import React from 'react';

import Header from './Components/Header/Header';
import BannerBlock from './Components/BannerBlock/BannerBlock';
import Home from './pages/Home';

import s from './app.module.scss';

const App: React.FC = () => {
  return (
    <div className={s.wrapper}>
      <Header />
      <Home />
    </div>
  );
};

export default App;
