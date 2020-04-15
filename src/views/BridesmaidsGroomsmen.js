import React, { Component } from "react";
import { Helmet } from "react-helmet";
import styled from "@emotion/styled/macro";

import { AppContext } from "../AppProvider";
import Card from "../components/Card";
import { MIN_WIDTH_BREAKPOINTS } from "../enums";

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

const description =
  "Meet the bridesmaids and groomsmen for Hannah and Jarin's wedding ceremony.";
const StyledMain = styled.main`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const StyledPageHeaderImage = styled.div`
  width: 100%;
  background-image: ${props => `url(${props.src})` || "none"};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgba(246, 233, 203, 1);
  position: relative;
  height: 10.125em;

  @media only screen and (min-width: ${PHONE_LANDSCAPE_UP}px) {
    height: 18.125em;
  }

  @media only screen and (min-width: ${BETWEEN_SMALL_DEVICES_TABLET_UP}px) {
    position: absolute;
    background-color: transparent;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    height: 20.125em;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    height: 23.125em;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    height: 29.125em;
  }
`;

const StyledPageTitle = styled.h1`
  font-size: 1.25rem;
  position: absolute;
  left: 50%;
  bottom: 0.8em;
  padding: 0.5em 1em;
  letter-spacing: 0.083em;
  background-color: rgba(255, 255, 255, 1);
  color: black;
  transform: translate3d(-50%, 50%, 0);
  box-shadow: 0 5px 10px 0 rgba(37, 41, 82, 0.1);
  white-space: nowrap;

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    font-size: 1.5rem;
  }

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    font-size: 1.625rem;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    font-size: 1.75rem;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    font-size: 1.5rem;
  }
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: ${BETWEEN_SMALL_DEVICES_TABLET_UP}px) {
    flex-direction: row;
  }
`;

const StyledCardContainer = styled.article`
  width: 100%;
  background-color: ${props => props.color};
  padding: 3.25em 0em 1em 0em;

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    padding: 4.25em 0.5em 1em 0.5em;
  }

  @media only screen and (min-width: ${POST_IPHONE6_PLUS_PORTRAIT_UP}px) {
    padding: 5.25em 0.5em 1em 0.5em;
  }

  @media only screen and (min-width: ${PHONE_LANDSCAPE_UP}px) {
    padding: 5.25em 0.5em 1em 0.5em;
  }

  @media only screen and (min-width: ${BETWEEN_SMALL_DEVICES_TABLET_UP}px) {
    width: 50%;
    padding: 22.25em 0.5em 1em 0.5em;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    padding: 25.25em 1em 1em 1em;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    padding: 28.25em 1.5em 1em 1.5em;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    padding: 31.25em 1.5em 1em 1.5em;
  }
`;

const StyledContainerHeading = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${props => props.color};
  text-align: center;
  margin-bottom: 0.75em;

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    font-size: 3rem;
  }

  @media only screen and (min-width: ${POST_IPHONE6_PLUS_PORTRAIT_UP}px) {
    font-size: 3.2rem;
  }

  @media only screen and (min-width: ${PHONE_LANDSCAPE_UP}px) {
    font-size: 3.8rem;
  }

  @media only screen and (min-width: ${BETWEEN_SMALL_DEVICES_TABLET_UP}px) {
    font-size: 2.5rem;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    font-size: 3rem;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    font-size: 3.8rem;
    margin-bottom: 1.5em;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    font-size: 2.5rem;
    margin-bottom: 0.75em;
`;

const StyledCardRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: ${PHONE_LANDSCAPE_UP}px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const StyledSpecialTitle = styled.div`
  font-size: 1rem;
  letter-spacing: 0.1em;
  white-space: nowrap;
  color: ${props => props.color};
  display: flex;
  align-items: center;
  margin-bottom: 0.2em;

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    font-size: 1.1rem;
  }

  @media only screen and (min-width: ${PHONE_LANDSCAPE_UP}px) {
    font-size: 1rem;
  }

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    font-size: 1.1rem;
  }

  @media only screen and (min-width: ${BETWEEN_SMALL_DEVICES_TABLET_UP}px) {
    font-size: 0.75rem;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    font-size: 1rem;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    font-size: 1.25rem;
  }
`;

const bridesmaids = [
  [{ name: "Kate", maidOfHonor: true }],
  [{ name: "Jeanelle" }, { name: "Hazel" }],
  [{ name: "Khatleen" }, { name: "Andrea" }],
  [{ name: "Glare" }, { name: "Abygaelle" }],
  [{ name: "Karen" }, { name: "Dianne" }]
];

const groomsmen = [
  [{ name: "Thilak", bestMan: true }],
  [{ name: "Aravind" }, { name: "Veda" }],
  [{ name: "Pavan" }, { name: "Noel" }],
  [{ name: "John" }, { name: "Jude" }],
  [{ name: "Karthik" }, { name: "Rama" }]
];

class BridesmaidsGroomsmen extends Component {
  componentDidMount() {
    const { handleIsBrandDark, handleIsNavbarDark } = this.props;
    handleIsBrandDark(false);
    handleIsNavbarDark(false);
  }

  render() {
    return (
      <StyledMain>
        <Helmet>
          <title>Hannah and Jarin's Wedding - Bridesmaids & Groomsmen</title>
          <meta name="description" content={description} />
          <meta content={description} property="og:description" />
          <link
            rel="canonical"
          />
        </Helmet>
        <StyledPageHeaderImage src="/img/photos/bridesmaids_groomsmen_header.jpg">
          <StyledPageTitle>MEET THE...</StyledPageTitle>
        </StyledPageHeaderImage>
        <StyledSection>
          <StyledCardContainer color="white">
            <StyledContainerHeading color="black">
              BRIDESMAIDS
            </StyledContainerHeading>
            {bridesmaids.map((row, i) => (
              <StyledCardRow key={`bridesmaid__row--${i}`}>
                {row.map((bridesmaid, i) => (
                  <Card
                    key={`bridesmaid.name--${i}`}
                    src={`/img/photos/bridesmaids/${bridesmaid.name.toLowerCase()}.jpg`}
                    name={bridesmaid.name}
                  >
                    {bridesmaid.maidOfHonor ? (
                      <StyledSpecialTitle color="black">
                        MAID OF HONOR
                      </StyledSpecialTitle>
                    ) : null}
                  </Card>
                ))}
              </StyledCardRow>
            ))}
          </StyledCardContainer>
          <StyledCardContainer color="white">
            <StyledContainerHeading color="black">
              GROOMSMEN
            </StyledContainerHeading>
            {groomsmen.map((row, i) => (
              <StyledCardRow key={`groomsman--${i}`}>
                {row.map((groomsman, i) => (
                  <Card
                    key={`groomsman.name--${i}`}
                    src={`/img/photos/groomsmen/${groomsman.name.toLowerCase()}.jpg`}
                    name={groomsman.name}
                  >
                    {groomsman.bestMan ? (
                      <StyledSpecialTitle color="black">
                        BESTMAN
                      </StyledSpecialTitle>
                    ) : null}
                  </Card>
                ))}
              </StyledCardRow>
            ))}
          </StyledCardContainer>
        </StyledSection>
      </StyledMain>
    );
  }
}

export default props => (
  <AppContext.Consumer>
    {({ handleIsBrandDark, handleIsNavbarDark }) => (
      <BridesmaidsGroomsmen
        {...props}
        handleIsBrandDark={handleIsBrandDark}
        handleIsNavbarDark={handleIsNavbarDark}
      />
    )}
  </AppContext.Consumer>
);
