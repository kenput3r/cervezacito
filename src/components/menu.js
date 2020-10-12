import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import MenuItem from "../components/MenuItem"

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
      lagerImage: file(relativePath: { eq: "icons/firme_lager_barley.png" }) {
        childImageSharp {
          fluid(maxWidth: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lagerLimeImage: file(relativePath: { eq: "icons/firme_lager_lime.png" }) {
        childImageSharp {
          fluid(maxWidth: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pinaImage: file(relativePath: { eq: "icons/pina_rubia_pineapple.png" }) {
        childImageSharp {
          fluid(maxWidth: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      habaneroImage: file(
        relativePath: { eq: "icons/pina_rubia_habanero.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      paleAleImage: file(relativePath: { eq: "icons/pale_ale_hops.png" }) {
        childImageSharp {
          fluid(maxWidth: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sandiaImage: file(
        relativePath: { eq: "icons/sandia_seltzer_watermelon.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Wrapper>
      {/* <Img fluid={data.menuImage.childImageSharp.fluid} alt="The Menu" /> */}
      <MenuItem
        align_left={true}
        fluid={data.lagerImage.childImageSharp.fluid}
        alt="Barley"
        name="Firme Lager"
        type="Mexican Lager...5.7%"
        description="A light, refreshing Santa Ana style Mexican Lager."
        prices="20oz...$7 | 5oz...$2 | 32oz Crowler (To-Go)...$14"
      />
      <MenuItem
        align_left={false}
        fluid={data.lagerLimeImage.childImageSharp.fluid}
        alt="Lime"
        name="Firme Lager W/ Sea Salt & Lime"
        type="Mexican Lager...5.7%"
        description="Our Santa Ana style Mexican Lager with a touch of lime and sea salt."
        prices="20oz...$7 | 5oz...$2 | 32oz Crowler (To-Go)...$14"
      />
      <MenuItem
        align_left={true}
        fluid={data.pinaImage.childImageSharp.fluid}
        alt="Pineapple"
        name="Piña Rubia"
        type="Pineapple Blonde...5.8%"
        description="Bursting with pineapple aroma and flavor this is the perfect summer beer!"
        prices="20oz...$7 | 5oz...$2 | 32oz Crowler (To-Go)...$14"
      />
      <MenuItem
        align_left={false}
        fluid={data.habaneroImage.childImageSharp.fluid}
        alt="Habanero"
        name="Habanero Piña Rubia"
        type="Habanero Pineapple Blonde...5.8%"
        description='Bursting with pineapple aroma and flavor with a kick of habanero! And if you ask, "si quema cuh."'
        prices="20oz...$7 | 5oz...$2 | 32oz Crowler (To-Go)...$14"
      />
      <MenuItem
        align_left={true}
        fluid={data.paleAleImage.childImageSharp.fluid}
        alt="Hops"
        name="Pale Ale"
        type="Pale Ale...6%"
        description="This perfect classic pale ale is brewed with Cascade and Laurel hops."
        prices="20oz...$7 | 5oz...$2 | 32oz Crowler (To-Go)...$14"
      />
      <MenuItem
        align_left={false}
        fluid={data.sandiaImage.childImageSharp.fluid}
        alt="Watermelon"
        name="Sandia Seltzer"
        type="Watermelon Seltzer...6.5%"
        description="Crisp, dry watermelon Seltzer with strong watermelon smell and light watermelon flavor."
        prices="20oz...$7 | 5oz...$2 | 32oz Crowler (To-Go)...$14"
      />
    </Wrapper>
  )
}

export default Menu
