import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
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
  max-height: 100vh;
  width: 100vw;
  max-width: 100vw;
`
const Text = styled.div`
  color: #fff;
  border: 2px solid #fff;
  display: inline-block;
  font-size: 22px;
  padding: 10px;
`
const Footer = styled.div`
  color: #fff;
  width: 100%;

  p {
    text-align: center;
    *:last-child {
      margin-bottom: 1.45rem;
    }
  }

  img {
    height: 24px;
    margin-left: 10px;
    margin-right: 10px;
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
        <Text>COMING SOON</Text>
        <Text>COMING SOON</Text>
        <Footer>
          <p>
            309 W 4th St.
            Santa Ana, CA 92701
          </p>
          <p>
            <img src={facebook} alt="Facebook logo" />
            <img src={instagram} alt="Instagram logo" />
            <img src={twitter} alt="Twitter logo" />
          </p>
        </Footer>
      </Wrapper>
    </Container>
  )
}

export default ComingSoon