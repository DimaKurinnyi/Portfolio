'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [blur, setBlur] = useState(0);
  const [textColor, setTextColor] = useState('#4db5ff');

  const handleNav = () => {
    setNav(!nav);
  };
  // console.log(nav);

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 70) {
        setTextColor('white');
        setBlur(64);
      } else {
        setTextColor('#4db5ff');
        setBlur(0);
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);
  return (
    <div
      style={{ backdropFilter: `blur(${blur}px)`, WebkitBackdropFilter: `blur(${blur}px)` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300">
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 ">
        <h1>
          <Link style={{ color: `${textColor}` }} href="/">
            Portfolio
          </Link>
        </h1>
        <ul className="hidden sm:flex">
          <li className="m-4 text-xl font-medium  relative nav">
            <Link style={{ color: `${textColor}` }} href="/">
              Home
            </Link>
          </li>
          <li className="m-4 text-xl font-medium relative nav">
            <Link style={{ color: `${textColor}` }} href="/project">
              Project
            </Link>
          </li>
          <li className="m-4 text-xl font-medium relative nav">
            <Link style={{ color: `${textColor}` }} href="/about">
              About
            </Link>
          </li>
          <li className="m-4 text-xl font-medium relative nav">
            <Link style={{ color: `${textColor}` }} href="/contact">
              Contact
            </Link>
          </li>
        </ul>
        {/* Mobile button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <FaTimes size={20} style={{ color: `${textColor}`, cursor: 'pointer' }} />
          ) : (
            <FaBars size={20} style={{ color: `${textColor}`, cursor: 'pointer' }} />
          )}
        </div>
        {/* Mobile menu  */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
          }>
          <ul onClick={handleNav}>
            <li className="p-4 text-4xl ">
              <Link href="/">Home</Link>
            </li>
            <li className="p-4 text-4xl ">
              <Link href="/project">Project</Link>
            </li>
            <li className="p-4 text-4xl ">
              <Link href="/about">About</Link>
            </li>
            <li className="p-4 text-4xl ">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
