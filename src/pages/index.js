import React, { useRef, useState } from "react"

const ContactPage = () => {
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
      <header>
        <div>LOGO propel</div>
        <nav>
          <ul>
            <li>Outboard motor</li>
            <li>Inboard motor</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
      <main>
        <div>
          <label>Newsletter</label>
          <h1>Newsletter Signup</h1>
          <p>
            Curious about our new products? Sign up for our newsletter and we
            will make sure you have the latest news on our up and coming
            products.
          </p>
        </div>
        <form>
          <label htmlFor="firstName">[First name]</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={form.firstName}
            onChange={handleInputChange}
            autoCapitalize="on"
            autoCorrect="off"
          />
          <label htmlFor="lastName">[Last name]</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={form.lastName}
            onChange={handleInputChange}
            autoCapitalize="on"
            autoCorrect="off"
          />
          <label htmlFor="lastName">[Email]</label>
          <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={handleInputChange}
            autoCapitalize="off"
            autoCorrect="off"
          />
          <label htmlFor="lastName">[Phone Number]</label>
          <input
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            value={form.phoneNumber}
            onChange={handleInputChange}
            autoCapitalize="off"
            autoCorrect="off"
          />
          <label htmlFor="lastName">[Country]</label>
          <input
            type="text"
            name="country"
            id="country"
            value={form.country}
            onChange={handleInputChange}
            autoCapitalize="on"
            autoCorrect="off"
          />
          <label htmlFor="checkbox">
            Select this box if we can contact your email with updates
          </label>
          <input
            type="checkbox"
            id="checkbox"
            name="checkbox"
            checked={isChecked}
            onClick={() => setChecked(c => !c)}
          />
          <button type="submit">Send</button>
        </form>
      </main>
    </>
  )
}

export default ContactPage
