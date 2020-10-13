import React, { useContext, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import logo_svg from "../images/logo_tan.svg"
import { SiteContext } from "../context"

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
  @media (max-width: 420px) {
    justify-content: flex-start;
    padding-top: 10vh;
  }
`
const H2 = styled.h2`
  color: #fff;
  font-family: myriad-pro, sans-serif;
  text-align: center;
  .logo {
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 50vw;
  }
`
const Answers = styled.div`
  color: #fff;
  font-family: myriad-pro, sans-serif;
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
const VerifyAge = props => {
  const {
    opacity,
    setOpacity,
    display,
    setDisplay,
    isFadingOut,
    setIsFadingOut,
  } = useContext(SiteContext)
  const data = useStaticQuery(graphql`
    query {
      blurredBackgroundImage: file(
        relativePath: { eq: "coming-soon_blurred.jpg" }
      ) {
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
    props.setIsLegal(false)
    setIsFadingOut(true)
  }
  useEffect(() => {
    if (isFadingOut && opacity > 0) {
      const fadeOut = window.setInterval(() => {
        setOpacity(prevOpacity => prevOpacity - 0.1)
      }, 20)
      return () => {
        props.setContentHeight("100%")
        props.setContentOverflow("visible")
        window.clearInterval(fadeOut)
      }
    } else if (opacity < 0) {
      setDisplay("none")
    }
  }, [isFadingOut, opacity])
  return (
    <BlurWrapper
      style={{ opacity: opacity, display: display }}
      contentHeight={props.contentHeight}
    >
      <BlurLayer
        fluid={data.blurredBackgroundImage.childImageSharp.fluid}
        contentHeight={props.contentHeight}
      >
        <div>
          <H2>
            <img className="logo" src={logo_svg} alt="Cerveza Cito" />
            ARE YOU OF LEGAL DRINKING AGE?
          </H2>
          <Answers>
            <button onClick={handleYes}>YES</button> or{" "}
            <button onClick={handleNo}>NO</button>
          </Answers>
        </div>
      </BlurLayer>
    </BlurWrapper>
  )
}

export default VerifyAge
