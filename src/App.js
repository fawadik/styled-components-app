import { ThemeProvider } from "styled-components";
import Header from "./components/Header";

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
    <ThemeProvider theme={theme}>
      <Header />
      <h1>hello world</h1>
    </ThemeProvider>
  );
}

export default App;
