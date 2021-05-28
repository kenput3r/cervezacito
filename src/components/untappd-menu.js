import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import MenuItem from "./MenuItem"

const UntappdMenu = () => {
  const data = useStaticQuery(graphql`
    query BeerMenuQuery {
      allBeerMenuItem {
        edges {
          node {
            id
            customRemoteImage {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            custom_abv
            custom_name
            description
            original_abv
            originalRemoteImage {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            original_brewery
            original_description
            original_name
            original_style
            position
          }
        }
      }
    }
  `)

  const prices = "16oz...$7 | 5oz...$2 | 32oz Crowler (To-Go)...$14"
  const highAbvPrices = "12oz...$7 | 5oz...$2 | 32oz Crowler (To-Go)...$16"
  const guestTapPrices = "16oz...$8 | 5oz...$2 | 32oz Crowler (To-Go)...$16"

  const sortedMenu = data.allBeerMenuItem.edges.sort((a, b) => a.node.position - b.node.position)

  return (
    <Wrapper>
      <H2>BEER MENU</H2>
      {sortedMenu.map(({ node }, index) => (
        <MenuItem
          key={node.id}
          align_left={++index % 2 === 0 ? true : false}
          fluid={node.customRemoteImage ? node.customRemoteImage.childImageSharp.fluid : node.originalRemoteImage.childImageSharp.fluuid}
          alt={node.custom_name ? node.custom_name : node.original_name}
          name={node.custom_name ? node.custom_name : node.original_name}
          type={node.custom_style ? node.custom_style : node.original_style}
          description={node.description ? node.custom_description : node.original_description}
          prices={node.custom_abv && parseFloat(node.custom_abv) > 8 ? highAbvPrices : node.original_brewery !== "Cerveza Cito" ? guestTapPrices : prices}
        />
      ))}
    </Wrapper>
  )

}

export default UntappdMenu

const Wrapper = styled.div`
  width: 640px;
  max-width: 100%;
  padding: 10px 5px;
  .sold-out {
    opacity: 0.3;
  }
`
const H2 = styled.h2`
  font-family: myriad-pro, sans-serif;
  text-align: center;
`