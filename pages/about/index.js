import Image from "next/image";
import React, { useState } from "react";
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiDaisyui,
  SiExpress,
} from "react-icons/si";


//  data
export const aboutData = [
  {
    id: 1,
    title: 'skills',
    info: [
      { key:"icon1",
        title: 'Frontend',
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <SiNextdotjs key="nextjs" />,
          <SiTailwindcss key="tailwind" />,
          <SiBootstrap key="bootstrap" />,
          <SiDaisyui key="daisyui" />
        ],
      },
      {
        id: 2,
        title: 'Backend',
        icons: [
        <FaNodeJs key='nodejs'/>, <FaJava key="java"/>, <SiExpress key="express" />],
      },
    ],
  },
  // {
  //   id: 3,
  //   title: 'awards',
  //   info: [
  //     { key:"title1",
  //       title: 'Webby Awards - Honoree',
  //       stage: '2011 - 2012',
  //     },
  //     {
  //        key:"title2",
  //       title: 'Adobe Design Achievement Awards - Finalist',
  //       stage: '2009 - 2010',
  //     },
  //   ],
  // },
  {
    id: 4,
    title: 'experience',
    info: [
      {
         key:"exp1",
        title: 'Full Stack Developemt -InlignX Global Pvt. ltd Banglore',
        stage: 'JUNE-2025',
      },
      {
          key:"exp2",
        title: 'Full Stack Development ',
        stage: 'JULY-AUGUST 2025',
      },
    ],
  },
  {
    id: 5,
    title: 'Education',
    info: [
      {
        key:"cred1",
        title: "High School-St. Mary's Inter College",
        stage: '2020',
      },
      {
         key:"cred2",
        title: "Intermediate-St Mary's Inter College",
        stage: '2022',
      },
      {
         key:"cred3",
        title: "B.Tech-CSE From-SR. Institute of Management And Technology",
        stage: '2022-2026',
      },
    ],
  },
];

//components
import Avatar from '../../components/Avatar'
import Circles from '../../components/Circles'

//frame motion
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

//counter 
import CountUp from 'react-countup'

const About = () => {
  const [index, setIndex] = useState(0)
  console.log(index)
  return <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
    <Circles />
    {/* //avatar image  */}
    <motion.div variants={fadeIn('right', 0.2)}
      initial='hidden' animate='show' exit='hidden' className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 -left-[370px]"
    >
      <Avatar />
    </motion.div>
    <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
      {/* text  */}
      <div className="flex-1 flex flex-col justify-center">
        <motion.h2 variants={fadeIn('right', 0.2)} initial='hidden' animate="show" exit="hidden" className="h2">Captivating <span className="text-accent">stories</span> birth magnificent designs.</motion.h2>
        <motion.p variants={fadeIn('right', 0.4)} initial='hidden' animate="show" exit="hidden" className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-6">3 year ago, I began freelancing as a develpoer. </motion.p>
        {/* //counter  */}
        <motion.div variants={fadeIn('right', 0.6)} initial='hidden' animate="show" exit="hidden" className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-2">
          <div className="flex flex-1 xl:gap-x-6">
            {/* experience  */}
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 ">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={2} duration={5} />+
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4px] max-w-[200px] ">Experience</div>
            </div>
            {/* Projects  */}
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 ">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={10} duration={5} />+
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4px] max-w-[100px]">Finished Projects</div>
            </div>
          </div>
        </motion.div>
      </div>
      {/* info  */}

      <div>
        <motion.div variants={fadeIn('left', 0.4)} 
           initial='hidden'
            animate="show"
             exit="hidden"
              className="flex xl:gap-x-8 mx-auto xl:mx-0 mb-0">
          {aboutData.map((item, itemindex) => (
            <div
              key={itemindex}
              onClick={() => setIndex(itemindex)}
              className={`relative cursor-pointer  text-white capitalize xl:text-lg transition-colors duration-300 gap-y-3  m-3 xl:m-5
      ${index === itemindex ? "text-accent" : "hover:text-accent"}`}
            >
              <span className="relative z-10 py-3">{item.title}</span>
              <span
                className={`absolute left-0 bottom-0 h-[2px] transition-all duration-300
        ${index === itemindex ? "w-full bg-accent" : "w-0 bg-white group-hover:w-full"}`}
              />
            </div>

          ))}
        </motion.div>
        <motion.div variants={fadeIn('up', 0.45)} 
           initial='hidden'
            animate="show"
             exit="hidden"
              className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
          {aboutData[index].info.map((item, itemindex) => {
            return <div key={itemindex} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
              {/* title  */}
              <div className="font-light mb-2 md:mb-0 ">
                {item.title}
              </div>
              <div className="hidden md:flex">-</div>
              <div>{item.stage}</div>
              <div className="flex gap-x-4" >
                {/* icons  */}
                {item.icons?.map((items, itemindex) => {
                  return <div key={itemindex} className="text-2xl text-white">{items}</div>
                })}
              </div>
            </div>

          })}
        </motion.div>
      </div>
    </div>
  </div>;
};

export default About;
