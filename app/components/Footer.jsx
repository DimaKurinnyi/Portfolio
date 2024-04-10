import Link from 'next/link';
import { FaFacebookSquare, FaTelegram } from 'react-icons/fa';
import {GrLinkedin} from 'react-icons/gr'
import { HeroAnimate } from './Animations/HeroAnimate';

const Footer = () => {
  return (
    
    <div className="pt-4 flex flex-col items-center justify-center  text-[var(--color-primary)] absolute w-full bottom-0 pb-8   ">
      <HeroAnimate customDelay={1}><div className="text-2xl font-medium mb-3 ">Dmytro Kurinnyi</div></HeroAnimate>
      <HeroAnimate customDelay={2}><nav className='flex justify-center gap-3 '>
        <Link className="text-[var(--color--primary)] hover:text-[#fff]" href="/about">
          About
        </Link>
        <Link className="text-[var(--color-bg--primary)] hover:text-[#fff]" href="/project">
          Project
        </Link>
        <Link className="text-[var(--color-bg--primary)] hover:text-[#fff]" href="/contact">
          Contact
        </Link>
      </nav></HeroAnimate>
      <HeroAnimate customDelay={3}><div className='flex justify-center gap-3 mt-3 mb-4'>
        <a className='hover:scale-125' href="https://www.instagram.com/xdimax1488/" target="_blank" rel="noreferrer">
          <GrLinkedin size={30} style={{ color: '#4db5ff' }} />
        </a>
        <a className='hover:scale-125' href="https://t.me/Dmytro_Kurinnyi" target="_blank" rel="noreferrer">
          <FaTelegram size={30} style={{ color: '#4db5ff' }} />
        </a>
        <a className='hover:scale-125' href="https://www.facebook.com/dima.kurinnoy.37" target="_blank" rel="noreferrer">
          <FaFacebookSquare size={30} style={{ color: '#4db5ff' }} />
        </a>
      </div></HeroAnimate>
      <HeroAnimate customDelay={4}><div className="text-white">Lorem ipsum dolor sit amet.</div></HeroAnimate>
    </div>
  );
};

export default Footer;
