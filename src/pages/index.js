import React, { useRef, useState } from "react"
import styled from "styled-components"

import Input from "../components/Input"

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
  useTabletMediaQuery,
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

const FlexInputContainer = styled.div`
  & > * {
    margin-bottom: 2.4rem;
  }
  @media (min-width: ${minTablet}px) {
    display: flex;
    & > * {
      margin-bottom: 0;
      margin-right: 2rem;
      &:last-child {
        margin-right: 0;
      }
    }
  }
`

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 80%;
  @media (min-width: ${minDesktopL}px) {
    max-width: 50%;
  }

  & > label {
    width: 100%;
  }
`

const Checkbox = styled.input`
  width: 32px;
  height: 32px;
  margin-right: 16px;
`

const SendButton = styled.button`
  background: #242424;
  border-radius: 500px;
  padding: 1.8rem 1.6rem;
  width: 28rem;
  color: #ffffff;
  text-transform: uppercase;
`

const MB96 = styled.div`
  margin-bottom: 9.6rem;
`

const MB55 = styled.div`
  margin-bottom: 5.5rem;
`

const MB40 = styled.div`
  margin-bottom: 4rem;
`

const MB24 = styled.div`
  margin-bottom: 2.4rem;
`

const ContactPage = () => {
  const isDesktop = useDesktopMediaQuery()
  const isMobile = useMobileMediaQuery()

  const [form, setForm] = React.useState({
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    country: "",
    message: "",
  })
  const [isChecked, setChecked] = React.useState(false)

  const handleInputChange = event => {
    const { name, value } = event.target

    setForm(form => ({
      ...form,
      [name]: value,
    }))
  }

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
        <form>
          <MB24>
            <FlexInputContainer>
              <Input
                label="First name"
                id="firstName"
                type="text"
                placeholder="Enter first name"
                value={form.firstName}
                onChange={handleInputChange}
                autoCapitalize="on"
                autoCorrect="off"
              />
              <Input
                label="Last name"
                id="lastName"
                type="text"
                placeholder="Enter last name"
                value={form.lastName}
                onChange={handleInputChange}
                autoCapitalize="on"
                autoCorrect="off"
              />
            </FlexInputContainer>
          </MB24>
          <MB24>
            <Input
              label="Email"
              id="email"
              type="text"
              placeholder="Enter email"
              value={form.email}
              onChange={handleInputChange}
              autoCapitalize="off"
              autoCorrect="off"
            />
          </MB24>
          <MB40>
            <FlexInputContainer>
              <Input
                label="Phone Number"
                id="phoneNumber"
                type="tel"
                value={form.phoneNumber}
                onChange={handleInputChange}
                autoCapitalize="off"
                autoCorrect="off"
              />
              <Input
                label="Country"
                id="country"
                type="text"
                value={form.country}
                onChange={handleInputChange}
                autoCapitalize="on"
                autoCorrect="off"
              />
            </FlexInputContainer>
          </MB40>
          <MB55>
            <CheckboxContainer>
              <Checkbox
                type="checkbox"
                id="checkbox"
                name="checkbox"
                checked={isChecked}
                onClick={() => setChecked(c => !c)}
              />
              <Label htmlFor="checkbox">
                Select this box if we can contact your email with updates
              </Label>
            </CheckboxContainer>
          </MB55>
          <SendButton type="submit">Send</SendButton>
        </form>
      </Main>
    </>
  )
}

export default ContactPage
