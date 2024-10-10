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
        Hello, this is Eric. 
        I am currently pursuing my master's degree in computer science 
        at the University of Southern California. 
        I’ve gained valuable industry experience through internships at 
        HighPoint Technologies, TSMC, and Cathay Financial Holdings.
        I'm seeking full-time opportunities in, but not limited to, 
        Software Engineering / Web Development / Data Analytics 
        after I graduate in December 2024.
        Please feel free to reach out to me through LinkedIn or by email.
        <br />
        LinkedIn: 
        <a href="https://www.linkedin.com/in/eric-huang-4b57b7249/" target="_blank" className="text-link hover:font-semibold"> Eric Huang</a>
        <br />
        School Email: borsheng@usc.edu
        <br />
        Personal Email: erichuang1203@gmail.com
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
