import { copyString } from '@lib/utils';
import React, { useRef, useState } from 'react';
import MessageModal from './MessageModal';

interface CopyBoxProps {
  /** 내용 */
  contents: string;
}

const CopyBox = ({ contents }: CopyBoxProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
    copyString(contents);
  };

  return (
    <>
      <button
        className={`relative hover:bg-[#FFFFFF] hover:text-[#000000] hover:animate-[expansion_0.5s_1_forwards] [&:not(:hover)]:animate-[reduction_0.5s_1_forwards] rounded-[4px] px-[8px]`}
        onClick={handleClick}
      >
        <p>{contents}</p>
      </button>
      <MessageModal onClose={() => setIsOpen(false)} isVisible={isOpen} />
    </>
  );
};

export default React.memo(CopyBox);
