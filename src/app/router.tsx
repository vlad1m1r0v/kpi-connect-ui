import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthLayout from "@/shared/layouts/AuthLayout";
import AuthRouter from "@/modules/auth/router";

export default function AppRouter() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            {AuthRouter()}
          </Route>
        </Routes>
      </Router>
    </>
  );
}
