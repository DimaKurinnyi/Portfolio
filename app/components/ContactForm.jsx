'use client';
import emailjs from 'emailjs-com';
import { useRef } from 'react';

import { FaTelegram } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import { MdOutlineEmail } from 'react-icons/md';
import { HeroAnimate } from './Animations/HeroAnimate';
const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4m6nlia', 'template_fv6d61e', form.current, 'gaWz-pkJdZjnKYvxA').then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      },
    );
    e.target.reset();
  };

  return (
    <div className="pt-80 pb-20 flex justify-center items-start gap-40 xl:flex-col xl:items-center xl:gap-12 ">
      <div className="w-[30%] flex flex-col gap-4 xl:w-full">
        <HeroAnimate customDelay={1} customX={-75}>
          <div className="text-center flex flex-col items-center justify-center     py-[10px] px-4 border border-solid border-[--color-bg-variant] bg-[--color-bg-variant]  rounded-2xl duration-300 ease-in hover:bg-transparent box relative">
            <MdOutlineEmail size={20} />
            <div className="mt-[10px] text-[--color-wite] text-sm ">Email</div>
            <div className="mt-[10px] font-medium text-sm text-[--color-ligh]">
              dimakurinnoy8@mail.com
            </div>
            <a
              href="mailto:dimakurinnoy8@gmail.com"
              className="mt-[10px] font-medium text-sm z-10"
              target="_blank"
              rel="noreferrer">
              Send a massage
            </a>
          </div>
        </HeroAnimate>
        <HeroAnimate customDelay={2} customX={-75}>
          <div className="text-center flex flex-col items-center justify-center py-[10px] px-4 border border-solid border-[--color-bg-variant] bg-[--color-bg-variant]  rounded-2xl duration-300 ease-in hover:bg-transparent box relative">
            <FaTelegram size={20} />
            <div className="mt-[10px] text-[--color-wite] text-sm ">Telegram</div>
            <div className="mt-[10px] font-medium text-sm text-[--color-ligh]">@dima</div>
            <a
              href="https://t.me/Dmytro_Kurinnyi"
              target="_blank"
              rel="noreferrer"
              className="mt-[10px] font-medium text-sm z-10">
              Send a massage
            </a>
          </div>
        </HeroAnimate>
        <HeroAnimate customDelay={3} customX={-75}>
          <div className="text-center flex flex-col items-center justify-center py-[10px] px-4 border border-solid border-[--color-bg-variant] bg-[--color-bg-variant]  rounded-2xl duration-300 ease-in hover:bg-transparent box relative">
            <IoLogoWhatsapp size={20} />
            <div className="mt-[10px] text-[--color-wite] text-sm ">Mobile number</div>
            <div className="mt-[10px] font-medium text-sm text-[--color-ligh]">+48575870237</div>
            <a
              href="tel:+48575870237"
              target="_blank"
              rel="noreferrer"
              className="mt-[10px] font-medium text-sm z-10">
              Send or call
            </a>
          </div>
        </HeroAnimate>
      </div>
      <form
        ref={form}
        className="w-[55%] flex flex-col gap-6 xl:w-full xs:items-center"
        onSubmit={sendEmail}>
        <HeroAnimate customDelay={1} customX={75}>
          <div className="relative">
            <input
              className="w-full p-6 rounded-lg bg-[--color-bg-variant] text-[--color-ligh] border outline-none focus:border-[--color-ligh] focus:border-solid valid:border-[--color-ligh] valid:border-solid peer"
              type="text"
              name="name"
              required
            />
            <span className=" text-lg absolute left-0 p-6 pointer-events-none text-[--color-ligh] duration-500 transition-all peer-focus:translate-x-4 peer-focus:translate-y-[-10px] peer-focus:px-3 peer-focus:py-0 peer-focus:text-[--color-bg] peer-focus:bg-white peer-focus:rounded-lg peer-valid:translate-x-4 peer-valid:translate-y-[-10px] peer-valid:px-3 peer-valid:py-0 peer-valid:text-[--color-bg] peer-valid:bg-white peer-valid:rounded-lg peer-focus:text-sm peer-valid:text-sm">
              Your Full Name
            </span>
          </div>
        </HeroAnimate>
        <HeroAnimate customDelay={2} customX={75}>
          <div className="relative">
            <input
              className="w-full p-6 rounded-lg bg-[--color-bg-variant] text-[--color-ligh] border outline-none focus:border-[--color-ligh] focus:border-solid valid:border-[--color-ligh] valid:border-solid peer"
              type="email"
              name="email"
              required
            />
            <span className="text-lg absolute left-0 p-6 pointer-events-none text-[--color-ligh] duration-500 transition-all peer-focus:translate-x-4 peer-focus:translate-y-[-10px] peer-focus:px-3 peer-focus:py-0 peer-focus:text-[--color-bg] peer-focus:bg-white peer-focus:rounded-lg peer-valid:translate-x-4 peer-valid:translate-y-[-10px] peer-valid:px-3 peer-valid:py-0 peer-valid:text-[--color-bg] peer-valid:bg-white peer-valid:rounded-lg peer-focus:text-sm peer-valid:text-sm ">
              Your email
            </span>
          </div>
        </HeroAnimate>
        <HeroAnimate customDelay={3} customX={75}>
          <div className="relative">
            <textarea
              className="w-full p-6 rounded-lg bg-[--color-bg-variant] text-[--color-ligh] border outline-none focus:border-[--color-ligh] focus:border-solid valid:border-[--color-ligh] valid:border-solid peer"
              name="massage"
              rows="7"
              required
            />
            <span className="text-lg absolute left-0 p-6 pointer-events-none text-[--color-ligh] duration-500 transition-all peer-focus:translate-x-4 peer-focus:translate-y-[-10px] peer-focus:px-3 peer-focus:py-0 peer-focus:text-[--color-bg] peer-focus:bg-white peer-focus:rounded-lg peer-valid:translate-x-4 peer-valid:translate-y-[-10px] peer-valid:px-3 peer-valid:py-0 peer-valid:text-[--color-bg] peer-valid:bg-white peer-valid:rounded-lg peer-focus:text-sm peer-valid:text-sm ">
              Your massage
            </span>
          </div>
        </HeroAnimate>
        <HeroAnimate customDelay={4} customY={75}>
          <button type="submit" className="btn btn-custom_transparent ">
            Send Message
          </button>
        </HeroAnimate>
      </form>
    </div>
  );
};

export default ContactForm;
