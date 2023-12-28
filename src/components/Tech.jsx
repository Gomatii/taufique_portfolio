import React from 'react'
import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import { styles } from '../style';



const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
          <p className={`${styles.sectionSubText} text-[10px]`}><div className='center justify-center text-center'>{technology.name}</div></p>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");