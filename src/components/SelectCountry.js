import React from "react"
import styled from "styled-components"

import { COUNTRIES } from "../constants/countries.list"

const Container = styled.div`
  width: 100%;
`

const Label = styled.label`
  font-family: "NB International Pro", monospace, sans-serif;
  text-transform: uppercase;
  display: block;
  font-size: 1.4rem;
  line-height: 1.8rem;
  height: 3.2rem;
`

const StyledSelect = styled.select`
  background: #ffffff;
  border: 1px solid #cccccc;
  padding: 1.6rem;
  width: 100%;
`

const SelectCountry = ({ label = "Country", id = "country", ...props }) => {
  return (
    <Container>
      <Label htmlFor={id}>[{label}]</Label>
      <StyledSelect name={id} {...props}>
        {COUNTRIES.map(country => (
          <option value={country} key={country}>
            {country}
          </option>
        ))}
      </StyledSelect>
    </Container>
  )
}

export default SelectCountry
