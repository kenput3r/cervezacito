import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const Wrapper = styled.div`
  background-color: #fff;
  font-family: myriad-pro, sans-serif;
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
    font-family: myriad-pro, sans-serif;
    text-align: center;
  }
  h2 {
    font-family: myriad-pro, sans-serif;
    text-align: center;
  }
  .image-wrapper {
    max-width: 800px;
    width: 100%;
  }
`
const NotLegal = () => {
  const data = useStaticQuery(graphql`
    query {
      notLegalImage: file(relativePath: { eq: "nuts.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Wrapper>
      <h1>NUTS!</h1>
      <h2>You must be of legal drinking age to view this site</h2>
      <div className="image-wrapper">
        <Img fluid={data.notLegalImage.childImageSharp.fluid} alt="Peanuts" />
      </div>
    </Wrapper>
  )
}

export default NotLegal
