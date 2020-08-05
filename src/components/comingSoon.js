import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import logo from "../images/icon.png"
import facebook from "../images/facebook.png"
import instagram from "../images/instagram.png"
import twitter from "../images/twitter.png"

const Container = styled(BackgroundImage)`
  height: 100vh;
  max-height: 100vh;
  width: 100vw;
  max-width: 100vw;
`
const Wrapper = styled.div`
  background-color: rgba(29, 31, 35, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  padding: 20px;
  max-height: 100vh;
  width: 100vw;
  max-width: 100vw;

  .logo {
    margin-bottom: 0;
    max-width: 200px;
    @media (max-width: 676px) {
      max-width: 150px;
    }
  }
`
const H1 = styled.h1`
  color: #fff;
  font-family: Rancho;
  margin-bottom: 0;
  text-align: center;
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
  color: #fff;
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

const ComingSoon = () => {
  const data = useStaticQuery(graphql`
    query {
      backgroundImage: file(relativePath: { eq: "coming-soon.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Container fluid={data.backgroundImage.childImageSharp.fluid}>
      <Wrapper>
        <div>
          <img className="logo" src={logo} alt="Cervezacito logo" />
          <H1>Cerveza Cito</H1>
        </div>
        <Text>COMING SOON</Text>
        <Footer>
          <p>
            309 W 4th St.
            Santa Ana, CA 92701
          </p>
          <p>
            <a href="https://www.facebook.com/Cervezacito-104412328030927/" target="_blank" rel="noopener">
              <img src={facebook} alt="Facebook logo" />
            </a>
            <a href="https://www.instagram.com/cervezacito/" target="_blank" rel="noopener">
              <img src={instagram} alt="Instagram logo" />
            </a> 
            <a href="https://twitter.com/cervezacito">
              <img src={twitter} alt="Twitter logo" />
            </a>
          </p>
        </Footer>
      </Wrapper>
    </Container>
  )
}

export default ComingSoon