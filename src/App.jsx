import Routes from "./components/routes/Routes";
import React, { useContext } from "react";
import "./style/dark.scss"
import { DarkModeContext } from "./context/darkModeContext";


function App() {
  const { darkMode } = useContext(DarkModeContext)

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Routes />
    </div>
  );
}

export default App;

