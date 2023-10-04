import React from 'react';
import { CardProps } from '../../../types/about';

const Card = ({ title, content }: CardProps) => {
  return (
    <div>
      <h3 className="text-[2vw] maxLg:text-[4vw] font-medium mb-[2%]">{`[${title}]`}</h3>
      <p className="">{content}</p>
    </div>
  );
};

export default React.memo(Card);
