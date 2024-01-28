import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
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
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
        Experienced Full Stack .NET Engineer with over 7 years of expertise in developing high-quality applications. I possess professional development experience in C# and .NET Core, alongside proficiency in utilizing frontend frameworks like React.js and Angular.
My skill set includes extensive hands-on experience with SQL queries and stored procedures, ensuring seamless data management for applications. Additionally, I have exposure to Cloud CI/CD pipelines, particularly with Azure, which enables efficient and streamlined deployment processes in a Containerized environment such as Docker and Kubernetes.

Personal Details:
I am a law abiding citizen/nonimmigrant with strong civic sense, I believe in diversity. I Respect and obey federal, state, and local laws. Respect the rights, beliefs, and opinions of others. Participate in your local community. Pay income and other taxes honestly, and on time, to federal, state, and local authorities.

Soft Skills:
I am a positive self motivated person who never let myself down I wholeheartedly accept failures learn my lessons from it, convert it into ornament and wear it gracefully , I am honest and assertive to my work and environment, I am a loyal colleague who is a team player that love's helping other team members and want them to grow with me. I cheer up my team and never make them feel low in pressure situation. I have worked and increased the capacity of handling tense meetings very calmly.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
