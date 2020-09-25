import React, { useState, useEffect, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"
import styled from "styled-components"
import facebook from "../images/facebook.png"
import instagram from "../images/instagram.png"
import twitter from "../images/twitter.png"
import logo_svg from "../images/logo_tan.svg"
import footer_png from "../images/footer.png"

const Container = styled.div`
  background-color: #f7ece3;
  height: ${props => props.contentHeight};
  max-height: ${props => props.contentHeight};
  width: 100vw;
  max-width: 100vw;
  overflow: ${props => props.contentOverflow};
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: ${props => props.contentHeight};
  max-height: ${props => props.contentHeight};
  width: 100vw;
  max-width: 100vw;
  overflow: ${props => props.contentOverflow};
`
const BlurWrapper = styled.div`
  width: 100%;
  height: ${props => props.contentHeight};
  position: absolute;
  background-color: #fff;
  z-index: 100;
`
const BlurLayer = styled(BackgroundImage)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute !important;
  height: ${props => props.contentHeight};
  width: 100%;
  max-height: ${props => props.contentHeight};
  max-width: 100%;
`
const H1 = styled.h1`
  background-color: #a64023;
  color: #fff;
  font-family: Rancho;
  margin-bottom: 0;
  padding: 10px 10px 5px 10px;
  text-align: center;
  width: 100%;
  .logo {
    margin-bottom: 0;
    max-width: 100px;
    width: 200px;
    @media (max-width: 676px) {
      max-width: 150px;
    }
  }
`
const H2 = styled.h2`
  color: #fff;
  font-family: Rancho;
  text-align: center;
`
const Answers = styled.div`
  color: #fff;
  font-family: Rancho;
  font-size: 1.62671rem;
  margin-bottom: 0;
  text-align: center;
  button {
    color: #fff;
    background-color: transparent;
    border: 0;
    border-bottom: 2px solid transparent;
    margin: 0 5px;
    :hover {
      border-bottom: 2px solid #fff;
      cursor: pointer;
    }
  }
`
const Text = styled.div`
  color: #fff;
  border: 3px solid #fff;
  display: inline-block;
  font-family: Rancho;
  font-size: 2rem;
  padding: 10px;
`
const Footer = styled.div`
  color: #a64023;
  font-family: Rancho;
  text-transform: uppercase;
  width: 100%;

  p {
    text-align: center;
    *:last-child {
      margin-bottom: 0;
    }
  }

  a {
    display: inline-block;
    margin: 0 10px;
    padding: 5px 5px;
  }

  img {
    height: 24px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 0;
  }
`
const NotLegal = styled.div`
  background-color: #fff;
  font-family: Rancho;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
  max-height: 100vh;
  width: 100vw;
  max-width: 100vw;

  h1 {
    font-family: Rancho;
    text-align: center;
  }
  h2 {
    font-family: Rancho;
    text-align: center;
  }
  .image-wrapper {
    max-width: 800px;
    width: 100%;
  }
`
const MenuWrapper = styled.div`
  width: 640px;
  max-width: 100%;
`
const FooterImage = styled.img`
  height: auto !important;
  width: 100%;
  max-width: 100%;
  margin-left: 0 !important;
  margin-right: 0 !important;
  margin-bottom: -10px !important;
`

const ComingSoon = () => {
  const [isLegal, setIsLegal] = useState(null)
  const [isFadingOut, setIsFadingOut] = useState(false)
  const [opacity, setOpacity] = useState(1)
  const [display, setDisplay] = useState("block")
  const [contentHeight, setContentHeight] = useState("100vh")
  const [contentOverflow, setContentOverflow] = useState("hidden")
  const data = useStaticQuery(graphql`
    query {
      backgroundImage: file(relativePath: { eq: "coming-soon.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      blurredBackgroundImage: file(
        relativePath: { eq: "coming-soon_blurred.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      notLegalImage: file(relativePath: { eq: "nuts.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      menuImage: file(relativePath: { eq: "cerveza_cito_beer_menu_800.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const handleYes = () => {
    setIsFadingOut(true)
  }
  const handleNo = () => {
    setIsLegal(false)
    setIsFadingOut(true)
  }
  useEffect(() => {
    if (isFadingOut && opacity > 0) {
      const fadeOut = window.setInterval(() => {
        setOpacity(prevOpacity => prevOpacity - 0.1)
      }, 20)
      return () => {
        setContentHeight("100%")
        setContentOverflow("scroll")
        window.clearInterval(fadeOut)
      }
    } else if (opacity < 0) {
      setDisplay("none")
    }
  }, [isFadingOut, opacity])
  return (
    <Container
      fluid={data.backgroundImage.childImageSharp.fluid}
      contentHeight={contentHeight}
      contentOverflow={contentOverflow}
    >
      <BlurWrapper
        style={{ opacity: opacity, display: display }}
        contentHeight={contentHeight}
      >
        <BlurLayer
          fluid={data.blurredBackgroundImage.childImageSharp.fluid}
          contentHeight={contentHeight}
        >
          <H2>
            <img className="logo" src={logo_svg} alt="Cerveza Cito" />
            ARE YOU OF LEGAL DRINKING AGE?
          </H2>
          <Answers>
            <button onClick={handleYes}>YES</button> or{" "}
            <button onClick={handleNo}>NO</button>
          </Answers>
        </BlurLayer>
      </BlurWrapper>
      {isLegal !== false ? (
        <Wrapper
          contentHeight={contentHeight}
          contentOverflow={contentOverflow}
        >
          <H1>
            <img className="logo" src={logo_svg} alt="Cerveza Cito" />
          </H1>

          <MenuWrapper>
            <Img fluid={data.menuImage.childImageSharp.fluid} alt="The Menu" />
          </MenuWrapper>

          <Footer>
            <p>309 W 4th St. Santa Ana, CA 92701</p>
            <p>
              <a
                href="https://www.facebook.com/Cervezacito-104412328030927/"
                target="_blank"
                rel="noopener"
              >
                <img src={facebook} alt="Facebook logo" />
              </a>
              <a
                href="https://www.instagram.com/cervezacito/"
                target="_blank"
                rel="noopener"
              >
                <img src={instagram} alt="Instagram logo" />
              </a>
              <a href="https://twitter.com/cervezacito">
                <img src={twitter} alt="Twitter logo" />
              </a>
            </p>
            <FooterImage src={footer_png} alt="Cerveza Cito" />
          </Footer>
        </Wrapper>
      ) : (
        <NotLegal>
          <h1>NUTS!</h1>
          <h2>You must be of legal drinking age to view this site</h2>
          <div className="image-wrapper">
            <Img
              fluid={data.notLegalImage.childImageSharp.fluid}
              alt="Peanuts"
            />
          </div>
        </NotLegal>
      )}
    </Container>
  )
}

export default ComingSoon
