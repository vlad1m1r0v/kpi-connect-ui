import { Login } from "@/pages/auth";
import { Navigate, Route, Routes } from "react-router-dom";

const AuthRoutes = () => (
  <Routes>
    <Route path="login" element={<Login />} />
    <Route index element={<Navigate to="login" />} />
    <Route path="*" element={<Navigate to="login" />} />
  </Routes>
);

export default AuthRoutes;
