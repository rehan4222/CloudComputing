import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { education, services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const EducationCard = ({ index, title, icon,desc,edu }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[350px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
        <p>
          {edu}
        </p>
        <p>
          {desc}
        </p>
      </div>
    </motion.div>
  );
};

const Education = () => {
  return (
    <div className="-mt-[4rem]">
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Education.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
       
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {education.map((service, index) => (
          <EducationCard key={service.title} index={index} {...service} desc={service.desc} edu={service.edu} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Education, 'education');
