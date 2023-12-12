import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Reset styles */
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Global styles */
  body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    color: #333;
  }

  header {
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  nav ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  nav ul li {
    margin-right: 10px;
  }

  nav ul li a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
  }

  footer {
    background-color: #333;
    color: #fff;
    padding: 20px;
    text-align: center;
  }

  h2 {
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 5px;
  }
`;

export default GlobalStyles;
