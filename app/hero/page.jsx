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
          <h1 className="text-3xl  text-violet-500  sm:text-5xl font-semibold   text-center mt-4">
            Building the digital world, one website at a time
            <br />
            <span className="text-violet-900 text-xl">
              Innovative solutions for your online presence
            </span>
          </h1>
          <div className="flex md:flex-row flex-col justify-between items-start my-2 md:my-10">
            <div className="flex flex-col items-center md:items-start mx-4 md:mx-10 max-w-2xl">
              <p className="text-xl text-gray-700 my-5">
                Transforming ideas in to impactful online experiences and
                Elevating your brand through custom web desig.While most
                businesses understand the importance of having a website, its
                vital to make sure its optimised to make it as visible as
                possible on search engines.Make sure your website is optimised
                for mobile. More and more people are using their smartphones to
                complete everyday activities, including mobile searches and
                mobile payments.Regardless of which sector you operate in,
                adapting your marketing strategy to combine both online and
                offline can help you to seize the opportunities presented by the
                ever-changing digital world.
              </p>

              <button className="block border-2 mb-6 border-blue-500 bg-violet-300 text-black hover:bg-violet-500 hover:shadow-lg px-8 h-14 rounded-md hover:text-white ">
                <Link href="/contact">Contat us</Link>
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
