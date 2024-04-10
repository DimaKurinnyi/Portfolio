'use client';

import { fetchProjectById } from '@/app/GlobalRedux/Features/data/prodjectSlice';
import ProjectDetails from '@/app/components/ProjectDetails';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ProjectPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const projectId = params.id;
  const [isLoading, setIsLoading] = useState(true);
  const [Error, setIsError] = useState(null);
  const project = useSelector((state) => state.project);

  useEffect(() => {
    dispatch(fetchProjectById(projectId))
      .then(() => {
        setIsLoading(false);
        setIsError(null);
      })
      .catch((error) => {
        console.log('error');
        setIsError(true);
        setIsLoading(false);
      });
  }, [dispatch, projectId]);

  console.log(Error);

  return <div>{isLoading ? 'loading...' : Error ? 'error' : <ProjectDetails item={project}/>}</div>;
};

export default ProjectPage;
