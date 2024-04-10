'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import MobilImg from '/app/asset/mobile1.jpeg';

const ProjectDetails = ({ item }) => {
  const router = useRouter();
  const handleButtonOnClick = () => {
    router.replace(`${item.git}`);
  };
  return (
    <div className="mt-40 flex flex-col  justify-center">
      <h2 className="text-center text-[--color-ligh] font-medium text-2xl capitalize mb-20">
        {item.title}
      </h2>

      <div className="flex items-center justify-between gap-3 smh:flex-col">
        <div className=" w-[60%]">
          <Image
            src={item.imaje[0]}
            alt="project_image"
            width={1200}
            height={900}
            className="rounded-3xl mb-5"
          />
          <Image
            src={item.imaje[1]}
            alt="project_image"
            width={1200}
            height={900}
            className="rounded-3xl mb-5"
          />
        </div>
        <Image
          src={item.imaje[2]}
          alt="project_image"
          width={1200}
          height={900}
          className="rounded-3xl mb-5 w-[30%] h-full"
        />
      </div>
      <div className="text-left font-medium text-xl mb-10">{item.description}</div>

      <a href={item.git} target="_blank" className="btn">
        Github
      </a>
    </div>
  );
};

export default ProjectDetails;
