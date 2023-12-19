import { Stack } from "@mui/material";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <Stack>
      <NavBar />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
    </Stack>
  );
}

export default App;
