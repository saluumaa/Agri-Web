import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --color-primary: #2C5F2D;
    --color-secondary: #97BC62;
    --color-accent: #DAD7CD;
    --color-text: #333333;
    --color-background: #FFFFFF;
    
    --font-heading: 'Merriweather', serif;
    --font-body: 'Open Sans', sans-serif;
    
    --transition-standard: 0.3s ease;
    --border-radius: 8px;
    --shadow-standard: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: var(--font-body);
    color: var(--color-text);
    background: var(--color-background);
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading);
    font-weight: 700;
    line-height: 1.2;
  }

  a {
    color: var(--color-primary);
    text-decoration: none;
    transition: var(--transition-standard);

    &:hover {
      color: var(--color-secondary);
    }
  }

  button {
    cursor: pointer;
    font-family: var(--font-body);
    transition: var(--transition-standard);
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;