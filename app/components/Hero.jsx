import Image from 'next/image';
import Link from 'next/link';
import { GrGithub, GrInstagram, GrLinkedin } from 'react-icons/gr';
import HeaderImg from '/app/asset/intro.jpeg';
import { HeroAnimate } from './Animations/HeroAnimate';

function Hero() {
  return (
    <div className="  flex h-screen justify-between items-center smh:flex-col-reverse smh:gap-8 smh:mt-32">
      <div className="flex flex-col gap-5 smh:flex smh:flex-row smh:gap-5 ">
      <HeroAnimate customDelay={2}><a
          className="hover:scale-125"
          href="https://www.instagram.com/xdimax1488/"
          target="_blank"
          rel="noreferrer">
          <GrInstagram size={20} style={{ color: '#4db5ff' }} />
        </a></HeroAnimate>
        <HeroAnimate customDelay={3}><a
          href="https://github.com/Xdimax1488"
          className="hover:scale-125"
          target="_blank"
          rel="noreferrer">
          <GrGithub size={20} style={{ color: '#4db5ff' }} />
        </a></HeroAnimate>
        <HeroAnimate customDelay={4}> <a
          href="https://www.linkedin.com/in/dmytro-kurinnyi-18bb441a3/"
          className="hover:scale-125"
          target="_blank"
          rel="noreferrer">
          <GrLinkedin size={20} style={{ color: '#4db5ff' }} />
        </a></HeroAnimate>
      </div>
      <div className="w-5/12 smh:w-full">
        <div className="flex flex-col justify-center items-start">
          <HeroAnimate customDelay={1}><h1 className="bg-gradient-to-r from-indigo-500  to-sky-500 inline-block text-transparent bg-clip-text mb-3 ">
            Dmytro Kurinnyi
          </h1></HeroAnimate>
          <HeroAnimate customDelay={2}><h3 className="text-2xl mb-3 lg:text-lg">Frontend Developer</h3></HeroAnimate>
          <HeroAnimate customDelay={3}><div className="text-[--color-ligh] mb-10 lg:text-sm">
            I am a novice frontend developer with an interest in creating interactive and creative
            websites. You strive to expand your skills in HTML, CSS and JavaScript, as well as learn
            modern frameworks and libraries for developing web applications. Your goal is to become
            an experienced developer capable of creating amazing user interfaces for web projects.
          </div></HeroAnimate>
        </div>
        <HeroAnimate customDelay={4} customY={75}><Link href="/contact" className="btn btn-custom_transparent text-xl lg:text-lg smh:text-center">
         Lets talk
        </Link></HeroAnimate>
      </div>
      <div className="w-1/3  smh:w-full smh:overflow-hidden ">
      <HeroAnimate customDelay={2} customX={75}><Image
          className="rounded-[63%] overflow-hidden"
          src={HeaderImg}
          alt="photo"
          width={500}
          height={500}></Image></HeroAnimate>
      </div>
    </div>
  );
}

export default Hero;
