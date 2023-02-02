import Script from 'next/script';

export default function Head() {
  return (
    <>
      <title>Web Coding Agency for SEO, Website Design & Development</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />

      <meta
        name="description"
        content="Enhance Your Online Presence with Web Coding's Expert Services - Website Design, E-commerce Solutions, UI/UX Design, Custom Web Development, Maintenance & Support, and Objective Digital Marketing."
      />
      <meta
        name="keywords"
        content="Website design, Website development, Web applications, E-commerce solutions, UI/UX design, Responsive design, Custom web development, Web maintenance and support, Search engine optimization (SEO), Web hosting, Domain registration."
      />
      <meta
        name="google-site-verification"
        content="hxxARLr50J1SqRyVPV7oInO7fITQuOhsmydcFW_RNuo"
      />
      <link rel="icon" href="/favicon.png" />
      <link rel="canonical" href="https://www.webcoding.info/" />

      {/* <!-- Google tag (gtag.js) --> */}

      <Script
        async
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-GS9P0E0TH9"
      ></Script>
      <Script id="google-analytics-script" strategy="lazyOnload">
        {`
    window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${process.env.GOOGLE_ID}', {page_path: window.location.pathname,});
  
  `}
      </Script>
    </>
  );
}
