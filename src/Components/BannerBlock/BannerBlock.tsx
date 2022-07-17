import React from 'react';

import Container from '../Container/Container';

import s from './bannerBlock.module.scss';

import bannerImg from '../../assets/images/banner/bg.png';

const BannerBlock: React.FC = () => {
  return (
    <section className={s.banner}>
      <img src="" alt="" />
      <Container>
        <div className={s.banner__inner}>
          <div className={s.banner__content}>
            <h1 className={s.banner__title}>Find your favorite donut!</h1>

            <p className={s.banner__subtitle}>Our bakery offers various options of donuts</p>

            <button></button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BannerBlock;
