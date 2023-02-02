import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="w-full h-[400px] md:h-[100vh] m-auto relative  opacity-90">
      <Image src="/wc-bg2.jpg" alt="hero image" fill priority />

      <div className="absolute top-32 p-4 md:top-64 left-5 lg:left-20 xl:top-96 xl:left-48">
        <div>
          <div className="max-w-xl text-center sm:text-left">
            <h2 className="text-3xl  text-violet-900  sm:text-5xl font-semibold">
              Innovative solutions
              <strong className="block text-black font-semibold md:text-violet-400 text-xl">
                for your online presence
              </strong>
            </h2>
            <button className="border-2 mb-6 bg-violet-300 text-black hover:bg-violet-500 hover:shadow-lg px-8 mt-8 ml-2 h-14 rounded-md hover:text-white ">
              <Link href="/contact" className="uppercase">
                Contat us
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
