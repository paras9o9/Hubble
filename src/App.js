// Importing Theme for Styled Component
import { ThemeProvider } from "styled-components";
// Having Styled Component instead of regular Components
import { Container } from "./components/styles/Container.styled";
import Header from "./components/Header";
import Footer from "./components/Footer";
// Having Global Styled Component for Globel Styling
import GlobalStyles from "./components/styles/Global";
// Having project Theme from Styled Components
import Card from "./components/Card";
import content from "./content";
const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "768px",
};
function App() {
  return (
    // Passing theme as props
    <ThemeProvider theme={theme}>
      <>
        {/* Global Styling */}
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
