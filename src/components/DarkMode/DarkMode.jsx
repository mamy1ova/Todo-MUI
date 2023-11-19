import React from "react";
import { ReactComponent as Sun } from "./assets/Sun.svg";
import { ReactComponent as Moon } from "./assets/Moon.svg";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./DarkMode.css";

const DarkMode = () => {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };

  const selectedTheme = localStorage.getItem("selectedTheme");
  if (selectedTheme === "dark") {
    setDarkMode();
  }

  const toggleTheme = (e) => {
    if (e.target.checked) {
      setDarkMode();
    } else {
      setLightMode();
    }
  };

  const theme = createTheme({
    palette: {
      type: selectedTheme === "dark" ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="dark_mode">
        <input
          className="dark_mode_input"
          type="checkbox"
          id="darkmode-toggle"
          onChange={toggleTheme}
          defaultChecked={selectedTheme === "dark"}
        />
        <label className="dark_mode_label" htmlFor="darkmode-toggle">
          <Sun />
          <Moon />
        </label>
      </div>
    </ThemeProvider>
  );
};

export default DarkMode;

