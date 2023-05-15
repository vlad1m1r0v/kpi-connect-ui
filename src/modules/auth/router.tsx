import { Route, Navigate, RouteProps } from "react-router-dom";
import Login from "@/modules/auth/pages/Login";
import { AuthLayout } from "@/shared/layouts";

const AuthRouter: React.ReactElement<RouteProps> = (
  <Route path="auth" element={<AuthLayout />}>
    <Route path="login" element={<Login />} />
    <Route index element={<Navigate to="login" />} />
    <Route path="*" element={<Navigate to="login" />} />
  </Route>
);

export default AuthRouter;
