import { Global, css } from "@emotion/react";
import styled from "@emotion/styled";
import { BookProvider } from "../context/BookContext";

const GlobalCSS = css`
  @import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600&display=swap");

  body {
    padding: 0;
    margin: 0;
    font-family: "Nunito", sans-serif;
  }

  a {
    text-decoration: none;
    color: black;
  }

  .set-width {
    max-width: 900px;
    width: calc(100vw - 2rem);
  }

  p {
    margin: 0;
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <BookProvider>
      <Global styles={GlobalCSS} />
      <Component {...pageProps} />
    </BookProvider>
  );
}

export default MyApp;
