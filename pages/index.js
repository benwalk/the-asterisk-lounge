import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import Theme from "../src/Theme";
import Main from "../src/pages/Main";

export default function App(props) {
  return (
    <ThemeProvider theme={Theme}>
      <Main />
    </ThemeProvider>
  );
}
