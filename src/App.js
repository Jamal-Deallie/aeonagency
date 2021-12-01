import { GlobalStyles } from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Themes";
import {
  HomePage,
  AboutPage,
  ContactPage,
  TeamPage,
  FaqsPage} from "../src/pages";
import { Cursor, Footer } from "../src/components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="smooth-scroll">
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Cursor />
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
          <Routes>
            <Route path="about" element={<AboutPage />} />
          </Routes>
          <Routes>
            <Route path="team" element={<TeamPage />} />
          </Routes>
          <Routes>
            <Route path="faqs" element={<FaqsPage />} />
          </Routes>
          <Routes>
            <Route path="contact" element={<ContactPage />} />
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
