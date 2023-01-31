import React from 'react';

const Contact = () => {
  return (
    <section className="relative text-gray-600 mt-20" id="contact">
      <div className="container flex justify-center px-5 py-12 mx-auto items-cener sm:flex-nowrap">
        <div className="flex flex-col w-full max-w-xl">
          <h2 className="mb-1 text-2xl font-semibold text-center  text-purple-600">
            Contact US
          </h2>
          <p className="mb-5 text-center text-purple-900">
            Any questions or remarks ? Just write us a message !
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="text-sm text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none resize-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            ></textarea>
          </div>
          <button className="px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">
            Send
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
