import React from "react"
import styled from "styled-components"
import facebook from "../images/facebook.png"
import instagram from "../images/instagram.png"
import twitter from "../images/twitter.png"
import footer_png from "../images/footer.png"

const Wrapper = styled.footer`
  color: #a64023;
  font-family: myriad-pro, sans-serif;
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
const FooterImage = styled.img`
  height: auto !important;
  width: 100%;
  max-width: 100%;
  margin-left: 0 !important;
  margin-right: 0 !important;
  margin-bottom: -10px !important;
`
const Footer = () => {
  return (
    <Wrapper>
      <p>309 W 4th St. Santa Ana, CA 92701</p>
      <p>
        <a
          href="https://www.facebook.com/Cervezacito-104412328030927/"
          target="_blank"
          rel="noopener"
        >
          <img src={facebook} alt="Facebook logo" />
        </a>
        <a
          href="https://www.instagram.com/cervezacito/"
          target="_blank"
          rel="noopener"
        >
          <img src={instagram} alt="Instagram logo" />
        </a>
        <a href="https://twitter.com/cervezacito">
          <img src={twitter} alt="Twitter logo" />
        </a>
      </p>
      <FooterImage src={footer_png} alt="Cerveza Cito" />
    </Wrapper>
  )
}

export default Footer
