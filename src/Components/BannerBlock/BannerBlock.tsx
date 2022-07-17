import React from 'react';

import Container from '../Container/Container';

import s from './bannerBlock.module.scss';

import bannerImg from '../../assets/images/banner/bg.png';

const BannerBlock: React.FC = () => {
  return (
    <section className={s.banner}>
      <img className={s.banner__bg} src={bannerImg} alt="" />
      <Container>
        <div className={s.banner__inner}>
          <div className={s.banner__content}>
            <h1 className={s.banner__title}>
              Find your favorite <span>donut</span>!
            </h1>

            <p className={s.banner__subtitle}>Our bakery offers various options of donuts</p>

            <button className={s.btnBig}>CHOOSE DONUTS</button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BannerBlock;
