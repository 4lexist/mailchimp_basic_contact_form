import React from "react"
import styled from "styled-components"

import MailchimpForm from "../components/MailchimpForm"

import PropelLogo from "../assets/brandmark.svg"
import PropelLogoAndName from "../assets/logo_and_name.svg"
import Hamburger from "../assets/hamburger.svg"

import { GlobalStyles } from "../styles/global.styles"

import {
  minDesktop,
  minDesktopL,
  minTablet,
  useDesktopMediaQuery,
  useMobileMediaQuery,
} from "../styles/breakpoints"

const Header = styled.header`
  display: flex;
  width: 100%;

  padding: 0.8rem 2rem;
  @media (min-width: ${minTablet}px) {
    padding: 1.4rem 4rem;
  }
  @media (min-width: ${minDesktopL}px) {
    padding: 2.4rem 8rem;
  }
`

const LogoContainer = styled.div`
  @media (min-width: ${minDesktop}px) {
    max-width: 12rem;
  }
  max-width: 4.4rem;
`

const Nav = styled.nav`
  margin-left: auto;
  align-self: center;

  & > ul {
    display: inline-flex;
    & > li {
      align-self: center;
      margin-right: 3.2rem;
      &:last-child {
        margin-right: 0;
      }
    }
  }
`

// Not sure why height without this is 38px – would take time to inquire usually
const ButtonLi = styled.li`
  max-height: 3.2rem;
`

const Main = styled.main`
  padding: 0 2rem;
  padding-top: 3.2rem;
  @media (min-width: ${minTablet}px) {
    padding: 0 4rem;
    padding-top: 8rem;
  }
  @media (min-width: ${minDesktop}px) {
    display: flex;
    padding: 0;
    padding-top: 18rem;
    & > * {
      padding: 0 4rem;
      @media (min-width: ${minDesktopL}px) {
        padding: 0 8rem;
      }
      width: 50%;
    }
  }
`

const TitleContainer = styled.div`
  max-width: 52rem;
  @media (min-width: ${minDesktopL}px) {
    max-width: none;
  }

  & > h2 {
    margin-bottom: 3.2rem;
    @media (min-width: ${minDesktop}px) {
      margin-bottom: 9.6rem;
    }
  }

  & > p {
    margin-bottom: 6rem;
    @media (min-width: ${minDesktop}px) {
      margin-bottom: 0;
    }
  }
`

const Label = styled.label`
  text-transform: uppercase;
  font-size: 1.4rem;
  line-height: 1.8rem;
`

const SignUpText = styled.p`
  padding-left: 8rem;
  @media (min-width: ${minDesktopL}px) {
    padding-left: 14.8rem;
  }
`

const MB24 = styled.div`
  margin-bottom: 2.4rem;
`

const ContactPage = () => {
  const isDesktop = useDesktopMediaQuery()
  const isMobile = useMobileMediaQuery()

  return (
    <>
      <GlobalStyles />
      <Header>
        <LogoContainer>
          {isDesktop ? <PropelLogoAndName /> : <PropelLogo />}
        </LogoContainer>
        <Nav>
          {isDesktop ? (
            <ul>
              <li>
                <a href="#">Outboard motor</a>
              </li>
              <li>
                <a href="#">Inboard motor</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          ) : (
            <ul>
              {!isMobile && (
                <li>
                  <a href="#">Outboard motor</a>
                </li>
              )}
              <ButtonLi>
                <button>
                  <Hamburger />
                </button>
              </ButtonLi>
            </ul>
          )}
        </Nav>
      </Header>
      <Main>
        <TitleContainer>
          <MB24>
            <Label>Newsletter</Label>
          </MB24>

          <h2>Newsletter Signup</h2>

          <SignUpText>
            Curious about our new products? Sign up for our newsletter and we
            will make sure you have the latest news on our up and coming
            products.
          </SignUpText>
        </TitleContainer>
        <MailchimpForm />
      </Main>
    </>
  )
}

export default ContactPage
