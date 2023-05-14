import "@/shared/styles/reset.css";
import theme from "@/config/theme";
import { ThemeProvider } from "@emotion/react";
import AppRouter from "./router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
