import React from 'react';
import s from './buttonDotter.module.scss';

import dotImg from '../../../assets/common/buttonDotter/dots.svg';

interface TButtonProp {
  children: React.ReactNode;
}

const ButtonDotter: React.FC<TButtonProp> = ({ children }) => {
  return (
    <button className={s.buttonDotter}>
      <span>{children}</span>
      <img src={dotImg} alt="" />
    </button>
  );
};

export default ButtonDotter;
