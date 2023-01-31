'use client';
import React from 'react';

export default function FaqComponent() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white">
        <div className="container flex flex-col justify-center px-4 mx-auto md:p-8">
          <h2 className="text-2xl font-semibold text-purple-600">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 mb-8 text-gray-600"></p>
          <div className="space-y-4">
            <details className="w-full rounded-lg ring-1 ring-purple-600">
              <summary className="px-4 py-6">
                1. Can i use my current domian?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                Of course you can continue to use your current domain. We take
                care of the move for you.
              </p>
            </details>
            <details className="w-full rounded-lg ring-1 ring-purple-600">
              <summary className="px-4 py-6">
                2 .What includes in service ?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                No, all services are included in the net investment of 0000.
                Domain & hosting are also included for 12 months. Would you like
                to continue using your website, including domain and hosting,
                after the 12 months? Gladly, you benefit from the web coding
                special conditions. At monthly for only €19.99 you will receive
                your website and the following advantages: domain, hosting,
                technical support and maintenance as well as access to your
                customer portal. Here you can view statistics, edit your website
                and much more.
              </p>
            </details>
            <details className="w-full rounded-lg ring-1 ring-purple-600">
              <summary className="px-4 py-6">
                3. In how many day do you finisched?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                Thanks to our dedicated team, we are fast. How fast? On average,
                we only need about 14 days to go online.
              </p>
            </details>
            <details className="w-full rounded-lg ring-1 ring-purple-600">
              <summary className="px-4 py-6">
                {' '}
                4. What meens the garantie? For hundreds of customers, web
                coding is number 1 in the website jungle. We'll prove it to you
                too.
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                If you are not satisfied with the look of the first draft and do
                not want any changes, you will get your entire money back. No
                ifs and buts.
              </p>
            </details>
            <details className="w-full rounded-lg ring-1 ring-purple-600">
              <summary className="px-4 py-6">
                {' '}
                5. Do you have other services?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                You can also benefit from other services - at the best
                price-performance ratio on the market. Such as: logo creation,
                online marketing, SEO, Google My Business, social media. Our
                tip: content care & maintenance of your website monthly.only
                €29.99
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}
