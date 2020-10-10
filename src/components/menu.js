import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const Wrapper = styled.div`
  width: 640px;
  max-width: 100%;
`
const Menu = () => {
  const data = useStaticQuery(graphql`
    query {
      menuImage: file(relativePath: { eq: "cerveza_cito_beer_menu_4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Wrapper>
      <Img fluid={data.menuImage.childImageSharp.fluid} alt="The Menu" />
    </Wrapper>
  )
}

export default Menu
