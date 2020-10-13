import React, { useContext, useState } from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import VerifyAge from "../components/VerifyAge"
import Menu from "../components/menu"
import NotLegal from "../components/NotLegal"
import Footer from "../components/footer"
import logo_svg from "../images/logo_tan.svg"
import { SiteContext } from "../context"

const Container = styled.div`
  background-color: #f3e9e0;
  height: ${props => props.contentHeight};
  max-height: ${props => props.contentHeight};
  width: 100vw;
  max-width: 100vw;
  overflow: ${props => props.contentOverflow};
`
const H1 = styled.h1`
  background-color: #a64023;
  color: #fff;
  font-family: myriad-pro, sans-serif;
  margin-bottom: 0;
  padding: 10px 10px 5px 10px;
  text-align: center;
  width: 100%;
  .logo {
    margin-bottom: 0;
    max-width: 100px;
    width: 200px;
    @media (max-width: 676px) {
      max-width: 150px;
    }
  }
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: ${props => props.contentHeight};
  max-height: ${props => props.contentHeight};
  width: 100vw;
  max-width: 100vw;
  overflow: ${props => props.contentOverflow};
`
const Page = () => {
  const [contentHeight, setContentHeight] = useState("100vh")
  const [contentOverflow, setContentOverflow] = useState("hidden")
  const { isLegal, setIsLegal } = useContext(SiteContext)
  return (
    <Layout>
      <SEO title="Cerveza Cito Brewery" />
      <Container
        contentHeight={contentHeight}
        contentOverflow={contentOverflow}
      >
        <VerifyAge
          contentHeight={contentHeight}
          setIsLegal={setIsLegal}
          setContentHeight={setContentHeight}
          setContentOverflow={setContentOverflow}
        />
        {isLegal !== false ? (
          <Wrapper
            contentHeight={contentHeight}
            contentOverflow={contentOverflow}
          >
            <H1>
              <img className="logo" src={logo_svg} alt="Cerveza Cito" />
            </H1>
            <Menu />
            <Footer />
          </Wrapper>
        ) : (
          <NotLegal />
        )}
      </Container>
    </Layout>
  )
}

export default Page
