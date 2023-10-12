import React, { useEffect } from 'react';
import styled from 'styled-components';

interface MessageModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const MessageModal = ({ onClose, isVisible }: MessageModalProps) => {
  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        onClose();
      }, 4000);
    }
  }, [isVisible]);

  return (
    <MessagePopupBox $isVisible={isVisible}>
      <p className={`messageBox`}>copied success to clipBoard</p>
    </MessagePopupBox>
  );
};

const MessagePopupBox = styled.div<{ $isVisible: boolean }>`
  padding: 8px 16px;
  transform: translate(-50%, -50%);
  left: 50%;
  bottom: 100px;
  position: fixed;

  ${({ $isVisible }) => {
    if (!$isVisible) {
      return 'visibility: hidden; opacity: 0; transition: visibility 1s, opacity 0.5s linear;';
    }
    return 'background-color: #ffffff; color: #000000; visibility: visible; opacity: 1; transition:   visibility 0s,   opacity 0.5s linear; border-radius: 20px;';
  }}

  p {
    height: inherit;
    text-align: center;
  }

  .hidden {
    visibility: hidden;
    opacity: 0;
    transition:
      visibility 1s,
      opacity 0.5s linear;
  }

  .appear {
    background-color: #ffffff;
    visibility: visible;
    opacity: 1;
    transition:
      visibility 0s,
      opacity 0.5s linear;
    border-radius: 6px;
  }
`;

export default React.memo(MessageModal);
