import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthLayout, MainLayout } from "@/shared/layouts";
import AuthRouter from "@/modules/auth/router";
import { Paper } from "@mui/material";

export default function AppRouter() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            {AuthRouter()}
          </Route>
          <Route path="/" element={<MainLayout />}>
            <Route
              path="/main"
              element={
                <>
                  <div
                    style={{
                      width: "100%",
                      height: "2000px",
                      backgroundColor: "white",
                    }}
                  ></div>
                </>
              }
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
