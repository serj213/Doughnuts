import React from 'react';

import s from './bigTextCenterSection.module.scss';

interface ITextProp {
  children: React.ReactNode;
}

const BigTextCenterSection: React.FC<ITextProp> = ({ children }) => {
  return (
    <section className={s.bigSection}>
      <h2 className={s.bigText}>{children}</h2>
    </section>
  );
};

export default BigTextCenterSection;
