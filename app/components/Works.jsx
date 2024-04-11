import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Works = ({ title, id, image, category, git }) => {
  return (
    <motion.div
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0.3 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.5 }}
      className="box  object-cover relative my-5 mx-4 p-5 border border-solid border-[--color-bg-variant] rounded-3xl bg-[--color-bg-variant] duration-300 ease-in-out  hover:bg-transparent smh:w-full lg:w-[45%]">
      <Image
        className="rounded-3xl mb-5 h-[250px] w-full"
        src={image}
        alt="project_image"
        width={500}
        height={500}></Image>
      <div className="font-medium text-xl mb-6">{title}</div>
      <div className="flex items-center gap-4 mb-4">
        <Link href={`/project/${id}`} className="btn btn-custom_transparent">
          See more
        </Link>
        <a href={git} target="_blank" rel="noreferrer" className="btn btn-custom ">
          GitHub
        </a>
      </div>
    </motion.div>
  );
};

{
  /* <Link href={`/project/${id}`}>
<div>{category}</div>
</Link> */
}
export default Works;
