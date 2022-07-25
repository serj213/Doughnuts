import React from 'react';
import BannerBlock from '../Components/BannerBlock/BannerBlock';
import CrawlLine from '../Components/CrawlLine/CrawlLine';
import BigTextCenterSection from '../Components/Сommon/BigTextCenterSection/BigTextCenterSection';
import Team from '../Components/Team/Team';

const Home: React.FC = () => {
  return (
    <main>
      <BannerBlock />
      <BigTextCenterSection>
        Arrange a <span>sweet life</span> for yourself!
      </BigTextCenterSection>
      <CrawlLine word="our team" leftDirection={true} />
      <Team />
      <CrawlLine word="DONUTS" leftDirection={true} />
    </main>
  );
};

export default Home;
