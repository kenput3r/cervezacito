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
      fantasmaImage: file(
        relativePath: { eq: "icons/fantasma_ghost_chili.png" }
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
      slammerImage: file(relativePath: { eq: "icons/slammer_guava.png" }) {
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
      flightImage: file(
        relativePath: { eq: "icons/cerveza_cito_logo_padded_2.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pricklyImage: file(relativePath: { eq: "icons/prickly.png" }) {
        childImageSharp {
          fluid(maxWidth: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hazyImage: file(relativePath: { eq: "icons/haze_ventura_orange.png" }) {
        childImageSharp {
          fluid(maxWidth: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      guavaImage: file(relativePath: { eq: "icons/guava.png" }) {
        childImageSharp {
          fluid(maxWidth: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pogImage: file(relativePath: { eq: "icons/POG.png" }) {
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
        fluid={data.guavaImage.childImageSharp.fluid}
        alt="Guava"
        name="Firme Lager With Guava"
        type="Mexican Lager...5.3%"
        description="Our popular Firme Lager infused with Guava for a touch of pink sweetness."
        prices="16oz...$7 | 5oz...$2 | 32oz Crowler (To-Go)...$14"
      />
      <MenuItem
        align_left={false}
        fluid={data.pricklyImage.childImageSharp.fluid}
        alt="Prickly Pair"
        name="La Pearrona"
        type="American Wheat Beer...5.5%"
        description="Crisp wheat beer with a slight taste of prickly pear fruit."
        prices="16oz...$7 | 5oz...$2 | 32oz Crowler (To-Go)...$14"
      />
      <MenuItem
        align_left={true}
        fluid={data.lagerImage.childImageSharp.fluid}
        alt="Barley"
        name="Firme Lager"
        type="Mexican Lager...5.7%"
        description="A light, refreshing Santa Ana style Mexican Lager."
        prices="16oz...$7 | 5oz...$2 | 32oz Crowler (To-Go)...$14"
      />
      <MenuItem
        align_left={false}
        fluid={data.lagerLimeImage.childImageSharp.fluid}
        alt="Lime"
        name="Firme Lager W/ Sea Salt & Lime"
        type="Mexican Lager...5.7%"
        description="Our Santa Ana style Mexican Lager with a touch of lime and sea salt."
        prices="16oz...$7 | 5oz...$2 | 32oz Crowler (To-Go)...$14"
      />
      <MenuItem
        align_left={true}
        fluid={data.pinaImage.childImageSharp.fluid}
        alt="Pineapple"
        name="Piña Rubia"
        type="Pineapple Blonde...5.8%"
        description="Bursting with pineapple aroma and flavor this is the perfect summer beer!"
        prices="16oz...$7 | 5oz...$2 | 32oz Crowler (To-Go)...$14"
      />
      <MenuItem
        align_left={false}
        fluid={data.fantasmaImage.childImageSharp.fluid}
        alt="Ghost Chili"
        name="Fantasma Pale Ale"
        type="Ghost Chili Pale Ale...6%"
        description="Our Cito Pale Ale with strong, smokey flavor and Ghost Chili spice to heat things up."
        prices="16oz...$7 | 5oz...$2 | 32oz Crowler (To-Go)...$14"
      />
      <MenuItem
        align_left={true}
        fluid={data.paleAleImage.childImageSharp.fluid}
        alt="Hops"
        name="Pale Ale"
        type="Pale Ale...6%"
        description="This perfect classic pale ale is brewed with Cascade and Laurel hops."
        prices="16oz...$7 | 5oz...$2 | 32oz Crowler (To-Go)...$14"
      />
      <MenuItem
        align_left={false}
        fluid={data.hazyImage.childImageSharp.fluid}
        alt="Orange"
        name="Haze Ventura"
        type="Hazy IPS...6.6%"
        description="Our 100% Citra hopped Hazy IPA."
        prices="16oz...$7 | 5oz...$2 | 32oz Crowler (To-Go)...$14"
      />
      <MenuItem
        align_left={true}
        fluid={data.pogImage.childImageSharp.fluid}
        alt="Guava"
        name="The Slammer"
        type="POG Seltzer...7%"
        description="Our POG (Pineapple, Orange, Guava) Seltzer is deliciously heavy on the citrus aroma but has a dry finish with a touch of sweetness."
        prices="16oz...$7 | 5oz...$2 | 32oz Crowler (To-Go)...$14"
      />
      <MenuItem
        align_left={false}
        fluid={data.theoHazyImage.childImageSharp.fluid}
        alt="Orangeblossom"
        name="Theo Hazy IPA"
        type="Hazy IPA...7.2%"
        description="An unfiltered Hazy IPA brewed with El Dorado, Mosaic and Amarillo hops."
        prices="16oz...$7 | 5oz...$2 | 32oz Crowler (To-Go)...$14"
      />
      <MenuItem
        align_left={true}
        fluid={data.wasshopImage.childImageSharp.fluid}
        alt="Hops"
        name="Wasshop Rockers"
        type="Double IPA...8.5%"
        description="West Coast DIPA brewed with Huell Melon and Southern Cross hops."
        prices="16oz...$7 | 5oz...$3 | 32oz Crowler (To-Go)...$16"
      />
      <MenuItem
        align_left={false}
        fluid={data.holyNotMoleImage.childImageSharp.fluid}
        alt="Cinnamon"
        name="Holy Not Mole"
        type="Ibarra Mexican Chocolate Stout...8.8%"
        description="Brewed with cinnamon, allspice and Ibarra Mexican Chocolate for a smooth, rich taste."
        prices="16oz...$7 | 5oz...$3 | 32oz Crowler (To-Go)...$16"
      />
      <MenuItem
        align_left={true}
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
