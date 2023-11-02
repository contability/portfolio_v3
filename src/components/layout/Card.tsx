import React from 'react';
import { CardProps } from '../../types/about';

const Card = ({ title, content }: CardProps) => {
  return (
    <div>
      <h3 className="text-[2vw] maxLg:text-[3vw] maxMd:text-[5vw] font-bold mb-[2%]">{`[${title}]`}</h3>
      {content.map((item, itemIndex) => (
        <p className="mb-[16px]" key={`about-content__${itemIndex}`}>
          {item}
        </p>
      ))}
    </div>
  );
};

export default React.memo(Card);
