import DarkModeIcon from "@mui/icons-material/DarkMode";
import "./header.css";
import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import SunnyIcon from '@mui/icons-material/Sunny';
export default function Header() {
  const [showmodel, setShowModel] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('currentMode') ?? "dark");

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);
  return (
    <header>
      <button
        className="menu"
        onClick={() => {
          setShowModel(!showmodel);
        }}
      >
        <MenuIcon />
      </button>
      <div></div>
      <nav className="header">
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Articles</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Speaking</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <button
        onClick={() => {
          const newTheme = theme === "light" ? "dark" : "light";
          localStorage.setItem("currentMode", newTheme);
          setTheme(newTheme);
        }}
        className="dark-mood"
      >
        {theme==="light"?<SunnyIcon/>:<DarkModeIcon />}
      </button>

      {showmodel && (
        <div>
          <nav className="fixed">
            <ul className="model">
              <li className="li-close-menu">
                <button
                  onClick={() => {
                    setShowModel(!showmodel);
                  }}
                  className="close-menu"
                >
                  <CloseIcon />
                </button>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Articles</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Speaking</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="fixed"></div>
        </div>
      )}
    </header>
  );
}
