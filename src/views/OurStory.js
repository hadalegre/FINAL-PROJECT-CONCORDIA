import React, { Fragment, useEffect } from "react";
import { Helmet } from "react-helmet";
import { ParallaxLayer } from "react-spring/renderprops-addons";
import styled from "@emotion/styled/macro";

import { AppContext } from "../AppProvider";
import Introduction from "./Introduction";
import XYearsLater from "./XYearsLater";
import SheSaidYes from "./SheSaidYes";
import FatefulFirst from "./FatefulFirst";
import DatingApp from "./DatingApp";
import Facebook from "./Facebook";
import PlusPattern from "./PlusPattern";
import DistortedPhoto from "./DistortedPhoto";
import FiltersPhoto from "./FiltersPhoto";
import FirstPhoto from "./FirstPhoto";
import FirstDate from "./FirstDate";

import ParallaxSection from "../components/ParallaxSection";

const description =
  "6 years ago, Hannah and Jarin met at their first job. 4 years later, after many impromptu dates, long drives, train and plane rides, Jarin proposed to Hannah in Montreal, a symbol of Hannah's beloved home and city that brought them together.";

const StyledDivider = styled.div`
  height: 100%;
  width: 100%;
  background-color: #333755;
`;

const Sections = ({ baseFactor, isGreaterThanTablet }) => (
  <Fragment>
    <ParallaxLayer
      offset={0}
      speed={0}
      factor={baseFactor * (isGreaterThanTablet ? 7.0375 : 8.0375)}
      style={{ backgroundColor: "white" }}
    />
    <ParallaxSection
      offset={0}
      speed={0}
      factor={baseFactor}
      style={{ overflow: "hidden" }}
    >
      <Introduction />
    </ParallaxSection>
    <ParallaxSection
      offset={baseFactor}
      speed={0}
      factor={baseFactor}
      isFadeIn
      style={{ overflow: "hidden" }}
    >
      <FatefulFirst />
    </ParallaxSection>
    <ParallaxSection
      offset={baseFactor * 1.525}
      speed={-0.05}
      factor={baseFactor * 0.3}
      isFadeIn
      style={{ zIndex: 1 }}
    >
      <FirstPhoto />
    </ParallaxSection>
    <ParallaxSection
      offset={baseFactor * 2}
      speed={0}
      factor={baseFactor * 0.875}
      isFadeIn
      style={{ overflow: "hidden" }}
    >
      <DatingApp />
    </ParallaxSection>
    <ParallaxSection
      offset={baseFactor * 2.875}
      speed={0}
      factor={baseFactor}
      isFadeIn
      style={{ overflow: "hidden", zIndex: 1 }}
    >
      <Facebook />
    </ParallaxSection>
    <ParallaxSection
      offset={baseFactor * 3.625}
      speed={-0.15}
      factor={baseFactor * 0.3}
      isFadeIn
      style={{ zIndex: 3 }}
    >
      <FiltersPhoto />
    </ParallaxSection>
    <ParallaxSection
      offset={baseFactor * 4}
      speed={-0.1}
      factor={baseFactor * 0.625}
      isFadeIn
      style={{ zIndex: 3 }}
    >
      <DistortedPhoto />
    </ParallaxSection>
    <ParallaxSection
      offset={baseFactor * 4}
      speed={0.075}
      factor={baseFactor * 0.625}
      isFadeIn
      style={{ zIndex: 2 }}
    >
      <PlusPattern />
    </ParallaxSection>
    <ParallaxSection
      offset={baseFactor * 4.5}
      speed={0}
      factor={baseFactor * 0.4375}
      isFadeIn
      style={{ zIndex: 3 }}
    >
      <StyledDivider />
    </ParallaxSection>
    <ParallaxSection
      offset={baseFactor * 4.5625}
      speed={-0.0625}
      factor={baseFactor * 0.4375}
      isFadeIn
      style={{ zIndex: 3 }}
    >
      <FirstDate />
    </ParallaxSection>
    <ParallaxSection
      offset={baseFactor * 4.9375}
      speed={0}
      factor={baseFactor * 1.1}
      isFadeIn
      style={{ overflow: "hidden" }}
    >
      <XYearsLater />
    </ParallaxSection>
    <ParallaxSection
      offset={baseFactor * 6.0375}
      speed={0}
      factor={isGreaterThanTablet ? baseFactor : 2 * baseFactor}
      isFadeIn
      style={{ overflow: "hidden" }}
    >
      <SheSaidYes isGreaterThanTablet={isGreaterThanTablet} />
    </ParallaxSection>
  </Fragment>
);

const OurStory = ({
  baseFactor,
  isGreaterThanTablet,
  handleIsBrandDark,
  handleIsNavbarDark
}) => {
  useEffect(() => {
    handleIsBrandDark(false);
    handleIsNavbarDark(false);
  }, []);

  return (
    <main
      style={{
        backgroundColor: "black",
        position: "absolute",
        top: "0",
        right: "0",
        bottom: "0",
        left: "0"
      }}
    >
      <Helmet>
        <title>Hannah and Jarin's Wedding - Our Story</title>
        <meta name="description" content={description} />
        <meta content={description} property="og:description" />
      </Helmet>
      <Sections
        baseFactor={baseFactor}
        isGreaterThanTablet={isGreaterThanTablet}
      />
    </main>
  );
};

export default props => (
  <AppContext.Consumer>
    {({ handleIsBrandDark, handleIsNavbarDark }) => (
      <OurStory
        {...props}
        handleIsBrandDark={handleIsBrandDark}
        handleIsNavbarDark={handleIsNavbarDark}
      />
    )}
  </AppContext.Consumer>
);
