import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"

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
        <Text>COMING SOON</Text>
      </Wrapper>
    </Container>
  )
}

export default ComingSoon