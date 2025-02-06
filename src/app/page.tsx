import React from "react";
import Script from "next/script";
import {
  LayoutBase,
  FirstSection,
  SecondSection,
  ThirdSection,
} from "./components";

const Home = () => {
  return (
    <>
      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-3ED7BXVBN1`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3ED7BXVBN1', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <LayoutBase>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
      </LayoutBase>
    </>
  );
};

export default Home;
