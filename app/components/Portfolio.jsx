'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDate } from '../GlobalRedux/Features/data/dataSlice';
import Works from '../components/Works';

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [Error, setError] = useState(null);
  const [categoryId, setCategoryId] = useState(0);
  const [projects, setProjects] = useState([]);
  const dispatch = useDispatch();
  const date = useSelector((state) => state.date);

  const categories = ['All', 'category 1', 'category 2', 'category 3', 'category 4', 'category 5'];

  const allProjects = date;
  const newProjects = date.filter((project) => project.category === categories[categoryId]);

  useEffect(() => {
    dispatch(fetchDate())
      .then(() => {
        setIsLoading(false);
        setError(null);
        setProjects(date);
      })
      .catch(() => {
        setIsLoading(false);
        setError(true);
      });
  }, [dispatch]);

  useEffect(() => {
    if (categories[categoryId] === 'All') {
      setProjects(date);
    } else {
      setProjects(newProjects);
    }
    console.log(categories[categoryId]);
  }, [categoryId]);

  //setIsLoading(false)
  const skeletons = [...new Array(6)];
  console.log(date);
  const projectItems = projects.map((project) => (
    <Works
      key={project.id}
      id={project.id}
      title={project.title}
      image={project.imaje[0]}
      category={project.category}
      git={project.git}
    />
  ));
  console.log(projects);
  const onChangeCategory = (i) => {
    setCategoryId(i);
  };
  const onChangeCategoryAll = () => {
    setCategoryId(null);
  };
  return (
    <div className="pt-52 m:pb-8">
      <h2 className=" mt-8 text-[--color-ligh] font-medium text-2xl ">Projects</h2>
      <div className="mt-8">
        <ul className="flex items-center justify-center gap-8 m:gap-4 smh:gap-2 ">
          {categories.map((item, i) => (
            <li
              onClick={() => onChangeCategory(i)}
              key={i}
              className={`capitalize text-[--color-primary] font-medium text-base px-6 py-2 rounded-[20px] ease-in-out duration-300 hover:bg-[--color-primary] hover:text-[--color-wite] smh:text-sm hover:cursor-pointer ${
                categoryId === i ? 'bg-[--color-primary] text-[--color-wite] ' : ''
              }`}>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <motion.div className=" mt-12 grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] mb-12 gap-4 ">
        {projectItems}
      </motion.div>
    </div>
  );
};

export default Portfolio;
