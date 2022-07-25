import React from 'react';
import Container from '../Container/Container';
import RowSecond from '../Сommon/RowSecond/RowSecond';
import ButtonDotter from '../Сommon/ButtonDotter/ButtonDotter';

import s from './team.module.scss';

import photo from '../../assets/team/01.png';

const Team: React.FC = () => {
  return (
    <section className={s.team}>
      <Container>
        <RowSecond>
          <div className={s.team__column}>
            <h5 className={s.team__title}>The «Doughnuts» team</h5>
            <div className={s.team__texts}>
              <p>
                We use the freshest products, free shipping and the best service! We want every
                customer to be satisfied and contact us again. After all, we work every day to make
                your meal delicious!
              </p>
              <p>
                The «Doughnuts» team has been on the market for about one year. During this time,
                each of us has improved our culinary skills, found friends and even fell in love.
              </p>
              <p>
                Teamwork makes everyone more open and tolerant, teaches how to interact with other
                people, establish connections and collaborate effectively. Our team is attentive to
                everyone.
              </p>
              <p>
                A person in a team learns to show empathy, develops emotional intelligence, learns
                to listen, respect, and understand others.
              </p>
            </div>
            <ButtonDotter>find out more</ButtonDotter>
          </div>

          <div className={s.team__column}>
            <img src={photo} alt="" />
          </div>
        </RowSecond>
      </Container>
    </section>
  );
};

export default Team;
