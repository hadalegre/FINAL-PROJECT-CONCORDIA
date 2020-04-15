import React, { Component } from "react";
import { Helmet } from "react-helmet";
import styled from "@emotion/styled/macro";
import { AppContext } from "../AppProvider";
import { MIN_WIDTH_BREAKPOINTS } from "../enums";
import { Link } from "@reach/router";

const [
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
  "Help us build our new home!";

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
position: absolute;
left: 50%;
bottom: 0;
padding: 0.5em 1em;
letter-spacing: 0.083em;
background-color: white;
color: rgba(54, 63, 84, 1);
transform: translate3d(-50%, 50%, 0);
box-shadow: 0 5px 10px 0 rgba(37, 41, 82, 0.1);
font-size: 1.25rem;

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
    font-size: 2rem;
  }
  @media only screen and (min-width: ${DESKTOP_UP}px) {
    font-size: 2rem;
  }
`;

const StyledPageSection = styled.section`
  background-color: white;
  padding: 3.625em 0 2.625em;

  @media only screen and (min-width: ${POST_IPHONE6_PLUS_PORTRAIT_UP}px) {
    padding: 5.625em ;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    padding: 8em 2.625em 2.625em;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    font-size: 1.725rem;
    padding: 17.5em 3.5em 2.65em;
   

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    font-size: 2rem;
    padding: 8em 2.625em 2.625em;
  }
`;

const StyledRegistry = styled.article`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 1em;

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    margin-bottom: 2em;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    font-size: 2rem;
  }
`;

const StyledRegistryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0.5em;
  margin-bottom: 3em;

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    padding: 0 1em;
  }

  @media only screen and (min-width: ${POST_IPHONE6_PLUS_PORTRAIT_UP}px) {
    padding: 0 1.5em;
    margin-bottom: 4em;
  }

  @media only screen and (min-width: ${PHONE_LANDSCAPE_UP}px) {
    padding: 0 2em;
  }

  @media only screen and (min-width: ${BETWEEN_SMALL_DEVICES_TABLET_UP}px) {
    padding: 0 1.5em;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    padding: 0 2em;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    font-size: 2rem;
    margin-top: 10em;
  }
`;

const StyledRegistryItemImg = styled.div`
  background-image: url(${props => props.src || "none"});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgba(21, 37, 64, 1);
  border-radius: 50%;
  margin-bottom: 1.5em;
  box-shadow: 0 5px 10px 0 rgba(37, 41, 82, 0.3);
  height: 6.25em;
  width: 6.25em;

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    height: 7.25em;
    width: 7.25em;
  }

  @media only screen and (min-width: ${POST_IPHONE6_PLUS_PORTRAIT_UP}px) {
    height: 8.25em;
    width: 8.25em;
  }

  @media only screen and (min-width: ${BETWEEN_SMALL_DEVICES_TABLET_UP}px) {
    height: 7.25em;
    width: 7.25em;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    height: 8.25em;
    width: 8.25em;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    margin-bottom: 1em;
    font-size: 1.725rem;
  }
`; 

const StyledRegistryItemName = styled.span`
  text-transform: uppercase;
  font-size: 0.875rem;
  text-align: center;
  letter-spacing: 0.1em;
  color: #152540;
  line-height: 1.2em;
  width: 10em;

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    font-size: 1rem;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    font-size: 1.25rem;
  }
`;

const StyledFootnote = styled.div`
  background-color: #ffe6b3;
  color: #2952a3;
  font-size: 0.875rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-align: center;
  margin: 0 auto;
  padding: 0.4em 0.4em;
  line-height: 1.2em;
  max-width: 40em;
  margin-bottom: 0.2em;

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    max-width: 24em;
  }

  @media only screen and (min-width: ${POST_IPHONE6_PLUS_PORTRAIT_UP}px) {
    max-width: 26em;
  }

  @media only screen and (min-width: ${PHONE_LANDSCAPE_UP}px) {
    max-width: 28em;
  }

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    max-width: 40em;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    font-size: 1.25rem;
    margin-bottom: 1em;
  }
`;

const a = `
  color: rgb(255, 235, 153);
  text-decoration: underline;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;


const RegistryItems = [
  { name: <a href= "https://www.amazon.ca/wedding/share/jarin-and-hannah">AMAZON</a>, url: "amazon" },
  { name: <a href= "https://registry.thebay.com/registry/view-registry/jarin_and_hannah_s_wedding">THE HUDSON'S BAY</a> , url: "thebay"  }
];

class Registry extends Component {
	componentDidMount() {
	  const { handleIsBrandDark, handleIsNavbarDark } = this.props;
	  handleIsBrandDark(false);
	  handleIsNavbarDark(false);
	}
  
	render() {
	  return (
		<StyledMain>
		  <Helmet>
			<title>Hannah and Jarin's Registry</title>
			<meta name="description" content={description} />
			<meta content={description} property="og:description" />
			<link
			  rel="canonical"
			/>
		  </Helmet>
		  <StyledPageHeaderImage src="/img/photos/registry_header.jpg">
			<StyledPageTitle>OUR REGISTRY</StyledPageTitle>
		  </StyledPageHeaderImage>
      <StyledPageSection>
          <StyledRegistry>
            {RegistryItems.map((item, i) => (
              <StyledRegistryItem key={`registry__item--${i}`}>
                <StyledRegistryItemImg src={`/img/photos/${item.url}.jpg`} />
                <StyledRegistryItemName>{item.name}</StyledRegistryItemName>
              </StyledRegistryItem>
            ))}
          </StyledRegistry>
          <StyledFootnote>
           Not into traditional registry? We're also up for contributions to our honeymoon fund.  If you're feeling celebratory like we are and would like to contribute, {" "}
           <a href= "https://www.paypal.com/pools/c/8oeUthK0jr" >
              CLICK HERE
            </a>
            .
          </StyledFootnote>
        </StyledPageSection>
		</StyledMain>
		);
	}
}

export default props => (
  <AppContext.Consumer>
    {({ handleIsBrandDark, handleIsNavbarDark }) => (
      <Registry
        {...props}
        handleIsBrandDark={handleIsBrandDark}
        handleIsNavbarDark={handleIsNavbarDark}
      />
    )}
  </AppContext.Consumer>
);