import { Stack } from "@mui/material";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/AboutMe/AboutMe";

function App() {
  return (
    <Stack>
      <NavBar />
      <Hero />
      <AboutMe />
    </Stack>
  );
}

export default App;
