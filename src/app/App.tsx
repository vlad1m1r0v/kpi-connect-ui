import "@/shared/styles/reset.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from "@/config/theme";
import AuthLayout from "@/shared/layouts/AuthLayout";
import Login from "@/modules/auth/pages/Login";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/login" element={<AuthLayout />}>
            <Route index element={<Login />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
