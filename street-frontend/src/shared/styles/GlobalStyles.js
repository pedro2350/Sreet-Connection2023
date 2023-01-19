import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
}

html, body, #root {
  height: 100vh;
  font-family: 'Roboto', sans-serif;
}

*, button, input {
  border: 0;
  outline: 0;
}

button {
  cursor: pointer;
}

ul {
  list-style: none;
}

`;
