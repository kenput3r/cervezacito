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
      theoHazyImage: file(
        relativePath: { eq: "icons/theo_hazy_orangeblossom.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      wasshopImage: file(
        relativePath: { eq: "icons/wasshop_rockers_hops.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      holyNotMoleImage: file(
        relativePath: { eq: "icons/holy_not_mole_cinnamon.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      flightImage: file(relativePath: { eq: "icons/cerveza_cito_logo.png" }) {
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
      <H2>BEER MENU</H2>
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
      <MenuItem
        align_left={true}
        fluid={data.theoHazyImage.childImageSharp.fluid}
        alt="Orangeblossom"
        name="Theo Hazy IPA"
        type="Hazy IPA...7.2%"
        description="An unfiltered Hazy IPA brewed with El Dorado, Mosaic and Amarillo hops."
        prices="20oz...$7 | 5oz...$2 | 32oz Crowler (To-Go)...$14"
      />
      <MenuItem
        align_left={false}
        fluid={data.wasshopImage.childImageSharp.fluid}
        alt="Hops"
        name="Wasshop Rockers"
        type="Double IPA...8.5%"
        description="West Coast DIPA brewed with Huell Melon and Southern Cross hops."
        prices="16oz...$7 | 5oz...$3 | 32oz Crowler (To-Go)...$16"
      />
      <MenuItem
        align_left={true}
        fluid={data.holyNotMoleImage.childImageSharp.fluid}
        alt="Cinnamon"
        name="Holy Not Mole"
        type="Ibarra Mexican Chocolate Stout...8.8%"
        description="Brewed with cinnamon, allspice and Ibarra Mexican Chocolate for a smooth, rich taste."
        prices="16oz...$7 | 5oz...$3 | 32oz Crowler (To-Go)...$16"
      />
      <MenuItem
        align_left={false}
        fluid={data.flightImage.childImageSharp.fluid}
        alt="Cerveza Cito"
        name="Flight"
        type="Four Tasters"
        description="Get a taste of Cerveza Cito. Each flight includes four 5 oz pours of your choice."
        prices="4 x 5oz...$8"
      />
    </Wrapper>
  )
}

export default Menu
