import "./App.css";
import Aos from "aos";
import Text from "./Text";
import HomePage from "./pages/homePage";
import ProjectPage from "./pages/projectPage";
import Footer from "./pages/footer";
import AboutMe from "./pages/aboutMePage";
import {
  Box,
  Button,
  darkMode,
  DarkModeButton,
  lightMode,
} from "./components/Styles";
import { useState } from "react";
import { activeTxt } from "./components/Context";
import { ThemeProvider } from "styled-components";
import { useEffect } from "react";
import ContactPage from "./pages/contactPage";
// import SkillPage from "./pages/skillPage";

function App() {
  const [text, setText] = useState(Text.English);
  useEffect(() => {
    if (navigator.language === "no") {
      setText(Text.Norwegian);
    }
    if (navigator.language === "nb") {
      setText(Text.Norwegian);
    }
    if (navigator.language === "nn") {
      setText(Text.Norwegian);
    }
  }, []);
  const [active, setActive] = useState(false);
  const menuToggle = () => {
    setActive(!active);
    setText(active ? Text.Norwegian : Text.English);
  };
  const [theme, setTheme] = useState();
  useEffect(() => {
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? setTheme("dark")
      : setTheme("light");
  }, []);
  useEffect(() => {
    Aos.refresh();
  }, [theme]);
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightMode : darkMode}>
      <activeTxt.Provider value={{ text, setText }}>
        <Box>
          <Button onClick={menuToggle}>{text.Button.Text}</Button>
          <DarkModeButton onClick={themeToggler}></DarkModeButton>
          <HomePage />
          {/* <SkillPage /> */}
          <AboutMe />
          <ProjectPage />
          <ContactPage />
          <Footer />
        </Box>
      </activeTxt.Provider>
    </ThemeProvider>
  );
}

export default App;
