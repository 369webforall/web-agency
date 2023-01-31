import React from 'react';
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiOutlinePhone,
  AiFillLinkedin,
  AiOutlineMail,
} from 'react-icons/ai';
import { FaRegAddressCard } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="px-4 mt-16 pt-12 pb-8 text-white w-full bg-gray-800 shadow border-gray-200">
      <div className="container flex flex-col justify-between items-start max-w-6xl px-4 mx-auto overflow-hidden lg:flex-row">
        <div className="w-full pl-12 mr-4 text-left lg:w-1/2 sm:text-center sm:pl-0 lg:text-left">
          <div className="flex flex-col justify-start items-start px-3 font-bold tracking-wide text-gray-800  md:justify-center ">
            <p className="  py-2 mt-5 font-bold tracking-wide text-gray-800 uppercase md:mt-0">
              CONTACT US
            </p>
            <p className="  py-1 text-white no-underline hover:text-gray-600 flex items-center gap-4 font-thin">
              <span>
                <AiOutlinePhone />
              </span>
              <span>+49 58239550695</span>
            </p>
            <p className="  py-1 text-white no-underline hover:text-gray-600 flex items-center gap-4 font-thin">
              <AiOutlineMail />
              webcoding29@gmail.com{' '}
            </p>
            <p className=" py-1 text-white no-underline hover:text-gray-600 flex items-center gap-4 font-thin">
              <FaRegAddressCard /> 29553 Bienenbüttel, Germany
            </p>
          </div>
        </div>
        <div className="block w-full pl-10 mt-6 text-sm lg:w-3/4 sm:flex lg:mt-0">
          <ul className="flex flex-col w-full p-0 font-medium text-left text-white list-none">
            <li className="inline-block  px-3 py-2 mt-5 font-semibold tracking-wide text-white uppercase md:mt-0">
              Company
            </li>
            <li>
              <a
                href="/policy"
                className="inline-block px-3 py-2 text-white no-underline hover:text-gray-600 font-thin"
              >
                Privacy
              </a>
            </li>
            <li>
              <a
                href="/faq"
                className="inline-block px-3 py-2 text-white no-underline hover:text-gray-600 font-thin"
              >
                FAQ
              </a>
            </li>
          </ul>

          <div className="flex flex-col w-full text-white">
            <div className="inline-block px-3 py-2 mt-5 font-semibold text-white uppercase md:mt-0">
              Follow Us
            </div>
            <div className="flex justify-start pl-4 mt-2">
              <a
                className="flex items-center mr-6 text-2xl text-white no-underline hover:text-gray-600"
                target="_blank"
                rel="noopener noreferrer"
                href="#"
              >
                <AiFillFacebook />
              </a>
              <a
                className="flex items-center  mr-6 text-2xl text-white no-underline hover:text-gray-600"
                target="_blank"
                rel="noopener noreferrer"
                href="#"
              >
                <AiFillLinkedin />
              </a>
              <a
                className="flex items-center text-2xl text-white no-underline hover:text-gray-600"
                target="_blank"
                rel="noopener noreferrer"
                href="#"
              >
                <AiFillTwitterSquare />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-4 mt-10 text-center text-white border-t border-gray-100">
        © <span>{new Date().getFullYear()}</span> Web coding agency. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
