import { useSelector } from "react-redux";

import React from "react";

export const ToggleTheme = () => {
  const theme = useSelector((state) => state.theme);
  return (
    <div className="toggle-theme">
      <button className="btn">{theme ? "Dark" : "Light"}</button>
    </div>
  );
};
