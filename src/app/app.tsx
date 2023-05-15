import "@/shared/styles/reset.css";
import { Provider } from "react-redux";
import store from "./store";
import { ThemeProvider } from "@emotion/react";
import theme from "@/config/theme";

import AppRouter from "./router";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
