import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { RecoilRoot } from "recoil";
import { darkTheme } from "./theme";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container!);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={darkTheme}>
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>
);
