import React from "react";
import styled from "@emotion/styled/macro";
import ImageLoader from "../components/ImageLoader";
import { ParallaxLayer } from "react-spring/renderprops-addons";
import { MIN_WIDTH_BREAKPOINTS, PARALLAX_LAYER_HEIGHT } from "../enums";
import Text from "../components/StoryText";

const [
  ,
  ,
  POST_IPHONE6_PORTRAIT_UP,
  POST_IPHONE6_PLUS_PORTRAIT_UP,
  PHONE_LANDSCAPE_UP,
  SMALL_DEVICES_LANDSCAPE_UP,
  BETWEEN_SMALL_DEVICES_TABLET_UP,
  TABLET_PORTRAIT_UP,
  TABLET_LANDSCAPE_UP,
  DESKTOP_UP
] = MIN_WIDTH_BREAKPOINTS;

const StyledDatingApp = styled.div`
  height: ${PARALLAX_LAYER_HEIGHT * 0.75}px;
`;

const StyledBackgroundOverlay = styled.div`
  background-color: #868fa4;
  position: absolute;
  width: 100%;
  height: 100%;
`;

const StyledBackgroundImage = styled(ImageLoader)`
  height: 150%;
`;

const StyledPanel = styled.div`
  margin-top: 2em;
  background-color: rgba(255, 255, 255, 0.8);
  width: 85vw;
  position: absolute;
  max-width: 64em;
  top: 75%;
  left: 50%;
  transform: translate3d(-50%, -75%, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5em 2em;

  @media only screen and (min-width: ${PHONE_LANDSCAPE_UP}px) {
    padding: 2em 2.5em;
  }

  @media only screen and (min-width: ${BETWEEN_SMALL_DEVICES_TABLET_UP}px) {
    margin-top: 3em;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    margin-top: 1em;
    padding: 2.25em 3em;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    margin-top: 0;
  }
`;

const StyledText = styled(Text)`
  line-height: 1.4;
  letter-spacing: 0.03em;
  font-size: 1rem;

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    font-size: 1.1rem;
  }

  @media only screen and (min-width: ${POST_IPHONE6_PLUS_PORTRAIT_UP}px) {
    font-size: 1.2rem;
  }

  @media only screen and (min-width: ${PHONE_LANDSCAPE_UP}px) {
    font-size: 1.25rem;
  }

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    font-size: 1.3rem;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    line-height: 1.3125;
    font-size: 1.375rem;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    font-size: 1.5rem;
    line-height: 1.375;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    line-height: 1.25;
    font-size: 1.75rem;
  }
`;

const DatingApp = ({ baseFactor, isVisible }) => {
  return (
    <StyledDatingApp>
      <StyledBackgroundOverlay>
        <ParallaxLayer
          offset={baseFactor * -0.5}
          speed={-0.15}
          factor={baseFactor}
          style={{ mixBlendMode: "overlay" }}
        >
          <StyledBackgroundImage
            title="Cellphone"
            placeholder="/img/photos/cellphone.jpg"
            image="/img/photos/cellphone.jpg"
            isCover
            isVisible={isVisible}
          />
        </ParallaxLayer>
      </StyledBackgroundOverlay>
      <ParallaxLayer
        offset={baseFactor * 0.20625}
        speed={0.14375}
        factor={baseFactor}
      >
        <StyledPanel>
          <StyledText>
            Until 2 years later, they got into contact again.  They exchanged conversations on Facebook endlessly and this is where the story started.
          </StyledText>
        </StyledPanel>
      </ParallaxLayer>
    </StyledDatingApp>
  );
};

export default DatingApp;
