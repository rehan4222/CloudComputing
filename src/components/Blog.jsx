import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { blog, education, services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const BlogCard = ({ index,icon,link,title }) => {
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
        <a href={link}><img src={icon} alt={title} className="w-16 h-16 object-contain"/></a>
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
        <p>
          {title}
        </p>
       
      </div>
    </motion.div>
  );
};

const Blog = () => {
  return (
    <div className="-mt-[4rem]">
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Blog.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
       
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {blog.map((service, index) => (
          <BlogCard key={service.title} index={index} {...service} icon={service.icon}link={service.link} title={service.title} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Blog, 'blog');
