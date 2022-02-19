import { createGlobalStyle } from "styled-components"
import { minDesktop, minDesktopL, minTablet } from "./breakpoints"

export const GlobalStyles = createGlobalStyle`
  /*
	1. Use a more-intuitive box-sizing model.
*/
  *, *::before, *::after {
    box-sizing: border-box;
  }
  /*
		2. Remove default margin
	*/
  * {
    margin: 0;
  }
  /*
		3. Allow percentage-based heights in the application
	*/
  html, body {
    height: 100%;
  }
  /*
		Typographic tweaks!
		4. Add accessible line-height
		5. Improve text rendering
	*/
  body {
    line-height: 1.5;
  }
  /*
		6. Improve media defaults
	*/
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  /*
		7. Remove built-in form typography styles
	*/
  input, button, textarea, select {
    font: inherit;
  }
  /*
		8. Avoid text overflows
	*/
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
	  font-weight: normal;
  }
  /*
		9. Create a root stacking context
	*/
  #root, #__next {
    isolation: isolate;
  }
	
  html {
    font-size: 62.5%; /* Allows to use rem as multiples of 10 (62.5% of the base size of 16px = 1rem.) */
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    font-family: sans-serif;
	  font-size: 1.8rem;
    line-height: 2.4rem;
	  color: #242424;
		background: #F3F3F3;
    
	  
    // @media (min-width: ${minDesktop}px) {
	  // 	background: #F3F3F3;  
    // }
  }

  h1 {
    font-size: 16rem;
    line-height: 15rem;
    letter-spacing: -0.01rem;
  }
  
  h2 {
    font-size: 5.4rem;
    line-height: 5.8rem;
    @media (min-width: ${minTablet}px) {
      font-size: 9rem;
      line-height: 9.2rem;
    }
    @media (min-width: ${minDesktopL}px) {
      font-size: 11rem;
      line-height: 11rem;
    }
    
    letter-spacing: -0.01rem;
  }

  a {
    color: currentColor;
    text-decoration: none;
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    outline: none;
  }

  ol,
  ul {
    list-style: none;
    padding: 0;
  }

  p {
    margin-bottom: 2rem;
  }

  svg {
    fill: currentColor;
    height: 100%;
  }

  
`
