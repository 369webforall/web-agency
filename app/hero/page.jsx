import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '../../components/Hero';

const HeroPage = () => {
  return (
    <div>
      <Hero />
      <section className="items-center max-w-screen-2xl px-4 pb-12 mx-auto mt-20 lg:flex md:px-8">
        <div className="min-w-7xl mx-0 md:mx-20 md:my-0">
          <h2 className="text-2xl  text-violet-500  sm:text-4xl font-semibold   text-center mt-4">
            Boost Your Online Presence with Custom Website Design
            <br />
            <span className="text-violet-900 text-xl">
              Innovative solutions for your online presence
            </span>
          </h2>
          <div className="flex md:flex-row flex-col justify-between items-start my-2 md:my-10">
            <div className="flex flex-col items-center md:items-start mx-4 md:mx-10 max-w-2xl">
              <p className="text-lg text-gray-700 my-5">
                Transform Ideas into Powerful Online Experiences and Elevate
                Your Brand One Website at a Time with Our Innovative Solutions.
                Optimize for Search Engine Visibility - Ensure your website is
                optimized for search engines to increase visibility.
                Mobile-Friendly Design - Meet the growing demand for mobile use
                with a website optimized for smartphones. Stay Ahead in the
                Digital World - Integrate online and offline marketing
                strategies to seize the opportunities in the ever-changing
                digital landscape.
              </p>

              <button className="block border-2 mt-20 bg-violet-300 text-black hover:bg-violet-500 hover:shadow-lg px-8 h-14 rounded-md hover:text-white ">
                <Link href="/contact" className="uppercase">
                  Contat us
                </Link>
              </button>
            </div>
            <div className="mx-5 w-md">
              <Image
                src="/hero1.png"
                alt="hero"
                width={600}
                height={600}
                className="rounded-md"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroPage;
