import { Stack } from "@mui/material";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <Stack>
      <NavBar />
      <Hero />
      <AboutMe />
      <Skills />
    </Stack>
  );
}

export default App;
