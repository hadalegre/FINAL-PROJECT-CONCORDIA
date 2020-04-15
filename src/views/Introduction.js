import React, { useEffect } from "react";
import styled from "@emotion/styled/macro";

import ImageLoader from "../components/ImageLoader";
import { MIN_WIDTH_BREAKPOINTS, PARALLAX_LAYER_HEIGHT } from "../enums";
import { ParallaxLayer } from "react-spring/renderprops-addons";
import { AppContext } from "../AppProvider";

const [
  ,
  ,
  POST_IPHONE6_PORTRAIT_UP,
  POST_IPHONE6_PLUS_PORTRAIT_UP,
  ,
  SMALL_DEVICES_LANDSCAPE_UP,
  ,
  TABLET_PORTRAIT_UP,
  ,
  DESKTOP_UP
] = MIN_WIDTH_BREAKPOINTS;

const StyledIntroduction = styled("div")`
  height: ${PARALLAX_LAYER_HEIGHT}px;
`;

const StyledPolaroid = styled(ImageLoader)`
  background-position: calc(50% + 0.5em) center;
  position: absolute;
  bottom: 0;
  height: 102.5%;

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    background-position: calc(50% + 0.75em) center;
    height: 110%;
  }

  @media only screen and (min-width: ${POST_IPHONE6_PLUS_PORTRAIT_UP}px) {
    background-position: calc(50% + 1em) center;
  }

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    background-position: center;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    background-position: bottom;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    background-size: contain;
  }
`;

const StyledPaintingPhoto = styled(ImageLoader)`
  display: none;

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    display: block;
    position: absolute;
    left: calc(50% - 34em);
    height: 12em;
    width: 15em;
    transform: rotate3d(0, 0, 1, -6deg);
  }
`;

const StyledSaintAnnePhoto = styled(ImageLoader)`
  display: none;

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    display: block;
    position: absolute;
    left: calc(50% - 37em);
    height: 14em;
    width: 19em;
    transform: rotate3d(0, 0, 1, 6deg);
  }
`;

const StyledTremblantPhoto = styled(ImageLoader)`
  display: none;

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    display: block;
    position: absolute;
    left: calc(50% + 17em);
    height: 26em;
    width: 19em;
    transform: rotate3d(0, 0, 1, 3deg);
  }
`;

const Introduction = ({
  baseFactor,
  isVisible,
  handleIsBrandDark,
  handleIsNavbarDark
}) => {
  useEffect(() => {
    handleIsBrandDark(false);
    handleIsNavbarDark(false);
  }, []);

  return (
    <StyledIntroduction>
      <ParallaxLayer offset={0} speed={0} factor={baseFactor}>
        <StyledPolaroid
          title="Polaroid -  Hannah and Jarin in Barcelona"
          placeholder="/img/photos/our_story.png"
          image="/img/photos/our_story.png"
          height="110%"
          width="100%"
          isVisible={isVisible}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={baseFactor * 0.25} speed={0.1} factor={baseFactor}>
        <StyledPaintingPhoto
          title="Hannah and Jarin - Painting"
          placeholder="/img/photos/painting.jpg"
          image="/img/photos/painting.jpg"
          isVisible={isVisible}
        />
      </ParallaxLayer>
      <ParallaxLayer
        offset={baseFactor * 0.59375}
        speed={-0.1}
        factor={baseFactor}
      >
        <StyledSaintAnnePhoto
          title="Photo - Hannah and Jarin in Sainte-Anne"
          placeholder="/img/photos/saint-anne.jpg"
          image="/img/photos/saint-anne.jpg"
          isVisible={isVisible}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={baseFactor * 0.3} speed={-0.1} factor={baseFactor}>
        <StyledTremblantPhoto
          title="Photo - Hannah and Jarin in Tremblant"
          placeholder="/img/photos/tremblant.jpg"
          image="/img/photos/tremblant.jpg"
          isVisible={isVisible}
        />
      </ParallaxLayer>
    </StyledIntroduction>
  );
};

export default props => (
  <AppContext.Consumer>
    {({ handleIsBrandDark, handleIsNavbarDark }) => (
      <Introduction
        {...props}
        handleIsBrandDark={handleIsBrandDark}
        handleIsNavbarDark={handleIsNavbarDark}
      />
    )}
  </AppContext.Consumer>
);
