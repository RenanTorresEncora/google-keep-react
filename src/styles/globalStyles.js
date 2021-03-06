import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
  --c-light-gray: rgba(60, 64, 67, 0.08);
  --c-gray: rgb(218, 220, 224);
  --c-off-white-1: #f1f3f4;
  --c-black: #000;
  --c-white: #fff;
  --c-note-pin: rgb(66, 133, 244);
  --tc-dark-gray: rgb(32, 33, 36);
  --tc-gray-1: rgb(128, 134, 139);
  --tc-gray-2: rgb(95, 99, 104);
  --ff-google: 'Google Sans', 'Roboto', sans-serif;
  --ff-roboto: 'Roboto', 'Arial', sans-serif;
}
* {
  margin: 0%;
  padding: 0%;
  box-sizing: border-box;
}
  html,
  body {
  height: 100%;
  font-family: var(--ff-roboto);
}

[data-color='red'] {
  background: #f28b82;
  border-color: #f28b82;
}
[data-color='orange'] {
  background: #fbbc04;
  border-color: #fbbc04;
}
[data-color='yellow'] {
  background: #fff475;
  border-color: #fff475;
}
[data-color='green'] {
  background: #ccff90;
  border-color: #ccff90;
}
[data-color='teal'] {
  background: #a7ffeb;
  border-color: #a7ffeb;
}
[data-color='blue'] {
  background: #cbf0f8;
  border-color: #cbf0f8;
}
[data-color='darkblue'] {
  background: #aecbfa;
  border-color: #aecbfa;
}
[data-color='purple'] {
  background: #d7aefb;
  border-color: #d7aefb;
}
[data-color='pink'] {
  background: #fdcfe8;
  border-color: #fdcfe8;
}
[data-color='brown'] {
  background: #e6c9a8;
  border-color: #e6c9a8;
}
[data-color='gray'] {
  background: #e8eaed;
  border-color: #e8eaed;
}
[data-color='default'] {
  background: #fff;
  border-color: #e0e0e0;
}
`;

export default GlobalStyle;
