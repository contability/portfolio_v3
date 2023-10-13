import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

interface MessageModalProps {
  /** 메시지 표시 여부 */
  isVisible: boolean;
  /** 닫기 이벤트 */
  onClose: () => void;
}

const MessagePopupBox = styled.div<{ $isVisible: boolean }>`
  transform: translate(-50%, -50%);
  left: 50%;
  bottom: 100px;
  position: fixed;

  ${({ $isVisible }) => {
    if (!$isVisible) {
      return 'visibility: hidden; opacity: 0; transition: visibility 1s, opacity 0.5s linear;';
    }
    return ' visibility: visible; opacity: 1; transition: visibility 0s, opacity 0.5s linear; ';
  }}

  .timeBox {
    text-align: center;
  }

  .messageBox {
    background-color: #ffffff;
    color: #000000;
    border-radius: 20px;
    padding: 8px 32px;
    margin-top: 8px;
    height: inherit;
    text-align: center;
  }
`;

const MessageModal = ({ onClose, isVisible }: MessageModalProps) => {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  console.log(dayjs.tz.guess());

  const [currentTime, setCurrentTime] = useState('');

  /** 현재 시간 */
  const getCurrentTime = async () => {
    const result = await fetch(`http://worldtimeapi.org/api/timezone/Asia/Seoul`, {
      cache: 'no-store',
      next: {
        revalidate: 10,
      },
    });

    return result.json();
  };

  useEffect(() => {
    if (isVisible) {
      getCurrentTime()
        .then(res => {
          try {
            setCurrentTime(dayjs(res.datetime).format('YYYY-MM-DD HH:mm:ss'));
          } catch (error) {
            console.error(error);
          }
        })
        .catch(error => {
          console.error(error);
        });

      setTimeout(() => {
        onClose();
      }, 2000);
    }
  }, [isVisible]);

  return (
    <>
      <MessagePopupBox $isVisible={isVisible}>
        {/* <p className="timeBox">{currentTime}</p> */}
        <p className={`messageBox`}>Copied Success to ClipBoard.</p>
      </MessagePopupBox>
    </>
  );
};

export default React.memo(MessageModal);
