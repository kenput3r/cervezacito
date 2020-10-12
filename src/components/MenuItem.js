import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const Wrapper = styled.div`
  display: table;
  font-family: myriad-pro, sans-serif;
  text-align: ${props => (props.align_left ? "left" : "right")};
  margin-bottom: 20px;
  width: 100%;
`
const TextContainer = styled.div`
  display: table-cell;
  vertical-align: top;
`
const Name = styled.h2`
  margin-bottom: 0;
  text-transform: uppercase;
`
const Type = styled.div`
  text-transform: uppercase;
`
const Description = styled.div`
  font-style: italic;
`
const Prices = styled.div``
const ImageContainer = styled.div`
  display: table-cell;
  vertical-align: top;
  width: 20%;
`
const Image = styled(Img)``
const MenuItem = props => {
  return (
    <Wrapper align_left={props.align_left}>
      {!props.align_left && (
        <ImageContainer>
          <Image fluid={props.fluid} alt={props.alt} />
        </ImageContainer>
      )}
      <TextContainer>
        <Name>{props.name}</Name>
        <Type>{props.type}</Type>
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
