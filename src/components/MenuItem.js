import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const Wrapper = styled.div`
  display: table;
  font-family: myriad-pro, sans-serif;
  text-align: ${props => (props.align_left ? "left" : "right")};
  margin-bottom: 30px;
  width: 100%;
`
const TextContainer = styled.div`
  display: table-cell;
  vertical-align: top;
`
const Name = styled.h2`
  margin-bottom: 0;
  text-transform: uppercase;
  @media (max-width: 375px) {
    font-size: 1rem;
    line-height: 1;
  }
`
const Type = styled.div`
  text-transform: uppercase;
  @media (max-width: 375px) {
    font-size: 0.75rem;
    line-height: 1;
  }
`
const Description = styled.div`
  font-style: italic;
  @media (max-width: 375px) {
    font-size: 0.75rem;
    line-height: 1;
  }
`
const Prices = styled.div`
  @media (max-width: 375px) {
    font-size: 0.75rem;
    line-height: 1;
  }
`
const ImageContainer = styled.div`
  display: table-cell;
  vertical-align: middle;
  width: 20%;
`
const Image = styled(Img)``
const MenuItem = props => {
  return (
    <Wrapper align_left={props.align_left} className={props.className}>
      {!props.align_left && (
        <ImageContainer>
          <Image fluid={props.fluid} alt={props.alt} />
        </ImageContainer>
      )}
      <TextContainer>
        <Name>{props.name}</Name>
        <Type>{props.type}...{props.abv}%</Type>
        <Description>{props.description}</Description>
        <Prices>{props.prices}</Prices>
      </TextContainer>
      {props.align_left && (
        <ImageContainer>
          <Image fluid={props.fluid} alt={props.alt} />
        </ImageContainer>
      )}
    </Wrapper>
  )
}

export default MenuItem
