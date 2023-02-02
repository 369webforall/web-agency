import React from 'react';
import Image from 'next/image';
import { CgWebsite } from 'react-icons/cg';
import { AiOutlineMobile } from 'react-icons/ai';
import { BiSupport } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';
import Process from '../../components/Process';
const Services = () => {
  return (
    <div className="mb-8">
      <Process />
      <section
        className="relative text-gray-900 bg-white border-solid mt-20 "
        id="features"
      >
        <div className="mx-auto border-solid lg:pl-8 max-w-7xl">
          <div>
            <h2 className="m-0 text-2xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-t from-blue-500 to-purple-500 sm:text-4xl md:text-3xl">
              Our Features
            </h2>
            <h3 className="mt-2 text-xl text-center border-0 border-gray-200">
              Web development and maintenance.
            </h3>
            <h4 className="text-xl text-purple-800 my-4 text-center">
              Personal websites, Business websites, E-commerce websites, Blogs,
              Portfolio websites, Educational websites
            </h4>
          </div>
          <div className="flex flex-col items-center text-gray-900 border-0 border-gray-200 lg:flex-row">
            <div className="flex flex-col justify-center w-full h-full p-4 text-gray-900 border-solid lg:w-1/2 md:p-16 lg:p-0 lg:pl-10 lg:pr-20">
              <div className="grid gap-4 mt-8 border-0 border-gray-200 sm:mt-10 sm:gap-6 lg:mt-12 lg:gap-8">
                <div className="flex items-start text-gray-900 border-solid ">
                  <div className="flex items-center justify-center w-12 h-12 bg-purple-500 rounded">
                    <CgWebsite className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 ml-6 border-0 border-gray-200">
                    <h4 className="m-0 text-lg font-semibold text-purple-600 border-solid sm:text-xl md:text-2xl">
                      Custom web design
                    </h4>
                    <p className="mt-2 text-base leading-normal text-gray-900 border-solid ">
                      We create a unique and visually appealing website.
                    </p>
                  </div>
                </div>
                <div className="flex items-start text-gray-900 border-solid ">
                  <div className="flex items-center justify-center w-12 h-12 bg-purple-600 border-0 border-gray-200 rounded">
                    <AiOutlineMobile className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 ml-6 border-0 border-gray-200">
                    <h4 className="m-0 text-lg font-semibold text-purple-600 border-solid sm:text-xl md:text-2xl">
                      Responsive design
                    </h4>
                    <p className="mt-2 text-base leading-normal text-gray-900 border-solid ">
                      We offer responsive design services, which ensure that a
                      website looks and functions properly on different devices
                      and screen sizes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start text-gray-900 border-solid ">
                  <div className="flex items-center justify-center w-12 h-12 bg-purple-600 border-0 border-gray-200 rounded">
                    <BiSupport className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 ml-6 border-0 border-gray-200">
                    <h4 className="m-0 text-lg font-semibold text-purple-600 border-solid sm:text-xl md:text-2xl">
                      Maintenance and support
                    </h4>
                    <p className="mt-2 text-base leading-normal text-gray-900 border-solid ">
                      We offer ongoing maintenance and support services to
                      ensure that a website remains up-to-date and functions
                      properly.
                    </p>
                  </div>
                </div>
                <div className="flex items-start text-gray-900 border-solid ">
                  <div className="flex items-center justify-center w-12 h-12 bg-purple-600 border-0 border-gray-200 rounded">
                    <BsSearch className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 ml-6 border-0 border-gray-200">
                    <h4 className="m-0 text-lg font-semibold text-purple-600 border-solid sm:text-xl md:text-2xl">
                      SEO optimization
                    </h4>
                    <p className="mt-2 text-base leading-normal text-gray-900 border-solid ">
                      We offer services to optimize a website for search
                      engines, to improve its visibility and ranking in search
                      results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-full overflow-hidden text-gray-900 border-0 border-gray-200 lg:w-1/2">
              <Image
                src="/undraw_Features_overview_re_2w78.png"
                className="object-cover w-full h-full"
                alt="image"
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
