import React, { useContext, useState } from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import VerifyAge from "../components/VerifyAge"
import UntappdMenu from "../components/untappd-menu"
import Contact from "../components/contact"
import PrivateEvents from "../components/private-events"
import NotLegal from "../components/NotLegal"
import Footer from "../components/footer"
import logo_svg from "../images/logo_tan.svg"
import { SiteContext } from "../context"

const Page = () => {
  const [contentHeight, setContentHeight] = useState("100vh")
  const [contentOverflow, setContentOverflow] = useState("hidden")
  const { isLegal, setIsLegal, activeComponent, setActiveComponent } = useContext(SiteContext)

  const changeView = (e, component) => {
    e.preventDefault()
    setActiveComponent(component)
  }
  return (
    <Layout>
      <SEO title="Cerveza Cito Brewery" />
      <Container
        contentHeight={contentHeight}
        contentOverflow={contentOverflow}
        className={activeComponent === "contact" ? `fill` : ``}
      >
        <VerifyAge
          contentHeight={contentHeight}
          setIsLegal={setIsLegal}
          setContentHeight={setContentHeight}
          setContentOverflow={setContentOverflow}
        />
        {isLegal && (
          <Wrapper
            contentHeight={contentHeight}
            contentOverflow={contentOverflow}
            itemScope
            itemType="http://schema.org/Menu"
            className="wrapper"
          >
            <Row>
              <div className="flex spacer"></div>
              <div className="flex">
                <H1>
                  <img
                    itemProp="image"
                    className="logo"
                    src={logo_svg}
                    alt="Cerveza Cito"
                  />
                </H1>
              </div>
              <div className="flex shop-link">
                <a
                  href="/#menu"
                  role="button"
                  className={activeComponent === "menu" ? `active` : ``}
                  onClick={e => changeView(e, "menu")}
                >
                  MENU
                </a>
                <a
                  href="/#contact"
                  role="button"
                  className={activeComponent === "contact" ? `active` : ``}
                  onClick={e => changeView(e, "contact")}
                >
                  CONTACT
                </a>
                <a
                  href="/#events"
                  role="button"
                  className={activeComponent === "private events" ? `active` : ``}
                  onClick={e => changeView(e, "private events")}
                >
                  PRIVATE EVENTS
                </a>
                <a
                  href="https://www.suavecito.com/collections/cerveza-cito"
                  target="_blank"
                  rel="noreferrer"
                >
                  SHOP
                </a>
              </div>
            </Row>
            {activeComponent === "menu" && <UntappdMenu />}
            {activeComponent === "contact" && <Contact />}
            {activeComponent === "private events" && <PrivateEvents />}
            <Footer />
          </Wrapper>
        )}
        {!isLegal && (
          <NotLegal />
        )}
      </Container>
    </Layout>
  )
}

export default Page

const Container = styled.div`
  background-color: #f3e9e0;
  height: ${props => props.contentHeight};
  max-height: ${props => props.contentHeight};
  width: 100vw;
  max-width: 100vw;
  overflow: ${props => props.contentOverflow};
  &.fill {
    min-height: 100vh;
    .wrapper {
      min-height: 100vh;
    }
  }
`
const Row = styled.div`
  background-color: #a64023;
  display: flex;
  flex-direction: row;
  width: 100%;

  .flex {
    display: flex;
    flex: 1;
  }
  .shop-link {
    justify-content: flex-end;
    align-items: flex-end;
    font-family: myriad-pro, sans-serif;
    font-weight: bold;
    a {
      color: #fff;
      text-decoration: none;
      padding: 10px;
      &.active {
        text-decoration: underline;
      }
    }
  }
  @media (max-width: 1279px) {
    flex-wrap: wrap;
    .flex {
      flex: none;
      width: 100%;
    }
    .spacer {
      display: none;
    }
    .shop-link {
      justify-content: center;
    }
  }
`
const H1 = styled.h1`
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