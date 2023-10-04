'use client';

import React from 'react';

interface SectionDescProps {
  descriptionHeader?: string;
  descriptions?: string[];
}

const SectionDesc = ({ descriptionHeader = '', descriptions = [] }: SectionDescProps) => {
  return (
    <section className="w-[25%] h-[100vh] flex flex-col justify-center items-start maxLg:h-fit maxLg:w-full maxLg:pt-[30%] overflow-hidden">
      <h3 className=" mb-[2vh] pt-[5%] overflow-hidden tracking-[2px] uppercase font-montserrat text-[20px] font-semibold">
        {descriptionHeader}
      </h3>
      {descriptions.map((description, descIndex) => (
        <p key={`desc-${descIndex}`} className="font-montserrat [&:not(:last-child)]:mb-[5%] maxLg:!mb-[1%]">
          {description}
        </p>
      ))}
    </section>
  );
};

export default React.memo(SectionDesc);

// .branding__section-left {
//   width: 25%;
//   height: 100vh;
//   flex-direction: column;
//   justify-content: center;
//   align-items: flex-start;
//   display: flex;
//   position: fixed;

//   @media (max-width: 1024px) {
//     height: fit-content;
//     width: 100%;
//     padding-top: 30%;
//   }

//   .branding__section-header {
//     margin-bottom: 2vh;
//     padding-top: 5%;
//     overflow: hidden;
//     letter-spacing: 2px;
//     text-transform: uppercase;
//     font-family: Montserrat, sans-serif;
//     font-size: 20px;
//     font-weight: 600;

//     -webkit-transform: translate3d(0, 39px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
//     -moz-transform: translate3d(0, 39px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
//     -ms-transform: translate3d(0, 39px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
//     transform: translate3d(0, 39px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
//     transform-style: preserve-3d;
//   }

//   .branding__section-description {
//     font-family: Montserrat, sans-serif;
//     transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg)
//       skew(0deg, 0deg);
//     transform-style: preserve-3d;
//     -webkit-transform: translate3d(0, 178px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
//     -moz-transform: translate3d(0, 178px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
//     -ms-transform: translate3d(0, 178px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
//     transform: translate3d(0, 178px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);

//     &:not(:last-child) {
//       margin-bottom: 5%;
//     }
//   }
// }
