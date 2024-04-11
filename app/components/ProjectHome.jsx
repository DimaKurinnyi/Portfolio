'use client';
// import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDate } from '../GlobalRedux/Features/data/dataSlice';
import { HeroAnimate } from './Animations/HeroAnimate';

import { motion } from 'framer-motion';
import Link from 'next/link';

const ProjectHome = () => {
  const dispatch = useDispatch();
  const date = useSelector((state) => state.date);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  const animation = {
    hidden: {
      x: 75,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  // const [projects, setProjects] = useState([]);

  // const fetchProjects = () => {
  //   axios.get('https://647ce039c0bae2880ad14a6f.mockapi.io/projects').then((res) => {
  //     setProjects(res.data);
  //     setIsLoading(false)
  //     console.log(res)
  //   });
  // };
  useEffect(() => {
    dispatch(fetchDate())
      .then(() => {
        setIsLoading(false);
        setIsError(null);
      })
      .catch((error) => {
        console.log('error');
        setIsError(true);
        setIsLoading(false);
      });

    // fetchProjects()
  }, [dispatch]);
  const skeletons = [...new Array(3)];
  console.log(date);
  return (
    <div className="flex flex-col items-center justify-center mt-24 mb-12 ">
      <HeroAnimate customDelay={1}>
        <h2 className="text-center text-[--color-ligh] font-medium text-2xl">Projects</h2>
      </HeroAnimate>
      <div
        className="mt-12 flex items-center justify-center mb-12 flex-wrap"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}>
        {date.slice(0, 3).map((item, i) => (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={animation}
            transition={{ duration: '1.5', delay: 0.5 * (i + 1) }}
            key={i}
            className="w-[30%]     my-5 mx-4  rounded-3xl   duration-300 ease-in-out smh:w-full lg:w-[45%] relative work overflow-hidden ">
            <Image
              className="rounded-3xl  h-[300px] "
              src={item.imaje[0]}
              alt="project_image"
              width={500}
              height={500}></Image>
            <div className="work-bg">
              <div className="font-medium text-xl mb-6">{item.description}</div>
              <div className="flex items-center gap-4 justify-center">
                <a href={item.git} className="btn btn-project">
                  Github
                </a>
                <Link href="" className="btn btn-custom py-2 px-4">
                  Demo
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <HeroAnimate customDelay={2} customY={75}>
        <Link href="/project" className="btn btn-custom_transparent">
          See more...
        </Link>
      </HeroAnimate>
    </div>
  );
};

export default ProjectHome;
