import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import Theme from "../src/Theme";
import LoginPage from "../src/pages/Login";

export default function Login(props) {
  return (
    <ThemeProvider theme={Theme}>
      <LoginPage />
    </ThemeProvider>
  );
}
