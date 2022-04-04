import React, { Fragment, useRef } from "react";
import MetaTags from "react-meta-tags";
import BlogGridTwo from "../containers/blog-grids/BlogGridTwo";
import SoftwareDownloadTwo from "../components/software-downloads/SoftwareDownloadTwo";
import CounterUp from "../containers/counter-ups/CounterUp";
import WorkProcess from "../containers/work-processes/WorkProcess";
import LiveChartTwo from "../components/live-chart/LiveChartTwo";
import HowWorks from "../components/how-works/HowWorks";
import POS from "../components/POS/POS";
import Retail from "../components/Retail/Retail";
import CurrencyCalculationTwo from "../components/currency-calculations/CurrencyCalculationTwo";
import HeroSliderTwo from "../containers/hero-sliders/HeroSliderTwo";
import LayoutTwo from "../layouts/LayoutTwo";

const HomeTwo = () => {
  const posRef = useRef("posRef")
  const retailRef = useRef("retailRef")
  const downloadRef = useRef("downloadRef")
  const contactRef = useRef("contactRef")
  console.log(posRef, retailRef, downloadRef, contactRef)
  return (
    <Fragment>
      <MetaTags>
        <title>Howard | Home Two</title>
        <meta
          name="description"
          content="Homepage of React JS Crypto Currency Template."
        />
      </MetaTags>
      <LayoutTwo theme="white" posref={posRef} retailref={retailRef} downloadref={downloadRef} contactref={contactRef}>
        {/* hero slider */}
        <HeroSliderTwo />
        {/* how works */}
        <POS elRef={posRef} />
        <Retail elRef={retailRef} />
        {/* live chart */}
        {/* <LiveChartTwo /> */}
        {/* work process */}
        {/* <WorkProcess /> */}
        {/* counter up */}
        <CounterUp backgroundImage="/images/bg/4.jpg" />
        {/* currency calculation */}
        {/* <CurrencyCalculationTwo /> */}
        {/* software download */}
        <SoftwareDownloadTwo elRef={downloadRef} />
        {/* blog grid */}
        {/* <BlogGridTwo /> */}
      </LayoutTwo>
    </Fragment>
  );
};

export default HomeTwo;
