import Img from '@component/image/Img';
import React from 'react';

const FirstMedia = ({ projectInfo }: Record<string, any>) => {
  if (projectInfo.images && projectInfo.images.length) {
    if (projectInfo.images[0].split('.')[1] === 'mp4')
      return (
        <video autoPlay={true} loop={true}>
          <source
            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/images/project/${projectInfo.images[0]}`}
            type="video/mp4"
          />
        </video>
      );
    else
      return (
        <Img
          className=" py-[5%]"
          src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/images/project/${projectInfo.images[0]}`}
          width={'75vw'}
          objectFit="contain"
          aspect={'16/9'}
        />
      );
  }

  return <></>;
};

export default React.memo(FirstMedia);
