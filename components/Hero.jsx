import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="w-full h-[400px] md:h-[80vh] m-auto relative  opacity-90">
      <Image src="/wc-bg2.jpg" alt="hero image" fill priority />

      <div className="absolute top-15 left-10 sm:left-56 sm:top-5">
        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-16">
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="text-3xl  text-violet-900  sm:text-5xl font-semibold">
              Innovative solutions
              <strong className="block text-violet-900 font-semibold md:text-violet-400 text-xl">
                for your online presence
              </strong>
            </h1>
            <button className="border-2 mb-6 bg-violet-300 text-black border-blue-500 hover:bg-violet-500 hover:shadow-lg px-8 mt-8 ml-6 h-14 rounded-md hover:text-white ">
              <Link href="/contact">Contat us</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
