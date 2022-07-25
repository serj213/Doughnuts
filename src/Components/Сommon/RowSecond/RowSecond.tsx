import React from 'react';

import s from './rowSecond.module.scss';

interface TRowSecond {
  children: React.ReactNode;
}

const RowSecond: React.FC<TRowSecond> = ({ children }) => {
  return <div className={s.rowSecond}>{children}</div>;
};

export default RowSecond;
