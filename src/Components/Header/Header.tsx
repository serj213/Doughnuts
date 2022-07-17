import React from 'react';

import Container from '../Container/Container';
import Navigate from '../Navigate/Navigate';

import s from './header.module.scss';

import logoIcon from '../../assets/images/header/logo.svg';
import vkIcon from '../../assets/images/header/vk.svg';
import telegaIcon from '../../assets/images/header/telega.svg';
import whatsIcon from '../../assets/images/header/whats.svg';

const Header: React.FC = () => {
  const socialsData = [
    {
      img: vkIcon,
      href: '#',
    },
    {
      img: telegaIcon,
      href: '#',
    },
    {
      img: whatsIcon,
      href: '#',
    },
  ];

  return (
    <header className={s.header}>
      <Container>
        <div className={s.header__inner}>
          <div className={s.header__column}>
            <a className={s.header__logo}>
              <img src={logoIcon} alt="" />
            </a>
            <Navigate />
          </div>
          <div className={s.header__column}>
            <a className={s.header__phone} href="tel:+79001234567">
              +7 (900) 123-45-67
            </a>
            {socialsData.map((link, index) => {
              return (
                <a key={index} className={s.social__link} href={link.href}>
                  <img src={link.img} alt="" />
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
