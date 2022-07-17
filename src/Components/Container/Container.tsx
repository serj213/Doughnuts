import React from 'react';

import s from './container.module.scss';

interface containerProp {
  children: React.ReactNode;
}

const Container: React.FC<containerProp> = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};

export default Container;
