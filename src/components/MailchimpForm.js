import React from "react"
import MailchimpSubscribe from "react-mailchimp-subscribe"

import Input from "./Input"
import SelectCountry from "./SelectCountry"
import styled from "styled-components"
import { minDesktopL, minTablet } from "../styles/breakpoints"

const Label = styled.label`
  text-transform: uppercase;
  font-size: 1.4rem;
  line-height: 1.8rem;
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

  &:disabled {
    background: #cecece;
  }
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

const Form = ({ status, message, onValidated }) => {
  const [form, setForm] = React.useState({
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    country: "🇳🇱	Netherlands",
  })
  const [isChecked, setChecked] = React.useState(false)

  const handleInputChange = event => {
    const { name, value } = event.target

    setForm(form => ({
      ...form,
      [name]: value,
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    // email &&
    //   firstName &&
    //   lastName &&
    //   email.indexOf("@") > -1 &&

    onValidated({
      MERGE0: form.email,
      MERGE1: form.firstName,
      MERGE2: form.lastName,
      MERGE4: form.phoneNumber,
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      {status === "sending" && <div>sending...</div>}
      {status === "error" && (
        <div dangerouslySetInnerHTML={{ __html: message }} />
      )}
      {status === "success" && (
        <div dangerouslySetInnerHTML={{ __html: message }} />
      )}

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
          label="Email *"
          id="email"
          required
          type="email"
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
          <SelectCountry
            placeholder="Please select"
            value={form.country}
            onChange={handleInputChange}
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
      <SendButton
        type="submit"
        disabled={status === "sending" || status === "loading" || !isChecked}
      >
        Send
      </SendButton>
    </form>
  )
}

const MailchimpForm = () => {
  return (
    <MailchimpSubscribe
      url={process.env.GATSBY_MAILCHIMP_SUBSCRIBE_URL}
      render={({ subscribe, status, message }) => (
        <Form
          status={status}
          message={message}
          onValidated={formData => subscribe(formData)}
        />
      )}
    />
  )
}

export default MailchimpForm
