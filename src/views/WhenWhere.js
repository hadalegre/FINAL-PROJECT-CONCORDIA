import React, { Component } from "react";
import { Helmet } from "react-helmet";
import styled from "@emotion/styled/macro";

import { AppContext } from "../AppProvider";
import Article from "../components/Article";
import LabelSection from "../components/LabelSection";
import Weather from "../components/Weather";
import {
  formatDate,
  formatTime,
  getCalendarIsoString,
  getMeridiem,
  getTimeZoneAbbr
} from "../utils";
import { MIN_WIDTH_BREAKPOINTS } from "../enums";

const [
  ,
  ,
  POST_IPHONE6_PORTRAIT_UP,
  POST_IPHONE6_PLUS_PORTRAIT_UP,
  ,
  ,
  BETWEEN_SMALL_DEVICES_TABLET_UP,
  TABLET_PORTRAIT_UP,
  TABLET_LANDSCAPE_UP,
  DESKTOP_UP
] = MIN_WIDTH_BREAKPOINTS;

const description =
  "The wedding ceremony of Hannah and Jarin will be held at the Sucrerie de la Montagne, a whimsical sugar shack and event space located in Rigaud, Quebec, on November 21, 2020 from 5:00 PM to 11:00 PM EST.";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  @media only screen and (min-width: ${BETWEEN_SMALL_DEVICES_TABLET_UP}px) {
    flex-direction: row;
    align-items: stretch;
  }
`;

const StyledArticle = styled(({ backgroundColor, ...props }) => (
  <Article {...props} />
))`
  background-color: ${props => props.backgroundColor || "white"};
  width: 100%;
  min-height: 23.4em;
  flex: 1;
`;

const StyledActionLink = styled.a`
  color: #3498db;
  text-decoration: none;
  display: block;

  &:hover {
    opacity: 0.6;
  }
`;

const StyledEventDetailsContainer = styled.div`
  margin: 3em 0;
  text-align: center;

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    margin: 4em 0;
  }

  @media only screen and (min-width: ${POST_IPHONE6_PLUS_PORTRAIT_UP}px) {
    margin: 5em 0;
  }

  @media only screen and (min-width: ${BETWEEN_SMALL_DEVICES_TABLET_UP}px) {
    margin: 4em 1em 0 1em;
    text-align: left;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    margin: 5em 2.2em 0 2.2em;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    margin: 6em 2.7em 0 2.7em;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    margin: 5em 2.5em 0 2.5em;
  }
`;

const StyledImg = styled.img`
  color: white;
  vertical-align: middle;
  width: 100%;

  @media only screen and (min-width: ${BETWEEN_SMALL_DEVICES_TABLET_UP}px) {
    width: 26em;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    width: 31em;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    width: 38em;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    width: 46em;
  }
`;

let event1 = {
  name: "Wedding Ceremony - Hannah and Jarin",
  location: {
    name: "Sucrerie de la Montagne",
    streetAddress: "300 Chemin St-Georges",
    neighborhood: "Rigaud",
    state: "Quebec",
    zipCode: "J0P 1P0",
    get fullAddress() {
      return `${this.streetAddress}, ${this.neighborhood}, ${this.state} ${this.zipCode}`;
    },
    get googleMapsUrl() {
      return `https://maps.google.com/maps?hl=en&q=${encodeURIComponent(
        this.name + ", " + this.fullAddress
      )}`;
    }
  },
  timeZoneAbbr: getTimeZoneAbbr(),
  start: new Date(Date.UTC(2020, 10, 21, 22, 0, 0)),
  end: new Date(Date.UTC(2020, 10, 22, 4, 0, 0)),
  get formattedDate() {
    return formatDate(this.start);
  },
  get formattedTimeSlot() {
    return `${formatTime(this.start)} - ${formatTime(this.end)} ${getMeridiem(
      this.end
    )}`;
  },
  get googleCalendarUrl() {
    return `https://www.google.com/calendar/render?action=TEMPLATE&text=${
      this.name
    }&dates=${getCalendarIsoString(this.start)}/${getCalendarIsoString(
      this.end
    )}&details=${this.details}&location=${this.location.name}, ${
      this.location.fullAddress
    }&sf=true&output=xml`.replace(/\s/g, "+");
  }
};

class WhenWhere extends Component {
  componentDidMount() {
    this.props.handleIsBrandDark(true);
    this.props.handleIsNavbarDark(false);
  }

  render() {
    return (
      <StyledMain>
        <Helmet>
          <title>Hannah and Jarin's Wedding - When & Where</title>
          <meta name="description" content={description} />
          <meta content={description} property="og:description" />
        </Helmet>
        <StyledArticle left>
          <StyledEventDetailsContainer>
            <LabelSection
              category="Date"
              title={event1.formattedDate.toUpperCase()}
            >
              <Weather>
                <StyledActionLink
                  href="https://openweathermap.org/city/6122288"
                  target="_blank"
                  rel="noreferrer"
                >
                  Check Weather
                </StyledActionLink>
              </Weather>
            </LabelSection>
            <LabelSection
              category="Time"
              subtitle={`(${event1.timeZoneAbbr})`}
              title={event1.formattedTimeSlot.toUpperCase()}
            >
              <StyledActionLink
                href={event1.googleCalendarUrl}
                target="_blank"
                rel="noreferrer"
              > 
                Add to Google Calendar
              </StyledActionLink>
            </LabelSection>
            <LabelSection
              category="Location"
              title={event1.location.name.toUpperCase()}
            >
              {event1.location.streetAddress} <br />
              {event1.location.neighborhood}, {event1.location.state}{" "}
              {event1.location.zipCode}
              <StyledActionLink
                margin="0.5em"
                href={event1.location.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                View Location
              </StyledActionLink>
            </LabelSection>
          </StyledEventDetailsContainer>
        </StyledArticle>
        <StyledArticle right backgroundColor="rgba(21, 37, 64, 1)">
          <StyledImg
            src="/img/photos/church.jpg"
            alt="venue"
          />
        </StyledArticle>
      </StyledMain>
    );
  }
}

export default props => (
  <AppContext.Consumer>
    {({ handleIsBrandDark, handleIsNavbarDark }) => (
      <WhenWhere
        {...props}
        handleIsBrandDark={handleIsBrandDark}
        handleIsNavbarDark={handleIsNavbarDark}
      />
    )}
  </AppContext.Consumer>
);
