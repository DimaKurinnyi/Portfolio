import Image from 'next/image';
import { IoDocumentText, IoLogoReact } from 'react-icons/io5';
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si';

import headerImg from '../asset/intro.jpeg';
import { HeroAnimate } from './Animations/HeroAnimate';

const AboutMe = () => {
  return (
    <div className="pt-52 ">
      <HeroAnimate customDelay={1}>
        <h2 className="mt-8 text-[--color-ligh] font-medium text-2xl">My introduction</h2>
      </HeroAnimate>
      <div className="mt-16 flex items-center justify-center gap-40 2xl:gap-8 m:flex-col ">
        <div className="w-[35%] 2xl:w-[45%] m:w-full overflow-hidden">
          <HeroAnimate customDelay={2} customX={-75}>
            <Image
              className="rounded-[35px] overflow-hidden   "
              src={headerImg}
              width={500}
              height={500}
            />
          </HeroAnimate>
        </div>
        <div className="flex flex-col justify-center items-start w-[45%] m:items-center m:w-full">
          <div className="flex items-center justify-center gap-8 mb-8 xl:gap-4 overflow-hidden">
            <HeroAnimate customDelay={2} customX={75}>
              <div className="flex relative flex-col items-center justify-center border-solid border rounded-2xl border-[--color-bg-variant] bg-[--color-bg-variant] duration-300 ease-in-out w-40 h-40 p-4 box hover:bg-transparent xl:w-36 xl:h-36 lg:w-29 lg:h-29 lg:p-2 xs:w-24 xs:h-24 ">
                <IoLogoReact size={30} style={{ color: '#4db5ff' }} />
                <div className="capitalize fount-medium xs:hidden">React</div>
                <div className="text-sm text-[--color-ligh] xs:hidden ">1 year work</div>
              </div>
            </HeroAnimate>
            <HeroAnimate customDelay={3} customX={75}>
              <div className="flex flex-col items-center justify-center border-solid border rounded-2xl border-[--color-bg-variant] bg-[--color-bg-variant] duration-300 ease-in-out w-40 h-40 p-4 box relative hover:bg-transparent xl:w-36 xl:h-36 lg:w-29 lg:h-29 lg:p-2 xs:w-24 xs:h-24">
                <SiNextdotjs size={30} style={{ color: '#4db5ff' }} />
                <div className="capitalize fount-medium xs:hidden">Next.js</div>
                <div className="text-sm text-[--color-ligh] xs:hidden">1 year work</div>
              </div>
            </HeroAnimate>
            <HeroAnimate customDelay={4} customX={75}>
              <div className="flex flex-col items-center justify-center border-solid border rounded-2xl border-[--color-bg-variant] bg-[--color-bg-variant] duration-300 ease-in-out w-40 h-40 p-4 box relative hover:bg-transparent xl:w-36 xl:h-36 lg:w-29 lg:h-29 lg:p-2 xs:w-24 xs:h-24">
                <SiTailwindcss size={30} style={{ color: '#4db5ff' }} />
                <div className="capitalize fount-medium xs:hidden">Tailwindcss</div>
                <div className="text-sm text-[--color-ligh] xs:hidden">1 year work</div>
              </div>
            </HeroAnimate>
          </div><HeroAnimate customDelay={5}>
          <div className="fount-medium mb-16 text-[--color-ligh]">
            I am a novice frontend developer with an interest in creating interactive and creative
            websites. You strive to expand your skills in HTML, CSS and JavaScript, as well as learn
            modern frameworks and libraries for developing web applications. Your goal is to become
            an experienced developer capable of creating amazing user interfaces for web projects.
          </div></HeroAnimate>
          <a href="" download="/app/asset/cv.docx" className=" flex btn btn-primery btn-home">
            {' '}
            Download CV
            <IoDocumentText size={25} className="ml-3 mb-[-4px]" />{' '}
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
