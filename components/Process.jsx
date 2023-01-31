import React from 'react';

const Process = () => {
  const service = [
    {
      title: 'Get in touch',
      des: 'Reach out to us to start the process. Discuss all your requirements and idea. In our mitual understanding we can move to next step',
    },
    {
      title: 'First draft for you',
      des: 'Once we know all the requirements from you,  our designer can create first draft of your site. We will support you at any time to fulfull your requirements.',
    },
    {
      title: 'The final touch',
      des: 'The draft is around 95% complete and we can make any changes as per your new idea before finalize the site.',
    },
    {
      title: 'Your website goes online',
      des: 'Your website can now go online.We will then take care of the entire process for you. Domains, Hosting, Email setup, Secure SSL encryption',
    },
  ];
  return (
    <section className="bg-gray-800 py-4 md:mt-10 mb-10">
      <div className="mx-10 md:w-3/4 md:mx-auto lg:w-1/2 items-center py-10">
        <h2 className="text-2xl text-purple-500 text-center font-medium">
          Here how it works
        </h2>
        <h3 className="text-lg font-semibold text-center py-3 text-white">
          We have very easy process for our clients.
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-16 pt-10">
          {service.map((ser, i) => {
            return (
              <div
                className="px-6 py-8 rounded-xl bg-gray-50 hover:bg-purple-600 group border border-gray-300"
                key={i}
              >
                <div className="flex gap-3 items-center">
                  <h3 className="text-purple-700 text-2xl group-hover:text-white font-semibold ">
                    {ser.title}
                  </h3>
                </div>

                <p className="text-base group-hover:text-white pr-6 py-2">
                  {ser.des}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
