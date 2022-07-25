import React from 'react';
import s from './crawlLine.module.scss';

interface TCrawlLine {
  word: string;
  leftDirection?: boolean;
}

const CrawlLine: React.FC<TCrawlLine> = ({ word, leftDirection = false }) => {
  const newWords = [];

  for (let i = 0; i < 4; i++) {
    newWords.push(word);
  }

  return (
    <div className={`${s.crawlSection} ${leftDirection && s.left}`}>
      {newWords.map((item, index) => {
        return <span key={index}>{item}</span>;
      })}
    </div>
  );
};

export default CrawlLine;
