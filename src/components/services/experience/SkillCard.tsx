import Img from '@component/image/Img';
import React from 'react';
import { skillImageURL } from '../../../public/projects';
import { palette } from '@styles/theme';

interface SkillCardProps {
  skills?: string[];
}

const SkillCard = ({ skills = [] }: SkillCardProps) => {
  return (
    <div className=" max-w-[50%] flex gap-[8px] flex-wrap ">
      {skills?.map((skill, skillIndex) => (
        <span
          key={`project-skill__${skillIndex}`}
          className={`bg-LINE_WHITE px-[15px] py-[4px] rounded-[4px] text-FONT_BLACK flex gap-[8px] items-center`}
        >
          <Img src={skillImageURL[skill] || 'https://cdn.jumpit.co.kr/images/stacks/noStack.png'} size={20} />
          <p className="font-montserrat text-[14px]">{skill}</p>
        </span>
      ))}
    </div>
  );
};

export default React.memo(SkillCard);
