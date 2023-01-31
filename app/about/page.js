import React from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
const About = () => {
  return (
    <section className="bg-white dark:bg-gray-900 mt-20">
      <div className="container px-6 py-10 mx-auto">
        <h2 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
          About <span className="text-violet-900">Web coding</span>
        </h2>

        <div className="max-w-full mx-auto my-6 text-left text-gray-500 dark:text-gray-300">
          <ul className="text-lg text-center">
            <li className="mb-2">
              The best way to your professional website with the best
              price-performance ratio. Web coding has stood for powerful,
              state-of-the-art technology.
            </li>
            <li className="mb-2">
              Our motivation is to shine through precision and creativity with
              every website we design -
            </li>
          </ul>
        </div>
        <h2 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
          Our <span className=" text-violet-900">Team</span>
        </h2>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
          <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-violet-900 dark:border-gray-700 dark:hover:border-transparent">
            <div className="flex flex-col sm:-mx-4 sm:flex-row">
              <img
                className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
                src="/luca.jpg"
                alt="Luca Ildiko"
              />

              <div className="mt-4 sm:mx-4 sm:mt-0">
                <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">
                  Luca Ildiko
                </h1>

                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                  Web Designer
                </p>
              </div>
            </div>

            <p className="mt-4 text-gray-500  dark:text-gray-300 group-hover:text-gray-300">
              Hello, glad to see you here! <br />I am ILDIKO LUCA — a Germany
              based UI/UX designer.What I've been working on?Turning bright
              ideas into beautiful,useful and delightful digital products
              everyone can use.
            </p>

            <div className="flex mt-4 -mx-2">
              <a
                href="#"
                className="mx-2 text-2xl text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                aria-label="Github"
              >
                <AiFillGithub />
              </a>
              <a
                href="#"
                className="mx-2 text-2xl text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                aria-label="Linkedin"
                target="_blank"
              >
                <AiFillLinkedin />
              </a>
            </div>
          </div>

          <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-violet-900 dark:border-gray-700 dark:hover:border-transparent">
            <div className="flex flex-col sm:-mx-4 sm:flex-row">
              <img
                className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
                src="/dev.jpg"
                alt="dev"
              />

              <div className="mt-4 sm:mx-4 sm:mt-0">
                <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">
                  Brham Dev Mahato
                </h1>

                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                  MERN Stack Developer
                </p>
              </div>
            </div>

            <p className="mt-4 text-gray-500  dark:text-gray-300 group-hover:text-gray-300">
              As a full-stack web developer, I bring a wealth of experience in
              building and maintaining web applications. I have a strong
              understanding of front-end technologies such as HTML, CSS, and
              JavaScript as well as proficiency in back-end programming
              languages like Node.js, Express. I am familiar with a libraries
              like React, Redux, Nextjs, Express.js and Mongodb. I am
              comfortable working with databases like MySQL, MongoDB, and
              Firebase. I am experienced in Agile methodologies.
            </p>

            <div className="flex mt-4 -mx-2">
              <a
                href="https://github.com/dev1980"
                className="mx-2 text-2xl text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                aria-label="Github"
                target="_blank"
              >
                <AiFillGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/dev1980/"
                className="mx-2 text-2xl text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                aria-label="Linkedin"
                target="_blank"
              >
                <AiFillLinkedin />
              </a>
            </div>
          </div>

          <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-violet-900 dark:border-gray-700 dark:hover:border-transparent">
            <div className="flex flex-col sm:-mx-4 sm:flex-row">
              <img
                className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
                src="/bitisha.jpg"
                alt="bitisha web developer"
              />

              <div className="mt-4 sm:mx-4 sm:mt-0">
                <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">
                  Bitisha Maharjan
                </h1>

                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                  Web Developer
                </p>
              </div>
            </div>

            <p className="mt-4 text-gray-500  dark:text-gray-300 group-hover:text-gray-300">
              Hello, my name is Bitisha Maharjan, I am first year graduate
              student in B.Sc Computer Science & Software Engineering college
              (PCPS) in Lalitpur, Nepal.I have a strong foundation in web
              development technologies such as HTML, CSS, and JavaScript, and I
              am currently expanding my skillset in other areas like React,
              Redux, Nextjs, I have experience working in a team environment and
              am able to quickly adapt to new technologies.
            </p>

            <div className="flex mt-4 -mx-2">
              <a
                href="#"
                className="mx-2 text-2xl text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                aria-label="Github"
              >
                <AiFillGithub />
              </a>
              <a
                href="#"
                className="mx-2 text-2xl text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                aria-label="Linkedin"
                target="_blank"
              >
                <AiFillLinkedin />
              </a>
            </div>
          </div>

          <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-violet-900 dark:border-gray-700 dark:hover:border-transparent">
            <div className="flex flex-col sm:-mx-4 sm:flex-row">
              <img
                className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
                src="ld.jpg"
                alt="Anita"
              />

              <div className="mt-4 sm:mx-4 sm:mt-0">
                <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">
                  Luca Anita
                </h1>

                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                  Customer Service
                </p>
              </div>
            </div>

            <p className="mt-4 text-gray-500  dark:text-gray-300 group-hover:text-gray-300">
              DREAM IT, WE'LL MAKE IT COME TRUE
            </p>

            <p className="mt-4 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
              Customer Service Manager, Hi I am who ensure that the customers of
              our company are satisfied.leading and motivating the customer
              service team, developing loyalty programs, and creating customer
              satisfaction goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
