import React from "react"
import styled from "styled-components"

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

const StyledInput = styled.input`
  background: #ffffff;
  border: 1px solid #cccccc;
  padding: 1.6rem;
  width: 100%;
`

const Input = ({ label, id, ...props }) => {
  return (
    <Container>
      <Label htmlFor={id}>[{label}]</Label>
      <StyledInput name={id} {...props} />
    </Container>
  )
}

export default Input
