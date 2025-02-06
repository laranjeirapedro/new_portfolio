import React from "react";

import {
  LayoutBase,
  FirstSection,
  SecondSection,
  ThirdSection,
} from "./components";

const Home = () => {
  return (
      <LayoutBase>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
      </LayoutBase>
  );
};

export default Home;
