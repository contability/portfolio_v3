
import type { MouseEventHandler } from 'react';
import React from 'react';

import Image from 'next/image';
import { styled } from 'styled-components';

import { filterPalatte } from '@/styles/theme';

import type { StaticImageData } from 'next/image';

interface IImg {
  /** 대체 정보 */
  alt?: string;
  /** 종횡비 */
  aspect?: number | string;
  /** 높이 */
  height?: number | string;
  /** 크기 조절 방식 */
  objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
  /** 클릭 이벤트 핸들러 */
  onClick?: MouseEventHandler<HTMLDivElement>;
  /** placeholder */
  placeholder?: 'blur' | 'empty' | undefined;
  /** 이미지 품질 */
  quality?: number;
  /** radius */
  radius?: number;
  /** 너비, 높이 */
  size?: number | string;
  /** 이미지 소스 */
  src?: string | StaticImageData;
  /** 이미지 속성 변경 가능 여부 */
  unoptimized?: boolean;
  /** 너비 */
  width?: number | string;
  /** 필터 */
  filterColor?: string;
  /** 클래스 */
  className?: string;
}

const ImgContainer = styled.div<{ $filterColor: string }>`
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
  filter: ${({ $filterColor }) => filterPalatte[$filterColor]};
`;

const Img = ({
  alt,
  aspect,
  height,
  objectFit,
  onClick,
  placeholder,
  quality,
  radius,
  size,
  src,
  unoptimized,
  width,
  filterColor = '',
  className = '',
}: IImg) => {
  return (
    <ImgContainer
      $filterColor={filterColor}
      onClick={onClick}
      style={{
        width: width || size,
        minWidth: width || size,
        height: height || size,
        minHeight: height || size,
        aspectRatio: aspect,
        borderRadius: radius,
      }}
    >
      <Image
        className={className}
        src={src ?? ''}
        alt={alt || 'img'}
        fill
        quality={quality}
        unoptimized={unoptimized}
        priority={true}
        sizes="100%"
        placeholder={placeholder}
        style={{
          objectFit: objectFit || 'cover',
          borderRadius: radius,
        }}
      />
    </ImgContainer>
  );
};

export default React.memo(Img);
