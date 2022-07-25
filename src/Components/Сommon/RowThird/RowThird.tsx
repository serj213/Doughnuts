import React from 'react';
import s from './rowThird.module.scss';

interface TRowThird {
  children: React.ReactNode;
}

const RowThird: React.FC<TRowThird> = ({ children }) => {
  return <div className={s.rowThird}>{children}</div>;
};

export default RowThird;
