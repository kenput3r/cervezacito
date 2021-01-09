import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import MenuItem from "../components/MenuItem"

const Wrapper = styled.div`
  width: 640px;
  max-width: 100%;
  padding: 10px 5px;
`
const H2 = styled.h2`
  font-family: myriad-pro, sans-serif;
  text-align: center;
`
const Menu = () => {
  const data = useStaticQuery(graphql`
    query MenuQuery {
      allMenuItemsJson {
        edges {
          node {
            alt
            description
            id
            image {
              childImageSharp {
                fluid(maxWidth: 250) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            name
            prices
            type
          }
        }
      }
    }
  `)
  return (
    <Wrapper>
      <H2>BEER MENU</H2>
      {data.allMenuItemsJson.edges.map(({ node }, index) => (
        <MenuItem
          key={node.id}
          align_left={++index % 2 === 0 ? true : false}
          fluid={node.image.childImageSharp.fluid}
          alt={node.alt}
          name={node.name}
          type={node.type}
          description={node.description}
          prices={node.prices}
        />
      ))}
    </Wrapper>
  )
}

export default Menu
