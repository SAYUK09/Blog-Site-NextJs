import React from "react";
import { useTheme } from "../themeContext";

const ToggleButton = () => {
  const { darkTheme, setDarkTheme } = useTheme();

  return (
    <div>
      <button
        onClick={() => {
          setDarkTheme(!darkTheme);
        }}
      >
        DARK
      </button>
    </div>
  );
};

export default ToggleButton;
